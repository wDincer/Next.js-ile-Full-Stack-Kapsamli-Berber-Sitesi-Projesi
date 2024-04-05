import React from "react";
import { Logo } from "./ui/Logo";
import { FaUser, FaSearch, FaShoppingCart  } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-[4.75rem] bg-secondary">
      <div className="text-white flex justify-between container mx-auto items-center h-full" >
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex">
            <li className="px-[15px] py-[20px] hover:text-primary cursor-pointer">
              <a href="">ANA SAYFA</a>
            </li>
            <li className="px-[15px] py-[20px] hover:text-primary cursor-pointer">
              <a href="">ÜRÜNLERİMİZ</a>
            </li>
            <li className="px-[15px] py-[20px] hover:text-primary cursor-pointer">
              <a href="">HAKKIMIZDA</a>
            </li>
            <li className="px-[15px] py-[20px] hover:text-primary cursor-pointer">
              <a href="">RANDEVU AL</a>
            </li>
          </ul>
        </nav>
        <div>
            <ul className="flex items-center gap-x-7" >
                <li className="hover:text-primary cursor-pointer">
                    <a href="">
                        <FaUser />
                    </a>
                </li>
                <li className="hover:text-primary cursor-pointer">
                    <a href="">
                        <FaShoppingCart />
                    </a>
                </li>
                <li className="hover:text-primary cursor-pointer">
                    <a href="">
                        <FaSearch />
                    </a>
                </li>
                <a href="">
                    <button  class="btn">SİPARİŞ VER</button>
                </a>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
