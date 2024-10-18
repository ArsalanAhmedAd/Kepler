import Link from "next/link";
import React from "react";
import Button from "./ButtonCustom";
import { FaShoppingCart, FaRocket, FaTools, FaBook } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ServiceAvailable from "@/public/CheckGreen.svg";
import ServiceNotAvailable from "@/public/CrossRed.svg";

const PricePlan = () => {
  const tpricingPlan = useTranslations("pricingPlan");

  const obj = {
    Basic: FaShoppingCart,
    Standard: FaRocket,
    Premium: FaTools,
    Custom: FaBook,
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
       <h2 className="text-gray-100 text-3xl font-bold pb-6"> {tpricingPlan('pricingPlanwhy.title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {Object.entries(obj).map(([key], i) => {
          return (
            <div key={i} className="box-shadow-custom rounded-[24px]">
              <div className="flex flex-col p-8 gap-12 sm:gap-16 xl:flex-row">
                <div className="flex flex-col items-center">
                  <Button variant="blueBtn" size="blueBtnMd"  className="mx-auto sm:mx-0 cursor-auto" >
                    {/* <Link href="#" target="_blank" className="cursor-auto"> */}
                      {tpricingPlan(`pricingPlanwhy.services.${key}.pricingPlanLabel`)}
                    {/* </Link> */}
                  </Button>
                  <div className="text-[50px] lg:text-[65px] font-bold text-gray-100 py-3">
                    <span className="text-[40px]">
                      {tpricingPlan(`pricingPlanwhy.services.${key}.pricingCurrency`)}
                    </span>
                    {tpricingPlan(`pricingPlanwhy.services.${key}.pricing`)}
                  </div>
                  <Button
                    variant="outline"
                    size="outlineBtnMd"
                    className="mx-auto sm:mx-0"
                  >
                    <Link href="/google.com" target="_blank" className="font-semibold">
                      {tpricingPlan(`pricingPlanwhy.services.${key}.pricingBuyNowLabel`)}
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-col justify-center">
                  {/* Rendering descriptions */}
                  {['descriptionOne', 'descriptiontwo', 'descriptionthree', 'descriptionfour', 'descriptionfive'].map((desc, index) => (
                    <div key={index} className="flex gap-3 py-2">

                      <div>
                        {tpricingPlan(`pricingPlanwhy.services.${key}.description.${desc}.isService`) === 'true'
                          ? <Image src={ServiceAvailable} alt="Service Available Check"/>
                          : <Image src={ServiceNotAvailable} alt="Service Not Available Check"/>}
                      </div>
                      <div>
                        {tpricingPlan(`pricingPlanwhy.services.${key}.description.${desc}.service`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
};

export default PricePlan;
