import React from "react";
import FormTiktok from "@/components/tiktok/FormTiktok";
import ResultTiktok from "@/components/tiktok/ResultTiktok";
import { TiktokProvider } from "@/contexts/TiktokContext";

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
