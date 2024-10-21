// DesktopMenu.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function DesktopMenu({ menu, locale }) {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <span className="flex-center gap-1 hover:bg-[#E5F2FF] cursor-pointer px-3 py-1 rounded-full">
        {/* <Link href={menu.link}> {menu.name}</Link> */}
        <Link
          // href={menu.link}
          href={`/${locale}/${menu.link}`}
          className="font-semibold text-[17px] transition-all group py-2 relative"
        >
          {menu.name}
        </Link>

        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu z-50"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-gray-500">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}
                <div className="flex-center gap-x-4 group/menubox">
                  <div className="bg-white w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    {/* <h6 className="font-semibold">{submenu.name}</h6> */}
                    <Link
                      // href={menu.link}
                      href={`/${locale}/${submenu.link}`}
                    >
                      <div className="font-semibold">{submenu.name}</div>
                    </Link>
                    <p className="text-sm text-gray-400">{submenu.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
  