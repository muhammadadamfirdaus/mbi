import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/utilities/button";
import imageEvent from "../assets/images/logo/logo.png";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

function ChooseTime() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Header />
      <div className="pt-10 px-4 flex justify-center">
        <div className="md:w-[428px]">
          <div className="flex w-full justify-between border border-[#F1D59E] rounded-3xl bg-white">
            <input id="customerLastName" name="last_name" type="text" value="" placeholder="Search Event" className="appearance-none bg-none w-full rounded-3xl h-12 py-2 px-4 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <span className="icon w-[32px] mr-2">
              <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.586 5.33331C21.2392 5.33331 25.8375 9.83024 25.8375 15.3587C25.8375 17.9671 24.814 20.346 23.139 22.1314L26.4348 25.3478C26.7433 25.6495 26.7443 26.1375 26.4359 26.4391C26.2822 26.5915 26.079 26.6666 25.8769 26.6666C25.6758 26.6666 25.4737 26.5915 25.3189 26.4412L21.9833 23.1882C20.2286 24.5625 18.0038 25.3852 15.586 25.3852C9.93278 25.3852 5.33337 20.8872 5.33337 15.3587C5.33337 9.83024 9.93278 5.33331 15.586 5.33331ZM15.586 6.87759C10.8034 6.87759 6.91248 10.6817 6.91248 15.3587C6.91248 20.0358 10.8034 23.8409 15.586 23.8409C20.3675 23.8409 24.2584 20.0358 24.2584 15.3587C24.2584 10.6817 20.3675 6.87759 15.586 6.87759Z" fill="#D6B87C" />
              </svg>
            </span>
          </div>
          <div className="mt-5">
            <h2 className="text-small font-medium mb-4">Upcoming Event</h2>
            <div className="bg-[#F1D59E] border-1 border-[F1D59E] rounded-md px-4 py-4 flex">
              <img src={imageEvent} alt="Event" className="rounded-2xl mr-3" />
              <div className="flex flex-col">
                <h3 className="font-semibold">Black Owl Event</h3>
                <span className="text-sm text-gray-600">Apr 24, 2023</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div class="calendar w-full">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className="flex items-center justify-center mt-[14px] py-6">
            <div className="pr-3">
              <Link to={"/"}>
                <Button width={"184px"} background={"white"} title={"Back"} />
              </Link>
            </div>
            <div>
              <Link to={"/3"}>
                <Button width={"184px"} title={"Continue"} position={"last"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseTime;
