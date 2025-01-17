import React, { useState } from "react";
import  {useContext} from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets"
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const NavBar = ({ setShowLogin }) => {
  const [Menu, setMenu] = useState("Menu");
  const{getTotalCartAmount,token,setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  } 

  return (
    <div className="NavBar">
      <Link to='/'><img src={assets.logo} alt="Logo" /></Link>
      <ul className="NavBar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={Menu === "Home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("Menu")} className={Menu === "Menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("Mobile App")} className={Menu === "Mobile App" ? "active" : ""}>Mobile App</a>
        <a href="#footer" onClick={() => setMenu("Contact")} className={Menu === "Contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className="NavBar-right">
        <img src={assets.search_icon} alt="" />
        <div className="NavBar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?'':'dot'}></div>
        </div>
        {!token? <button onClick={() => setShowLogin(true)}>Sign In</button>
        :<div className="NavBar-profile" ><img src={assets.profile_icon} alt="" />
          <ul className="NavBar-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          </div>}
      </div>
    </div>
  );
};

export default NavBar;
