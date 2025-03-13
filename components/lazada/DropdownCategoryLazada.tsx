"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

const optionItems = [
  {
    title: (
      <p>
        <span className="text-accent">[อิเล็กทรอนิกส์]</span> โทรศัพท์มือถือ
        แท็บเล็ต คอมพิวเตอร์ โดรน
      </p>
    ),
    saleValue: 5,
  },
  {
    title: (
      <p>
        <span className="text-accent">[อิเล็กทรอนิกส์]</span>{" "}
        อุปกรณ์จัดเก็บข้อมูล เครื่องเล่นเกมคอนโซล
      </p>
    ),
    saleValue: 7,
  },
  {
    title: (
      <p>
        <span className="text-accent">[อิเล็กทรอนิกส์]</span>{" "}
        เครื่องใช้ไฟฟ้าขนาดใหญ่
      </p>
    ),
    saleValue: 5.5,
  },
  {
    title: (
      <p>
        <span className="text-accent">[อิเล็กทรอนิกส์]</span> โทรทัศน์และวีดีโอ
      </p>
    ),
    saleValue: 6,
  },
  {
    title: (
      <p>
        <span className="text-accent">[อิเล็กทรอนิกส์]</span>{" "}
        เครื่องใช้ไฟฟ้าขนาดเล็ก อุปกรณ์โปรเจกเตอร์ ออดิโอ้
      </p>
    ),
    saleValue: 7.5,
  },
  {
    title: (
      <p>
        <span className="text-accent">[อิเล็กทรอนิกส์]</span> กล้องถ่ายภาพ
        ระบบรักษาความปลอดภับ
      </p>
    ),
    saleValue: 8,
  },
  {
    title: (
      <p>
        <span className="text-accent">[ทั่วไป]</span> อื่นๆ
      </p>
    ),
    saleValue: 8,
  },
  {
    title: (
      <p>
        <span className="text-accent">[ทั่วไป]</span> ยานยนต์และอุปกรณ์
      </p>
    ),
    saleValue: 7.5,
  },
  {
    title: (
      <p>
        <span className="text-accent">[แฟชั่น]</span> อื่นๆ
      </p>
    ),
    saleValue: 9,
  },
  {
    title: (
      <p>
        <span className="text-accent">[แฟชั่น]</span> เครื่องประดับแฟชั่น
      </p>
    ),
    saleValue: 7.5,
  },
  {
    title: <p><span className="text-accent">[อุปโภคบริโภค]</span> อื่นๆ</p>,
    saleValue: 8,
  },
  {
    title: <p><span className="text-accent">[บัตรกำนัลดิจิตอล]</span> อื่นๆ</p>,
    saleValue: 7,
  },
];

export default function DropdownCategoryLazada({ onSelect }: any) {
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