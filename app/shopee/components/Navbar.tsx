"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-background mx-auto my-6 flex max-w-screen-md items-center justify-between rounded-[20px] border-2 border-black px-8 py-4">
      <div className="text-primary select-none text-2xl font-medium tracking-widest">
        คิดราคา
      </div>
      <ul className="flex justify-center gap-8">
        <li
          className={
            pathname === "/shopee"
              ? "text-primary font-medium" // Active link style
              : "hover:text-primary font-medium transition-all duration-300"
          }
        >
          <a href="/shopee">Shopee</a>
        </li>
        <li
          className={
            pathname === "/lazada"
              ? "text-primary font-medium" // Active link style
              : "hover:text-primary font-medium transition-all duration-300"
          }
        >
          <a href="/lazada">Lazada</a>
        </li>
        <li
          className={
            pathname === "/tiktok"
              ? "text-primary font-medium" // Active link style
              : "hover:text-primary font-medium transition-all duration-300"
          }
        >
          <a href="/tiktok">Tiktok</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
