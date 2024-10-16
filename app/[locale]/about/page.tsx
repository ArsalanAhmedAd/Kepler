import AboutCredibility from "@/components/AboutCredibility";
import BrandPosIntro from "@/components/BrandPosIntro";
import MainBanner from "@/components/MainBanner";
import OurMisstion from "@/components/OurMisstion";
import OurTeam from "@/components/OurTeam";
import { useTranslations } from "next-intl";
// import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.aboutTitle;
  const description = messages.NavbarLinks.aboutDescription;

  return {
    title,
    description,
  };
}

const AboutPage = () => {
  const tMainBanner = useTranslations("AboutPage.MainBanner");
  const tBannerSubHeading = tMainBanner.raw('BannerSubHeading');
  return (
    <>
                 <MainBanner bannerMainHeading={tMainBanner('BannerHeading')} BannerSubHeading={tBannerSubHeading} bannerDesktop={tMainBanner('BannerImageDesktop')} bannerMobile={tMainBanner('BannerImageMobile')} bannerBtnLabel={tMainBanner('MainBannerBtnLabel')} bannerBtnLink={tMainBanner('MainBannerBtnLink')}/>

      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <BrandPosIntro />
       <AboutCredibility/>
       <OurMisstion/>
       <OurTeam />
      </div>
    </>
  );
};

export default AboutPage;
