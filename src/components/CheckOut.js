"use client";

import React, { useState } from "react";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCart,
  decrementCart,
  removeCart,
  updateCart,
} from "@/redux/features/cart-slice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function Checkout() {
  const [nama, setNama] = useState("");
  const [nomor, setNomor] = useState("");

  const dispatch = useDispatch();

  /**@type {Array<any>} */
  const cartItems = useAppSelector((state) => state.cartReducer);
  const tempCartItems = [
    {
      id: 1,
      nama: "Selempang Wisuda",
      imagePatch: "/products/wisuda.png",
      price: 25000,
      quntity: 1,
    },
    {
      id: 2,
      nama: "ID Card",
      imagePatch: "/products/idcard.png",
      price: 8000,
      quntity: 1,
    },
    {
      id: 3,
      nama: "Lanyard",
      imagePatch: "/products/lanyard.png",
      price: 12000,
      quntity: 1,
    },
    {
      id: 4,
      nama: "Gantungan Kunci",
      imagePatch: "/products/spidol.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 5,
      nama: "Piala",
      imagePatch: "/products/piala.png",
      price: 20000,
      quntity: 1,
    },
    {
      id: 6,
      nama: "Foto",
      imagePatch: "/products/foto.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 7,
      nama: "Brosur",
      imagePatch: "/products/brosur.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 8,
      nama: "Plakat",
      imagePatch: "/products/plakat.png",
      price: 20000,
      quntity: 1,
    },
    {
      id: 9,
      nama: "Kartu Nama",
      imagePatch: "/products/kartunama.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 10,
      nama: "Sertifikat",
      imagePatch: "/products/sertif.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 11,
      nama: "Medali",
      imagePatch: "/products/medali.png",
      price: 15000,
      quntity: 1,
    },
    {
      id: 12,
      nama: "Jilid",
      imagePatch: "/products/jilid.png",
      price: 25000,
      quntity: 1,
    },
    {
      id: 13,
      nama: "Kertas HVS",
      imagePatch: "/products/kertashvs.png",
      price: 500,
      quntity: 1,
    },
    {
      id: 14,
      nama: "Kertas Asturo",
      imagePatch: "/products/kertasasturo.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 15,
      nama: "Kertas Karton",
      imagePatch: "/products/kertaskarton.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 16,
      nama: "Map Kertas",
      imagePatch: "/products/kertasmap.png",
      price: 2000,
      quntity: 1,
    },
    {
      id: 17,
      nama: "Buku Tulis Kecil",
      imagePatch: "/products/bukutuliskecil.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 18,
      nama: "Buku Tulis Kampus",
      imagePatch: "/products/bukutuliskampus.png",
      price: 7000,
      quntity: 1,
    },
    {
      id: 19,
      nama: "Isi Binder Bergaris B5",
      imagePatch: "/products/isibindergarisb5.png",
      price: 20000,
      quntity: 1,
    },
    {
      id: 20,
      nama: "Isi Binder Polos B5",
      imagePatch: "/products/isibinderpolosb5.png",
      price: 20000,
      quntity: 1,
    },
    {
      id: 21,
      nama: "Pensil 2B",
      imagePatch: "/products/pensil2b.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 22,
      nama: "Pulpen Joyko Hitam",
      imagePatch: "/products/pulpenjoykohitam.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 23,
      nama: "Pulpen Kenko Hitam",
      imagePatch: "/products/pulpenkenkohitam.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 24,
      nama: "Spidol Papan Tulis",
      imagePatch: "/products/spidol.png",
      price: 7000,
      quntity: 1,
    },
    {
      id: 25,
      nama: "Crayon",
      imagePatch: "/products/crayon.png",
      price: 40000,
      quntity: 1,
    },
    {
      id: 26,
      nama: "Kapur",
      imagePatch: "/products/kapur.png",
      price: 4000,
      quntity: 1,
    },
    {
      id: 27,
      nama: "Pensil Warna",
      imagePatch: "/products/pensilwarna.png",
      price: 15000,
      quntity: 1,
    },
    {
      id: 28,
      nama: "Spidol Kecil",
      imagePatch: "/products/spidolkecil.png",
      price: 25000,
      quntity: 1,
    },
    {
      id: 29,
      nama: "Penghapus",
      imagePatch: "/products/penghapus.png",
      price: 3000,
      quntity: 1,
    },
    {
      id: 30,
      nama: "Penggaris Butterfly",
      imagePatch: "/products/penggarisplastik.png",
      price: 3000,
      quntity: 1,
    },
    {
      id: 31,
      nama: "Stabilo",
      imagePatch: "/products/stabilo.png",
      price: 5000,
      quntity: 1,
    },
    {
      id: 32,
      nama: "Correction Tape",
      imagePatch: "/products/tipx.png",
      price: 7000,
      quntity: 1,
    },
  ];

  useEffect(() => {
    const link = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;
    const script = document.createElement("script");
    script.src = link;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // const [cartItems, setCartItems] = React.useState([]);
  useEffect(() => {
    // setCartItems(tempCartItems);
    console.log(cartItems);
  }, []);

  const checkout = async () => {
    if (cartItems.length == 0) {
      toast.error("Ups, keranjangmu masih kosong!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    if (nama == "" && nomor == "") {
      toast.error("Isi terlebih dahulu data nya ya", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    const id = crypto.randomUUID();
    const products = cartItems.map((item) => ({
      id: item.id,
      price: item.price,
      quantity: item.quantity,
      name: item.name,
    }));
    const gross_amount = cartItems.reduce(
      (prev, curr) => curr.price * curr.quantity + prev,
      0
    );
    const body = {
      customer: {
        name: nama,
        phone: nomor,
      },
      id,
      products,
      gross_amount,
    };
    const response = await fetch("/api/tokenizer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data);
    window.snap.pay(data.token, {
      onSuccess: function (result) {
        console.log(result);
        redirect("/pageBerhasil");
        dispatch(updateCart([]));
      },
      onError: function (result) {
        console.log(result);
      },
    });
  };

  return (
    <main className="bg-[#DAD3BE]">
      <div className="flex flex-col gap-3 px-3 md:px-20 pb-10">
        {cartItems.length === 0 ? (
          <h1 className="font-semibold font-sans text-3xl px-5 md:px-20 mb-20 flex items-center">
            Keranjangmu Kosong
          </h1>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={item.name}
                className="flex flex-row justify-between border-2 p-1 md:p-2 border-white"
              >
                <div className="flex flex-row gap-2 md:gap-4 items-start">
                  <Image
                    src={item.imagePatch}
                    className="bg-white grid-rows-[1/3] grid-cols-[1/2] h-full"
                    width={150}
                    height={150}
                  />
                  <p className="text-lg md:text-xl font-sans font-bold text-left">
                    {item.name}
                  </p>
                </div>
                <div className="flex flex-row gap-5">
                  <Button
                    className="flex items-end"
                    onClick={() => {
                      removeCart(item, cartItems, dispatch);
                    }}
                  >
                    <Image
                      className="2-2"
                      src="/rubbish-bin.png"
                      width="20"
                      height="20"
                    />
                  </Button>
                  <div className="flex flex-col justify-between">
                    <div className="text-lg md:text-2xl font-sans text-left pt-16 pr-2">
                      Rp. {item.price * item.quantity}
                    </div>
                    <div className="flex flex-row justify-around items-center">
                      <div className="flex flex-row justify-around items-center">
                        <Button
                          onClick={() => {
                            decrementCart(item, cartItems, dispatch);
                          }}
                        >
                          <Image src="/minus.png" width="22" height="22" />
                        </Button>
                      </div>
                      <div className="text-sm font-sans font-bold text-center">
                        {item.quantity}
                      </div>
                      <div className="flex flex-row justify-around items-center">
                        <Button
                          onClick={() => {
                            addToCart(item, cartItems, dispatch);
                            console.log(cartItems);
                          }}
                        >
                          <Image src="/plus.png" width="20" height="20" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="mt-6 flex flex-col">
        <div className="flex items-center px-3 md:px-20 pb-10 uppercase">
          <div className="flex items-center justify-end border-t-2 gap-14 w-full border-black">
            <p className="text-xl font-sans font-semibold text-left">
              Subtotal
            </p>
            <p className="text-xl font-sans font-semibold text-left">
              Rp.{" "}
              {cartItems.reduce(
                (prev, curr) => curr.price * curr.quantity + prev,
                0
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between px-3 md:px-20 pb-10 -mt-10 gap-10">
          <div className="pt-4 md:pt-0">
            <p className="font-semibold font-sans text-xl mb-5">
              Silahkan isi data diri sebelum melakukan pesanan
            </p>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  value={nama}
                  onInput={(e) => setNama(e.target.value)}
                ></input>
              </div>
              <div className="grid grid-cols-2">
                <label>Nomor Telepon</label>
                <input
                  type="number"
                  value={nomor}
                  onInput={(e) => setNomor(e.target.value)}
                ></input>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center md:justify-end">
            <Button onClick={checkout} className="button-checkout">
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer newestOnTop />
    </main>
  );
}
