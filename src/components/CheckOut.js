import { Button } from "@headlessui/react";
import Image from "next/image";

export default function Checkout() {
    return (
        <main className="bg-[#DAD3BE]">
            <div className="grid grid-cols-4 gap-3 justify-items-center px-10 pb-10">
                <div className="flex item-center">
                    <Image
                        src="/products/pensil2b.png"
                        className="bg-white grid-rows-[1/3] grid-cols-[1/2] -ml-4"
                        width={150}
                        height={150}
                        alt="Pensil 2B"
                    />
                    <div className="ml-4 flex flex-col">
                        <p className="text-xl font-sans font-bold text-left">Pensil 2B</p>
                        <p className="text-sm font-sans font-bold text-left">Quantity: 1</p>
                        <p className="text-xl font-sans text-left">Rp. 5000</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center mb-10 px-20 pb-10 uppercase">
                    <div className="flex items-center border-b-2 border-black">
                        <p className="text-sm font-sans font-semibold text-left mr-80">Subtotal</p>
                        <p className="text-sm font-sans font-semibold text-left">Rp. 5000</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
