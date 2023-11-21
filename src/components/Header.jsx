import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import imageLogoBlackOwl from "../assets/images/logo/logo.png";

function Header() {
  return (
    <div className="bg-black h-[64px]">
      <div className="flex justify-between px-6 h-full">
        <div className="logo flex">
          <img src={imageLogoBlackOwl} alt="Black Owl Logo" />
          <span>Black Owl</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
