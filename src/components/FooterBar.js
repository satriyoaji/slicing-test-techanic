import React from "react";

const FooterBar = () => {
  return (
    <footer id="footer" className="mt-[90px]">
      <div className="footer-body bg-[#1829C3] text-white py-[70px] pb-[40px] px-0 border-t-[8px] divide-t-solid">
          <div className="grid xl:grid-cols-2 grid-cols-1 xl:px-24 mx-8 px-16 gap-8">
              <div className="flex justify-start items-start">
                  <img className="rounded-t-lg"
                       src={`./techanic/socmeds.png`} alt=""/>
              </div>
              <div className="flex justify-end items-end">
                  <h3 className="text-center text-lg mb-5 text-gray-200 text-center">&copy; Start, {new Date().getFullYear()}. All rights reserved.</h3>
              </div>
          </div>
      </div>
      <div className="footer-copyright bg-[#1A2C43] text-[#92959b] py-[16px] border-t-[1px] border-t-[#868686] divide-t-solid">
        <div className="container mx-auto px-[15px] text-center">
          <p className="text-xs">By: Muhammad Satriyo Aji</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
