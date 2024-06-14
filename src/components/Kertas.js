import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Kertas() {
  return (
    <main className="bg-[#DAD3BE]">
      <div className="grid grid-cols-4 gap-3 justify-items-center px-20 pb-10">
        <div className="bg-white">
          <Image
            src="/products/kertashvs.png"
            className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
            width="200"
            height="200"
          ></Image>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="py-2">
              <p className="text-sm font-sans font-bold text-left">
                Kertas HVS
              </p>
              <p className="text-sm font-sans text-left">Rp. 500</p>
            </div>
            <div className="flex gap-3">
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Image
            src="/products/kertasasturo.png"
            className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
            width="200"
            height="200"
          ></Image>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="py-2">
              <p className="text-sm font-sans font-bold text-left">
                Kertas Asturo
              </p>
              <p className="text-sm font-sans text-left">Rp. 5.000</p>
            </div>
            <div className="flex gap-3">
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Image
            src="/products/kertaskarton.png"
            className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
            width="200"
            height="200"
          ></Image>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="py-2">
              <p className="text-sm font-sans font-bold text-left">
                Kertas Karton
              </p>
              <p className="text-sm font-sans text-left">Rp. 5.000</p>
            </div>
            <div className="flex gap-3">
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Image
            src="/products/kertasmap.png"
            className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
            width="200"
            height="200"
          ></Image>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="py-2">
              <p className="text-sm font-sans font-bold text-left">
                Map Kertas
              </p>
              <p className="text-sm font-sans text-left">Rp. 2.000</p>
            </div>
            <div className="flex gap-3">
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Image
            src="/products/bukutuliskecil.png"
            className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
            width="200"
            height="200"
          ></Image>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="py-2">
              <p className="text-sm font-sans font-bold text-left">
                Buku Tulis Kecil
              </p>
              <p className="text-sm font-sans text-left">Rp. 5.000</p>
            </div>
            <div className="flex gap-3">
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Image
            src="/products/bukutuliskampus.png"
            className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
            width="200"
            height="200"
          ></Image>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="py-2">
              <p className="text-sm font-sans font-bold text-left">
                Buku Tulis Kampus
              </p>
              <p className="text-sm font-sans text-left">Rp. 7.000</p>
            </div>
            <div className="flex gap-3">
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Image
            src="/products/isibindergarisb5.png"
            className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
            width="200"
            height="200"
          ></Image>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="py-2">
              <p className="text-sm font-sans font-bold text-left">
                Isi Binder Bergaris B5
              </p>
              <p className="text-sm font-sans text-left">Rp. 20.000</p>
            </div>
            <div className="flex gap-3">
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Image
            src="/products/isibinderpolosb5.png"
            className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
            width="200"
            height="200"
          ></Image>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="py-2">
              <p className="text-sm font-sans font-bold text-left">
                Isi Binder Polos B5
              </p>
              <p className="text-sm font-sans text-left">Rp. 20.000</p>
            </div>
            <div className="flex gap-3">
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
