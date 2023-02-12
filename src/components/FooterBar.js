import React from "react";

const FooterBar = () => {
  return (
    <footer id="footer" className="mt-[90px]">
      <div className="footer-body bg-[#1829C3] text-white py-[40px] pb-[20px] px-0 border-t-[2px] divide-t-solid">
          <div className="grid xl:grid-cols-2 grid-cols-1 xl:px-24 lg:px-16 px-4 mx-4 gap-8">
              <div className="flex lg:justify-start lg:items-start justify-center items-center">
                  <img className="rounded-t-lg"
                       src={`./techanic/socmeds.png`} alt=""/>
              </div>
              <div className="flex lg:justify-end lg:items-end justify-center items-center">
                  <h3 className="text-center lg:text-lg text-md mb-5 text-gray-200 text-center">&copy; Start, {new Date().getFullYear()}. All rights reserved.</h3>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default FooterBar;
