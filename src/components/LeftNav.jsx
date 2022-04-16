import React from 'react'
import { AiFillSetting } from "react-icons/ai";
import { FaBuffer, FaUser, FaUsers, FaFolder, FaAdn } from "react-icons/fa";
import "./LeftNav.css"
function LeftNav() {
  return (
    <>
      <div className="left_col_dashboard">
        <div className="expartia_logo_nav">
          <div className="gola"></div>
          <p>Expertia</p>
        </div>
        <div className="left_nav">
          <div>
            <FaBuffer />
            <p>Overview</p>
          </div>
          <div>
            <FaUsers />
            <p>Candidates</p>
          </div>
          <div>
            <FaUser />
            <p>Hiring</p>
          </div>
          <div>
            <FaFolder />
            <p>Resume Folder</p>
          </div>
          <div>
            <FaAdn />
            <p>Articles</p>
          </div>
          <div>
            <AiFillSetting />
            <p>Setting</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftNav