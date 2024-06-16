"use client";

import AlatTulis from "@/components/AlatTulis";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kertas from "@/components/Kertas";
import Percetakan from "@/components/Percetakan";

export default function page() {
  return (
    <main className="bg-[#DAD3BE] scroll-smooth focus:scroll-auto">
      <header>
        <Header />
      </header>
      <div>
        <Percetakan />
      </div>
      <div>
        <Kertas />
      </div>
      <div>
        <AlatTulis />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
