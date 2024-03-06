import React from "react";

const Buttons = ({}) => {
  const btns = [
    { id: 1, name: "Download for iOS" },
    { id: 2, name: "Download for Mac" },
  ];
  return (
    <div className="button-container">
      {btns.map((btn) => {
        return (
          <button
            key={btn.id}
            data-aos={btn.id === 1 ?"fade-right" : "fade-left"}
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className={`p-4 px-8 rounded-full shadow-lg ${
              btn.id === 1 ? "bg-strongCyan" : "bg-lightBlue"
            } duration-200 hover:opacity-80`}
          >
            {btn.name}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
