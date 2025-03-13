"use client";
import Line from "@/components/shared/Line";
import { useTiktok } from "@/contexts/TiktokContext";
import {
  getCommissionFee,
  getSellerPrice,
  getTransactionFee,
} from "@/utils/tiktokFormula";
import React from "react";

export default function ResultTiktok() {
  const { tiktokItem } = useTiktok();
  const { category, cost, price, discount, shipping, tiktokDiscount } =
    tiktokItem;

  const sellerPrice = getSellerPrice(price, discount);
  const sellerAfterShipping = Number(sellerPrice) + Number(shipping);
  const buyerPrice =
    Number(sellerPrice) - Number(tiktokDiscount) + Number(shipping);
  const commissionFee = getCommissionFee(sellerPrice, category);
  const transactionFee = getTransactionFee(sellerAfterShipping);
  const sumFee = commissionFee + transactionFee;
  const finalPrice = sellerAfterShipping - sumFee;
  const profit = finalPrice - cost;

  return (
    <section className="result">
      <div className="space-y-1">
        <div className="flex justify-between text-blue-600 hover:bg-blue-50">
          <p>ราคาสินค้าปกติ</p>
          <p>{price > 0 ? price : null}</p>
        </div>

        <div className="flex justify-between text-blue-800 hover:bg-blue-50">
          <p>ส่วนลดผู้ขาย</p>
          <p>{discount > 0 ? discount : null}</p>
        </div>

        <div className="flex justify-between font-normal underline underline-offset-2 hover:bg-gray-100">
          <p>ยอดรวมหลังหักส่วนลดผู้ขาย</p>
          <p>{sellerPrice > 0 ? sellerPrice : null}</p>
        </div>

        <Line />

        <div className="flex justify-between text-blue-600 hover:bg-blue-50">
          <p>ค่าจัดส่ง</p>
          <p>{shipping > 0 ? shipping : null}</p>
        </div>

        <div className="flex justify-between text-amber-600 hover:bg-amber-50">
          <p>ส่วนลดจาก Tiktok</p>
          <p>{tiktokDiscount > 0 ? tiktokDiscount : null}</p>
        </div>

        <div className="flex justify-between font-normal underline underline-offset-2 hover:bg-gray-100">
          <p>ยอดที่ผู้ซื้อต้องจ่าย</p>
          <p>{buyerPrice > 0 ? buyerPrice : null}</p>
        </div>

        <Line />

        <div className="flex justify-between text-red-600 hover:bg-red-50">
          <p>ค่าคอมมิชชั่น</p>
          <p>{commissionFee > 0 ? commissionFee : null}</p>
        </div>

        <div className="flex justify-between text-red-600 hover:bg-red-50">
          <p>ค่าธรรมเนียมคำสั่งซื้อ</p>
          <p>{transactionFee > 0 ? transactionFee : null}</p>
        </div>

        <Line />

        <div className="flex justify-between font-normal hover:bg-gray-100">
          <p>ยอดเงินที่ร้านค้าจะได้รับ</p>
          <p>{finalPrice > 0 ? finalPrice : null}</p>
        </div>

        <div className="flex justify-between hover:bg-gray-100">
          <p>ราคาทุน</p>
          <p>{cost > 0 ? cost : null}</p>
        </div>

        <Line />

        <div className="flex justify-between text-lg font-medium text-emerald-600 hover:bg-emerald-50">
          <p>กำไรที่จะได้จากการขาย</p>
          <p>{profit > 0 ? profit : null}</p>
        </div>
      </div>

      <hr className="my-3" />
      <div className="text-xs">
        <p>*ทศนิยมจะถูกปัดเศษอัตโนมัติ</p>
      </div>
    </section>
  );
}
