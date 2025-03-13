"use client";
import React, { createContext, useContext, useState } from "react";

const initialFormData = {
  category: { title: "", saleValue: "" },
  cost: 0,
  price: 0,
  discount: 0,
  shipping: 0,
  tiktokDiscount: 0,
};

export const TiktokContext = createContext<any | undefined>(undefined);

export const TiktokProvider = ({ children }: any) => {
  const [tiktokItem, setTiktokItem] = useState(initialFormData);

  return (
    <TiktokContext.Provider value={{ tiktokItem, setTiktokItem }}>
      {children}
    </TiktokContext.Provider>
  );
};

export const useTiktok = () => {
  const context = useContext(TiktokContext);
  if (!context) console.log("no useTiktok");
  return context;
};
