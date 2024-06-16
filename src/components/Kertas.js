import { Button } from "@headlessui/react";
import Image from "next/image";
import { ProductsKertas } from "./Products";
import { addToCart } from "@/redux/features/cart-slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";

export default function Kertas() {
  const dispatch = useDispatch();
  const cartArray = useAppSelector((state) => state.cartReducer);
  return (
    <main id="kertas" className="bg-[#DAD3BE]">
      <div className="font-semiboldx font-sans text-5xl px-20 h-60 flex items-center">
        Kertas
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center px-20 pb-10">
        {ProductsKertas.map((product, index) => (
          <div
            key={product.name}
            className="bg-white flex flex-col justify-between relative"
          >
            <Image
              src={product.imagePatch}
              className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
              width="200"
              height="200"
            ></Image>
            <p className="text-sm font-sans font-bold text-left px-2">
              {product.name}
            </p>
            <div className="flex flex-row justify-between items-center px-2">
              <div className="py-2">
                <p className="text-sm font-sans text-left">
                  Rp. {product.price}
                </p>
              </div>
              <div className="flex absolute bottom-1 right-1 z-10">
                <Button onClick={() => addToCart(product, cartArray, dispatch)}>
                  <Image src="/plus.png" width="20" height="20"></Image>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
