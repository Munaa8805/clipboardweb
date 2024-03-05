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
  return (
    <section id="footer" className="bg-gray-50 dark:bg-slate-800 dark:border-t-2">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img src={logoIcon} alt="logo" className="scale-50" />
          <div class="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            <div class="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <div class="flex flex-col space-y-4 text-center md:text-left">
                {footerMenu1.map((item) => {
                  return <FooterMenu key={item.id} name={item.name} />;
                })}
              </div>

              <div class="flex flex-col space-y-4 text-center md:text-left">
                {footerMenu2.map((item) => {
                  return <FooterMenu key={item.id} name={item.name} />;
                })}
              </div>

              <div class="flex flex-col space-y-4 text-center md:text-left">
                <FooterMenu name="Install Guide" />
              </div>
            </div>

            <div class="flex justify-between w-32 py-1">
              {IconLists.map((list) => {
                return (
                  <a href="#">
                    <img
                      key={list.id}
                      src={list.img}
                      alt=""
                      class="duration-200 ficon"
                    />
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
