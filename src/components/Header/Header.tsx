"use client";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaChevronDown, FaBars } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useAuthContext } from "../../lib/Context/AuthContext";

export default function Header() {
  const { authState } = useAuthContext();
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    if (isDark) document.body.classList.add("dark");
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full flex flex-col md:flex-row items-center justify-between p-4 md:px-20 shadow-lg dark:border-gray-700 z-20 ${
        darkMode ? "bg-[#2E2B2B]" : "bg-white"
      } dark:bg-[#2E2B2B]`}
    >
      {/* Logo and Hamburger Icon Row */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div>
          <Link href="/">
            {" "}
            <img
              src="/images/logo-original.png"
              alt="Social Hipper Logo"
              className="h-7 md:w-auto object-contain"
            />
          </Link>
        </div>
        <div className="relative w-3/4 ml-8 hidden md:block">
          <Input
            type="text"
            placeholder="Search Profile"
            className="w-full"
            variant="default"
          />
          <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-[#FF4500] rounded-l-full">
            <RiSearch2Line className="w-5 h-5 text-white" />
          </div>
        </div>
        <button
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          className="text-gray-800 dark:text-gray-300 md:hidden"
        >
          <FaBars />
        </button>
      </div>
      {/* Search and Dark Mode Toggle for Mobile */}
      <div className="flex items-center w-full mt-4 md:hidden space-x-2">
        <div className="relative w-3/4">
          <Input type="text" placeholder="Search Profile" className="w-full" />
          <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-[#FF4500] rounded-l-full">
            <RiSearch2Line className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="w-1/4 flex justify-center">
          <input
            type="checkbox"
            className="checkbox hidden"
            id="checkbox"
            checked={darkMode}
            onChange={handleToggle}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <span className="ball">
              {darkMode ? (
                <FaMoon className="icon text-white" />
              ) : (
                <FaSun className="icon text-yellow-500" />
              )}
            </span>
          </label>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="/top-contributors"
          className={`hover:text-red-500 ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Top Contributors
        </Link>
        <a
          href="#pricing"
          className={`hover:text-red-500 ${
            darkMode ? "text-gray-300" : "text-gray-800"
          } border-r border-gray-200 dark:border-gray-700 pr-4`}
        >
          Pricing
        </a>
        <div className="flex items-center relative">
          <select
            className={`bg-transparent outline-none appearance-none px-1 pr-1 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            } hover:text-red-500 cursor-pointer`}
          >
            <option value="EN">EN</option>
            <option value="HIN">HINDI</option>
          </select>
          <FaChevronDown
            className={`absolute right-1 pointer-events-none ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          />
        </div>
        {/* Dark Mode Toggle after Language Select */}
        <div className="ml-4">
          <input
            type="checkbox"
            className="checkbox hidden"
            id="checkbox-desktop"
            checked={darkMode}
            onChange={handleToggle}
          />
          <label htmlFor="checkbox-desktop" className="checkbox-label">
            <span className="ball">
              {darkMode ? (
                <FaMoon className="icon text-white" />
              ) : (
                <FaSun className="icon text-yellow-500" />
              )}
            </span>
          </label>
        </div>
        {authState.isSignedIn  ? (
          <UserButton />
        ) : (
          <Link href={"/signup"} className="hover:text-red-500">
            <Button variant="orange">Sign Up</Button>
          </Link>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-3/4 bg-black text-white p-6 transform transition-transform duration-300 ease-in-out md:hidden z-20">
          <button
            onClick={handleMenuToggle}
            aria-label="Close menu"
            className="text-gray-300 absolute top-4 right-4"
          >
            ✕
          </button>
          <nav className="flex flex-col space-y-4 mt-8">
            <Link href="/top-contributors" className="hover:text-gray-400">
              Top Contributors
            </Link>
            <a href="#pricing" className="hover:text-gray-400 border-b pb-2">
              Pricing
            </a>
            <div className="flex items-center relative">
              <select className="bg-transparent outline-none appearance-none pr-8 cursor-pointer text-white hover:text-gray-400">
                <option value="EN">EN</option>
                <option value="HIN">HINDI</option>
              </select>
              <FaChevronDown className="absolute right-2 text-gray-400" />
            </div>
            {authState.isSignedIn  ? (
              <UserButton />
            ) : (
              <Link href={"/signup"} className="hover:text-red-500">
                <Button variant="orange">Sign Up</Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
