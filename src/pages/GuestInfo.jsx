import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import imageVenue1 from "../assets/images/venues/image-1.png";
import Button from "../components/utilities/button";
import Modal from "../components/utilities/modal";
import Confirmation from "./Confirmation";

function GuestInfo() {
  const [showTransactionMenuMobile, setShowTransactionMenuMobile] = useState(false);

  const [showModalAddBank, setShowModalAddBank] = useState(false); // toggle add bank

  const onClickShow = (e) => {
    e.preventDefault();
    // setShowAddBank(!showAddBank);
    setShowModalAddBank(!showModalAddBank);
  };

  const onClickClose = (e) => {
    setShowModalAddBank(!showModalAddBank);
  };

  const modal = (
    <Modal onClose={onClickClose}>
      <Confirmation />
    </Modal>
  );

  console.log(showTransactionMenuMobile);

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="md:w-[428px]">
          <div className="bg-[#ffffff] pt-10 px-4 pb-2">
            <h2 className=" text-base font-semibold text-[#BFA164] mb-4">Booking Summary</h2>
            <img src={imageVenue1} className="w-full mb-4" alt="Venue 1" />
            <div className="time">
              <h3 className="mb-4">Time</h3>
              <div className="flex items-center mb-2">
                <span className="icon w-[24px]">
                  <svg width="100%" height="100%" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26" cy="23.8333" r="6.5" stroke="#757575" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.2569 36.0901L29.0637 45.2832C27.3718 46.9734 24.6304 46.9734 22.9385 45.2832L13.7432 36.0901C6.97436 29.3209 6.97454 18.3462 13.7436 11.5772C20.5127 4.80828 31.4874 4.80828 38.2564 11.5772C45.0255 18.3462 45.0257 29.3209 38.2569 36.0901V36.0901Z" stroke="#757575" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span className="ml-2">BO-Pantai Indah Kapuk</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="icon w-[24px]">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.25 2.9408C9.25 2.52658 8.91422 2.1908 8.5 2.1908C8.08579 2.1908 7.75 2.52658 7.75 2.9408V4.43297C7.66882 4.44208 7.58916 4.45187 7.51098 4.46238C6.33856 4.62001 5.38961 4.95213 4.64125 5.70049C3.89288 6.44886 3.56076 7.3978 3.40314 8.57023C3.24998 9.70943 3.24999 11.165 3.25 13.0028V13.0028L3.25 13.0592L3.25 13.1157V13.1157C3.24999 14.9535 3.24998 16.4091 3.40314 17.5483C3.56076 18.7207 3.89288 19.6696 4.64125 20.418C5.38961 21.1664 6.33856 21.4985 7.51098 21.6561C8.65019 21.8093 10.1058 21.8093 11.9435 21.8092H11.9436H12H12.0564H12.0565C13.8942 21.8093 15.3498 21.8093 16.489 21.6561C17.6614 21.4985 18.6104 21.1664 19.3588 20.418C20.1071 19.6696 20.4392 18.7207 20.5969 17.5483C20.75 16.4091 20.75 14.9534 20.75 13.1157V13.1157V13.0592V13.0028V13.0028C20.75 11.1651 20.75 9.70943 20.5969 8.57023C20.4392 7.3978 20.1071 6.44886 19.3588 5.70049C18.6104 4.95213 17.6614 4.62001 16.489 4.46238C16.4108 4.45187 16.3312 4.44208 16.25 4.43297V2.9408C16.25 2.52658 15.9142 2.1908 15.5 2.1908C15.0858 2.1908 14.75 2.52658 14.75 2.9408V4.33462C13.9602 4.30923 13.066 4.30924 12.0564 4.30925H12.0564L12 4.30925L11.9436 4.30925H11.9436C10.934 4.30924 10.0398 4.30923 9.25 4.33462V2.9408ZM14.75 6.9408V5.83532C13.9832 5.80976 13.0802 5.80925 12 5.80925C10.9198 5.80925 10.0168 5.80976 9.25 5.83532V6.9408C9.25 7.35501 8.91422 7.6908 8.5 7.6908C8.08579 7.6908 7.75 7.35501 7.75 6.9408V5.94383L7.71085 5.94901C6.70476 6.08427 6.12512 6.33794 5.70191 6.76115C5.2787 7.18436 5.02503 7.76401 4.88976 8.7701C4.7516 9.79776 4.75 11.1524 4.75 13.0592C4.75 14.9661 4.7516 16.3207 4.88976 17.3484C5.02503 18.3545 5.2787 18.9341 5.70191 19.3573C6.12512 19.7806 6.70476 20.0342 7.71085 20.1695C8.73852 20.3077 10.0932 20.3092 12 20.3092C13.9068 20.3092 15.2615 20.3077 16.2892 20.1695C17.2952 20.0342 17.8749 19.7806 18.2981 19.3573C18.7213 18.9341 18.975 18.3545 19.1102 17.3484C19.2484 16.3207 19.25 14.9661 19.25 13.0592C19.25 11.1524 19.2484 9.79776 19.1102 8.7701C18.975 7.76401 18.7213 7.18436 18.2981 6.76115C17.8749 6.33794 17.2952 6.08427 16.2892 5.94901L16.25 5.94383V6.9408C16.25 7.35501 15.9142 7.6908 15.5 7.6908C15.0858 7.6908 14.75 7.35501 14.75 6.9408ZM9.08505 13.2282C9.55311 13.2282 9.93255 12.8488 9.93255 12.3807C9.93255 11.9126 9.55311 11.5332 9.08505 11.5332C8.61698 11.5332 8.23754 11.9126 8.23754 12.3807C8.23754 12.8488 8.61698 13.2282 9.08505 13.2282ZM9.93255 15.7707C9.93255 16.2388 9.55311 16.6182 9.08505 16.6182C8.61698 16.6182 8.23754 16.2388 8.23754 15.7707C8.23754 15.3027 8.61698 14.9232 9.08505 14.9232C9.55311 14.9232 9.93255 15.3027 9.93255 15.7707ZM12.4751 16.6182C12.9431 16.6182 13.3226 16.2388 13.3226 15.7707C13.3226 15.3027 12.9431 14.9232 12.4751 14.9232C12.007 14.9232 11.6276 15.3027 11.6276 15.7707C11.6276 16.2388 12.007 16.6182 12.4751 16.6182ZM13.3226 12.3807C13.3226 12.8488 12.9431 13.2282 12.4751 13.2282C12.007 13.2282 11.6276 12.8488 11.6276 12.3807C11.6276 11.9126 12.007 11.5332 12.4751 11.5332C12.9431 11.5332 13.3226 11.9126 13.3226 12.3807ZM15.8651 13.2282C16.3332 13.2282 16.7126 12.8488 16.7126 12.3807C16.7126 11.9126 16.3332 11.5332 15.8651 11.5332C15.397 11.5332 15.0176 11.9126 15.0176 12.3807C15.0176 12.8488 15.397 13.2282 15.8651 13.2282Z"
                      fill="#757575"
                    />
                  </svg>
                </span>
                <span className="ml-2">Sunday, 01 Oct 2023</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="icon w-[24px]">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 7V12L15 15" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span className="ml-2">BO-Pantai Indah Kapuk</span>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] pt-3 px-4 mt-2">
            <h2 className=" text-base font-semibold text-[#BFA164] mb-4">Additional Information</h2>
            <form>
              <div className="py-2 px-2 mb-2 flex flex-col border-b border-gray-300 rounded-xl">
                <span className="text-base text-gray-400 mb-2 rounded-xl appearance-none">Choose Title</span>

                <select value={""}>
                  <option value="" className="appearance-none">
                    Mrs
                  </option>
                </select>
              </div>
              <div className="py-2 mb-2 flex border-b border-gray-100">
                <div className="flex w-[50%] justify-between border border-gray-300 rounded-xl mr-1">
                  <input id="customerFirstName" name="first_name" type="text" value="" placeholder="First Name" className="appearance-none w-full rounded-xl h-14 py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  <span className="icon w-[24px]">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="7" r="4" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="flex w-[50%] justify-between border border-gray-300 rounded-xl ml-1">
                  <input id="customerLastName" name="last_name" type="text" value="" placeholder="Last Name" className="appearance-none w-full rounded-xl h-14 py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  <span className="icon w-[24px]">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="7" r="4" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="py-2 px-2 flex flex-col border-b border-gray-300 rounded-xl">
                  <PhoneInput placeholder="Enter phone number" defaultCountry="ID" value="" className="appearance-none" />
                </div>
              </div>
              <div className="py-2 mb-2 flex border-b border-gray-100">
                <div className="flex w-full justify-between border border-gray-300 rounded-xl mr-1">
                  <input id="customerEmail" name="first_name" type="email" value={""} placeholder="Email" className="appearance-none w-full rounded-xl h-14 py-2 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  <span className="icon w-[24px]">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="7" r="4" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="py-2 mb-2 flex">
                <textarea id="kycAddress" name="address" type="text" placeholder="Additional Information" className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="flex items-center justify-center mt-[4px] py-6">
                <p className=" text-xs">
                  We Are Holding Your Reservation For <span className="text-red-500">14:23</span>
                </p>
              </div>
            </form>
            <div className="flex items-center justify-center mt-[14px] py-6">
              <div className="pr-3">
                <Link to={"/2"}>
                  <Button width={"184px"} title={"Back"} />
                </Link>
              </div>
              <div onClick={onClickShow}>
                <Button width={"184px"} title={"Continue"} position={"last"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popup add bank */}
      {showModalAddBank && modal}
    </>
  );
}

export default GuestInfo;
