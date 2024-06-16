"use clinet";

import Link from "next/link";
import CategoryMenu from "./CategoryMenu";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";

export default function Header() {
  /**@type {Array<any>} */
  const cartItems = useAppSelector((state) => state.cartReducer);
  return (
    <header className="z-50 flex w-full justify-between items-center border-b-2 border-solid border-white fixed bg-[#DAD3BE]">
      {/* pembagian kolom div di header */}
      <div className="flex justify-between w-full px-1 md:px-20 h-14">
        {/* ini buat atur div header yang bawah */}

        <div className="flex justify-between items-center w-1/2 gap-3">
          {/* ini buat atur div buat navbar yang kiri */}
          <div className="font-bold font-serif text-base md:text-2xl">
            KOPMA
          </div>
          <Link href="/" className="text-base">
            Home
          </Link>

          <CategoryMenu />

          <Link href="#contact" className="text-base">
            Contact
          </Link>
        </div>
        <div className="flex justify-around items-center w-1/3">
          {/* ini div buat navbar yang kanan */}
          <div className="flex flex-row gap-2 items-center justify-center">
            <Link href="/pageCheckOut">
              <Image src="/shopping-cart.png" width="30" height="30"></Image>
            </Link>
            <p className="text-lg font-sans">{cartItems.length}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
