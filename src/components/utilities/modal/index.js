import React from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose, title }) {
  return (
    <>
      {createPortal(
        <>
          <div onClick={onClose} className="fixed inset-0 z-[2] h-full w-full bg-black bg-opacity-75"></div>
          <div className="fixed bottom-0 z-[3] w-[428px] md:w-[428px] h-[50%] left-1/2 -translate-x-1/2">
            <div className="bg-white border border-t-slate-400 grow rounded-lg h-full">
              <div className="flex justify-end p-4">x</div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

export default Modal;
