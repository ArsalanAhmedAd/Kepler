import Image from "next/image";
import React from "react";
// import images from "@/public/banner-home.jpg"
// import bg from "@/public/background-Blue.jpg";
// import BannerElement from "@/public/BannerElements/mobile in hand.png"
// import BannerElementHome from "@/public/BannerElements/cart with payment-2.png"
// import BannerElementFaq from "@/public/BannerElements/FAQs People.png"
// import BannerIntegration from "@/public/BannerElements/Person mobile group.png"
// import BannerIntegration2 from "@/public/BannerElements/Person-mobile-group-2.png"
// import BannerIntegration3 from "@/public/BannerElements/cart with payment.png"
// import BannerIntegration4 from "@/public/BannerElements/main-banner-pos.png"
// import Button from './ButtonCustom'
// import BannerIntegration4 from "@/public/BannerElements/main-banner-pos-new.png";
// import BannerIntegration5 from "@/public/BannerElements/cart-with-payment--aaa.png";
import BannerIntegration6 from "@/public/BannerElements/cart-with-payment-20.png";
import Button from "./ButtonCustom";
import  IconType  from "@/public/ButtonIconBlue.svg"

type MainBanner = {
  BannerImage?: string;
  CharacteristicsDescription?: any;
  CharacteristicsImage?: string;
};

const MainBanner = () => {
  return (
    <div>
      <div className="mainbanner bg-[#0088FF] relative flex items-center justify-center w-full max-w-full pt-20">
        <div className="container mx-auto px-4 absolute text-white z-50">
          <div className="content max-w-[50%] lg:max-w-[80%] ">
            <div className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-white flex items-center">
              BrandPOS: <br /> Smarter Payments <br />
              for Ambitious Businesses
            </div>
            <ul className="text-white text-16 lg:text-18 font-bold grid gap-2 md:gap-3 lg:max-w-[55%] py-5 lg:py-8">
              <div className="flex gap-3 items-start">
                <Image src="/WhiteCheckMark.svg" width={20} height={20} alt="" className="mt-1" />
                <li>Kostengünstig abkassieren</li></div>
                <div className="flex gap-3 items-start">
                <Image src="/WhiteCheckMark.svg" width={20} height={20} alt="" className="mt-1" />
                <li> Mit dem Smartphone oder Tablet Kartenzahlungen oder Zahlungen
                mittels QR- und Barcode annehmen</li></div>
                <div className="flex gap-3 items-start">
                <Image src="/WhiteCheckMark.svg" width={20} height={20} alt="" className="mt-1" />
                <li>Einfach und flexibel</li></div>

            
             
            </ul>
            <div>
                    <Button type="submit"  icon={IconType.src} iconPosition="right" variant="primaryBanner" size="Bannermd">
                        Jetzt App downloaden
                    </Button>
                 </div>
          </div>
        </div>
        <Image
          src={BannerIntegration6}
          alt=""
          height={950}
          quality={100}
          className="w-full   relative"
        />
      </div>

      {/* <div style={{ backgroundImage: `url(${bg.src})` }}  className="bg-cover bg-center overflow-hidden min-h-[900px] relative"></div> */}

      {/* <div className="bg-[#0088FF]">
      
                <div className='container mx-auto px-4  flex items-center'>
                  <div className='content inline flex-col justify-center'>
                   <div className=" absolute top-2/4 -translate-y-2/4 w-[65%]">
                      <div className='text-2xl lg:text-4xl xl:text-6xl font-extrabold text-white flex items-center'>BrandPOS: <br/> Smarter Payments <br/>for Ambitious Businesses</div>
                        <ul className='text-white text-16 lg:text-18 font-bold grid gap-2 md:gap-3 lg:max-w-[55%] py-8'>
                          <li>Kostengünstig abkassieren
                          </li>
                          <li>Mit dem Smartphone oder Tablet Kartenzahlungen oder Zahlungen mittels QR- und Barcode annehmen
                          </li>
                          <li>Einfach und flexibel</li>
                        </ul>
                        <Button> Jetzt App downloaden  </Button>
                    </div>
                   </div>
                </div>
              <Image src={BannerIntegration4} alt='' height={950} quality={100} className='w-2/4 py-36  relative'/>
              {/* <Image src={BannerIntegration4} alt='' quality={100} className='w-2/4 max-w-[840px] ml-auto pt-20 pb-52 lg:pt-0 -bottom-32 right-0 relative'/> */}
      {/* <Image src={BannerElementHome} alt='' quality={100} className='w-2/4 max-w-[840px] ml-auto pt-20 pb-52 lg:pt-0 -bottom-32 right-0 relative'/> */}
    </div>
  );
};

export default MainBanner;
