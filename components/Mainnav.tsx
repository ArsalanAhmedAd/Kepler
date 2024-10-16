"use client";

import React, { ChangeEvent } from "react";

// import { Menus } from "@/utils";
import DesktopMenu from "@/components/DesktopMenu";
import MobMenu from "@/components/MobMenu";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Mainnav = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");

  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    console.log();
    const path = pathname?.split("/").slice(2).join("/") ?? "";
    router.push(`/${newLocale}/${path}`);
  };

  type NavItem = {
    name: string;
    link?: string;
    gridCols?: number;
    subMenuHeading?: string[];
    subMenu?: NavItem[]; // Sub-menu can contain further NavItems
    icon?: React.ElementType; // Icons should refer to a valid React component type
  };

  const Menus: NavItem[] = [
    {
      name: t("home"),
      link: "/",
    },
    {
      name: t("Price & Features"),
      link: "/price-features",
    },
    {
      name: "Integrations",
      link: "/integrations",
      subMenuHeading: ["Integrations", "Integrations"],
      subMenu: [
        {
          name: t("IntegrationsOne"),
          link: "/integrations/integrations-pos-system",
          icon: Dessert,
        },
        {
          name: t("Integrationstwo"),
          link: "integrations/integrations-accounting",
          icon: ShieldPlus,
        },
      ],
      gridCols: 2,
    },
    {
      name: t("Resources"),
      link: "/resources",
    },
    {
      name: t("about"),
      link: "/about",
    },
    {
      name: t("contact"),
      link: "/contact",
    },
  ];

  return (
    <div className="container mx-auto w-full -translate-x-2/4 translate-y-5 absolute left-2/4 px-4 z-[1000]">
      <header className="flex justify-between py-4 pl-3 items-center bg-nav-transparent text-blue-default rounded-full">
        <nav className="px-3.5 flex justify-between w-full container mx-auto">
          <div className="flex items-center gap-x-3 z-[999] relative">
            <Link href={`/${locale}/`}>
              <Image src="/Logo.svg" alt="Logo" width={145} height={44} priority={false} />
            </Link>
          </div>
          <div className="flex gap-5">
            <ul className="xl:flex hidden">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} locale={locale} />
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <div className="relative">
                <label id="language-select"></label>
                <select
                  value={locale}
                  onChange={handleLanguageChange}
                  className=" py-[9px] pl-[9px] pr-[15px] language-select hover:outline-none focus:outline-none bg-gray-100 text-white rounded-full"
                  aria-labelledby="language-select"
                  suppressHydrationWarning
                >
                  <option value="en" label="en" className="EnFlag">
                    English
                  </option>
                  <option value="de" label="de" className="DeFlag">
                    German
                  </option>
                </select>

                <div className="absolute inset-y-0 left-[8px] flex items-center pr-3 pointer-events-none">
                  <Image
                    src={
                      locale === "en"
                        ? "/united-states-flag.svg"
                        : "/german-flag.svg"
                    }
                    alt="Flag"
                    width={30}
                    height={20}
                  />
                </div>
              </div>

              <div className="gap-4 items-center text-white bg-blue-default rounded-full font-bold py-[9px] px-4 hidden lg:flex">
                <Link
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("signUp")}
                </Link>
              </div>
              <div className="xl:hidden">
                <MobMenu Menus={Menus} locale={locale} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Mainnav;
