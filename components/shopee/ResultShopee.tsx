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
    isFreeShipping,
  } = shopeeItem || {};

  const shopee = {
    cost: +cost || 0,
    price: +price || 0,
    discount: +discount || 0,
    shipping: +shipping || 0,
    shopeeDiscount: +shopeeDiscount || 0,
    shopeeCoin: +shopeeCoin || 0,
  };

  const salePrice = shopee.price - shopee.discount;

  const shippingPaidBySeller = isFreeShipping ? shopee.shipping : 0;
  const shippingPaidByBuyer = isFreeShipping ? 0 : shopee.shipping;
  const totalShipping = shippingPaidByBuyer - shippingPaidBySeller;

  const priceBuyerPays =
    salePrice + totalShipping - (shopee.shopeeDiscount + shopee.shopeeCoin);

  const saleTransactionFee = salePrice * Number(category.saleValue / 100);
  const transactionFee = salePrice * (payment.value / 100);
  const serviceFee = getServiceFee(salePrice, program, category);
  const sumFee = saleTransactionFee + transactionFee + serviceFee.result;

  const finalPrice = salePrice - shopee.shipping - sumFee;
  const profit = finalPrice - cost;

  console.log(totalShipping, shippingPaidByBuyer, shippingPaidBySeller);

  //const if free shipping coupon
  //edit ค่าส่ง (ผู้ซื้อจ่าย)		35

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
          <tr className="border-b border-gray-300 font-normal hover:bg-gray-100">
            <td className="p-2">ราคาขายหลังหักส่วนลด</td>
            <td className="p-2 text-right">{`(${price}-${shopee.discount})`}</td>
            <td className="p-2 text-right">
              {salePrice > 0 ? salePrice : null}
            </td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="p-2">ค่าส่งที่ชำระโดยผู้ขาย</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{shippingPaidBySeller}</td>
          </tr>

          <tr className="hover:bg-gray-100">
            <td className="p-2">ค่าส่งที่ชำระโดยผู้ซื้อ</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{shippingPaidByBuyer}</td>
          </tr>

          <tr className="border-b border-gray-300 font-normal hover:bg-gray-100">
            <td className="p-2">ค่าส่งทั้งหมด</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{totalShipping}</td>
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
          <tr className="border-b border-gray-300 font-normal hover:bg-gray-100">
            <td className="p-2">ยอดที่ผู้ซื้อต้องจ่าย</td>
            <td className="p-2 text-right">{`(${salePrice}${isFreeShipping ? "-" : "+"}${shipping}-${shopeeDiscount}-${shopeeCoin})`}</td>
            <td className="p-2 text-right">
              {priceBuyerPays > 0 ? priceBuyerPays : null}
            </td>
          </tr>

          {/* Sale Transaction Fee */}
          <tr className="text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมการขาย/คอมมิชชั่น (vat 7%)</td>
            <td className="p-2 text-right">{`(${salePrice}*${category.saleValue}%)`}</td>
            <td className="p-2 text-right">
              {saleTransactionFee > 0
                ? Math.round(saleTransactionFee)
                : "เลือกประเภทสินค้า"}
            </td>
          </tr>

          {/* Transaction Fee */}
          <tr className="text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมธุรกรรม (vat 7%)</td>
            <td className="p-2 text-right">{`(${salePrice}*${payment.value}%)`}</td>
            <td className="p-2 text-right">
              {transactionFee > 0 ? Math.round(transactionFee) : null}
            </td>
          </tr>

          {/* Service Fee */}
          <tr className="border-b border-gray-300 text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมบริการ (vat 7%)</td>
            <td className="p-2 text-right">
              {serviceFee.result > 0
                ? `(${salePrice}*${(serviceFee.pct * 100).toFixed(2)}%)`
                : ""}
            </td>
            <td className="p-2 text-right">
              {serviceFee.result > 0 ? serviceFee.result.toFixed(2) : "ไม่มี"}
            </td>
          </tr>

          {/* Final Price for Seller */}
          <tr className="border-b border-gray-300 font-normal hover:bg-gray-100">
            <td className="p-2">รายรับจากคำสั่งซื้อ</td>
            <td className="p-2 text-right">
              ({salePrice}
              {!isFreeShipping && "-"}
              {totalShipping}-{Math.round(saleTransactionFee)}-
              {Math.round(transactionFee)}-{Math.round(serviceFee.result)})
            </td>
            <td className="p-2 text-right">
              {finalPrice > 0 ? Math.round(finalPrice) : null}
            </td>
          </tr>

          {/* Profit */}
          <tr className="text-lg font-normal text-emerald-600 hover:bg-emerald-50">
            <td className="p-2">กำไรที่จะได้จากการขาย</td>
            <td className="p-2 text-right">
              ({Math.round(finalPrice)}-{cost})
            </td>
            <td className="p-2 text-right">
              {profit > 0 ? Math.round(profit) : null}
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
