import CharacteristicsSection from "@/components/CharacteristicsSection";
import MainBanner from "@/components/MainBanner";
import { OrderPlace } from "@/components/OrderPlace";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";
import React from "react";

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

const Integrations = () => {
  const tintegrationsData = {
    paypal: {
      Image: "/Integrations/paypal.svg",
    },
    mollie: {
      Image: "/Integrations/mollie.svg",
    },
    adyen: {
      Image: "/Integrations/adyen.svg",
    },
    payone: {
      Image: "/Integrations/payone.svg",
    },
    Unzer: {
      Image: "/Integrations/Unzer.svg",
    },
    Wordline: {
      Image: "/Integrations/Wordline.svg",
    },
    concardis: {
      Image: "/Integrations/concardis.svg",
    },
    stripe: {
      Image: "/Integrations/stripe.svg",
    },
    giropay: {
      Image: "/Integrations/giropay.svg",
    },
    skrill: {
      Image: "/Integrations/skrill.svg",
    },
    novalnet: {
      Image: "/Integrations/novalnet.svg",
    },
  };
  const tIntegrations = useTranslations("Integrations");

  return (
    <>
           <MainBanner/>
    <CharacteristicsSection
          CharacteristicsImage={tIntegrations("Image")}
          CharacteristicsTitle={tIntegrations("title")}
          CharacteristicsDescription="Lorem I psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown"
        />
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(tintegrationsData).map(([key, value], i) => {
            return (
              <>
                <div
                  key={i}
                  className="box-shadow-custom rounded-[24px] py-12 sm:py-14 px-7"
                >
                  <div className="">
                    <Image
                      src={value.Image}
                      alt=""
                      width={100}
                      height={100}
                      className="pb-8"
                    />
                  </div>

                  <div className="text-gray-200 text-18">
                    {tIntegrations(`${key}.Description`)}
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

export default Integrations;
