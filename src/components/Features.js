import React from "react";
import computerImage from "../assets/image-computer.png";

const Features = () => {
  const items = [
    { id: 1, name: "Quick Search", desc: " Easily search your snippets by content, category, web address, application, and more." },
    { id: 1, name: "iCloud Sync", desc: "Instantly saves and syncs snippets across all your devices." },
    { id: 1, name: "Completely History", desc: "Retrieve any snippets from the first moment you started using the app." },
  ];
  return (
    <section id="section">
      <div className="section-container my-20 px-10 ">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2">
            <img
              src={computerImage}
              alt="computer"
              className="md:absolute top-0 right-[50%]"
            />
          </div>
          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
            {items.map((item) => {
              return (
                <div key={item.id} className="">
                  <h5 >
                    {item.name}
                  </h5>
                  <p className="text-grayishBlue">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
