import Blogs from "@/components/Blogs";
import CharacteristicsSection from "@/components/CharacteristicsSection";
import Faqs from "@/components/Faqs";
import MainBanner from "@/components/MainBanner";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Resources = ({ params: { locale } }: { params: { locale: string } }) => {
  const tResources = useTranslations("Resources");
  const HowItWorks = {
    BrandPOS: "",
    BrandPOSAdmin: "",
  };

  const tResourcesMainBanner = useTranslations("Resources.MainBanner");
  const tBannerSubHeading = tResourcesMainBanner.raw('BannerSubHeading');
  console.log("Current locale:", locale);
  const APIIntegrations = {
    PayPal: "",
    AliPay: "",
    WeChat: "",
    ApplePay: "",
    SamsungPay: "",
    Novalnet: "",
  };

  return (
    <>
                    <MainBanner bannerMainHeading={tResourcesMainBanner('BannerHeading')} BannerSubHeading={tBannerSubHeading} bannerDesktop={tResourcesMainBanner('BannerImageDesktop')} bannerMobile={tResourcesMainBanner('BannerImageMobile')} bannerBtnLabel={tResourcesMainBanner('MainBannerBtnLabel')} bannerBtnLink={tResourcesMainBanner('MainBannerBtnLink')}/>


      <CharacteristicsSection
        CharacteristicsImage={tResources("Image")}
        CharacteristicsTitle={tResources("title")}
        CharacteristicsDescription={tResources("Description")}
      />

      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="pb-10">
          <div className="text-2xl sm:text-3xl text-gray-100 font-bold">
            {tResources("HowItWorks.Title")}
          </div>
          <div className="xl:max-w-[45%] text-gray-200 text-18">
            {tResources("HowItWorks.Description")}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-11">
          {Object.entries(HowItWorks).map(([key], i) => {
            return (
              <>
                <div key={i} className="shadow-lg border-[5px] border-gray-800 rounded-20 p-5 flex items-center relative justify-between" >
                  <div className="pr-5 md:pr-9">
                    <div className="text-18 pb-3 text-gray-100 font-semibold">
                      {tResources(`HowItWorks.${key}.Title`)}
                    </div>
                    <div>
                      {tResources(`HowItWorks.${key}.Description`)}
                      <Link
                        href={tResources(`HowItWorks.${key}.PDFFileLink`)}
                        download={tResources(`HowItWorks.${key}.PDFFileLink`)}
                        className="text-blue-default font-semibold ml-1"
                      >
                        {tResources(`HowItWorks.${key}.Link`)}
                      </Link>
                    </div>
                  </div>
                  <Image
                    src="/PDFIcon.svg"
                    alt="PDFIcon"
                    height="70"
                    width="70"
                  />
                  <div className="bg-white absolute rounded-[35px] -mb-1 -bottom-[18px] right-7">
                    <Image
                      src="/DownloadArrow.svg"
                      alt="DownloadArrow"
                      width="50"
                      height="50"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="pt-20 lg:pt-28 pb-10">
          <div className="text-2xl sm:text-3xl text-gray-100 font-bold">
            {tResources("APIIntegrations.Title")}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-11">
          {Object.entries(APIIntegrations).map(([key], i) => {
            return (
              <>
                <div
                  key={i}
                  className="shadow-lg border-[5px] border-gray-800 rounded-20 p-5 flex items-center relative justify-between"
                >
                  <div className="pr-5 md:pr-9">
                    <div className="text-18 pb-3 text-gray-100 font-semibold">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: tResources(`APIIntegrations.${key}.Title`),
                        }}
                      />
                    </div>

                    <div>
                      {tResources(`APIIntegrations.${key}.Description`)}
                      <Link
                        href={tResources(`APIIntegrations.${key}.PDFFileLink`)}
                        download={tResources(
                          `APIIntegrations.${key}.PDFFileLink`
                        )}
                        className="text-blue-default font-semibold ml-1"
                      >
                        {tResources(`APIIntegrations.${key}.Link`)}
                      </Link>
                    </div>
                  </div>
                  <Image
                    src="/PDFIcon.svg"
                    alt="PDFIcon"
                    height="70"
                    width="70"
                  />

                  <div className="bg-white absolute rounded-[35px] -mb-1 -bottom-[18px] right-7">
                    <Image
                      src="/DownloadArrow.svg"
                      alt="DownloadArrow"
                      width="50"
                      height="50"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8 sm:pt-10 md:pt-12">
        <SectionTitle
          SectionTitle={tResources("Faqs.Title")}
          sectionDescription={tResources("Description")}
        />
      </div>
      <Faqs />
      <Blogs />
    </>
  );
};

export default Resources;
