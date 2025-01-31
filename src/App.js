
import React from "react";
import './App.css';
import Notesmain from "./components/notes/notesmain.jsx";
import { LoginProvider } from "./utilities/LoginContext.js";
import Login from "./components/Login.jsx";
import { Routes,Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar.jsx";
import Dashboard from "./components/Dashboard.jsx"
import Home from "./components/Home.jsx";
import Wifi from "./components/Wifi.jsx"
import imgpath from "./utilities/Images/home.png"


function App() {
  return (
    <>
    
    <LoginProvider>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/notesmain' element={<><Navigationbar/><Notesmain /></>}/>
      <Route path='/home' element={<><Navigationbar/><Home /></>}/>
      <Route path='/location' element={<><Navigationbar/><h3>Scan Qr for map pin</h3><img src={imgpath} alt="Home QR"/></>}/>
      <Route path='/wifi' element={<><Navigationbar/><Wifi /></>}/>
      <Route path='/dashboard' element={<><Navigationbar/><Dashboard /></>}/>
      </Routes>
    </LoginProvider>
    </>
  );
}

export default App;