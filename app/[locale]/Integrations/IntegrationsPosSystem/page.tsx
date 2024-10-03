import CharacteristicsSection from "@/components/CharacteristicsSection";
import { OrderPlace } from "@/components/OrderPlace";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import MainBanner from "@/components/MainBanner";
import { getMessages } from "next-intl/server";

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

const IntegrationsPosSystem = () => {
  const IntegrationsPosSystemData = {
    pickware: {
      Image: "/Integrations/pickware.svg",
    },
    Gk: {
      Image: "/Integrations/Gk.svg",
    },
    etron: {
      Image: "/Integrations/etron.svg",
    },
    Light: {
      Image: "/Integrations/Light.svg",
    },
    Ready2Order: {
      Image: "/Integrations/Ready2Order.svg",
    },
    possum: {
      Image: "/Integrations/possum.svg",
    },
    UCS: {
      Image: "/Integrations/UCS.svg",
    },
    Vectron: {
      Image: "/Integrations/Vectron.svg",
    },
  
  };
  const tIntegrationsPosSystem = useTranslations("IntegrationsPosSystem");
  return (
    <>
     <MainBanner/>
      <CharacteristicsSection
        CharacteristicsImage={tIntegrationsPosSystem("Image")}
        CharacteristicsTitle={tIntegrationsPosSystem("title")}
        CharacteristicsDescription={tIntegrationsPosSystem("Description")}
      />
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1">
          {Object.entries(IntegrationsPosSystemData).map(([key, value], i) => {
            return (
              <>
                <div key={i} className="flex py-6 sm:py-4 gap-2 flex-col sm:flex-row sm:gap-10 items-center ">
                  <div className="w-44 flex-shrink-0">
                    <Image src={value.Image} alt="" width={100} height={100} className="pb-8 w-full "/>
                  </div>

                  <div className="py-8 px-8 md:py-20 md:px-16 box-shadow-custom rounded-[24px] text-gray-200 text-18">
                    {tIntegrationsPosSystem(`${key}.Description`)}
                  </div>  
                </div>
              </>
            );
          })}
        </div>
      </div>
      <OrderPlace />
    </>
  );
};

export default IntegrationsPosSystem;
