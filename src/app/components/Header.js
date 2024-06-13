"use clinet";

import Link from "next/link";
import CategoryMenu from "./CategoryMenu";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center border-b-2 border-solid border-white">
      <div className="flex-col w-full">
        {/* pembagian kolom div di header */}
        <div className="bg-[#254336] flex justify-around items-center w-full h-10 px-20 text-white">
          {/* ini div atur header yang atas */}
          <div>IDR</div>
          <div>FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.</div>
          <div>Support</div>
        </div>
        <div className="flex justify-between w-full px-20 h-14">
          {/* ini buat atur div header yang bawah */}

          <div className="flex justify-between items-center w-1/2">
            {/* ini buat atur div buat navbar yang kiri */}
            <Link href="/" className="font-bold font-serif text-2xl">
              KOPMA
            </Link>

            <CategoryMenu />

            <Link href="#about" className="text-base">
              About
            </Link>
            <Link href="#contact" className="text-base">
              Contact
            </Link>
          </div>
          <div className="flex justify-around items-center w-1/3">
            {/* ini div buat navbar yang kanan */}
            <div class="group">
              <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input placeholder="Search" type="search" class="input" />
            </div>
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
