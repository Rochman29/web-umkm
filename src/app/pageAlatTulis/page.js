"use client";

import AlatTulis from "@/components/AlatTulis";
import Header from "../../components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="bg-[#DAD3BE] scroll-smooth focus:scroll-auto">
      <header>
        <Header />
      </header>
      <div className="font-semiboldx font-sans text-5xl px-20 h-60 flex items-center">
        Alat Tulis
      </div>
      <div className="">
        <AlatTulis />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
