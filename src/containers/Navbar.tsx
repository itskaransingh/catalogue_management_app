import React from "react";
import { Select } from "../components";

const Navbar = () => {
  return (
    <nav className="navbar box-border border-b w-full p-3 justify-center border-base-300">
      <div className="navbar hidden lg:block text-2xl font-semibold">
        Catalogue
      </div>
      <Select />
    </nav>
  );
};

export default Navbar;
