import React from 'react';
import cardData from '../public/cardData.json';

function CardSelect() {
  return (
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
  );
}

export default CardSelect;
