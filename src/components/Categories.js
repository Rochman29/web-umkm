import Image from "next/image";
import { Button } from "@headlessui/react";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-4">
      <div className="flex flex-col justify-center items-center gap-10 h-1/2 py-4">
        <div className="font-semiboldx font-sans text-5xl">Categories</div>
        <div className="font-sans text-xl w-2/3 text-center">
          Kami menyediakan berbagai macam produk yang terbagi menjadi 3 jenis
          kategori, yaitu Percetakan, Kertas, dan Alat Tulis
        </div>
      </div>
      <div className="grid grid-cols-1 md:flex md:flex-row justify-center items-start gap-8 h-1/2">
        <div className="flex flex-col justify-center items-center gap-2">
          <Link href="/pageShop/#percetakan">
            <Image src="/categories/pengeditan.png" width="200" height="200" />
          </Link>
          <p className="text-sm font-sans font-bold">Percetakan</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <Link href="/pageShop/#kertas">
            <Image src="/categories/percetakan.png" width="200" height="200" />
          </Link>
          <p className="text-sm font-sans font-bold">Kertas</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <Link href="/pageShop/#alattulis">
            <Image src="/categories/alat-tulis.png" width="200" height="200" />
          </Link>
          <p className="text-sm font-sans font-bold">Alat Tulis</p>
        </div>
      </div>
    </div>
  );
}
