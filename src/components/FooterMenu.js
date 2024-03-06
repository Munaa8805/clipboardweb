import React from "react";

const FooterMenu = ({ name }) => {
  return (
    <div>
      <a href="#" className="hover:text-strongCyan">
        {name}
      </a>
    </div>
  );
};

export default FooterMenu;
