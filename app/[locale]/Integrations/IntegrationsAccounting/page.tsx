import CharacteristicsSection from "@/components/CharacteristicsSection";
import MainBanner from "@/components/MainBanner";
import { OrderPlace } from "@/components/OrderPlace";
import { useTranslations } from "next-intl";
import React from "react";

const IntegrationsAccounting = () => {
  const tIntegrationsAccounting = useTranslations("IntegrationsAccounting");
  

  return (
    <>
      <MainBanner />
      <CharacteristicsSection
        CharacteristicsImage={tIntegrationsAccounting("Image")}
        CharacteristicsTitle={tIntegrationsAccounting("title")}
        CharacteristicsDescription={tIntegrationsAccounting("Description")}
      />
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        IntegrationsAccounting
      </div>
      <OrderPlace/>
    </>
  );
};

export default IntegrationsAccounting;
