"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kertas from "@/components/Kertas";

export default function page() {
  return (
    <div className="bg-[#DAD3BE] scroll-smooth focus:scroll-auto">
      <header>
        <Header />
      </header>
      <div className="font-semiboldx font-sans text-5xl px-20 h-60 flex items-center">
        Kertas
      </div>
      <div>
        <Kertas />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
