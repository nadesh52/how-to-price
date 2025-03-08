import React from "react";

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-screen-md items-center py-8">
      <div className="mr-20">logo</div>
      <ul className="flex justify-center gap-8">
        <li>
          <a href="#" className="hover:text-white">
            shopee
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            lazada
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            tiktok
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
