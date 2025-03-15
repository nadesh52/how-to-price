"use client";
import React, { useState } from "react";
import { useShopee } from "@/contexts/ShopeeContext";
import CampaignSelectorShopee from "./CampaignSelectorShopee";
import DropdownCategoryShopee from "./DropdownCategoryShopee";
import DropdownPaymentShopee from "./DropdownPaymentShopee";
import Line from "@/components/shared/Line";
import Image from "next/image";

export default function FormShopee() {
  const { setShopeeItem } = useShopee();
  const [formData, setFormData] = useState<any>({
    category: { title: "", saleValue: "" },
    payment: { title: "ชำระปกติ", value: 3.21 },
    program: 0,
    cost: 0,
    price: 0,
    discount: 0,
    shipping: 0,
    shopeeDiscount: 0,
    shopeeCoin: 0,
    isFreeShipping: false,
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleToggle = () => {
    setFormData((prev: any) => ({
      ...prev,
      isFreeShipping: !prev.isFreeShipping, // Toggle between true and false
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShopeeItem(formData);
  };

  return (
    <div className="mx-auto max-w-screen-md rounded-[32px] border-4 border-black bg-white shadow-[0px_20px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between rounded-t-[28px] bg-accent px-8 py-4">
        <h2 className="text-left text-2xl font-normal text-white">
          คิดราคา Shopee
        </h2>
        <Image
          src="/how-to-price/assets/images/shopee/shopee_logo.webp"
          height={51}
          width={36}
          alt="shopee-logo"
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
            ส่วนลดจากร้านค้า
          </label>
          <input
            type="number"
            id="discount"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="mb-6 flex flex-1 flex-col">
            <label htmlFor="shipping" className="label">
              ค่าส่ง
            </label>
            <input
              type="number"
              id="shipping"
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label
              htmlFor="isFreeShipping"
              className="group relative flex select-none flex-row items-center gap-2"
            >
              <input
                type="checkbox"
                id="isFreeShipping"
                className="peer sr-only"
                onChange={handleToggle}
              />
              <div className="h-10 w-24 rounded-full border-2 border-black bg-primary/5 px-1 transition-all peer-checked:bg-primary"></div>
              <div className="absolute flex h-8 w-12 translate-x-1 translate-y-0 items-center justify-center rounded-full border-2 border-black bg-secondary transition-all duration-200 ease-in peer-checked:translate-x-11">
                <p className="text-center font-medium text-white group-has-[:checked]:hidden">
                  ปิด
                </p>
                <p className="hidden text-center font-medium text-white group-has-[:checked]:block">
                  เปิด
                </p>
              </div>
              <p className="text-lg font-normal">ส่งฟรีจากผู้ขาย</p>
            </label>
          </div>
        </div>
        <Line />

        <div className="mb-6 flex flex-col">
          <label htmlFor="shopeeCoin" className="label text-amber-600">
            Shopee Coin
          </label>
          <input
            type="number"
            id="shopeeCoin"
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="mb-6 flex flex-col">
          <label htmlFor="shopeeDiscount" className="label text-amber-600">
            ส่วนลดจาก Shopee
          </label>
          <input
            type="number"
            id="shopeeDiscount"
            onChange={handleChange}
            className="input"
          />
        </div>
        <CampaignSelectorShopee
          onSelect={(v: any) =>
            setFormData((prev: any) => ({ ...prev, program: v }))
          }
        />
        <DropdownPaymentShopee
          onSelect={(v: any) =>
            setFormData((prev: any) => ({ ...prev, payment: v }))
          }
        />
        <DropdownCategoryShopee
          onSelect={(v: any) =>
            setFormData((prev: any) => ({ ...prev, category: v }))
          }
        />
        <hr className="my-6" />
        <button type="submit" className="btn-submit">
          คำนวณ
        </button>
      </form>
    </div>
  );
}
