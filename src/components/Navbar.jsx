import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import "./Navbar.css"


function Navbar() {
    const {handelLogin} = useContext(LoginContext) 
  return (
    <div className="navbar">
      <div className="expartia_logo"> 
        <div className="gola"></div>
        <div>Expertia</div>
      </div>

      <div className="navbar_login_div">
        <select name="" id="">
          <option value="">Solution</option>
        </select>
        <p>About Us</p>
        <p>Contact Us</p>
        <button onClick={handelLogin}>SignUp</button>
      </div>
    </div>
  );
}

export default Navbar;
