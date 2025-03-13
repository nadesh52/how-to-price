"use client";
import React from "react";
import Line from "@/components/shared/Line";
import { useLazada } from "@/contexts/LazadaContext";
import { getServiceFee, getTransactionFee } from "@/utils/lazadaFormula";

export default function ResultLazada() {
  const { lazadaItem } = useLazada();
  const {
    category,
    cost,
    price,
    discount,
    shipping,
    lazadaDiscount,
    shippingDiscount,
  } = lazadaItem;

  const sellerPrice = Number(price) - Number(discount);
  const sellerAfterShipping =
    sellerPrice + Number(shipping) - Number(shippingDiscount);
  const buyerprice = sellerAfterShipping - Number(lazadaDiscount);
  const serviceFee = getServiceFee(sellerPrice, category);
  const transactionFee = getTransactionFee(sellerAfterShipping);
  const sumFee = serviceFee + transactionFee;
  const finalPrice = sellerAfterShipping - sumFee;
  const profit = finalPrice - cost;

  return (
    <section className="result">
      <div className="space-y-1">
        <div className="flex justify-between text-blue-600 hover:bg-blue-50">
          <p>ค่าสินค้า</p>
          <p>{price}</p>
        </div>
        <div className="flex justify-between text-blue-800 hover:bg-blue-50">
          <p>คูปองจากผู้ขาย</p>
          <p>{discount}</p>
        </div>
        <div className="flex justify-between font-normal underline underline-offset-2 hover:bg-gray-100">
          <p>ราคาขาย</p>
          <p>{sellerPrice}</p>
        </div>
        <Line />
        <div className="flex justify-between text-blue-600 hover:bg-blue-50">
          <p>ค่าส่ง</p>
          <p>{shipping}</p>
        </div>
        <div className="flex justify-between text-amber-600 hover:bg-amber-50">
          <p>ส่วนลดจาก Lazada</p>
          <p>{lazadaDiscount}</p>
        </div>
        <div className="flex justify-between text-amber-600 hover:bg-amber-50">
          <p>คูปองส่วนลดค่าส่ง</p>
          <p>{shippingDiscount}</p>
        </div>
        <div className="flex justify-between font-normal underline underline-offset-2 hover:bg-gray-100">
          <p>รวมยอดที่ลูกค้าชำระ</p>
          <p>{buyerprice}</p>
        </div>
        <Line />
        <div className="flex justify-between text-red-600 hover:bg-red-50">
          <p>ค่าธรรมเนียมมาร์เก็ตเพลส</p>
          <p>{serviceFee}</p>
        </div>
        <div className="flex justify-between text-red-600 hover:bg-red-50">
          <p>ค่าธรรมเนียมการขายสินค้า</p>
          <p>{transactionFee}</p>
        </div>
        <Line />
        <div className="flex justify-between font-normal hover:bg-gray-100">
          <p>ยอดเงินที่ร้านค้าจะได้รับ</p>
          <p>0</p>
        </div>
        <div className="flex justify-between hover:bg-gray-100">
          <p>ราคาทุน</p>
          <p>{cost}</p>
        </div>
        <Line />
        <div className="flex justify-between text-lg font-medium text-emerald-600 hover:bg-emerald-50">
          <p>กำไรที่จะได้จากการขาย</p>
          <p>{profit}</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="text-xs">
        <p>*ทศนิยมจะถูกปัดเศษอัตโนมัติ</p>
      </div>
    </section>
  );
}
