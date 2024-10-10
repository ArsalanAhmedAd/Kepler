import { AnimatedBeamDemo } from "@/components/Beam";
import CharacteristicsSection from "@/components/CharacteristicsSection";
import IntegrationAccount from "@/components/IntegrationAccount";

import MainBanner from "@/components/MainBanner";
import { OrderPlace } from "@/components/OrderPlace";

import { useTranslations } from "next-intl";
import React from "react";

const IntegrationsAccounting = () => {
  const tIntegrationsAccounting = useTranslations("IntegrationsAccounting");
  const tIntegrationsMainBanner = useTranslations("IntegrationsAccounting.MainBanner");
  const tBannerSubHeading = tIntegrationsMainBanner.raw('BannerSubHeading');
  

  return (
    <>
              <MainBanner bannerMainHeading={tIntegrationsMainBanner('BannerHeading')} BannerSubHeading={tBannerSubHeading} bannerDesktop={tIntegrationsMainBanner('BannerImageDesktop')} bannerMobile={tIntegrationsMainBanner('BannerImageMobile')} bannerBtnLabel={tIntegrationsMainBanner('MainBannerBtnLabel')} bannerBtnLink={tIntegrationsMainBanner('MainBannerBtnLink')}/>

      <CharacteristicsSection
        CharacteristicsImage={tIntegrationsAccounting("Image")}
        CharacteristicsTitle={tIntegrationsAccounting("title")}
        CharacteristicsDescription={tIntegrationsAccounting("Description")}
      />
      <div className="container mx-auto px-4 ">
            <div className="hidden lg:flex">
            <AnimatedBeamDemo  />
            </div>
           <div className="flex lg:hidden">
           <IntegrationAccount />
           </div>
      </div>
      <OrderPlace/>
    </>
  );
};

export default IntegrationsAccounting;
