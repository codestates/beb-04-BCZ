import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header({ isLogin, connectWallet, account }) {
  return (
    <div id="Navbar">
      <nav>
        <Link to="/">
          <button>LOGO(main)</button>
        </Link>
        <Link to="/list">
          <button>Explore</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        <button onClick={() => connectWallet()}>connect to MetaMask</button>
        {/* // 연결된 계정 주소를 화면에 출력합니다 */}
        연결된 계정 주소: {account}
      </nav>
    </div>
  );
}
