import React from 'react';
import { MainContext, useContext } from '../components/utils/context';
import cardData from '../public/cardData.json';
import UploadImage from './utils/UploadImage';

function Content() {
  const { contentInputs, setContentInputs, selectedCard } =
    useContext(MainContext);

  const selectedCardAreas = cardData[selectedCard - 1].editableAreas;

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

        {selectedCardAreas &&
          selectedCardAreas.map((area, index) => {
            return (
              <input
                key={index}
                placeholder={area}
                className="border h-9 w-[378px] border-gray-300 focus:border-violet-600 focus:outline-none rounded-lg px-3"
                value={contentInputs[`contentInput${index + 1}`]}
                onChange={(e) => {
                  setContentInputs({
                    ...contentInputs,
                    [`contentInput${index + 1}`]: e.target.value,
                  });
                }}
              ></input>
            );
          })}
      </div>
      <div>
        <UploadImage />
      </div>
    </div>
  );
}

export default Content;
