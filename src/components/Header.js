import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ isLogin, connectWallet, account }) {
  return (
    <div id="Navbar">
      <div id="nav-logo">
        <NavLink to="/">
          {/* <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="logo1" width={50}></img> */}
          <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="logo2" width={60}></img>
        </NavLink>
      </div>
      <nav id="nav-list">
        <li>
          <NavLink to="/list">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <a onClick={() => connectWallet()}>Connect</a>
          {/* // 연결된 계정 주소를 화면에 출력합니다 */}
        </li>
        {/* <li>연결된 계정 주소: {account}</li> */}
      </nav>
    </div>
  );
}
