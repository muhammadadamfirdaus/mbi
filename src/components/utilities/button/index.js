import React from "react";

function Button({ title, background, type, width, children, position }) {
  // console.log(background);
  return (
    <>
      <button className={`${width === "full" ? "w-full" : "w-[184px]"} ${position === "last" ? "bg-[#D6B87C]" : null} hover:bg-blue-70 text-black font-semibold py-[9px] px-3 rounded-[8px] border border-gray-200 focus:outline-none focus:shadow-outline`} type={type}>
        <span className={`${position === "last" ? "text-white" : "text-slate-600"}`}>{title ? title : children}</span>
      </button>
    </>
  );
}

export default Button;
