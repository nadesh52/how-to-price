"use client";
import React, { useState } from "react";
import { useShopee } from "../contexts/ShopeeContext";
import CampaignSelector from "./CampaignSelector";
import DropdownCategories from "./DropdownCategories";
import DropdownPayment from "./DropdownPayment";

const Form = () => {
  const { setShopeeItem } = useShopee();
  const [formData, setFormData] = useState<any>({
    category: { title: "", saleValue: "" },
    payment: { title: "ชำระปกติ", value: 3 },
    program: 0,
    cost: 0,
    price: 0,
    discount: 0,
    shipping: 0,
    shopeeDiscount: 0,
    shopeeCoin: 0,
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
    setShopeeItem(formData);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
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
        <div className="flex flex-row mb-4 justify-between">
          <div className="flex flex-col">
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

          <div className="flex flex-col">
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
        </div>
        <hr className="my-6" />

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
        <CampaignSelector
          onSelect={(v: any) =>
            setFormData((prev: any) => ({ ...prev, program: v }))
          }
        />
        <DropdownPayment
          onSelect={(v: any) =>
            setFormData((prev: any) => ({ ...prev, payment: v }))
          }
        />
        <DropdownCategories
          onSelect={(v: any) =>
            setFormData((prev: any) => ({ ...prev, category: v }))
          }
        />
        <hr className="my-6" />
        <button
          type="submit"
          className="bg-primary h-12 w-full rounded-lg border-2 border-black text-white transition-all hover:-translate-y-1 hover:shadow-[0px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          คำนวณ
        </button>
      </form>
    </section>
  );
};

export default Form;
