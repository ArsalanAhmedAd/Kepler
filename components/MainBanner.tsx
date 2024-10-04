import Image from "next/image";
import React from "react";
import CartwithPaymentGradient from "@/public/BannerElements/cart-with-payment-gradient.png";
import CartwithPaymentGradientMobile from "@/public/BannerElements/cart-with-payment-gradient-mobile.png";
// import IceCream from "@/public/BannerElements/icecream-girl-banner-desktop.png";
// import IceCreamMobile from "@/public/BannerElements/icecream-girl-banner-mobile.png";
import Button from "./ButtonCustom";
import IconType from "@/public/ButtonIconBlue.svg";

type MainBanner = {
  BannerImage?: string;
  CharacteristicsDescription?: any;
  CharacteristicsImage?: string;
};

const MainBanner = () => {
  return (
    <div>
      <div className="mainbanner bg-[#0088FF] relative flex flex-col lg:flex-row items-center justify-center w-full max-w-full">
        <div className="container mx-auto px-4 pt-[155px] pb-[20px] lg:pt-[0] lg-pb-[20px] lg:absolute text-white z-50">
          <div className="content text-center lg:text-start lg:max-w-[80%] ">
            <div className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-white flex justify-center lg:justify-start items-center">
              BrandPOS: <br /> Smarter Payments <br />
              for Ambitious Businesses
            </div>
            <ul className="text-white text-16 lg:text-18 font-bold grid gap-2 md:gap-3 lg:max-w-[55%] py-5 lg:py-8">
              <div className="flex gap-3 items-start justify-center lg:justify-start">
                <Image src="/WhiteCheckMark.svg"width={20} height={20}alt="" className="mt-1" />
                <li> Streamline your checkout process and enhance customer satisfaction
                </li>
              </div>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <Button
                type="submit"
                icon={IconType.src}
                iconPosition="right"
                variant="primaryBanner"
                size="Bannermd"
              >
                Download the app now
              </Button>
            </div>
          </div>
        </div>

        <Image
          src={CartwithPaymentGradient}
          alt=""
          height={950}
          quality={100}
          className="w-full relative hidden lg:flex"
        />
        <Image
          src={CartwithPaymentGradientMobile}
          alt=""
          height={950}
          quality={100}
          className="w-full   relative flex lg:hidden"
        />
      </div>
    </div>
  );
};

export default MainBanner;
