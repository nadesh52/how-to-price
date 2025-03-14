"use client";
import React from "react";
import { useShopee } from "@/contexts/ShopeeContext";
import { getServiceFee } from "@/utils/shopeeFormula";

export default function ResultShopee() {
  const { shopeeItem } = useShopee();
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

  const baseVatPct = 0.0321;

  const sellerPrice = Number(price) - Number(discount);
  const buyerPrice =
    sellerPrice - shopeeDiscount - shopeeCoin + Number(shipping);
  const sellerWithShipping = Number(sellerPrice) + Number(shipping);

  const saleTransactionFee = sellerPrice * Number(category.saleValue / 100);
  const transactionFee = sellerWithShipping * (payment.value / 100);
  const serviceFee = getServiceFee(sellerPrice, program, category);
  const sumFee = saleTransactionFee + transactionFee + serviceFee.result;

  const finalPrice = sellerWithShipping - sumFee;
  const profit = finalPrice - cost;

  return (
    <section className="result">
      <table className="w-full border-collapse">
        <tbody>
          {/* Regular Price */}
          <tr className="text-blue-600 hover:bg-blue-50">
            <td className="p-2">ราคาสินค้าปกติ</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{price > 0 ? price : null}</td>
          </tr>

          {/* Store Discount */}
          <tr className="text-blue-800 hover:bg-blue-50">
            <td className="p-2">ส่วนลดจากร้านค้า</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{discount > 0 ? discount : null}</td>
          </tr>

          {/* Seller Price After Discount */}
          <tr className="border-b border-gray-300 font-normal underline underline-offset-2 hover:bg-gray-100">
            <td className="p-2">ราคาขายหลังหักส่วนลด</td>
            <td className="p-2 text-right">{`(${price}-${discount})`}</td>
            <td className="p-2 text-right">
              {sellerPrice > 0 ? sellerPrice : null}
            </td>
          </tr>

          {/* Shipping Paid by Buyer */}
          <tr className="text-blue-600 hover:bg-blue-50">
            <td className="p-2">ค่าส่ง (ผู้ซื้อจ่าย)</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{shipping > 0 ? shipping : null}</td>
          </tr>

          {/* Shopee Discount */}
          <tr className="text-amber-600 hover:bg-amber-50">
            <td className="p-2">ส่วนลดจาก Shopee</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">
              {shopeeDiscount > 0 ? shopeeDiscount : null}
            </td>
          </tr>

          {/* Shopee Coin Discount */}
          <tr className="text-amber-600 hover:bg-amber-50">
            <td className="p-2">ส่วนลดจาก Shopee Coin</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">
              {shopeeCoin > 0 ? shopeeCoin : null}
            </td>
          </tr>

          {/* Final Buyer Price */}
          <tr className="border-b border-gray-300 font-normal underline underline-offset-2 hover:bg-gray-100">
            <td className="p-2">ยอดที่ผู้ซื้อต้องจ่าย</td>
            <td className="p-2 text-right">{`(${sellerPrice}+${shipping}-${shopeeDiscount}-${shopeeCoin})`}</td>
            <td className="p-2 text-right">
              {buyerPrice > 0 ? buyerPrice : null}
            </td>
          </tr>

          {/* Sale Transaction Fee */}
          <tr className="text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมการขาย/คอมมิชชั่น (vat 7%)</td>
            <td className="p-2 text-right">{`(${sellerPrice}*${category.saleValue}%)`}</td>
            <td className="p-2 text-right">
              {saleTransactionFee > 0
                ? saleTransactionFee.toFixed(2)
                : "เลือกประเภทสินค้า"}
            </td>
          </tr>

          {/* Transaction Fee */}
          <tr className="text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมธุรกรรม (vat 7%)</td>
            <td className="p-2 text-right">{`(${sellerWithShipping}*${payment.value}%)`}</td>
            <td className="p-2 text-right">
              {transactionFee > 0 ? transactionFee.toFixed(2) : null}
            </td>
          </tr>

          {/* Service Fee */}
          <tr className="text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมบริการ (vat 7%)</td>
            <td className="p-2 text-right">
              {serviceFee.result > 0
                ? `(${sellerWithShipping}*${serviceFee.pct * 100}%)`
                : ""}
            </td>
            <td className="p-2 text-right">
              {serviceFee.result > 0 ? serviceFee.result.toFixed(2) : "ไม่มี"}
            </td>
          </tr>

          {/* Final Price for Seller */}
          <tr className="border-b border-gray-300 font-normal hover:bg-gray-100">
            <td className="p-2">ยอดเงินที่ร้านค้าจะได้รับ</td>
            <td className="p-2 text-right">
              ({sellerWithShipping}-{saleTransactionFee.toFixed(2)}-
              {serviceFee.result.toFixed(2)}-{transactionFee.toFixed(2)})
            </td>
            <td className="p-2 text-right">
              {finalPrice > 0 ? finalPrice.toFixed(2) : null}
            </td>
          </tr>

          {/* Profit */}
          <tr className="text-lg font-medium text-emerald-600 hover:bg-emerald-50">
            <td className="p-2">กำไรที่จะได้จากการขาย</td>
            <td className="p-2 text-right">
              ({finalPrice.toFixed(2)}-{cost})
            </td>
            <td className="p-2 text-right">
              {profit > 0 ? profit.toFixed(2) : null}
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="my-3" />
      <div className="text-xs">
        <p>*ทศนิยมจะถูกปัดเศษอัตโนมัติ</p>
      </div>
    </section>
  );
}
