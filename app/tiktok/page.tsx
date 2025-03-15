import React from "react";
import FormTiktok from "@/components/tiktok/FormTiktok";
import ResultTiktok from "@/components/tiktok/ResultTiktok";
import { TiktokProvider } from "@/contexts/TiktokContext";  
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "คิดราคา Tiktok",
  description: "คิดราคา Tiktok คิดราคาช้อปปิ้งออนไลน์ เห็นกำไรก่อนขายจริง",
};

const Home = () => {
  return (
    <>
      <TiktokProvider>
        <FormTiktok />
        <ResultTiktok />
      </TiktokProvider>
    </>
  );
};

export default Home;
