"use client";

import { useState, useEffect  } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

// interface SubMenuItem {
//   name: string;
//   icon: any; // Adjust the type of 'icon' if you have more specific types
// }

// interface MenuItem {
//   name: string;
//   link?: string;
//   subMenu?: SubMenuItem[];
// }

// interface MobMenuProps {
//   Menus: MenuItem[];
// }

export default function MobMenu({ Menus, locale }) {
  const t = useTranslations("NavbarLinks");
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };


  useEffect(() => {
   
      setIsOpen(false); // Toggles the state on each click
   
  }, []);

  return (
    <div className="flex">
      <button className="xl:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      
      </button>
      <div className="container mx-auto w-full -translate-x-2/4 translate-y-3 absolute left-2/4 px-4 z-50">
        <motion.div
          className="relative rounded-[32px] mx-auto left-0 right-0 top-12 overflow-y-auto  bg-white/45 backdrop-blur-[15px]  text-blue-default p-6 pb-8"
          initial={{ x: "-125%" }}
          animate={{ x: isOpen ? "0%" : "-125%" }}
        >
          <ul>
            {Menus.map(({ link, name, subMenu }, i) => {
              const isClicked = clicked === i;
              const hasSubMenu = subMenu?.length;
              return (
                <li key={name} className="">
                  <span
                    className="flex-center-between p-3 font-semibold hover:bg-[#E5F2FF] rounded-md cursor-pointer relative"
                    onClick={() => { 
                      setClicked(isClicked ? null : i); 
                      
                    }}
                  >
                    {/* {name} */}
                    <Link
                      // href={menu.link}
                      href={`/${locale}/${link}`}
                      className=""
                    >
                      {name}
                    </Link>
                    {hasSubMenu && (
                      <ChevronDown
                        className={`ml-auto ${isClicked && "rotate-180"}`}
                      />
                    )}
                  </span>
                  {hasSubMenu && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className="ml-5"
                    >
                      {subMenu.map(({ name, link, icon: Icon }) => (
                        <li
                          key={name}
                          className="p-2 flex-center hover:bg-[#E5F2FF] rounded-md gap-x-2 cursor-pointer"
                        >
                          <Icon size={17} />
                          <Link
                            // href={menu.link}
                            href={`/${locale}/${link}`}
                            className=""
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="gap-4 items-center text-white text-center justify-center bg-blue-default rounded-full font-bold py-[9px] px-4 flex lg:hidden">
                <Link
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("signUp")}
                </Link>
              </div>

             
        </motion.div>
      </div>
    </div>
  );
}
