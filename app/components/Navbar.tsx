"use client"; // Mark this as a Client Component

import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  // State to toggle navbar visibility
  const [show, setShow] = useState(true);

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="bg-transparent flex flex-row fixed w-full m-0">
      {/* Github logo in the top-right corner */}
      <a
        href="https://github.com/lewi0239"
        className="fixed top-4 right-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/git-logo.png"
          alt="Github logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </a>

      {/* Sticky Navbar */}
      <nav
        className={`${
          show ? "flex" : "hidden"
        } sticky top-0 bg-transparent text-white p-4 items-center justify-between z-10 mb-5`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row md:space-y-0 md:space-x-6 text-black">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-500">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle Button (Hamburger Menu) */}
      <div className="mb-2 flex align-middle">
        <Image
          src={
            show ? "/images/hamburger-open.svg" : "/images/hamburger-closed.svg"
          }
          alt="Toggle menu"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={toggleNavbar}
        />
      </div>
    </div>
  );
};

export default NavBar;
