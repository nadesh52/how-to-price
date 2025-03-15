"use client";
import React from "react";
import Line from "@/components/shared/Line";
import { useLazada } from "@/contexts/LazadaContext";
import { getServiceFee } from "@/utils/lazadaFormula";

export default function ResultLazada() {
  const { lazadaItem } = useLazada();
  const {
    category,
    cost,
    price,
    discount,
    shipping,
    shippingSeller,
    shippingDiscount,
  } = lazadaItem;

  const baseVatPct = 0.0321;

  const totalPrice = Number(price); // ยอดรวมค่าสินค้า
  const sellerCoupon = Number(discount); // หักค่าคูปองจากผู้ขาย
  const shippingFromBuyer = Number(shipping);
  const shippingCoupon = Number(shippingDiscount); // คูปองส่วนลดการจัดส่ง
  const shippingPaidBySeller = Number(shippingSeller);

  const salePrice = totalPrice - sellerCoupon; // ราคาขาย
  const totalShippingCost =
    shippingPaidBySeller - shippingFromBuyer - shippingCoupon; // ค่าขนส่งที่ผู้ขายต้องชำระ

  const serviceFee =
    (totalPrice - sellerCoupon) * Number(category.saleValue / 100);

  const sumSaleServiceShipping =
    totalPrice - sellerCoupon - sellerCoupon - serviceFee;
  const sumPaidByBuyer = totalPrice - sellerCoupon + shippingFromBuyer;

  const transactionFee = sumPaidByBuyer * baseVatPct; // ค่าธรรมเนียมการชำระเงิน

  const finalPrice =
    totalPrice - sellerCoupon - transactionFee - serviceFee - totalShippingCost; // ยอดรวมทั้งหมด

  const profit = finalPrice - Number(cost); // กำไร

  console.log(
    totalShippingCost,
    shippingPaidBySeller,
    shippingFromBuyer,
    sellerCoupon,
  );

  return (
    <section className="result">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="text-blue-600 hover:bg-blue-50">
            <td className="p-2">ค่าสินค้า</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{totalPrice}</td>
          </tr>
          <tr className="text-blue-800 hover:bg-blue-50">
            <td className="p-2">คูปองจากผู้ขาย</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{sellerCoupon}</td>
          </tr>
          <tr className="font-normal hover:bg-gray-100">
            <td className="p-2">ราคาขาย</td>
            <td className="p-2 text-right text-sm">
              ({price}-{discount})
            </td>
            <td className="p-2 text-right">{salePrice}</td>
          </tr>

          <tr className="text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมมาร์เก็ตเพลส (vat 7%)</td>
            <td className="p-2 text-right text-sm">
              ({salePrice}*{category.saleValue}%)
            </td>
            <td className="p-2 text-right">{serviceFee.toFixed(2)}</td>
          </tr>

          <tr className="border-b border-gray-300 font-normal hover:bg-gray-100">
            <td className="p-2">ยอดรวมหลังหักคูปอง และค่าธรรมเนียมการขาย</td>
            <td className="p-2 text-right text-sm">
              ({salePrice}+{discount}+{serviceFee.toFixed(2)})
            </td>
            <td className="p-2 text-right">
              {sumSaleServiceShipping.toFixed(2)}
            </td>
          </tr>

          <tr className="text-blue-600 hover:bg-blue-50">
            <td className="p-2">ค่าส่งชำระโดยผู้ซื้อ</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{shipping}</td>
          </tr>

          <tr className="bg-gray-100 font-normal">
            <td className="p-2">รวมยอดที่ผู้ซื้อชำระ</td>
            <td className="p-2 text-right text-sm">
              ({salePrice}+{shipping})
            </td>
            <td className="p-2 text-right underline underline-offset-2">
              {sumPaidByBuyer}
            </td>
          </tr>

          <tr className="border-b border-gray-300 text-red-600 hover:bg-red-50">
            <td className="p-2">ค่าธรรมเนียมการขายสินค้า (vat 7%)</td>
            <td className="p-2 text-right text-sm">
              ({sumPaidByBuyer}*{(baseVatPct * 100).toFixed(2)}%)
            </td>
            <td className="p-2 text-right">{transactionFee.toFixed(2)}</td>
          </tr>

          <tr className="text-blue-600 hover:bg-blue-50">
            <td className="p-2">ค่าส่งชำระโดยผู้ขาย</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{shippingPaidBySeller}</td>
          </tr>

          <tr className="text-blue-600 hover:bg-blue-50">
            <td className="p-2">ค่าส่งชำระโดยผู้ซื้อ</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{shipping}</td>
          </tr>

          <tr className="text-amber-600 hover:bg-amber-50">
            <td className="p-2">คูปองส่วนลดค่าส่ง</td>
            <td className="p-2"></td>
            <td className="p-2 text-right">{shippingDiscount}</td>
          </tr>

          <tr className="border-b border-gray-300 bg-gray-100 font-normal">
            <td className="p-2">ค่าขนส่งสุทธิที่ผู้ขายต้องชำระ</td>
            <td className="p-2 text-right text-sm">
              ({shippingPaidBySeller}-{shippingFromBuyer}-{shippingCoupon})
            </td>
            <td className="p-2 text-right">{totalShippingCost}</td>
          </tr>

          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="p-2">ยอดเงินที่ร้านค้าจะได้รับ</td>
            <td className="p-2 text-right text-sm">
              ({totalPrice}-{sellerCoupon}-{serviceFee.toFixed(2)}-
              {transactionFee.toFixed(2)}-{totalShippingCost})
            </td>
            <td className="p-2 text-right">{finalPrice.toFixed(2)}</td>
          </tr>

          <tr className="text-lg font-normal text-emerald-600 hover:bg-emerald-50">
            <td className="p-2">กำไรที่จะได้จากการขาย</td>
            <td className="p-2 text-right text-sm">
              ({finalPrice.toFixed(2)}-{cost})
            </td>
            <td className="p-2 text-right underline underline-offset-2">
              {profit.toFixed(2)}
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
