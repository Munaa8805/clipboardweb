import React from "react";
import DeviceImg from "../assets/image-devices.png";

const Access = () => {
  return (
    <section id="access">
      <div className="section-container my-20">
        <h3
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Access Clipboard Anywhere
        </h3>
        <p
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="p mb-24 text-xl leading-9 text-center text-grayishBlue px-5"
        >
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img
          src={DeviceImg}
          alt=""
          className="mx-auto"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      </div>
    </section>
  );
};

export default Access;
