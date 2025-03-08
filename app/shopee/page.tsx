import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ResultBox from "./components/ResultBox";
import { ShopeeProvider } from "./contexts/ShopeeContext";

const Home = () => {
  return (
    <ShopeeProvider>
      <section className="h-[1200px]x mb-10">
        <Navbar />
        <div className="mx-auto max-w-screen-md border-4 border-black bg-white p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-center text-2xl font-medium text-indigo-600">
            ตั้งราคา Shopee
          </h2>
          <hr className="my-6" />
          <Form />
          <ResultBox />
          <div className="text-xs">
            <p>ทศนิยมจะถูกปัดเศษอัตโนมัติ</p>
          </div>
        </div>
      </section>
    </ShopeeProvider>
  );
};

export default Home;
