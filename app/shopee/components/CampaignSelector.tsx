"use client";
import React from "react";
import Image from "next/image";

const CampaignSelector = ({ onSelect }: any) => {
  const handleChange = (e: any) => {
    onSelect(Number(e.target.value));
  };

  return (
    <div className="mb-6">
      <h4 className="label text-red-600">เข้าร่วมโปรแกรม ร้านโค้ดคุ้ม</h4>
      <div className="flex-colx flex select-none justify-between gap-2 text-sm">
        <div>
          <input
            type="radio"
            name="shopee"
            id="shopee0"
            value={0}
            defaultChecked
            className="peer sr-only"
            onChange={handleChange}
          />
          <label
            htmlFor="shopee0"
            className="radio"
          >
            <p>ไม่เข้าร่วม</p>
            <p className="text-xs">(ใช้ส่วนลดจาก Shopee)</p>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="shopee"
            id="shopee1"
            value={1}
            className="peer sr-only"
            onChange={handleChange}
          />
          <label
            htmlFor="shopee1"
            className="radio"
          >
            <Image
              src="/assets/images/shopee/camp1.png"
              width={65}
              height={25}
              alt="camp1"
            />
            <p>ส่งฟรี โค้ดคุ้ม</p>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="shopee"
            id="shopee2"
            value={2}
            className="peer sr-only"
            onChange={handleChange}
          />
          <label
            htmlFor="shopee2"
            className="radio"
          >
            <Image
              src="/assets/images/shopee/camp2.png"
              width={56}
              height={25}
              alt="camp2"
            />
            <p>ส่วดลด โค้ดคุ้ม</p>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="shopee"
            id="shopee3"
            value={3}
            className="peer sr-only"
            onChange={handleChange}
          />
          <label
            htmlFor="shopee3"
            className="radio"
          >
            <Image
              src="/assets/images/shopee/camp3.png"
              width={116}
              height={25}
              alt="camp3"
            />
            <p>ส่งฟรี + ส่วนลด โค้ดคุ้ม</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CampaignSelector;
