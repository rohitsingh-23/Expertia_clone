import React from "react";
import "./Home.css"
import { AiOutlinePlayCircle } from "react-icons/ai";
function Home() {
  return (
    <div className="home_container">
      <div>
        <p className="big_text">Let's Find that</p>
        <p className="big_text">Best Candidate...</p>
        <div className="small_text_div">
          <p className="small_text">Source, screen, rank candidates</p>
          <p className="small_text">
            form multiple job boards, internal and external databased.
          </p>
        </div>
        <button className="get_started_btn">Get Started</button>
      </div>
      <div className="videoBox">
        <AiOutlinePlayCircle className="play" />
      </div>
    </div>
  );
}

export default Home;
