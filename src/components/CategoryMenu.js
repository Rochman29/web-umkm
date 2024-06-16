import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function CategoryMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Category</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <Link href="/pageShop/#percetakan">
            <Button className="bg-[#b7b597] text-black hover:border-2 border-white w-32">
              Percetakan
            </Button>
          </Link>
        </DropdownItem>
        <DropdownItem key="copy">
          <Link href="/pageShop/#kertas">
            <Button className="bg-[#b7b597] text-black border-white w-32 hover:border-2">
              Kertas
            </Button>
          </Link>
        </DropdownItem>
        <DropdownItem key="edit">
          <Link href="/pageShop/#alattulis">
            <Button className="bg-[#b7b597] text-black border-white w-32 hover:border-2">
              Alat Tulis
            </Button>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
