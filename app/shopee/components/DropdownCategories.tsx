"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

const optionItems = [
  {
    title:
      "Electronics (กล้อง, เลนส์, โดรน, เครื่องเกม, คอมพิวเตอร์ตั้งโต๊ะและอุปกรณ์เสริม, โทรศัพท์มือถือ, แท็บเล็ต, ตู้เย็น, ตู้แช่แข็ง)",
    saleValue: 5.35,
    serviceType: 1,
  },
  {
    title: "Electronics (เครื่องใช้ไฟฟ้าขนาดใหญ่)",
    saleValue: 5.89,
    serviceType: 1,
  },
  {
    title: "Electronics (อุปกรณ์เสริมทีวี)",
    saleValue: 6.42,
    serviceType: 1,
  },
  {
    title: "Electronics (เครื่องพิมพ์และอุปกรณ์จัดเก็บข้อมูล)",
    saleValue: 7.49,
    serviceType: 1,
  },
  {
    title:
      "Electronics (เกมและอุปกรณ์เสริม, คีย์บอร์ด & เมาส์, อุปกรณ์สำนักงาน)",
    saleValue: 8.03,
    serviceType: 1,
  },
  {
    title:
      "Electronics (เครื่องเสียง, ลำโพง, หูฟัง, เครื่องขยายเสียง, อุปกรณ์เสริมกล้อง)",
    saleValue: 8.56,
    serviceType: 1,
  },
  {
    title: "Fashion (เสื้อผ้า, เครื่องแต่งกาย)",
    saleValue: 9.63,
    serviceType: 2,
  },
  {
    title:
      "Fashion (เครื่องประดับทั่วไป, แหวน, กำไล, สร้อยคอ, ต่างหู, นาฬิกาแฟชั่น)",
    saleValue: 8.03,
    serviceType: 2,
  },
  {
    title:
      "Fashion (เครื่องประดับมีมูลค่า, เพชร, หยก, เงินแท้, ทองคำแท้, แพลทินัม)",
    saleValue: 9.1,
    serviceType: 1,
  },
  { title: "Lifestyle อุปโภคบริโภค และอื่นๆ", saleValue: 8.56, serviceType: 2 },
];

const DropdownCategories = ({ onSelect }:any) => {
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
      <h4 className="label text-red-600">ประเภทสินค้า</h4>
      <button
        type="button"
        ref={listRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex h-10 w-full items-center justify-between gap-3 border border-black py-2 pl-3 pr-2 text-left hover:bg-indigo-50"
      >
        <p className="pointer-events-none select-none truncate">
          {selectedOption.title}
        </p>
        <ChevronDownIcon
          className={`${isMenuOpen ? "-rotate-180" : "rotate-0"} pointer-events-none size-6 min-w-6 select-none text-indigo-600 transition-all duration-300`}
        />
      </button>
      <div
        ref={menuRef}
        className={`${isMenuOpen ? "block" : "hidden"} absolute z-50 max-h-[250px] w-full overflow-y-scroll bg-white py-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,1)] scrollbar-thin scrollbar-track-white scrollbar-thumb-indigo-600`}
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

export default DropdownCategories;
