import React from "react";
import { FaSearch, FaUser, FaRegBookmark, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-8 justify-between items-center px-8 py-4 sticky top-0 bg-black z-50">
      <h1 className="text-2xl font-light tracking-[1rem] text-nowrap ">TANN TRIM</h1>
      <div className="flex gap-6 text-lg cursor-pointer">
        <FaSearch />
        <FaUser />
        <FaRegBookmark />
        <FaShoppingBag />
      </div>
    </nav>
  );
};

export default Navbar;
