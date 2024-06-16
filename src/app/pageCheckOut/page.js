"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckOut from "@/components/CheckOut";
import { useEffect } from "react";

export default function page() {
  return (
    <div className="bg-[#DAD3BE] scroll-smooth focus:scroll-auto">
      <div>
        <Header />
      </div>
      <div className="h-10"></div>
      <div className="font-bold font-sans text-5xl px-4 md:px-20 h-24 flex items-center">
        Keranjang
      </div>
      {/* <div className="font-semibold font-sans text-3xl px-20 mb-20 flex items-center justify-between">
        Keranjangmu
      </div> */}
      <div>
        <CheckOut />
      </div>
      <Footer />
    </div>
  );
}
