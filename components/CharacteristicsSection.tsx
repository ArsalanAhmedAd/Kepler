// import Image from "next/image";
import Image from "next/image";
import React from "react";

type CharacteristicsSection = {
  CharacteristicsTitle?: string;
  CharacteristicsDescription?: any;
  CharacteristicsImage?: string;
};

const CharacteristicsSection = ({
  CharacteristicsTitle,
  CharacteristicsDescription,
  CharacteristicsImage,
}: CharacteristicsSection) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row items-center py-9">
        <Image
          src={CharacteristicsImage || "/default-image-path.jpg"}
          alt={`${CharacteristicsTitle}-image - BrandPos`}
          width={350}
          height={350}
          className="px-10 pb-5 sm:px-4 w-full h-72 sm:w-72 md:h-72"
        />
        <div className="flex flex-col px-3 md:px-8">
          <h2 className="text-center sm:text-left text-2xl sm:text-3xl leading-9 text-gray-100 lg:text-[40px] lg:leading-[3rem] font-bold mb-4">
            {CharacteristicsTitle}
          </h2>
          <div className="text-center sm:text-left text-16 leading-8 text-gray-200 lg:text-18 lg:leading-8 font-normal mb-4">
            {CharacteristicsDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsSection;
