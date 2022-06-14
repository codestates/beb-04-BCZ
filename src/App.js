import "./App.css";
import { useState, useEffect } from "react";
import Web3 from "web3";
import erc721Abi from "./erc721Abi"; // 특정 컨트랙트에 있는 함수를 사용하기 위해 컨트랙트의 ABI가 필요함
import TokenList from "./components/TokenList";

function App() {
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState();
  const [newErc721addr, setNewErc721addr] = useState(); // 컨트랙트 주소
  const [erc721list, setErc721list] = useState([]); // 자신의 NFT 정보를 저장할 토큰

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

  const connectWallet = async () => {
    // 메타마스크 지갑과 연결된 계정 정보를 받는 JSON-RPC Call API
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };

  // web3.js를 사용해 컨트랙트 객체를 생성하고, 컨트랙트 객체를 통해 컨트랙트 함수를 호출 -> 계정이 가지고 있는 토큰의 목록 저장
  const addNewErc721Token = async () => {
    // 컨트랙트 객체를 만든다
    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr);
    // 컨트랙트의 주소!
    const address = newErc721addr;
    // 컨트랙트의 이름, 심볼, 총 발행량을 가져온다
    const name = await tokenContract.methods.name().call(); // call() : Contract객체를 통해 함수 실행
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    // 사용자의 토큰을 찾는다
    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }
    // 1. 토큰의 총 발행량만큼 반복문을 돈다.
    // 컨트랙트 함수 호출은 비동기적으로 실행되기 때문에 반복문을 사용하기 위해서는 for...of를 사용해야 한다
    for (let tokenId of arr) {
      // 2. Contract.methods.ownerOf() 를 통해 각 토큰의 오너 주소를 받아온다.
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
      // 3. 해당 주소가 dApp으로 연결한 계정 주소와 같은지 확인한다.
      if (String(tokenOwner).toLowerCase() === account) {
        // -> 같다면, Contract.methods.tokenURI() 를 사용해 해당 토큰의 URI 값을 가져온다.
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        // 4. 토큰 정보를 저장한다.
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, address, tokenId, tokenURI }];
        });
      }
    }
  };

  return (
    <div className="App">
      <button
        className="metaConnect"
        onClick={() => {
          connectWallet();
        }}
      >
        connect to MetaMask
      </button>
      {/* // 연결된 계정 주소를 화면에 출력합니다 */}
      <div className="userInfo">주소: {account}</div>
      <div className="newErc721">
        <input
          type="text"
          onChange={(e) => {
            setNewErc721addr(e.target.value);
          }}
        ></input>
        <button onClick={addNewErc721Token}>add new Erc721</button>
      </div>
      <TokenList erc721list={erc721list} web3={web3} account={account} />
      <button onClick={() => alert("explore click")}>explore</button>
      <button onClick={() => alert("create click")}>create</button>
      <button onClick={() => alert("profile click")}>profile</button>
    </div>
  );
}

export default App;
