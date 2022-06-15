import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Web3 from "web3";
import Main from "./pages/Main";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import NftCardDetail from "./components/NftCardDetail";

function App() {
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState();
  const [isLogin, setIsLogin] = useState(false); // Profile에 필요

  // web3 객체 생성
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  // 메타마스크 지갑과 연결
  const connectWallet = async () => {
    // 메타마스크 지갑과 연결된 계정 정보를 받는 JSON-RPC Call API
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
    setIsLogin(true);
  };

  return (
    <div className="App">
      <Header isLogin={isLogin} connectWallet={connectWallet} account={account} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/list" element={<Explore web3={web3} />} />
        <Route exact path="/list/:tokenId" element={<NftCardDetail web3={web3} />} />
        <Route path="/create" element={<Create web3={web3} />} />
        <Route path="/profile" element={<Profile web3={web3} />} />
      </Routes>
    </div>
  );
}

export default App;
