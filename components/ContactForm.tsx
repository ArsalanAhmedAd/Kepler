import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactForm = () => {
  const tContactForm = useTranslations("ContactPage");

  return (
    <div className="grid grid-cols-2">
      <div>{tContactForm("title")}
      <form></form>
      </div>
      <div>
        <div className="box-shadow-custom p-6 rounded-20 mb-5">
          <Image
            src="/LocationIcon.svg"
            alt="Envelop"
            width={40}
            height={37}
            className="mb-6"
          />
          <div className="text-18 text-gray-200">
            {" "}
            {tContactForm("ContactInfo.Address")} <br />{" "}
            {tContactForm("ContactInfo.AddressHalf")}
          </div>
        </div>
        <div className="box-shadow-custom p-6 rounded-20 mb-5">
          <Image
            src="/PhoneIcon.svg"
            alt="Envelop"
            width={40}
            height={37}
            className="mb-6"
          />
          <div className="text-18 text-gray-200">
            <Link href={tContactForm("ContactInfo.PhoneOneLink")}>
              {" "}
              {tContactForm("ContactInfo.PhoneOne")}
            </Link>
            <br />
            <Link href={tContactForm("ContactInfo.PhoneTwoLink")}>
              {tContactForm("ContactInfo.PhoneTwo")}
            </Link>
          </div>
        </div>
        <div className="box-shadow-custom p-6 rounded-20 mb-5">
          <Image
            src="/Envelop.svg"
            alt="Envelop"
            width={40}
            height={37}
            className="mb-6"
          />
          <div className="text-18 text-gray-200">
            <Link href={tContactForm("EmailOneLink")}>
              {" "}
              {tContactForm("EmailOne")}
            </Link>
            <br />
            <Link href={tContactForm("PhoneTwoLink")}>
              {tContactForm("EmailTwo")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
