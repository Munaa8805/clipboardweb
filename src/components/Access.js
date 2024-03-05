import React 
from "react";
import DeviceImg from "../assets/image-devices.png"

const Access = () => {
  return (
    <section id="access">
      <div className="section-container my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p className="p mb-24 text-xl leading-9 text-center text-grayishBlue">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img src={DeviceImg} alt="" className="mx-auto"/>
      </div>
    </section>
  );
};

export default Access;
