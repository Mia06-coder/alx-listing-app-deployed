import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/constants";
import Button from "../common/Button";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="px-5 lg:px-10 xl:px-15 bg-white  w-full max-w-[1600px] m-auto  ">
      {/* Top Bar */}
      <div className="pt-4 pb-4 max-w-[1728px] mx-auto flex items-center gap-7 justify-between border-b border-b-[#ebebeb]">
        {/* Logo */}
        <div className="hidden md:block">
          <Image
            src="/assets/svg/ALX-LOGO-dark.svg"
            width="58"
            height="30"
            alt="Logo"
            className="w-auto h-auto"
          />
        </div>

        <form
          action=""
          method="POST"
          className="w-full max-w-185 bg-white border border-[#F6F6F6] rounded-full overflow-hidden shadow-sm  py-2 px-4"
        >
          {" "}
          <div className="flex items-center gap-2 justify-between">
            {" "}
            <div className="flex flex-col grow min-w-0">
              <p className=" md:hidden text-[#161117] font-quicksand text-xs font-medium ">
                Where to
              </p>
              <div className="flex md:flex items-center flex-nowrap md:divide-x md:divide-[#E9E9E9] w-full overflow-hidden">
                {/* Location */}
                <div className="pr-2  flex-1 md:flex-2 min-w-0">
                  <label
                    htmlFor="location"
                    className="hidden md:block text-[#161117] font-quicksand text-xs font-medium "
                  >
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Location"
                    required
                    className="block md:hidden text-[#BEBEBE] text-xs font-quicksand outline-none w-full"
                  />
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Search for destination"
                    required
                    className="hidden md:block text-[#BEBEBE] text-xs font-quicksand outline-none w-full"
                  />
                </div>
                <div className="bg-[#9C9C9C] w-[3px] h-[3px] rounded-full md:hidden"></div>
                {/* Date */}
                <div className="px-2  flex-1 block md:hidden min-w-0">
                  {/* ✅ Mobile: Single date range placeholder */}
                  <input
                    type="text"
                    placeholder="Add date"
                    required
                    className=" text-[#BEBEBE] text-xs font-quicksand outline-none w-full"
                  />
                </div>
                {/* Check-in */}
                <div className="px-2  hidden md:block flex-1 min-w-0">
                  <label
                    htmlFor="check-in"
                    className=" text-[#161117] font-quicksand text-xs font-medium block"
                  >
                    Check-in
                  </label>

                  <input
                    id="check-in"
                    name="check-in"
                    type="text"
                    placeholder="Add date"
                    required
                    className="text-[#BEBEBE] text-xs font-quicksand outline-none w-full"
                  />
                </div>
                {/* Check-out */}
                <div className="px-2  hidden md:block flex-1 min-w-0">
                  <label
                    htmlFor="check-out"
                    className="text-[#161117] font-quicksand text-xs font-medium block"
                  >
                    Check-out
                  </label>
                  <input
                    id="check-out"
                    name="check-out"
                    type="text"
                    placeholder="Add date"
                    required
                    className="text-[#BEBEBE] text-xs font-quicksand outline-none w-full"
                  />
                </div>
                <div className="bg-[#9C9C9C] w-[3px] h-[3px] rounded-full md:hidden"></div>
                {/* People */}
                <div className="px-2   flex-1 ">
                  <div>
                    <label
                      htmlFor="people"
                      className="hidden md:block text-[#161117] font-quicksand text-xs font-medium"
                    >
                      People
                    </label>
                    <input
                      id="people"
                      name="people"
                      type="number"
                      min="1"
                      placeholder="Add guest"
                      required
                      className="text-[#BEBEBE] text-xs font-quicksand outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className=" bg-[#FFA800] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shrink-0 "
              onClick={() => alert("Clicked")}
              type="submit"
            >
              <Image
                src="/assets/svg/Magnifier.svg"
                alt="Search"
                width="20"
                height="20"
              />
            </button>
          </div>
        </form>

        {/* Auth Buttons (desktop) */}
        <div className="hidden  xl:flex items-center gap-4">
          <Button
            label="Sign in"
            style=" rounded-[70px] bg-[#34967C] text-white text-sm"
            onClick={() => {
              alert("Clicked!!!");
            }}
          />
          <Button
            label="Sign up"
            style=" rounded-[70px] bg-transparent border border-[#ECECEC] text-black  text-sm"
            onClick={() => {
              alert("Clicked!!!");
            }}
          />
        </div>

        <div className="relative xl:hidden" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="bg-[#34967c]   flex items-center gap-2  rounded-full transition"
          >
            <Image
              src="/assets/svg/profile.svg"
              alt="User"
              width="46"
              height="46"
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-md z-50">
              <button className="block w-full text-left px-4 py-3 hover:bg-gray-100 font-quicksand">
                Sign In
              </button>
              <button className="block w-full text-left px-4 py-3 hover:bg-gray-100 font-quicksand">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Categories */}
      <nav className="pt-4 overflow-x-auto bg-white scrollbar-hide  border-b border-b-[#FDFDFD]">
        <ul className="flex items-center gap-6 whitespace-nowrap text-sm">
          {CATEGORIES.map(({ name, file }, idx) => (
            <li
              key={idx}
              className="pb-4 flex flex-col items-center gap-1 text-center text-gray-600 border-b-3 border-white hover:border-b-[#34967C] transition cursor-pointer min-w-[70px]"
            >
              <Link href="#" className="flex flex-col items-center gap-1">
                <Image
                  src={`/assets/svg/logos/${file}`}
                  alt={name}
                  width="34"
                  height="34"
                />
                <span className="text-xs font-quicksand">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
