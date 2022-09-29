import React from 'react';
import Image from 'next/image';

function CardGeneratorModal() {
  return (
    <div className="w-[740px] h-[405px]  flex shadow-[0_5px_30px_rgba(0,0,0,0.15)] rounded-[30px] ">
      <div className="h-full w-[380px] rounded-l-[30px] flex flex-col gap-2.5 py-[3.75rem] px-10">
        <h5 className=" text-3xl font-semibold text-center">Sign Up</h5>
        <p className="text-center tracking-wider mb-5">Join new adventure</p>
        <input
          placeholder="Enter full name"
          className="border w-[300px] h-11 rounded-lg border-[#dddddd] py-2.5 px-3 hover:border-gray-400 "
        ></input>
        <input
          placeholder="Enter your email"
          className="border w-[300px] h-11 rounded-lg border-[#dddddd] py-2.5 px-3 hover:border-gray-400   mb-[5px] mt-[5px]"
        ></input>
        <button className=" w-[300px] h-11 bg-orange-400 text-white rounded-lg mb-[5px] hover:bg-opacity-90">
          Sign Up
        </button>
        <p className=" text-[10px] text-neutral-500">
          By signing up, you agree to{' '}
          <strong className="hover:cursor-pointer">Privacy Policy</strong>
        </p>
      </div>
      <div className="w-[360px] h-full relative ">
        <Image
          src="/cardGeneratePageModalImage.png"
          alt="card"
          layout="fill"
          className=" rounded-r-[30px]"
        />
        <button className="absolute right-4 top-4 bg-opacity-30 bg-black rounded-full w-9 h-9 text-white flex items-center justify-center hover:bg-opacity-50 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 opacity-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CardGeneratorModal;
