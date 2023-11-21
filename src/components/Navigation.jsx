import React from "react";
import Button from "./utilities/button";

function Navigation() {
  return (
    <>
      <div className="flex items-center justify-center mt-[14px] py-6">
        <div className="pr-3">
          <Button width={"184px"} position={"first"} title={"Back"} />
        </div>
        <div>
          <Button width={"184px"} title={"Continue"} />
        </div>
      </div>
    </>
  );
}

export default Navigation;
