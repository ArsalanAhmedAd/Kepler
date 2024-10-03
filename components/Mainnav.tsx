// Mainnav.tsx
"use client";

import React, { ChangeEvent } from "react";
// import { Menus } from "@/utils";
import DesktopMenu from "@/components/DesktopMenu";
import MobMenu from "@/components/MobMenu";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
// import { Bolt } from "lucide-react";
// import { ShoppingBag } from "lucide-react";
// import { BellDot } from "lucide-react";
// import { BookOpenText } from "lucide-react";
// import { BriefcaseBusiness } from "lucide-react";
// import { CircleHelp } from "lucide-react";
// import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
// import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
// import { MessageCircle } from "lucide-react";
// import { Images } from "lucide-react";
// import { Figma } from "lucide-react";
// import { Play } from "lucide-react";
// import { MapPin } from "lucide-react";
// import { Database } from "lucide-react";
// import { PanelsTopLeft } from "lucide-react";
// import { PanelTop } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Mainnav = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  type NavItem = {
    name: string;
    link?: string;
    gridCols? : number;
    subMenuHeading?: string[]; // Array of strings for headings
    subMenu?: NavItem[]; // Sub-menu can contain further NavItems
    icon?: React.ElementType; // Icons should refer to a valid React component type
  };

  //   const navItem: NavItem[] = [
  //     {
  //       label: t("home"),
  //       link: "/",
  //     },
  //     {
  //       label: t("Price & Features"),
  //       link: "/Price&Features",
  //     },
  //     {
  //       label: t("IntegrationsZero"),
  //       link: "/Integrations",
  //       children: [
  //         {
  //           label: t("IntegrationsOne"),
  //           link: "Integrations/IntegrationsPosSystem",
  //           iconImage: "",
  //         },
  //         {
  //           label: t("Integrationstwo"),
  //           link: "Integrations/IntegrationsAccounting",
  //           iconImage: "",
  //         },
  //         {
  //           label: t("Integrationsthree"),
  //           link: "/Integrations",
  //           iconImage: "",
  //         },
  //         {
  //           label: t("Integrationsfour"),
  //           link: "contact",
  //           iconImage: "",
  //         },
  //       ],
  //     },
  //     {
  //       label: t("Resources"),
  //       link: "/Resources",
  //     },
  //     {
  //       label: t("about"),
  //       link: "/about",
  //     },
  //     {
  //       label: t("contact"),
  //       link: "/contact",
  //     },
  //   ];

  const Menus: NavItem[] = [
    {
      name: t("home"),
      link: "/",
      //   subMenuHeading: ["Design", "Scale"],
      //   subMenu: [
      //     {
      //       name: "Design",
      //       desc: "Responsive design",
      //       icon: PanelsTopLeft,
      //       link: "/features"
      //     },
      //     {
      //       name: "Management",
      //       desc: "Site control",
      //       icon: Bolt,
      //       link: "/home",
      //     },
      //     {
      //       name: "Navigation",
      //       desc: "Link pages",
      //       icon: PanelTop,
      //     },
      //     {
      //       name: "CMS",
      //       desc: "Management content",
      //       icon: Database,
      //     },
      //   ],
      //   gridCols: 2,
    },
    {
      name: t("Price & Features"),
      link: "/Price&Features",
      //   subMenuHeading: ["Get started", "Programs", "Recent"],
      //   subMenu: [
      //     {
      //         label: t("IntegrationsOne"),
      //         link: "Integrations/IntegrationsPosSystem",
      //         icon: Dessert,
      //       },
      //       {
      //         label: t("Integrationstwo"),
      //         link: "Integrations/IntegrationsAccounting",
      //         icon: ShieldPlus,
      //       },
      //       {
      //         label: t("Integrationsthree"),
      //         link: "/Integrations",
      //         icon: Users,
      //       },
      //       {
      //         label: t("Integrationsfour"),
      //         link: "contact",
      //         icon: Dessert,
      //       },
      //   ],
      //   gridCols: 3,
    },
    {
      name: "Integrations",
      link: "/Integrations",
      subMenuHeading: ["Overview", "Features"],
      subMenu: [
        {
          name: t("IntegrationsOne"),
          link: "/Integrations/IntegrationsPosSystem",
          icon: Dessert,
        },
        {
          name: t("Integrationstwo"),
          link: "/Integrations/IntegrationsAccounting",
          icon: ShieldPlus,
        },
        {
          name: t("Integrationsthree"),
          link: "/Integrations",
          icon: Users,
        },
        {
          name: t("Integrationsfour"),
          link: "/contact",
          icon: Dessert,
        },
      ],
      gridCols: 2,
    },
    {
      name: t("Resources"),
      link: "/Resources",
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
    <div className="container mx-auto w-full -translate-x-2/4 translate-y-3 absolute left-2/4 px-4 z-50">
      <header className="flex justify-between py-4 px-4 items-center bg-nav-transparent text-blue-default rounded-full">
        <nav className="px-3.5 flex justify-between w-full container mx-auto">
          <div className="flex items-center gap-x-3 z-[999] relative">
            <Link href={`/${locale}/`}>
              <Image src="/Logo.svg" alt="Logo" width={145} height={44} />
            </Link>
          </div>
          <div className="flex gap-5">
            <ul className="xl:flex hidden">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} locale={locale} />
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <label id="language-select" suppressHydrationWarning></label>
              <select
                value={locale}
                onChange={handleLanguageChange}
                className=" py-2 px-4  hover:outline-none focus:outline-none bg-gray-100 text-white rounded-full"
                aria-labelledby="language-select"
                suppressHydrationWarning
              >
                <option value="en" label="en">
                  EN
                </option>
                <option value="de" label="de">
                  DE
                </option>
              </select>
              <div className="gap-4 items-center text-white bg-blue-default rounded-full py-2 px-4 hidden lg:flex">
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
