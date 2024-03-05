import React from "react";
import Buttons from "./Buttons";

const BottomCta = () => {

  return (
    <section id="bottom-cta">
      <div className="section-container my-20 px-5">
        <h3>Clipboard for iOS and MacOS</h3>
        <p className="p mb-24 text-xl leading-9 text-center text-grayishBlue">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>
        <Buttons />
      </div>
    </section>
  );
};

export default BottomCta;
