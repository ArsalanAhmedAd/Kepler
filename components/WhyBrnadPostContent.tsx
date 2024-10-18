import React from "react";


type WhyBrnadPostContent = {
    WhyBrnadPostContentitle?: string;
    WhyBrnadPostContentDescription?: string;
  };

const WhyBrnadPostContent = ({WhyBrnadPostContentitle,WhyBrnadPostContentDescription} :WhyBrnadPostContent)  => {
  return (
    <div className="py-5 md:py-14 px-0 sm:px-0">
      <h3 className="text-[20px] sm:text-[22px] sm:leading-8 lg:text-2xl lg:leading-9 font-bold text-gray-100 pb-3">{WhyBrnadPostContentitle}</h3>
      <div className="text-16 lg:text-[18px] text-gray-200">
        {WhyBrnadPostContentDescription}
      </div>
    </div>
  );
};

export default WhyBrnadPostContent;
