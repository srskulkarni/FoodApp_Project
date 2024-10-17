import React,{useState} from "react";
import "./NavBar.css";
import {assets} from "../../assets/assets"
import { Link } from "react-router-dom";
const NavBar = ({setShowLogin}) => {
  const [Menu, setMenu] = useState("Menu");
  
  return (
    <div className="NavBar">
      <img src={assets.logo} alt="Logo" />
      <ul className="NavBar-menu">
        <Link to ='/' onClick = {()=> setMenu("Home")} className = {Menu === "Home" ? "active":""}>Home</Link>
        <a href="#explore-menu" onClick = {()=> setMenu("Menu")} className = {Menu === "Menu" ? "active":""}>Menu</a>
        <a href="#aap-download" onClick = {()=> setMenu("About")} className = {Menu === "About" ? "active":""}>About</a>
        <a href="#footer" onClick = {()=> setMenu("Contact")} className = {Menu === "Contact" ? "active":""}>Contact</a>
      </ul>
      <div className = "NavBar-right">
        <img src = {assets.search_icon} alt = ""/>
        <div className = "NavBar-search-icon">
          <img src = {assets.basket_icon} alt =""/>
          <div className = "dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
