"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto mb-9 flex max-w-screen-md items-center justify-between rounded-b-[24px] border-x-4 border-b-4 border-black bg-background px-8 py-4 shadow-[0px_16px_0px_0px_rgba(0,0,0,1)]">
      <div className="select-none text-2xl font-normal italic tracking-wider">
        คิดราคา
      </div>
      <ul className="flex justify-center gap-8">
        <li
          className={
            pathname === "/shopee"
              ? "font-medium text-accent"
              : "font-medium transition-all duration-300 hover:text-accent"
          }
        >
          <Link href="/shopee">Shopee</Link>
        </li>
        <li
          className={
            pathname === "/lazada"
              ? "font-medium text-accent"
              : "font-medium transition-all duration-300 hover:text-accent"
          }
        >
          <Link href="/lazada">Lazada</Link>
        </li>
        <li
          className={
            pathname === "/tiktok"
              ? "font-medium text-accent"
              : "font-medium transition-all duration-300 hover:text-accent"
          }
        >
          <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
