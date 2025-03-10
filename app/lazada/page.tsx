import Image from 'next/image'
import React from 'react'
import Navbar from '../shopee/components/Navbar'
import Form from './components/form'

const page = () => {
  return (
    <section className="relative">
        {/* Background Layer (moves with scroll) */}

        {/* Content */}
        <Navbar />
        <div className="bg-background mx-auto max-w-screen-md rounded-[32px] border-2 border-black p-8 shadow-[0px_16px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between">
            <h2 className="text-primary text-left text-2xl font-medium">
              ตั้งราคา Lazada
            </h2>
            <Image
              src="/assets/images/lazada/lazada_logo.png"
              height={51}
              width={51}
              alt="lazada-logo"
            />
          </div>
          <hr className="my-6 border-t-2 border-black" />
          <Form />
        </div>
      </section>
  )
}

export default page