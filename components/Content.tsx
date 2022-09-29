import React from 'react';
import Image from 'next/image';
import { MainContext, useContext } from '../components/utils/context';

function Content() {
  const { contentInputs, setContentInputs } = useContext(MainContext);

  return (
    <div className="mt-16 mb-7">
      <div className=" flex items-center gap-4 mb-4 pb-4">
        <span className="font-semibold bg-gray-200 w-9 h-9 flex justify-center items-center rounded-full">
          3
        </span>
        <h3 className=" text-lg font-semibold">Content</h3>
      </div>
      <div className="font-sans flex flex-col gap-4 mb-8">
        <p className=" text-sm">Edit Your Content</p>
        <input
          placeholder="Sign Up"
          className="border h-9 w-[378px] border-gray-300 focus:border-violet-600 focus:outline-none rounded-lg px-3"
          value={contentInputs.contentInput1}
          onChange={(e) => {
            setContentInputs({
              ...contentInputs,
              contentInput1: e.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Enter your email"
          className="border h-9 w-[378px] border-gray-300 focus:border-violet-600 focus:outline-none rounded-lg px-3"
          value={contentInputs.contentInput2}
          onChange={(e) => {
            setContentInputs({
              ...contentInputs,
              contentInput2: e.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Sign Up"
          className="border h-9 w-[378px] border-gray-300 focus:border-violet-600 focus:outline-none rounded-lg px-3"
          value={contentInputs.contentInput3}
          onChange={(e) => {
            setContentInputs({
              ...contentInputs,
              contentInput3: e.target.value,
            });
          }}
        ></input>
        <input
          placeholder="By singning up, you agree to Privacy Policy"
          className="border h-9 w-[378px] border-gray-300 focus:border-violet-600 focus:outline-none rounded-lg px-3"
          value={contentInputs.contentInput4}
          onChange={(e) => {
            setContentInputs({
              ...contentInputs,
              contentInput4: e.target.value,
            });
          }}
        ></input>
      </div>
      <div>
        <p className="text-sm mb-4">Upload image</p>
        <div className="uploadLogo w-[378px] h-[178px] border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center gap-5 ">
          <div className=" w-[72px] h-20 flex-shrink-0 flex items-center justify-center relative">
            <Image src="/content-upload-image-mockimage.png" layout="fill" />
          </div>
          <div className="font-sans text-sm flex items-center gap-1">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5125 4.53C14.0025 1.9425 11.73 0 9 0C6.8325 0 4.95 1.23 4.0125 3.03C1.755 3.27 0 5.1825 0 7.5C0 9.9825 2.0175 12 4.5 12H14.25C16.32 12 18 10.32 18 8.25C18 6.27 16.4625 4.665 14.5125 4.53ZM14.25 10.5H4.5C2.8425 10.5 1.5 9.1575 1.5 7.5C1.5 5.9625 2.6475 4.68 4.17 4.5225L4.9725 4.44L5.3475 3.7275C6.06 2.355 7.455 1.5 9 1.5C10.965 1.5 12.66 2.895 13.0425 4.8225L13.2675 5.9475L14.415 6.03C15.585 6.105 16.5 7.0875 16.5 8.25C16.5 9.4875 15.4875 10.5 14.25 10.5ZM6 6.75H7.9125V9H10.0875V6.75H12L9 3.75L6 6.75Z"
                fill="black"
              />
            </svg>
            <p>
              Drop your image here or{' '}
              <u className="text-violet-600 hover:cursor-pointer hover:opacity-80">
                upload
              </u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
