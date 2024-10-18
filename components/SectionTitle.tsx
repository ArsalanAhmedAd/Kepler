import React from 'react'

type SectionTitleType = {
  SectionTitle?: string;
  sectionDescription?: string;
};

  const SectionTitle = ({ SectionTitle = "", sectionDescription = "" }: SectionTitleType) => {
  return (
    <>
      <h2 className="sectionTitle scroll-m-20 text-2xl sm:text-3xl leading-10 font-extrabold tracking-tight lg:text-[40px] w-full lg:leading-[55px] text-gray-100 mx-auto text-balance text-center">
        <div dangerouslySetInnerHTML={{ __html: SectionTitle || "" }} />
      </h2>
      <div className="sectionDescription scroll-m-20 text-16 sm:text-18 font-normal text-gray-200 lg:text-22 text-balance text-center py-2 lg:max-w-[80%] mx-auto">
        {sectionDescription}
      </div>
    </>
  );
};


export default SectionTitle