import React from 'react';
import { MainContext, useContext } from '../components/utils/context';

function Appearance() {
  const { size, setSize, position, setPosition, color, setColor } =
    useContext(MainContext);

  let mapper = [1, 2, 3];
  const colors = [
    'bg-black',
    'bg-orange-400',
    'bg-neutral-500',
    'bg-gray-300',
    'bg-white',
    'bg-violet-600',
  ];

  return (
    <div className="flex items-start mt-16 mb-14">
      <div className="w-96 mr-20 ">
        <div className=" flex items-center gap-4 mb-4 pb-4">
          <span className="font-semibold bg-gray-200 w-9 h-9 flex justify-center items-center rounded-full">
            2
          </span>
          <h3 className=" text-lg font-semibold ">
            Appearance<span> </span>
            <span className="font-light tracking-wide">
              (Size, colors, logo)
            </span>
          </h3>
        </div>
        <p className=" text-sm font-sans my-4">Size</p>
        <div className="p-[3px]  bg-neutral-100 w-[292px] rounded-xl mb-5">
          {Array.apply(0, Array(3)).map((x, i) => {
            return (
              <button
                key={Math.random()}
                onClick={() => {
                  setSize(i + 1);
                }}
                className={`w-[95px] h-[42px] rounded-[10px] text-sm font-semibold hover:bg-gray-50  ${
                  size === i + 1 ? 'bg-white text-black' : 'text-neutral-500'
                }`}
              >
                {i === 0 ? 'Small' : i === 1 ? 'Medium' : 'Large'}
              </button>
            );
          })}
        </div>
        <p className=" text-sm font-sans my-4 mt-4 pt-4">Position</p>

        <div className="positionSelector mb-4 pb-4">
          {mapper.map((item, y) => (
            <div key={y}>
              {mapper.map((item, x) => (
                <button
                  key={x + 1 + y * 3}
                  value={x + 1 + y * 3}
                  className={`w-6 h-[15px] border mr-1 hover:bg-violet-50 ${
                    x + 1 + y * 3 === 1
                      ? ' rounded-tl'
                      : x + 1 + y * 3 === 3
                      ? ' rounded-tr'
                      : x + 1 + y * 3 === 7
                      ? ' rounded-bl'
                      : x + 1 + y * 3 === 9
                      ? ' rounded-br'
                      : ''
                  } ${
                    position === x + 1 + y * 3
                      ? 'bg-violet-600 border-none hover:bg-violet-700'
                      : 'bg-white'
                  }`}
                  onClick={(e) => {
                    setPosition(parseInt(e.currentTarget.value));
                  }}
                ></button>
              ))}
            </div>
          ))}
        </div>
        <p className=" text-sm font-sans my-4">Colors</p>
        <div className="colors flex gap-4 mb-4 pb-4 ">
          {colors.map((item, i) => (
            <button
              key={i}
              className={`w-[42px] h-[42px] rounded-[10px] border border-black border-opacity-30 hover:bg-opacity-80 hover:cursor-pointer ${item} ${
                color === item ? ' ring-4' : ''
              }`}
              onClick={() => {
                setColor(item);
              }}
            ></button>
          ))}
        </div>

        {/*

        <p className=" text-sm font-sans my-4">Upload Logo</p>
        <div className="uploadLogo w-[378px] h-[178px] border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center gap-5 ">
          <div className=" w-20 h-20 bg-violet-600 bg-opacity-10 rounded-xl flex-shrink-0 flex items-center justify-center"></div>
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

          */}
      </div>
    </div>
  );
}

export default Appearance;
