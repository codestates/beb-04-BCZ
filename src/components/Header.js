import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header({ isLogin, connectWallet, account }) {
  return (
    <div id="Navbar">
      <nav id="nav-list">
        <li>
          <NavLink to="/">
            <button>LOGO(main)</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list">
            <button>Explore</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/create">
            <button>Create</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <button>Profile</button>
          </NavLink>
        </li>
        <li>
          <button onClick={() => connectWallet()}>connect to MetaMask</button>
          {/* // 연결된 계정 주소를 화면에 출력합니다 */}
        </li>
        연결된 계정 주소: {account}
      </nav>
    </div>
  );
}
