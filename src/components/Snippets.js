import React from "react";

const Snippets = () => {
  return (
    <section id="snippets">
      <div
        className="section-container my-20 px-10"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h3>Keep track of your snippets</h3>
        <p className="p mb-24 text-xl leading-9 text-center text-grayishBlue">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
    </section>
  );
};

export default Snippets;
