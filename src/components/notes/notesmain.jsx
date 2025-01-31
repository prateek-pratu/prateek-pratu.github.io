import React from "react";
import Fotter from "./fotter";
import Navbar from "./navbar";
import Notes from "./Notes";
import "./notesmain.css";

function notesmain() {
  return (
    <div className="notesmain container">
      <div className="row justify-content-center">
      <div className="col-12">
      <Navbar />
        </div>
        <div className="col-10">
        <Notes />
        </div>
        <div className="col-12">
        <Fotter />
        </div>
        
      
      </div>
    </div>
  );
}
export default notesmain;
