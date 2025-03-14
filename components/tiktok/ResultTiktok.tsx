"use client";
import { useTiktok } from "@/contexts/TiktokContext";
import { getCommissionFee } from "@/utils/tiktokFormula";
import React from "react";

export default function ResultTiktok() {
  const { tiktokItem } = useTiktok();
  const { category, cost, price, discount, shipping, tiktokDiscount } =
    tiktokItem;

  const baseVatPct = 0.0321;

  const sellerPrice = Number(price) - Number(discount);
  const sellerAfterShipping = Number(sellerPrice) + Number(shipping);
  const buyerPrice = sellerPrice - Number(tiktokDiscount) + Number(shipping);

  const commissionFee = sellerPrice * Number(category.saleValue / 100);
  const transactionFee = sellerAfterShipping * baseVatPct;
  const totalFee = commissionFee + transactionFee;

  const finalPrice = sellerAfterShipping - totalFee;
  const profit = finalPrice - Number(cost);

  return (
    <section className="result">
      <table className="w-full border-collapse">
        <tbody>
          {/* Normal Price */}
          <tr className="text-blue-600 hover:bg-blue-50">
            <td className="p-2">ราคาสินค้าปกติ</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{price > 0 ? price : null}</td>
          </tr>

          {/* Seller Discount */}
          <tr className="text-blue-800 hover:bg-blue-50">
            <td className="p-2">ส่วนลดผู้ขาย</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{discount > 0 ? discount : null}</td>
          </tr>

          {/* Seller Price after Discount */}
          <tr className="border-b border-gray-300 font-medium hover:bg-gray-100">
            <td className="p-2">ยอดรวมหลังหักส่วนลดผู้ขาย</td>
            <td className="p-2 text-right text-sm">
              ({price}-{discount})
            </td>
            <td className="p-2 text-right underline underline-offset-4">
              {sellerPrice > 0 ? sellerPrice : null}
            </td>
          </tr>

          {/* Shipping */}
          <tr className="text-blue-600 hover:bg-blue-50">
            <td className="p-2">ค่าจัดส่ง</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{shipping > 0 ? shipping : null}</td>
          </tr>

          {/* Tiktok Discount */}
          <tr className="text-amber-600 hover:bg-amber-50">
            <td className="p-2">ส่วนลดจาก Tiktok</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">
              {tiktokDiscount > 0 ? tiktokDiscount : null}
            </td>
          </tr>

          {/* Final Buyer Price */}
          <tr className="border-b border-gray-300 font-normal underline underline-offset-2 hover:bg-gray-100">
            <td className="p-2">ยอดที่ผู้ซื้อต้องจ่าย</td>
            <td className="p-2 text-right text-sm">
              {`(${sellerPrice}+${shipping}-${tiktokDiscount})`}
            </td>
            <td className="p-2 text-right">
              {buyerPrice > 0 ? buyerPrice : null}
            </td>
          </tr>

          {/* Commission Fee */}
          <tr className="text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าคอมมิชชั่น (vat 7%)</td>
            <td className="p-2 text-right text-sm">{`(${sellerPrice}*${((category.saleValue * 100) / (100 - 3)).toFixed(2)}%)`}</td>
            <td className="p-2 text-right">
              {commissionFee > 0 ? commissionFee.toFixed(2) : null}
            </td>
          </tr>

          {/* Transaction Fee */}
          <tr className="text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมคำสั่งซื้อ (vat 7%)</td>
            <td className="p-2 text-right text-sm">{`(${sellerAfterShipping}*${(baseVatPct * 100).toFixed(2)}%)`}</td>
            <td className="p-2 text-right">
              {transactionFee > 0 ? transactionFee.toFixed(2) : null}
            </td>
          </tr>

          {/* Final Price */}
          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="p-2">ยอดเงินที่ร้านค้าจะได้รับ</td>
            <td className="p-2 text-right text-sm">
              ({sellerPrice}-{commissionFee.toFixed(2)}-{transactionFee.toFixed(2)})
            </td>
            <td className="p-2 text-right">
              {finalPrice > 0 ? finalPrice.toFixed(2) : null}
            </td>
          </tr>

          {/* Profit */}
          <tr className="text-lg font-medium text-emerald-600 hover:bg-emerald-50">
            <td className="p-2">กำไรที่จะได้จากการขาย</td>
            <td className="p-2 text-right text-sm">
              {`(${finalPrice.toFixed(2)}-${cost})`}
            </td>
            <td className="p-2 text-right">{profit > 0 ? profit.toFixed(2) : null}</td>
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
