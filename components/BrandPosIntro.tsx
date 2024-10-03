import { useTranslations } from "next-intl";
import React from "react";


const BrandPosIntro = () => {
  const tAboutPage = useTranslations("AboutPage");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
        <div className="text-2xl sm:text-3xl leading-10 font-bold tracking-tight lg:text-[40px] w-full lg:leading-[55px] text-gray-100 mx-auto text-balance text-start flex flex-col justify-center">
          {tAboutPage('Introduction.Intro')} <br />
          <span className="text-blue-default">   {tAboutPage('Introduction.pos')}  </span>
        </div>
        <div className="text-justify">
        {tAboutPage('Introduction.contentOne')}
        </div>
        <div className="text-justify">
        {tAboutPage('Introduction.contentTwo')}
        </div>
      </div>
      <div className="py-7 md:py-7 text-justify">
      {tAboutPage('Introduction.contentThree')}
      </div>
    
    </>
  );
};

export default BrandPosIntro;
