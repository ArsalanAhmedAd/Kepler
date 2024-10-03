import ContactForm from "@/components/ContactForm";
import MainBanner from "@/components/MainBanner";
// import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
// import { FaShoppingCart, FaRocket, FaTools, FaBook } from "react-icons/fa";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.aboutTitle;

  return {
    title,
  };
}

const ContactPage = () => {
  // const t = useTranslations("WhyUswrap2");
  // const obj = {
  //   "real-world": FaShoppingCart,
  //   advanced: FaRocket,
  //   "hands-on": FaTools,
  //   comprehensive: FaBook,
  // };

  return (
    // <div className="min-h-screen py-40 max-w-6xl mx-auto">
    //   <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance text-center py-4">
    //     {t("WhyUs.title")}
    //   </h2>
    //   <div className="py-8">
    //     <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
    //       {Object.entries(obj).map(([key, value], i) => {
    //         const Icon = value;
    //         return (
    //           <div
    //             key={i}
    //             className="rounded-md shadow p-4 flex  gap-4 dark:border-slate-600 dark:border dark:bg-slate-700"
    //           >
    //             <div className="bg-purple-800 w-16 h-16 rounded-lg text-gray-50 flex items-center justify-center flex-shrink-0">
    //               <Icon className="w-8 h-8" />
    //             </div>
    //             <div className="">
    //               <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    //                 {t(`WhyUs.points.${key}.title`)}
    //               </h2>
    //               <p className="pt-3">
    //                 {t(`WhyUs.points.${key}.description.descriptionOne`)}
    //               </p>
    //               <p className="pt-3">
    //                 {t(`WhyUs.points.${key}.description.descriptiontwo`)}
    //               </p>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-center"></div>
    // </div>
    <>
      <MainBanner />
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
