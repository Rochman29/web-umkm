import Image from "next/image";
import { Button } from "@headlessui/react";

export default function OurProduct() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-10 h-1/2">
        <div className="font-semiboldx font-sans text-5xl">Our Products</div>
        <div className="font-sans text-xl w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <Button className="rounded bg-[#254336] py-2 px-4 text-sm text-white data-[hover]:bg-[#4c9776] data-[active]:bg-[#4c9776]">
          Shop All
        </Button>
      </div>
      <div className="flex flex-row justify-center items-start gap-8 h-1/2">
        <div className="flex flex-col justify-center gap-2">
          <Image src="/product/map-kertas.png" width="200" height="200" />
          <p className="text-sm font-sans font-bold text-left">Map Kertas</p>
          <p className="text-sm font-sans text-left">Rp. 2000</p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Image src="/product/pulpen.png" width="200" height="200" />
          <p className="text-sm font-sans font-bold text-left">Pulpen</p>
          <p className="text-sm font-sans text-left">Rp. 5000</p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Image src="/product/jasa-print.png" width="200" height="200" />
          <p className="text-sm font-sans font-bold text-left">Jasa Print</p>
          <p className="text-sm font-sans text-left">Rp. 1000/lembar</p>
        </div>
      </div>
    </div>
  );
}
