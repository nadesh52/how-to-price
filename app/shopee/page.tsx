import React from "react";
import FormShopee from "@/components/shopee/FormShopee";
import ResultShopee from "@/components/shopee/ResultShopee";
import { ShopeeProvider } from "@/contexts/ShopeeContext";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "คิดราคา Shopee",
  description: "คิดราคา Shopee คิดราคาช้อปปิ้งออนไลน์ เห็นกำไรก่อนขายจริง",
};

const Home = () => {
  return (
    <>
      <ShopeeProvider>
        <FormShopee />
        <ResultShopee />
      </ShopeeProvider>
    </>
  );
};

export default Home;
