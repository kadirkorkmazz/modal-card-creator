import React, { useState } from 'react';
import cardData from '../public/cardData.json';

function CardGeneratorPage() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className=" w-full ">
      <div className="pageTotal mt-16">
        <div className="mt-7 pt-7 mb-16">
          <h3 className="mb-4 font-semibold text-4xl">Modal Card Generator</h3>
          <p className="max-w-[28.75rem]">
            Measure your return on email marketing efforts easier and faster by
            using thebest online tools. Popupsmart is ready to help you build an
            efficient email list!
          </p>
        </div>
        <div className=" mt-7 pt-7 flex items-center gap-4">
          <span className="font-semibold bg-gray-200 w-9 h-9 flex justify-center items-center rounded-full">
            1
          </span>
          <h3 className=" text-lg font-semibold">Choose your template</h3>
        </div>
        <div className="cardSelect mt-8 gap-8 flex flex-wrap">
          {cardData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-neutral-100 w-[17.25rem] h-[12.5rem] border rounded-xl border-gray-200 flex items-center justify-center"
              >
                <img src={item.image} alt="card" />
              </div>
            );
          })}
        </div>
        <div className="p-[3px] mt-7 bg-neutral-100 w-[8.25rem] rounded-xl mb-7">
          {Array.apply(0, Array(3)).map((x, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setActivePage(i + 1);
                }}
                className={`w-[42px] h-[42px] rounded-[10px] text-sm font-semibold hover:bg-gray-50  ${
                  activePage === i + 1
                    ? 'bg-white text-black'
                    : 'text-neutral-500'
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardGeneratorPage;
