"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

const optionItems = [
  { title: "ชำระปกติ", value: 3 },
  { title: "Special SPayLater 1-2 เดือน", value: 3 },
  { title: "Special SPayLater 3 เดือน", value: 4 },
  { title: "Special SPayLater 5 เดือน", value: 5.5 },
  { title: "Special SPayLater 12 เดือน", value: 6 },
  { title: "บัตรเครดิต 3 เดือน", value: 4 },
  { title: "บัตรเครดิต 6 เดือน", value: 5.5 },
  { title: "บัตรเครดิต 10 เดือน", value: 6 },
];

const DropdownPayment = ({ onSelect }:any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>({
    title: "ชำระปกติ",
    value: 3,
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
        className="selection"
      >
        <p className="pointer-events-none select-none truncate">
          {selectedOption.title}
        </p>
        <ChevronDownIcon
          className={`${isMenuOpen ? "-rotate-180" : "rotate-0"} border-black border rounded-full text-black pointer-events-none size-6 p-1 bg-primary min-w-6 select-none transition-all duration-300`}
        />
      </button>
      <div
        ref={menuRef}
        className={`${isMenuOpen ? "block" : "hidden"} absolute z-50 max-h-[250px] w-full overflow-y-scroll bg-white py-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,1)] rounded-md scrollbar-thin top-[72px] scrollbar-track-white scrollbar-thumb-primary`}
      >
        <ul>
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

export default DropdownPayment;
