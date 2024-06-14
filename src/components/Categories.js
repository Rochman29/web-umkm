import Image from "next/image";
import { Button } from "@headlessui/react";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-10 h-1/2">
        <div className="font-semiboldx font-sans text-5xl">Categories</div>
        <div className="font-sans text-xl w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        {/* <Button className="rounded bg-[#254336] py-2 px-4 text-sm text-white data-[hover]:bg-[#4c9776] data-[active]:bg-[#4c9776]">
          Shop All
        </Button> */}
      </div>
      <div className="flex flex-row justify-center items-start gap-8 h-1/2">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image src="/categories/pengeditan.png" width="200" height="200" />
          <p className="text-sm font-sans font-bold">Pengeditan</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <Link href="/pageKertas">
            <Image src="/categories/percetakan.png" width="200" height="200" />
          </Link>
          <p className="text-sm font-sans font-bold">Kertas</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <Link href="/pageAlatTulis">
            <Image src="/categories/alat-tulis.png" width="200" height="200" />
          </Link>
          <p className="text-sm font-sans font-bold">Alat Tulis</p>
        </div>
      </div>
    </div>
  );
}
