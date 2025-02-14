"use client";

import Categories from "../components/Categories";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#DAD3BE] scroll-smooth focus:scroll-auto">
      <header>
        <Header />
      </header>
      <main id="/" className="pt-16">
        <ImageGallery />
      </main>
      <div id="categories">
        <Categories />
      </div>
      {/* <div id="">
        <OurProduct />
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
