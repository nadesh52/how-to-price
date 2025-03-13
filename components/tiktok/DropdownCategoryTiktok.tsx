"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

const optionItems = [
  {
    title: "อิเล็กทรอนิกส์",
    saleValue: 5.35,
  },
  {
    title: "แฟชั่น",
    saleValue: 6.42,
  },
  {
    title: "ทองคำ อัญมณีต่างๆ ",
    saleValue: 5.35,
  },
  {
    title: "[FMCG] อุปโภคบริโภค",
    saleValue: 5.35,
  },
  {
    title: "ไลฟ์สไตล์",
    saleValue: 5.35,
  },
];

export default function DropdownCategoryTiktok({ onSelect }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>({
    title: "เลือกประเภทสินค้า",
    value: null,
  });

  const listRef = useRef(null);
  const menuRef = useRef(null);

  const handleSelect = (item: any) => {
    setSelectedOption({
      title: item.title,
      value: item.saleValue,
    });
    onSelect(item);
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
      <h4 className="label text-red-600">ประเภทสินค้า</h4>
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
          <li>
            <button
              disabled
              className="w-full p-2 text-left disabled:hover:bg-slate-200 disabled:hover:text-white"
            >
              เลือกประเภทสินค้า
            </button>
          </li>
          {optionItems.map((item, index) => (
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