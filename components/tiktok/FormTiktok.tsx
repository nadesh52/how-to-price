"use client";
import React, { useState } from "react";
import Image from "next/image";
import Line from "@/components/shared/Line";
import DropdownCategoryTiktok from "./DropdownCategoryTiktok";
import { useTiktok } from "@/contexts/TiktokContext";

export default function FormTiktok () {
  const { setTiktokItem } = useTiktok();
  const [formData, setFormData] = useState<any>({
    category: { title: "", saleValue: "" },
    cost: 0,
    price: 0,
    discount: 0,
    shipping: 0,
    tiktokDiscount: 0,
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTiktokItem(formData);
  };

  return (
    <div className="mx-auto max-w-screen-md rounded-[32px] border-4 border-black bg-white shadow-[0px_20px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between rounded-t-[28px] bg-accent px-8 py-4">
        <h2 className="text-left text-2xl font-normal text-white">
          คิดราคา Tiktok
        </h2>
        <Image
          src="/assets/images/tiktok/tiktok_logo.png"
          height={51}
          width={51}
          alt="tiktok-logo"
        />
      </div>
      <hr className="border-2 border-black" />

      <form onSubmit={handleSubmit} className="p-8">
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
            ส่วนลดผู้ขาย
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
            ค่าจัดส่ง
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
          <label htmlFor="tiktokDiscount" className="label text-amber-600">
            ส่วนลดจาก Tiktok
          </label>
          <input
            type="number"
            id="tiktokDiscount"
            onChange={handleChange}
            className="input"
          />
        </div>
        <DropdownCategoryTiktok
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