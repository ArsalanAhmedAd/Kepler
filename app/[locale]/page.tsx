import { FeaturesSectionRight } from "@/components/FeaturesSectionRight";
import { FeaturesSectionLeft } from "@/components/FeaturesSectionLeft";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import ManufactureSlider from "@/components/ManufactureSlider";
import SolutionSection from "@/components/SolutionSection";
import FeatureSectionBg from "@/public/Watch-a-video-bg.jpg";
import { OrderPlace } from "@/components/OrderPlace";
import WhyBrandPos from "@/components/WhyBrandPos";
import PersonalisedSolution from "@/components/PersonalisedSolution";
import MeetOutCustomer from "@/components/MeetOutCustomer";
import MainBanner from "@/components/MainBanner";


export async function generateMetadata({params: { locale },}: {params: { locale: string }}) {
  

  
  
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;
  const description = messages.NavbarLinks.homeDescription;
  const keywords = messages.NavbarLinks.HomeKeywords;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;  
  const path = `/`;  
  const canonicalUrl = `${baseUrl}/${locale}${path}`;


  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// export default function Home ({ locale }: { locale: string }) {
export default function Home () {


  
  const FeatureSectionDiscover = useTranslations("FeatureSectionDiscover");
  const FeatureSectionNFC = useTranslations("FeatureSectionNFC");
  const FeatureSectionQR = useTranslations("FeatureSectionQR");
  const FeatureSectionManagement = useTranslations("FeatureSectionManagement");
  const FeatureSectionVideo = useTranslations("FeatureSectionVideo");
  const tHomePage = useTranslations("HomePage.MainBanner");
  const tBannerSubHeading = tHomePage.raw('BannerSubHeading');

 
  return (
    <>
       <MainBanner bannerMainHeading={tHomePage('BannerHeading')} BannerSubHeading={tBannerSubHeading} bannerDesktop={tHomePage('BannerImageDesktop')} bannerMobile={tHomePage('BannerImageMobile')} bannerBtnLabel={tHomePage('MainBannerBtnLabel')} bannerBtnLink={tHomePage('MainBannerBtnLink')}/>
      <div className="bg-gray-300 py-5">
        <div className="container mx-auto">
          <ManufactureSlider />
        </div>
      </div>
     
      <FeaturesSectionRight
        features={FeatureSectionDiscover("title")}
        description={FeatureSectionDiscover("Description")}
        FeatureImage={FeatureSectionDiscover("Image")}
        ImageDirection="my-custom-class"
        // locale={locale}
        playStoreImageEnabled={true}
        buttonEnabled={false}
        
      />
      <SolutionSection />
      <FeaturesSectionLeft
        features={FeatureSectionNFC("title")}
        description={FeatureSectionNFC("Description")}
        FeatureImage={FeatureSectionNFC("Image")}
        ImageDirection="flex-row-reverse"
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={FeatureSectionNFC("BtnLabel")}
        ButtonLink={FeatureSectionNFC("BtnLink")}
      />
      <FeaturesSectionRight
        features={FeatureSectionQR("title")}
        description={FeatureSectionQR("Description")}
        FeatureImage={FeatureSectionQR("Image")}
        ImageDirection="my-custom-class"
        // locale={locale}
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={FeatureSectionQR("BtnLabel")}
        ButtonLink={FeatureSectionQR("BtnLink")}
        
      />
      <FeaturesSectionLeft
        features={FeatureSectionManagement("title")}
        description={FeatureSectionManagement("Description")}
        FeatureImage={FeatureSectionManagement("Image")}
        ImageDirection="flex-row-reverse"
        playStoreImageEnabled={false}
        buttonEnabled={true}
        ButtonLabel={FeatureSectionManagement("BtnLabel")}
      />
      <div style={{ backgroundImage: `url(${FeatureSectionBg.src})` }}  className="bg-cover bg-center">
        <FeaturesSectionRight
          features={FeatureSectionVideo("title")}
          description={FeatureSectionVideo("Description")}
          FeatureImage={FeatureSectionVideo("Image")}
          ImageDirection="my-custom-class"
          // locale={locale}
          playStoreImageEnabled={true}
          buttonEnabled={false}
          isVideo={true}
        />
      </div>
      <OrderPlace/>
      <WhyBrandPos/>
      <PersonalisedSolution />
      <MeetOutCustomer />
      
    </>
  );
}
