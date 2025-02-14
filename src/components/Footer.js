"use client";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2c3e50] text-white py-4 relative">
      <div className="flex justify-between max-w-6xl m-auto flex-wrap">
        <div className="flex w-full flex-wrap">
          <div className="flex-1 m-2.5 min-w-52">
            <h4 className="mb-5 text-lg font-semibold uppercase border-b-2 border-solid">
              Address
            </h4>
            <ul className="text-sm leading-6 list-none p-0 mb-[10px] text-white">
              <li className="mb-[10px]">
                <p>
                  Jl. Veteran No.8, Nagri Kaler, Kec. Purwakarta, Kabupaten
                  Purwakarta, Jawa Barat, 41115
                </p>
              </li>
              <li className="mb-[10px] underline">
                <Link
                  className="text-sm leading-6"
                  href="https://maps.app.goo.gl/h7o7ycys6JGNUrJAA"
                >
                  Lihat ke Google Maps
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 m-2.5 min-w-52">
            <h4 className="mb-5 text-lg font-semibold uppercase border-b-2 border-solid">
              Open Hours
            </h4>
            <p className="text-sm leading-6">
              Senin - Jum&lsquo;at : 07.00 - 17.00
            </p>
            <p className="text-sm leading-6">Sabtu - Minggu : Tutup</p>
          </div>
          <div className="flex-1 m-2.5 min-w-52">
            <h4 className="mb-5 text-lg font-semibold uppercase border-b-2 border-solid">
              Online Support
            </h4>
            <p>(+62) 81288655512 - Yayat Hidayat </p>
          </div>
        </div>
      </div>
      <div className="text-center py-5 px-0 bg-[#DAD3BE] mt-5">
        <p className="text-black">
          &copy; 2024 KELOMPOK 1 REKAYASA PERANGKAT LUNAK 4B PSTI. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
