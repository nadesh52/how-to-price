"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { paymentItemsShopee } from "@/constants/shopee";

export default function DropdownPaymentShopee ({ onSelect }:any)  {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>({
    title: "ชำระปกติ",
    value: 3.21,
  });

  const listRef = useRef(null);
  const menuRef = useRef(null);

  const handleSelect = (item: any) => {
    setSelectedOption({
      title: item.title,
      value: item.value,
    });
    onSelect(item)
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target !== listRef.current || e.target === menuRef.current) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative mb-6 select-none">
      <h4 className="label text-red-600">ช่องทางการจ่ายเงิน</h4>
      <button
        type="button"
        ref={listRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={` ${isMenuOpen ? "rounded-t-[22px]" : "rounded-full"} selection`}
      >
        <p className="pointer-events-none select-none truncate">
          {selectedOption.title}
        </p>
        <ChevronDownIcon
          className={`${isMenuOpen ? "-rotate-180" : "rotate-0"} selection-arrow`}
        />
      </button>
      <div
        ref={menuRef}
        className={`${isMenuOpen ? "block" : "hidden"} dropdown-menu`}
      >
        <ul>
          {paymentItemsShopee.map((item, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleSelect(item)}
                className="option"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};