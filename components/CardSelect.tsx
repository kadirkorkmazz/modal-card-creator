import React from 'react';
import cardData from '../public/cardData.json';
import { MainContext, useContext } from '../components/utils/context';

function CardSelect(props: { activePage: number }) {
  const { selectedCard, setSelectedCard } = useContext(MainContext);
  let pageLast = props.activePage * 12;
  let pageFirst = pageLast - 12;

  return (
    <div className="cardSelect mt-8 gap-8 flex flex-wrap">
      {cardData.map((item, index) => {
        if (index + 1 <= pageFirst || index + 1 > pageLast) return null;

        return (
          <div
            key={item.id}
            className={`bg-neutral-100 w-[17.25rem] h-[12.5rem] border rounded-xl border-gray-200 flex items-center justify-center relative group  ${
              item.customizable ? 'hover:cursor-pointer' : 'cursor-not-allowed '
            }`}
            onClick={() => {
              if (item.customizable) {
                setSelectedCard(item.id);
              }
            }}
          >
            <div
              className={`absolute bg-opacity-40 w-full h-full items-center justify-center rounded-xl text-violet-600 font-sans font-semibold tracking-tight flex  group-hover:visible transition-all ${
                selectedCard === item.id ? 'visible' : 'invisible'
              } ${item.customizable ? 'bg-violet-600' : 'bg-gray-900 '} `}
              onClick={() => {
                if (item.customizable) {
                  setSelectedCard(item.id);
                }
              }}
            >
              <button
                className={` w-[165px] h-12 rounded-xl shadow-[0px_5px_10px_2px_rgba(125, 74, 234, 0.27)] ${
                  !item.customizable
                    ? 'bg-violet-500 text-gray-300 hover:cursor-not-allowed'
                    : 'bg-white hover:cursor-pointer'
                }`}
              >
                {selectedCard === item.id
                  ? 'Selected'
                  : item.customizable
                  ? 'Select Template'
                  : 'Coming Soon'}
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
