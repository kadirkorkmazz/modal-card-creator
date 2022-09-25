import React from 'react';
import Image from 'next/image';
import logo from '../public/Logo.svg';

function Navbar() {
  return (
    <div className="container mx-auto font-sans">
      <div className="navbar flex items-center ">
        <div className="flex items-center w-2/12">
          <Image src={logo} width={50} height={50} alt="logo" />
          <h1 className="text-l font-bold pl-2">modal.cards</h1>
        </div>
        <div className="flex items-center justify-start w-8/12">
          <a href="#" className="flex items-center mx-5">
            <h1 className="text-l font-medium">Solutions</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 pl-1"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="mx-5">
            <h1 className="text-l font-medium">Product Tour</h1>
          </a>
          <a href="#" className="mx-5">
            <h1 className="text-l font-medium">Showcase</h1>
          </a>
          <a href="#" className="mx-5">
            <h1 className="text-l font-medium">Pricing</h1>
          </a>
        </div>
        <div className="w-2/12">
          <button className="p-2 m-1">Sign in</button>
          <button className="bg-purple-600 text-white text-l rounded-xl px-4 py-1 shadow-[0_3px_7px_1px_rgba(125,74,234,0.2)] ml-3">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
