import React from "react";
import { LazadaProvider } from "@/contexts/LazadaContext";
import FormLazada from "@/components/lazada/FormLazada";
import ResultLazada from "@/components/lazada/ResultLazada";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "คิดราคา Lazada",
  description: "คิดราคา Lazada คิดราคาช้อปปิ้งออนไลน์ เห็นกำไรก่อนขายจริง",
};

const Home = () => {
  return (
    <>
      <LazadaProvider>
        <FormLazada />
        <ResultLazada />
      </LazadaProvider>
    </>
  );
};

export default Home;
