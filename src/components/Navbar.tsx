import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between bg-slate-500 sticky top-0 left-0 right-0">
      <div>
        <Link className=" font-bold text-lg " href="/">
          Logo
        </Link>
      </div>
      <div className="flex gap-4">
        <Link className=" font-bold text-lg" href="/users">
          Users
        </Link>
        <Link className=" font-bold text-lg" href="/posts">
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
