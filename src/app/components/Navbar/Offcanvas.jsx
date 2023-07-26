"use client";

import { CustomContext } from "@/app/context/Context";
import NavbarItem from "../../Data";
import { IoClose } from "react-icons/io5";

const Offcanvas = () => {
  let { offcanvas, closeOffcanvas } = CustomContext();

  return (
    <div
      className={`fixed bottom-0 top-0 w-[200px] bg-gray-200 p-8 pt-14 transition-all duration-700 ease-in-out lg:hidden ${
        offcanvas ? "right-0" : "right-[-200px]"
      } z-50`}
    >
      <ul className="mb-8 space-y-4">
        {NavbarItem.NavbarItem.map((data) => {
          let { id, item } = data;

          return (
            <li
              key={id}
              className="text-[#6a6a6a] first:font-bold first:text-brand"
            >
              {item}
            </li>
          );
        })}
      </ul>

      <button className="mb-2 block w-full cursor-pointer rounded-lg border-2 border-brand p-2">
        Sign in
      </button>
      <button className="block w-full cursor-pointer rounded-lg bg-brand p-2 text-white">
        Sign up
      </button>

      <button
        className="absolute left-4 top-4"
        onClick={() => closeOffcanvas()}
      >
        <IoClose className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Offcanvas;
