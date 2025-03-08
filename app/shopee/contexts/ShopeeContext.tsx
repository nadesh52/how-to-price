"use client";
import React, { createContext, useContext, useState } from "react";

const initialFormData = {
  category: { title: "", saleValue: "" },
  payment: {title: '', value: ''},
  program: 0,
  cost: 0,
  price: 0,
  discount: 0,
  shipping: 0,
  shopeeDiscount: 0,
  shopeeCoin: 0,
};

export const ShopeeContext = createContext<any | undefined>(undefined);

export const ShopeeProvider = ({ children }: any) => {
  const [shopeeItem, setShopeeItem] = useState(initialFormData);

  return (
    <ShopeeContext.Provider value={{ shopeeItem, setShopeeItem }}>
      {children}
    </ShopeeContext.Provider>
  );
};

export const useShopee = () => {
  const context = useContext(ShopeeContext);
  if (!context) console.log("no useShopee");
  return context;
};
