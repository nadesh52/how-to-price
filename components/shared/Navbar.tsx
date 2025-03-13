"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-background mx-auto mb-9 flex max-w-screen-md items-center justify-between rounded-b-[24px] border-x-4 border-b-4 border-black px-8 py-4 shadow-[0px_16px_0px_0px_rgba(0,0,0,1)]">
      <div className="select-none text-2xl font-normal italic tracking-wider">
        คิดราคา
      </div>
      <ul className="flex justify-center gap-8">
        <li
          className={
            pathname === "/shopee"
              ? "text-accent font-medium" // Active link style
              : "hover:text-accent font-medium transition-all duration-300"
          }
        >
          <a href="/shopee">Shopee</a>
        </li>
        <li
          className={
            pathname === "/lazada"
              ? "text-accent font-medium" // Active link style
              : "hover:text-accent font-medium transition-all duration-300"
          }
        >
          <a href="/lazada">Lazada</a>
        </li>
        <li
          className={
            pathname === "/tiktok"
              ? "text-accent font-medium" // Active link style
              : "hover:text-accent font-medium transition-all duration-300"
          }
        >
          <a href="/tiktok">Tiktok</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
