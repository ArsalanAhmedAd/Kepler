import Image from "next/image";
import React from "react";
import logo from "@/public/Logo.svg";
import emailIcon from "@/public/Email.svg";
import phoneIcon from "@/public/Phone.svg";
import GoogleStore from "@/public/GoogleStore.svg";
import AppStore from "@/public/AppStore.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = ({ locale }: { locale: string }) => {
 
  const tfooter = useTranslations("footer");

  const htmlContent: string = tfooter('LinkTwo');
  const AddressOne: string  = tfooter("AddressOne")
  const AddressTwo: string  = tfooter("AddressTwo")


  return (
    <div className="bg-blue-100 pt-16 lg:pt-20 pb-10 mt-0 sm:mt-8">
      <div className="container mx-auto px-4 ">
        <div className="footer-top border-b border-blue-200 pb-4 flex  flex-col lg:flex-row justify-between items-center lg:items-end">
          <div className="pb-5">
            <Image src={logo} alt="Footer-logo" width={145} height={45} />
          </div>
          <div className="flex flex-col items-center text-center w-full lg:w-auto sm:text-start sm:flex-row gap-5 justify-between lg:justify-center">
            <div className="flex flex-col justify-end text-lg lg:mx-20 text-gray-100">
              <div className="flex my-2">
                <Image
                  src={emailIcon}
                  alt="emailIcon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
               <Link href="tel:+49(0)892154 7447"> {tfooter("PhoneNumber")}</Link>
              </div>
              <div className="flex ">
                <Image
                  src={phoneIcon}
                  alt="emailIcon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
              <Link href="mailto:info@brandpos.com">{tfooter("EmailAddress")}</Link>
              </div>
            </div>
            <div className="address-one text-[16px] text-gray-100">
            <span dangerouslySetInnerHTML={{ __html: AddressOne } } />
             
            </div>
            <div className="address-two text-[16px] text-gray-100">
            <span dangerouslySetInnerHTML={{ __html: AddressTwo } } />
            </div>
          </div>
        </div>
        <div className="footer-middle flex flex-col justify-center py-8">
          <div className="text-2xl sm:text-3xl text-gray-100 font-bold text-center pb-6">
            {tfooter("FooterHeading")}
          </div>
          <div className="footerLogo flex justify-center gap-3">
            <Link href="https://play.google.com/store/games?hl=en" target="_blank"><Image
              src={GoogleStore}
              alt="googleStore"
              width={120}
              height={40}
            /></Link>
           <Link href="https://www.apple.com/app-store/" target="_blank"> <Image src={AppStore} alt="googleStore" width={120} height={40} /></Link>
          </div>
        </div>
        <div className="footer-bottom border-t text-center flex-col md:flex-row flex justify-between border-blue-200 pt-6">
          <div className="footer-copyright text-center md:text-start mb-4">
            {tfooter("Copyright")}
          </div>
          <div className="footer-nav text-c md:text-end">
            <div>
              <Link href={`/${locale}/contact`}>{tfooter("LinkOne")}</Link>
              <span className="border border-gray-400 mx-1"></span>
              <Link href={`/${locale}/about`}>
                <span dangerouslySetInnerHTML={{ __html: htmlContent } } />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
