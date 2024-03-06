import React from "react";
import googleIcon from "../assets/logo-google.png";
import microsoftIcon from "../assets/logo-microsoft.png";
import ibmIcon from "../assets/logo-ibm.png";
import hpLogo from "../assets/logo-hp.png";
import vcLogo from "../assets/logo-vector-graphics.png";

const Logos = () => {
  const data = [
    { id: 1, img: googleIcon, alt: "google" },
    { id: 2, img: microsoftIcon, alt: "microsoft" },
    { id: 3, img: ibmIcon, alt: "IBM" },
    { id: 4, img: hpLogo, alt: "HP" },
    { id: 5, img: vcLogo, alt: "VC" },
  ];
  return (
    <section id="references">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0"
      >
        {data.map((item) => {
          return <img key={item.id} src={item.img} alt={item.alt} />;
        })}
      </div>
    </section>
  );
};

export default Logos;
