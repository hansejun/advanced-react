import React, { useState } from 'react';

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <div
          className="absolute left:0 top:0 overflow-auto bg-[rgba(0,0,0,0.4)] w-full h-full"
          onClick={() => setShow(false)}
        >
          <div
            className="mx-auto mt-[12%] p-6 bg-white rounded-md w-1/2"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setShow(false)}>Hide Modal</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
