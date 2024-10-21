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
  const title = messages.Page.Home.Title;
  const description = messages.Page.Home.Description;
  const keywords = messages.Page.Home.keywords;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/faq`;
  const canonicalUrl = `${baseUrl}/${locale}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: "/logo.svg", // Use a default image if none provided
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: "/logo.svg", // Use a default image if none provided
    },
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
