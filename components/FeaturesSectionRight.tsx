"use client"
import Image from "next/image";
import React, { useState } from "react";
import  IconType  from "@/public/ButtonIconGray.svg"
import Link from "next/link";
import Button from "./ButtonCustom";
import image1 from "@/public/AppStore.svg"
import image2 from "@/public/GoogleStore.svg"
import { DialogDemo } from "./Modal";






type FeaturesSectionRight ={
  features: string,
  description: string,
  ImageDirection: string,
  FeatureImage: string,
  ButtonLabel?:string,
  ButtonLink?: any,
  GooglePlaystoreImage?: string,
  ApplePlaystoreImage?: string,
  buttonEnabled?: boolean;
  playStoreImageEnabled?: boolean;
  closeModal?: string;
  isVideo?: boolean;
}



export const FeaturesSectionRight =  ({ features, description, ImageDirection, FeatureImage, ButtonLabel, ButtonLink, buttonEnabled, playStoreImageEnabled, isVideo }: FeaturesSectionRight) => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-20">
      <div className={`flex-col sm:flex-row flex items-center ${ImageDirection}`}>
        <div className="left w-full sm:w-[45%] mb-9 sm:mb-0">
          <div className="text-center sm:text-left text-2xl leading-9  text-gray-100 lg:text-40  font-bold mb-4">{features}</div>
          <div className="text-center sm:text-left text-16 leading-8 text-gray-200 lg:text-22 lg:leading-8 font-normal mb-10 mt-6">{description}</div>
          

            {buttonEnabled && (
                <Button type="submit"   icon={IconType} iconPosition="right" variant="secondary" size="md" className="mx-auto sm:mx-0">
                    <Link href={ButtonLink || "#"}>{ButtonLabel}</Link>
                  
                </Button>
            )}
        
             {playStoreImageEnabled && (
                  <div className="flex gap-2 justify-center sm:justify-start">
                   <Link href="https://www.apple.com/app-store/" target="_blank"><Image src={image1} width={140} height={60} alt="playstore" className="w-24 sm:w-[100px] md:w-[170px] cursor-pointer"/></Link>
                   <Link href="https://play.google.com/store/games?hl=en" target="_blank"><Image src={image2} width={140} height={60} alt="playstore" className="w-24 sm:w-[100px] md:w-[170px] cursor-pointer"/></Link>
                  </div>
              )}
        </div>
        <div className="right w-full sm:w-[55%] flex justify-center sm:justify-end">


              {isVideo ? (
                <div onClick={() => setIsDialogOpen(true)}>
                   <Image src={FeatureImage} alt={features} width={685} height={580} quality={100}  className="cursor-pointer px-7 sm:px-3"/>

                </div>
              ): (
                <Image src={FeatureImage} alt={features} width={685} height={580} quality={100} className="px-7 sm:px-3"/>   
              )}
              
        </div>
      <DialogDemo isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />

      </div>
    </div>
  );
};
