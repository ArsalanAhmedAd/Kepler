import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";

const FaqContact = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <SectionTitle
        SectionTitle="Haben Sie noch Fragen?"
        sectionDescription="Wenn Sie keine Antwort auf Ihre Frage in unseren FAQs finden, können Sie uns kontaktieren. Wir werden Ihnen in Kürze antworten!"
      />
      <div className="flex flex-col md:flex-row justify-center gap-10 py-10 ">
        <div className="rounded-20 box-shadow-custom text-center p-11 pb-7 flex items-center flex-col xl:min-w-[500px]">
          <Image
            src="/faq/FaqContactPhone.svg"
            alt="FaqContactPhone"
            height={60}
            width={60}
            className="h-14 w-14 mb-4"
          />
          <div className="text-gray-100 text-2xl lg:text-3xl font-semibold mb-2">
            <Link href="tel:+49 89 2154 7447">+49 89 2154 7447</Link>
          </div>
          <div className="text-gray-100 text-18 lg:text-22 mb-3">We are always here to help you!</div>
        </div>
        <div className="rounded-20 box-shadow-custom text-center p-11 pb-7 flex items-center flex-col xl:min-w-[500px]">
          <Image
            src="/faq/FaqContactEnvlap.svg"
            alt="FaqContactPhone"
            height={60}
            width={60}
            className="h-14 w-14 mb-4"
          />
         <div className="text-gray-100 text-2xl lg:text-3xl font-semibold mb-2">
            <Link href="mailto:support@brandpos.com">support@brandpos.com</Link>
          </div>
          <div className="text-gray-100 text-18 lg:text-22 mb-3">Quick response from our representative</div>
        </div>
      </div>
    </div>
  );
};

export default FaqContact;
