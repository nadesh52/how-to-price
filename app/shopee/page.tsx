import React from "react";
import FormShopee from "@/components/shopee/FormShopee";
import ResultShopee from "@/components/shopee/ResultShopee";
import { ShopeeProvider } from "@/contexts/ShopeeContext";

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
