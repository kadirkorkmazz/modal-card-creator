import React from 'react';
import { MainContext, useContext } from '../components/utils/context';
import defaultLogo from '../public/defaultLogo.svg';
import UploadLogo from './utils/UploadLogo';

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

        <UploadLogo />
      </div>
    </div>
  );
}

export default Appearance;
