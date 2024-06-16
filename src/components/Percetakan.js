import { Button } from "@headlessui/react";
import Image from "next/image";
import { ProductsPercetakan } from "./Products";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { addToCart, updateCart } from "@/redux/features/cart-slice";
import { useEffect } from "react";

export default function Percetakan() {
  const dispatch = useDispatch();
  const cartArray = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    console.log("cartArray", cartArray);
  }, [cartArray]);
  return (
    <main id="percetakan" className="bg-[#DAD3BE]">
      <div className="font-semiboldx font-sans text-5xl px-20 h-60 flex items-center">
        Percetakan
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center px-20 pb-10">
        {ProductsPercetakan.map((product, index) => (
          <div className="bg-white flex flex-col justify-between relative">
            <Image
              src={product.imagePatch}
              className="bg-white grid-rows-[1/3] grid-cols-[1/2]"
              width="200"
              height="200"
            ></Image>
            <p className="text-sm font-sans font-bold text-left px-2">
              {product.name}
            </p>
            <div className="px-2">
              <div className="py-2">
                <p className="text-sm font-sans text-left">
                  Rp. {product.price}
                </p>
              </div>
              <div className="flex absolute z-10 right-1 bottom-1">
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
