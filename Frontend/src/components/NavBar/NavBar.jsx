import React,{useState} from "react";
import "./NavBar.css";
import {assets} from "../../assets/assets"

const NavBar = () => {
  const [Menu, setMenu] = useState("Menu");
  
  return (
    <div className="NavBar">
      <img src={assets.logo} alt="Logo" />
      <ul className="NavBar-menu">
        <li onClick = {()=> setMenu("Home")} className = {Menu === "Home" ? "active":""}>Home</li>
        <li onClick = {()=> setMenu("Menu")} className = {Menu === "Menu" ? "active":""}>Menu</li>
        <li onClick = {()=> setMenu("About")} className = {Menu === "About" ? "active":""}>About</li>
        <li onClick = {()=> setMenu("Contact")} className = {Menu === "Contact" ? "active":""}>Contact</li>
      </ul>
      <div className = "NavBar-right">
        <img src = {assets.search_icon} alt = ""/>
        <div className = "NavBar-search-icon">
          <img src = {assets.basket_icon} alt =""/>
          <div className = "dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
