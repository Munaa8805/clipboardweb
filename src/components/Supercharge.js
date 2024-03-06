import React from "react";
import img1 from "../assets/icon-blacklist.svg";
import img2 from "../assets/icon-text.svg";
import img3 from "../assets/icon-preview.svg";

const Supercharge = () => {
  const data = [
    {
      id: 1,
      name: "Create Blacklists",
      desc: "Easily search your snippets by content, category, web address, application, and more.",
      img: img1,
    },
    {
      id: 2,
      name: "Plain Text Snippets",
      desc: "Remove unwanted formatting from copied text for a consistent look.",
      img: img2,
    },
    {
      id: 3,
      name: "Sneak Preview",
      desc: "Quick preview of all snippets on your Clipboard for easy access.",
      img: img3,
    },
  ];
  return (
    <div
      id="supercharge"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="section-container my-20 px-4">
        <h3>Supercharge your workflow</h3>
        <p className="p mb-16 text-xl leading-9 text-center text-grayishBlue">
          We've got the tools to boost your productivity.
        </p>
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          {data.map((item) => {
            return (
              <div
                className="flex flex-col items-center space-y-5"
                key={item.id}
              >
                <img src={item.img} alt={item.name} className="mb-2" />
                <h5>{item.name}</h5>
                <p className="max-w-md text-grayishBlue">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Supercharge;
