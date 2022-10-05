import React from 'react';
import Image from 'next/image';
import { colorPicker, originSelector, scaleSize } from '../utils/funcs';
import { MainContext, useContext } from '../utils/context';

function Modal2(): JSX.Element {
  const { contentInputs, uploadedImage } = useContext(MainContext);

  return (
    <div
      className={` bg-white border relative rounded-xl shadow-[0_5px_30px_rgba(0,0,0,0.15)] ${scaleSize()} ${originSelector()} transition-all`}
    >
      <div className="w-[480px] h-[600px] flex flex-col">
        <div className="w-full h-[300px]rounded-xl ">
          <Image
            src={
              uploadedImage !== ''
                ? uploadedImage
                : `https://images.unsplash.com/photo-1587377838789-968194a7cc88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2358&q=80`
            }
            alt="card"
            width={480}
            height={300}
            objectFit="cover"
            className="rounded-t-xl"
          />
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
        <div className="w-full h-[300px] font-sans flex flex-col items-center overflow-hidden">
          <h3 className=" mt-10 text-3xl font-bold text-center mb-5">
            {contentInputs.contentInput1 !== ''
              ? contentInputs.contentInput1
              : 'Install local now'}
          </h3>
          <p className=" text-xl text-center">
            {contentInputs.contentInput2 !== ''
              ? contentInputs.contentInput2
              : 'We’ve gone native, try it!'}
          </p>
          <button
            className={`w-[350px] h-12 border mt-[30px] mb-[14px] rounded-lg ${colorPicker(
              'bg'
            )}`}
          >
            {contentInputs.contentInput3 !== ''
              ? contentInputs.contentInput3
              : 'Continue'}
          </button>
          <button
            className={`w-[350px] h-12 border rounded-lg text-black border-slate-300 hover:bg-gray-200`}
          >
            {contentInputs.contentInput4 !== ''
              ? contentInputs.contentInput4
              : 'Not now'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
