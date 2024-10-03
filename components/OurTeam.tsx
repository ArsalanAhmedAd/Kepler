"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";

interface SocialLink {
  Icon: string;
  Url: string;
}

interface Social {
  Facebook?: SocialLink;
  Twitter?: SocialLink;
  LinkedIn?: SocialLink;
}

interface TeamMember {
  Name: string;
  Designation: string;
  Description: string;
  Image: string;
  Social: Social;
}

interface TeamSection {
  [key: string]: TeamMember;
}
const OurTeam = () => {
//   const AboutPage = useTranslations("AboutPage");
  const tOurTeam = useTranslations("AboutPage.TeamSection");
  const tOurTeamMembers: TeamSection = tOurTeam.raw("Members") as TeamSection;

  return (
    <div className="py-8 sm:py-10 md:py-12">
      <div className="text-3xl text-gray-100 font-bold">Unser Team</div>

      <div className="py-8">
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          draggable={false}
          modules={[Pagination, Navigation]}
          navigation={true}
          className="TeamSwiper"
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 70,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 70,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1024: {
              spaceBetween: 70,
              slidesPerView: 3,
            },
            1440: {
              spaceBetween: 70,
              slidesPerView: 4,
            },
          }}
        >
          {Object.entries(tOurTeamMembers).map(([key, member], i) => (
            <SwiperSlide key={i}>
              <div className="box-shadow-custom rounded-20 relative">
                <ul className="flex flex-col absolute left-2 gap-3 top-[20%]">
                  {Object.entries(member.Social).map(
                    ([socialName, socialData]) => (
                      <li key={socialName}>
                        <Link
                          href={socialData.Url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={socialData.Icon}
                            alt={socialName}
                            width={30}
                            height={30}
                          />
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                <div className="relative -top-4 -right-12">
                  <Image
                    src={tOurTeam(`Members.${key}.Image`)}
                    alt="BlogThumbnail"
                    width={280}
                    height={320}
                    className="w-full"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold text-18">
                    
                      {tOurTeam(`Members.${key}.Name`)}
                    </div>
                    <div className="text-[14] italic">
                      {tOurTeam(`Members.${key}.Designation`)}
                    
                    </div>
                  </div>
                </div>
                <div className="pl-4 pb-4 pr-4">
                  <div className="text-gray-200 text-18 pb-0">
                    {tOurTeam(`Members.${key}.Description`)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
