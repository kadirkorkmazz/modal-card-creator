import React from 'react';
import scaleSize, { colorPicker } from '../utils/funcs';
import { MainContext, useContext } from '../utils/context';
import cardData from '../../public/cardData.json';
import Image from 'next/image';

function Modal1() {
  const { contentInputs, selectedCard, uploadedLogo } = useContext(MainContext);

  const logo = cardData[selectedCard - 1].logo;

  return (
    <div
      className={`bg-white border relative py-10 px-16 flex flex-col items-center  font-sans rounded-xl shadow-[0_5px_30px_rgba(0,0,0,0.15)] ${scaleSize()}`}
    >
      <div
        className={` w-[90px] h-[90px] rounded-full ${colorPicker(
          'bg'
        )} flex items-center justify-center border relative`}
      >
        {uploadedLogo ? (
          <Image src={uploadedLogo} layout="fill" className=" rounded-full" />
        ) : (
          <svg
            width="36"
            height="44"
            viewBox="0 0 36 44"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 23.18L24.8 30.94L18 26.84L11.2 30.94L13 23.2L7 18.02L14.92 17.34L18 10.04L21.08 17.32L29 18L23 23.18ZM18 4.38L32 10.6V20C32 29.04 26.04 37.38 18 39.86C9.96 37.38 4 29.04 4 20V10.6L18 4.38ZM18 0L0 8V20C0 31.1 7.68 41.48 18 44C28.32 41.48 36 31.1 36 20V8L18 0Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>

      <h3 className=" text-3xl font-bold mt-7 mb-5">
        {contentInputs.contentInput1 !== ''
          ? contentInputs.contentInput1
          : 'Security Code'}
      </h3>
      <p className=" text-xl ">
        {contentInputs.contentInput2 !== ''
          ? contentInputs.contentInput2
          : 'This code expires in 24 hours'}
      </p>
      <input
        type="text"
        placeholder={
          contentInputs.contentInput3 !== ''
            ? contentInputs.contentInput3
            : 'Code'
        }
        className="border border-slate-300 rounded-md w-[350px] h-12 p-[15px] mt-10 mb-7 hover:border-slate-400"
      />
      <div className=" flex gap-[14px] ">
        <button
          className={`border w-[168px] h-12 border-slate-300 rounded-md font-medium hover:bg-slate-50`}
        >
          {contentInputs.contentInput4 !== ''
            ? contentInputs.contentInput4
            : 'Cancel'}
        </button>
        <button
          className={`border w-[168px] h-12 border-slate-300 rounded-md ${colorPicker(
            'bg'
          )} `}
        >
          {contentInputs.contentInput5 !== ''
            ? contentInputs.contentInput5
            : 'Continue'}
        </button>
      </div>
      <div className=" absolute right-5 top-5 hover:cursor-pointer hover:opacity-90">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

export default Modal1;
