import React, { useState } from 'react';
import CardSelect from './CardSelect';

function ChooseYourTemplate() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div>
      <div className=" mt-7 pt-7 flex items-center gap-4">
        <span className="font-semibold bg-gray-200 w-9 h-9 flex justify-center items-center rounded-full">
          1
        </span>
        <h3 className=" text-lg font-semibold">Choose your template</h3>
      </div>
      <CardSelect activePage={activePage} />
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
  );
}

export default ChooseYourTemplate;
