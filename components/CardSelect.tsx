import React, { useState } from 'react';
import cardData from '../public/cardData.json';

function CardSelect(props: { activePage: number }) {
  let pageLast = props.activePage * 12;
  let pageFirst = pageLast - 12;
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <div className="cardSelect mt-8 gap-8 flex flex-wrap">
      {cardData.map((item, index) => {
        if (index + 1 <= pageFirst || index + 1 > pageLast) return null;

        return (
          <div
            key={item.id}
            className="bg-neutral-100 w-[17.25rem] h-[12.5rem] border rounded-xl border-gray-200 flex items-center justify-center relative group hover:cursor-pointer"
            onClick={() => {
              setSelectedCard(item.id);
            }}
          >
            <div className="absolute bg-violet-600 bg-opacity-40 w-full h-full items-center justify-center rounded-xl text-violet-600 font-sans font-semibold tracking-tight flex invisible group-hover:visible transition-all ">
              <button className="bg-white  w-[165px] h-12 rounded-xl shadow-[0px_5px_10px_2px_rgba(125, 74, 234, 0.27)]">
                Select Template
              </button>
            </div>
            <img src={item.image} alt="card" />
          </div>
        );
      })}
    </div>
  );
}

export default CardSelect;
