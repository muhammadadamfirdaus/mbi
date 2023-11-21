import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import imageVenue1 from "../assets/images/venues/image-1.png";
import imageVenue2 from "../assets/images/venues/image-2.png";
import imageVenue3 from "../assets/images/venues/image-3.png";

function ChoosePlace() {
  return (
    <>
      <Header />
      <div className="pt-10 flex justify-center">
        <div className=" px-[34px] md:w-[428px]">
          <div className="flex">
            <h1 className=" text-[32px] font-extrabold leading-10 tracking-[-0.02%] md:max-w-[218px]">Choose Your Place</h1>
            <span className="icon flex justify-end">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="23.8333" r="6.5" stroke="#757575" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.2569 36.0901L29.0637 45.2832C27.3718 46.9734 24.6304 46.9734 22.9385 45.2832L13.7432 36.0901C6.97436 29.3209 6.97454 18.3462 13.7436 11.5772C20.5127 4.80828 31.4874 4.80828 38.2564 11.5772C45.0255 18.3462 45.0257 29.3209 38.2569 36.0901V36.0901Z" stroke="#757575" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>

          <p className=" text-xs leading-[18px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

          <div className="venues mt-[14px]">
            <Link to={"/2"}>
              <img src={imageVenue1} className="w-full mb-2" alt="Venue 1" />
            </Link>
            <Link to={"/2"}>
              <img src={imageVenue2} className="w-full mb-2" alt="Venue 2" />
            </Link>
            <Link to={"/2"}>
              <img src={imageVenue3} className="w-full mb-2" alt="Venue 3" />
            </Link>
          </div>

          <div className="flex items-center justify-center mt-[14px] py-6">
            <p className=" text-xs">Read our Terms & Condition, Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoosePlace;
