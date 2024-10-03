import MainBanner from "@/components/MainBanner";
import { useTranslations } from "next-intl";
import React from "react";

const Pagess = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tblog = useTranslations("BlogDetail");

  return (
    <div>
      <MainBanner />

      <br />

      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div> {tblog(`${id}.Title`)}</div>
        <div>{tblog(`${id}.BlogBody`)}</div>
      </div>
    </div>
  );
};

export default Pagess;
