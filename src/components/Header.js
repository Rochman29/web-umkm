"use clinet";

import Link from "next/link";
import CategoryMenu from "./CategoryMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center border-b-2 border-solid border-white">
      <div className="flex-col w-full">
        {/* pembagian kolom div di header */}

        <div className="flex justify-between w-full px-20 h-14">
          {/* ini buat atur div header yang bawah */}

          <div className="flex justify-between items-center w-1/2">
            {/* ini buat atur div buat navbar yang kiri */}
            <div className="font-bold font-serif text-2xl">KOPMA</div>
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
            <Link href="/pageCheckOut">
              <Image src="/checkout.png" width="20" height="20"></Image>
            </Link>
            <button class="button" data-text="Awesome">
              <span class="actual-text">&nbsp;Login&nbsp;</span>
              <span aria-hidden="true" class="hover-text">
                &nbsp;Login&nbsp;
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
