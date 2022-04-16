import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import "./Login.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import {Link} from "react-router-dom"

function Login() {
  const { handelLogin, login } = useContext(LoginContext);
  const [signin, setSignin] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden"; // firefox, chrome
    document.body.scroll = "no"; // ie only

    return () => {
      document.documentElement.style.overflow = "scroll"; // firefox, chrome
      document.body.scroll = "yes"; // ie only
    };
  }, []);

  return (
    <div className="login_container">
      <div className="login_card">
        <button onClick={handelLogin} className="close_popout">
          <AiOutlineCloseCircle className="close_btn" />
        </button>
        {signin ? (
          <>
            <p className="login_card_big_text"> Great</p>
            <p>
              What are <br /> you looking for?
            </p>
            <div className="login_button_div">
              <Link to="/dashboard">
                <button className="hire_button">To Hire</button>
              </Link>
              <br />
              <Link to="/dashboard">
                <button className="apply_button">To Apply</button>
              </Link>
            </div>
            <p
              className="account_login"
              onClick={() => {
                setSignin(false);
              }}
            >
              I already have an account
            </p>
          </>
        ) : (
          <div className="login_input">
            <h3>Welcome User</h3>
            <input
              type="text"
              className="username"
              placeholder="Enter Username"
              required
            />
            <input
              type="password"
              className="password"
              placeholder="Enter Password"
              required
            />
            <input
              type="submit"
              value="Login"
              className=" login_button apply_button"
              />
              <div>
                <FaArrowLeft onClick={()=>{setSignin(true)}} className="back"/>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;

{
  /* <button onClick={handelLogin} className="close_popout">
          <img src="https://img.icons8.com/ios/100/000000/delete-sign--v1.png" />
        </button>
        <p className="login_card_big_text"> Great</p>
        <p>
          What are <br /> you looking for?
        </p>
        <div className="login_button_div">
          <button className="hire_button">To Hire</button> <br />
          <button className="apply_button">To Apply</button>
        </div>
        <p className="account_login" onClick={()=>{setSignin(true)}}> I already have an account</p> */
}
