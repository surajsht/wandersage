"use client";

import NavbarItem from "../../Data";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { CustomContext } from "@/app/context/Context";

const Navbar = () => {
  let { openOffcanvas } = CustomContext();

  return (
    <div className="container absolute left-0 right-0 top-9 flex items-center justify-between">
      <div className="cursor-pointer text-2xl	font-bold">
        Wander<span className="text-brand">Sage</span>
      </div>

      <div className="hidden items-center space-x-[36px] lg:flex">
        <ul className="flex items-center space-x-[24px]">
          {NavbarItem.NavbarItem.map((data) => {
            let { id, item } = data;

            return (
              <li
                key={id}
                className="cursor-pointer text-[#929292] first:font-semibold first:text-brand"
              >
                {item}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center space-x-[16px]">
          <button className="cursor-pointer rounded-lg border-2 border-brand px-[24px] py-[8px]">
            Sign in
          </button>
          <button className="cursor-pointer rounded-lg bg-brand px-[24px] py-[8px] text-white">
            Sign up
          </button>
        </div>
      </div>

      <button
        className="cursor-pointer rounded-md border-2 border-brand px-2 py-1 lg:hidden"
        onClick={() => openOffcanvas()}
      >
        <HiMiniBars3BottomRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Navbar;
