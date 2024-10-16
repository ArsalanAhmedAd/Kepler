import ContactForm from "@/components/ContactForm";
import MainBanner from "@/components/MainBanner";
import { useTranslations } from "next-intl";
// import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
// import { FaShoppingCart, FaRocket, FaTools, FaBook } from "react-icons/fa";

export async function generateMetadata({
  params: { locale, slug   },
}: {
  params: { locale: string; slug: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.aboutTitle;

  const baseUrl = 'https://www.yoursite.com';
  const currentPath = `/${locale}/${slug}`; // Dynamic path based on slug
  const canonicalUrl = `${baseUrl}${currentPath}`;


  return {
    title,
    alternates: {
      canonical: canonicalUrl, // Adding canonical URL dynamically
    },
   
  };
}

const ContactPage = () => {
  const tMainBanner = useTranslations("ContactPage.MainBanner");
  const tBannerSubHeading = tMainBanner.raw("BannerSubHeading");
  return (
    <>
      <MainBanner
        bannerMainHeading={tMainBanner("BannerHeading")}
        BannerSubHeading={tBannerSubHeading}
        bannerDesktop={tMainBanner("BannerImageDesktop")}
        bannerMobile={tMainBanner("BannerImageMobile")}
        bannerBtnLabel={tMainBanner("MainBannerBtnLabel")}
        bannerBtnLink={tMainBanner("MainBannerBtnLink")}
      />

      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-20">
        <ContactForm />
      </div>

      <div className="container mx-auto px-4 pb-8 sm:pb-10 md:pb-12">
        <div>
          <iframe
            width="100%"
            height="500"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=washington%20dc+(My%20Business%20Name)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
