"use client";
import React, { createContext, useContext, useState } from "react";

const initialFormData = {
  category: { title: "", saleValue: "" },
  cost: 0,
  price: 0,
  discount: 0,
  shipping: 0,
  lazadaDiscount: 0,
  shippingDiscount: 0,
};

export const LazadaContext = createContext<any | undefined>(undefined);

export const LazadaProvider = ({ children }: any) => {
  const [lazadaItem, setLazadaItem] = useState(initialFormData);

  return (
    <LazadaContext.Provider value={{ lazadaItem, setLazadaItem }}>
      {children}
    </LazadaContext.Provider>
  );
};

export const useLazada = () => {
  const context = useContext(LazadaContext);
  if (!context) console.log("no useLazada");
  return context;
};
