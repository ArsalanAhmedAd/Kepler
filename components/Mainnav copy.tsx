// Mainnav.tsx
"use client"; // Ensure this component is a client component

import React from 'react';
import { Menus } from "@/utils";
import Logo from "@/public/Logo.svg";
import DesktopMenu from "@/components/DesktopMenu";
import MobMenu from "@/components/MobMenu";





const Mainnav = () => {
    return (
        <div className='-z-40'>
          <header className="h-20 text-[15px]  z-30 flex items-center bg-nav-transparent text-blue-default rounded-full ">
            <nav className="px-3.5 flex justify-between w-full max-w-7xl mx-auto">
              <div className="flex items-center gap-x-3 z-[999] relative">
                <img src="/Logo.svg" alt="Logo" width={160} height={80} />
                {/* <h3 className="text-lg font-semibold">Framer</h3> */}
              </div>
    
              <ul className="gap-x-1 lg:flex hidden">
                {Menus.map((menu) => (
                  <DesktopMenu menu={menu} key={menu.name} />
                ))}
              </ul>
              <div className="flex items-center gap-x-5">
                <button
                  aria-label="sign-in"
                  className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex items-center"
                >
                  Sign In
                </button>
                <div className="lg:hidden">
                  <MobMenu Menus={Menus} />
                </div>
              </div>
            </nav>
          </header>
        </div>
      );
}

export default Mainnav;
