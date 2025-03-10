import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ResultBox from "./components/ResultBox";
import { ShopeeProvider } from "./contexts/ShopeeContext";
import Image from "next/image";

const Home = () => {
  return (
    <ShopeeProvider>
      <section className="relative">
        {/* Background Layer (moves with scroll) */}

        {/* Content */}
        <Navbar />
        <div className="bg-background mx-auto max-w-screen-md rounded-[32px] border-2 border-black p-8 shadow-[0px_16px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between">
            <h2 className="text-primary text-left text-2xl font-medium">
              ตั้งราคา Shopee
            </h2>
            <Image
              src="/assets/images/shopee/shopee_logo.webp"
              height={51}
              width={36}
              alt="shopee-logo"
            />
          </div>
          <hr className="my-6 border-t-2 border-black" />
          <Form />
        </div>
        <div className="bg-background mx-auto mt-10 max-w-screen-md rounded-[32px] border-2 border-black p-8 shadow-[0px_16px_0px_0px_rgba(0,0,0,1)]">
          <ResultBox />
          <hr className="my-3" />
          <div className="text-xs">
            <p>ทศนิยมจะถูกปัดเศษอัตโนมัติ</p>
          </div>
        </div>
      </section>
    </ShopeeProvider>
  );
};

export default Home;
