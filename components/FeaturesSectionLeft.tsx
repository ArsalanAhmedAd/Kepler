import Image from "next/image";
import React from "react";
import Button from './ButtonCustom'
import  IconType  from "@/public/ButtonIconGray.svg"
import image1 from "@/public/AppStore.svg"
import image2 from "@/public/GoogleStore.svg"
import Link from "next/link";




type FeaturesSectionLeft ={
  features: string,
  description: string,
  ImageDirection: string,
  FeatureImage: string,
  ButtonLabel?:string,
  GooglePlaystoreImage?: string,
  ApplePlaystoreImage?: string,
  ButtonLink?: any,
  buttonEnabled?: boolean;
  playStoreImageEnabled?: boolean;

}


export const FeaturesSectionLeft = ({ features, description, ImageDirection, FeatureImage,  ButtonLabel,ButtonLink, buttonEnabled,playStoreImageEnabled}: FeaturesSectionLeft ) => {

   
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <div className={`flex-col-reverse sm:flex-row flex items-center ${ImageDirection}`}>
        
        <div className="right w-full sm:w-[55%] flex justify-start">
            <Image src={FeatureImage} alt={features} width={600} height={550} quality={100}  className="px-7 sm:px-3"/>   
        </div>
        <div className="left w-full sm:w-[45%] mb-9 sm:mb-0">
          <div className="text-center sm:text-left text-2xl sm:text-3xl leading-9 text-gray-100 lg:text-[32px] lg:leading-[2.5rem] font-bold mb-4">{features}</div>
          <div className="text-center sm:text-left text-[16px] leading-8 text-gray-200 lg:text-[18px] lg:leading-8 font-normal mb-4">{description}</div>
         
        


          {buttonEnabled && (
          <Button type="submit"  icon={IconType} iconPosition="right" variant="secondary" size="md" className="mx-auto sm:mx-0">
                <Link href={ButtonLink || "#"}>{ButtonLabel}</Link>
               
          
          </Button>
            )}
        
          {playStoreImageEnabled && (
          <div className="flex gap-2">
            <Link href="/https://www.apple.com/app-store/" target="_blank"><Image src={image1} width={140} height={60} alt="playstore" className="w-24 sm:w-[100px] md:w-[140px] cursor-pointer"/></Link>
            <Link href="/https://play.google.com/store/games?hl=en" target="_blank"><Image src={image2} width={140} height={60} alt="playstore" className="w-24 sm:w-[100px] md:w-[140px] cursor-pointer"/></Link>
          </div>
            )}


        </div>
      </div>
    </div>
  );
};
