import React from 'react'

type SectionTitleType = {
  SectionTitle?: string;
  sectionDescription?: string;
};

  const SectionTitle = ({ SectionTitle = "", sectionDescription = "" }: SectionTitleType) => {
  return (
    <>
      <div className="sectionTitle scroll-m-20 text-2xl sm:text-3xl leading-10 font-extrabold tracking-tight lg:text-[40px] w-full lg:leading-[55px] text-gray-100 mx-auto text-balance text-center">
        <div dangerouslySetInnerHTML={{ __html: SectionTitle || "" }} />
      </div>
      <div className="sectionDescription scroll-m-20 text-[16px] sm:text-[18px] font-normal text-gray-200 lg:text-[22px] text-balance text-center py-2">
        {sectionDescription}
      </div>
    </>
  );
};


export default SectionTitle