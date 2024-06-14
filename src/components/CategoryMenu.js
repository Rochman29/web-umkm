import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function CategoryMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Category</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <Button className="bg-[#b7b597] text-black hover:border-2 border-white w-32">
            Pengeditan
          </Button>
        </DropdownItem>
        <DropdownItem key="copy">
          <Button className="bg-[#b7b597] text-black border-white w-32 hover:border-2">
            Alat Tulis
          </Button>
        </DropdownItem>
        <DropdownItem key="edit">
          <Button className="bg-[#b7b597] text-black border-white w-32 hover:border-2">
            Percetakan
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
