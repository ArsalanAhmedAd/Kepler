import React from "react";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainBanner from "@/components/MainBanner";
import FaqContact from "@/components/FaqContact";
import FaqSlider from "@/components/FaqSlider";
import { getMessages } from "next-intl/server";
import FaqCharacteristics from "@/components/FaqCharacteristics";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;
  const description = messages.NavbarLinks.aboutDescription;

  return {
    title,
    description
  };
}



const SolutionSection = () => {


  const tFaqPage = useTranslations("FaqPage.MainBanner");
  const tBannerSubHeading = tFaqPage.raw("BannerSubHeading");
 

  return (
    <>
      <MainBanner
        bannerMainHeading={tFaqPage("BannerHeading")}
        BannerSubHeading={tBannerSubHeading}
        bannerDesktop={tFaqPage("BannerImageDesktop")}
        bannerMobile={tFaqPage("BannerImageMobile")}
        bannerBtnLabel={tFaqPage("MainBannerBtnLabel")}
        bannerBtnLink={tFaqPage("MainBannerBtnLink")}
      />
      <FaqCharacteristics />
    
      <FaqSlider />
      <FaqContact />
    </>
  );
};

export default SolutionSection;
