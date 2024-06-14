"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckOut from "@/components/CheckOut";

export default function page() {
  return (
    <div className="bg-[#DAD3BE] scroll-smooth focus:scroll-auto">
      <div>
        <Header />
      </div>
      <div className="font-bold font-sans text-5xl px-20 h-60 flex items-center">
        Checkout
      </div>
      <div className="font-semibold font-sans text-3xl px-20 mb-20 flex items-center justify-between">
        Keranjangmu
        <div className="font-semibold font-sans text 3x1 px-4 text-left">
        Pembayaran
      </div>
      </div>
      <div className="">
        <CheckOut />
      </div>
      <Footer />
     </div>
  );
}
