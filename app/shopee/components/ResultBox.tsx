"use client";
import React, { useContext } from "react";
import { ShopeeContext } from "../contexts/ShopeeContext";
import {
  getSaleTransactionFee,
  getSellerPrice,
  getServiceFee,
  getTransactionFee,
} from "../utils/shopeeFormula";

const ResultBox = () => {
  const { shopeeItem } = useContext(ShopeeContext);
  const {
    category,
    payment,
    program,
    cost,
    price,
    discount,
    shipping,
    shopeeDiscount,
    shopeeCoin,
  } = shopeeItem || {};

  const sellerPrice = getSellerPrice(price, discount);
  const buyerPrice =
    sellerPrice - shopeeDiscount - shopeeCoin + Number(shipping);
  const sellerWithShipping = Number(sellerPrice) + Number(shipping);
  const saleTransactionFee = getSaleTransactionFee(sellerPrice, category);
  const transactionFee = getTransactionFee(sellerWithShipping, payment);
  const serviceFee = getServiceFee(sellerPrice, program, category);

  const sumFee = saleTransactionFee + transactionFee + serviceFee;
  const finalPrice = sellerWithShipping - sumFee;
  const profit = finalPrice - cost;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-blue-600">
        <p>ราคาสินค้าปกติ</p>
        <p>{price > 0 ? price : null}</p>
      </div>
      <div className="flex justify-between text-blue-800">
        <p>ส่วนลดจากร้านค้า</p>
        <p>{discount > 0 ? discount : null}</p>
      </div>
      <div className="flex justify-between font-normal underline underline-offset-2">
        <p>ราคาขายหลังหักส่วนลด</p>
        <p>{sellerPrice > 0 ? sellerPrice : null}</p>
      </div>
      <hr className="mb-2" />
      <div className="flex justify-between text-blue-600">
        <p>ค่าส่ง (ผู้ซื้อจ่าย)</p>
        <p>{shipping > 0 ? shipping : null}</p>
      </div>
      <div className="flex justify-between text-amber-600">
        <p>ส่วนลดจาก Shopee</p>
        <p>{shopeeDiscount > 0 ? shopeeDiscount : null}</p>
      </div>
      <div className="flex justify-between text-amber-600">
        <p>ส่วนลดจาก Shopee Coin</p>
        <p>{shopeeCoin > 0 ? shopeeCoin : null}</p>
      </div>
      <div className="flex justify-between font-normal underline underline-offset-2">
        <p>ยอดที่ผู้ซื้อต้องจ่าย</p>
        <p>{buyerPrice > 0 ? buyerPrice : null}</p>
      </div>
      <hr className="mb-2" />
      <div className="flex justify-between text-red-600">
        <p>ค่าธรรมเนียมการขาย/ค่าคอมมิชชั่น</p>
        <p>{saleTransactionFee > 0 ? saleTransactionFee : 'เลือกประเภทสินค้า'}</p>
      </div>
      <div className="flex justify-between text-red-600">
        <p>ค่าธรรมเนียมการทำธุรกรรม</p>
        <p>{transactionFee > 0 ? transactionFee : null}</p>
      </div>
      <div className="flex justify-between text-red-600">
        <p>ค่าธรรมเนียมบริการ</p>
        <p>{serviceFee > 0 ? serviceFee : 'ไม่มี'}</p>
      </div>
      <hr className="mb-2" />
      <div className="flex justify-between font-normal">
        <p>ยอดเงินที่ร้านค้าจะได้รับ</p>
        <p>{finalPrice > 0 ? finalPrice : null}</p>
      </div>
      <div className="flex justify-between text-xs">
        <p>ราคาทุน</p>
        <p>{cost > 0 ? cost : null}</p>
      </div>
      <hr className="mb-2" />
      <div className="flex justify-between text-lg font-medium text-emerald-600">
        <p>กำไรที่จะได้จากการขาย</p>
        <p>{profit > 0 ? profit : null}</p>
      </div>
    </div>
  );
};

export default ResultBox;
