"use client";
import Line from "@/components/shared/Line";
import Image from "next/image";
import React, { useState } from "react";
import DropdownCategoryLazada from "./DropdownCategoryLazada";

export default function FormLazada() {
  const [formData, setFormData] = useState<any>();

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [id]: value,
    }));
  };
  return (
    <div className="mx-auto max-w-screen-md rounded-[32px] border-4 border-black bg-white shadow-[0px_20px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between rounded-t-[28px] bg-accent px-8 py-4">
        <h2 className="text-left text-2xl font-normal text-white">
          คิดราคา Lazada
        </h2>
        <Image
          src="/assets/images/lazada/lazada_logo.png"
          height={51}
          width={51}
          alt="lazada-logo"
        />
      </div>
      <hr className="border-2 border-black" />

      <form className="p-8">
        <div className="mb-6 flex flex-col">
          <label htmlFor="cost" className="label">
            ราคาทุน
          </label>
          <input
            type="number"
            id="cost"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="price" className="label text-blue-600">
            ราคาสินค้าปกติ
          </label>
          <input
            type="number"
            id="price"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="discount" className="label text-blue-800">
            คูปองจากผู้ขาย
          </label>
          <input
            type="number"
            id="discount"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="shipping" className="label text-blue-600">
            ค่าส่ง
          </label>
          <input
            type="number"
            id="shipping"
            onChange={handleChange}
            className="input"
          />
        </div>
        <Line />
        <div className="mb-6 flex flex-col">
          <label htmlFor="shopeeDiscount" className="label text-amber-600">
            ส่วนลดจาก Lazada (%)
          </label>
          <input
            type="number"
            id="shopeeDiscount"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="shopeeCoin" className="label text-amber-600">
            คูปองส่วนลดค่าส่ง
          </label>
          <input
            type="number"
            id="shopeeCoin"
            onChange={handleChange}
            className="input"
          />
        </div>

        <DropdownCategoryLazada
          onSelect={(v: any) =>
            setFormData((prev: any) => ({ ...prev, category: v }))
          }
        />
        <button type="submit" className="btn-submit">
          คำนวณ
        </button>
      </form>
    </div>
  );
};
