import React from "react";
import { LazadaProvider } from "@/contexts/LazadaContext";
import FormLazada from "@/components/lazada/FormLazada";
import ResultLazada from "@/components/lazada/ResultLazada";

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
