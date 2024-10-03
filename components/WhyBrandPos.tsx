import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import WhyBrnadPostContent from "./WhyBrnadPostContent";
import { useTranslations } from "next-intl";

const WhyBrandPos = () => {
    const tWhyBrandPos = useTranslations("WhyBrandPos");

  return (
    <div className="container mx-auto px-4 py-10 md:pt-16 pb-0">
      <SectionTitle SectionTitle={tWhyBrandPos("title")}  sectionDescription={tWhyBrandPos("Description")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center pt-7 sm:pt-10">
        <div className="pr-0 sm:pr-10">
          <WhyBrnadPostContent  WhyBrnadPostContentitle={tWhyBrandPos("WhyBrandPosSectionOne.title")}  WhyBrnadPostContentDescription={tWhyBrandPos("WhyBrandPosSectionOne.Description")}/>
          <WhyBrnadPostContent  WhyBrnadPostContentitle={tWhyBrandPos("WhyBrandPosSectionTwo.title")}  WhyBrnadPostContentDescription={tWhyBrandPos("WhyBrandPosSectionTwo.Description")}/>
        </div>
        <div className="hidden md:block">
          <Image
            src="/WhyBrandPos.svg"
            alt="WhyBrandPos"
            width={650}
            height={600}
           
          />
        </div>
        <div className="pl-0 sm:pl-10">
        <WhyBrnadPostContent  WhyBrnadPostContentitle={tWhyBrandPos("WhyBrandPosSectionThree.title")}  WhyBrnadPostContentDescription={tWhyBrandPos("WhyBrandPosSectionThree.Description")}/>
        <WhyBrnadPostContent  WhyBrnadPostContentitle={tWhyBrandPos("WhyBrandPosSectionFour.title")}  WhyBrnadPostContentDescription={tWhyBrandPos("WhyBrandPosSectionFour.Description")}/>
        </div>
      </div>
    </div>
  );
};

export default WhyBrandPos;
