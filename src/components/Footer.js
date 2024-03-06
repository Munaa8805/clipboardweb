import React from "react";
import logoIcon from "../assets/logo.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import InstIcon from "../assets/icon-instagram.svg";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  const IconLists = [
    { id: 1, img: FacebookIcon },

    { id: 2, img: TwitterIcon },
    {
      id: 3,
      img: InstIcon,
    },
  ];
  const footerMenu1 = [
    { id: 1, name: "FAQs" },
    { id: 2, name: "Contact Us" },
  ];
  const footerMenu2 = [
    { id: 1, name: "Privacy Policy" },
    { id: 2, name: "Press Kit" },
  ];
  const footerMenu3 = [
    { id: 1, name: "Install Guide" },
    { id: 2, name: "Install Documentation" },
  ];
  return (
    <section
      id="footer"
      className="bg-gray-50 dark:bg-slate-800 dark:border-t-2"
    >
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img src={logoIcon} alt="logo" className="scale-50" />
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                {footerMenu1.map((item) => {
                  return <FooterMenu key={item.id} name={item.name} />;
                })}
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                {footerMenu2.map((x) => {
                  return <FooterMenu key={x.id} name={x.name} />;
                })}
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                {footerMenu3.map((y) => {
                  return <FooterMenu key={y.id} name={y.name} />;
                })}
              </div>
            </div>

            <div className="flex justify-between w-32 py-1">
              {IconLists.map((list) => {
                return (
                  <a href="#" key={list.id}>
                    <img src={list.img} alt="" className="duration-200 ficon" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
