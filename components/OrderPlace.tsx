import { useTranslations } from "next-intl";
import React from "react";
import Button from "./ButtonCustom";
import  IconType  from "@/public/ButtonIconBlue.svg"


export const OrderPlace = () => {
    
  const tOrderPlace = useTranslations("OrderPlace");
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <div className="bg-blue-default rounded-20 py-7 px-7 sm:py-10 sm:px-10 text-white grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 items-center">
            <div className="OrderPlaceContent ">
                <div className="text-2xl sm:text-[32px] font-bold w-full lg:w-3/6 sm:leading-10 mb-3">
                {tOrderPlace("title")}
                </div>
                <div className="text-[16px] sm:text-lg">
                {tOrderPlace("Description")}
                </div>
            </div>
            <div className="OrderPlaceForm flex justify-center flex-col w-full md:w-10/12 lg:w-1/2 mx-auto pt-6 md:pt-0">
            <input className="bg-transparent border-2 border-white rounded-full p-3 placeholder:text-white placeholder:p-5 placeholder:focus:text-white" placeholder="Your Name"/>
            <input className="bg-transparent border-2 border-white rounded-full my-5 p-3 placeholder:text-white placeholder:p-5" placeholder="Your Mobile Number" />
                  <div>
                    <Button type="submit"  icon={IconType.src} iconPosition="right" variant="primary" size="md">
                         {tOrderPlace("ButtonText")}
                    </Button>
                 </div>
            </div>
      </div>
    </div>
  );
};
