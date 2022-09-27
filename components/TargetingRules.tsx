import React from 'react';

function TargetingRules() {
  return (
    <div className="mt-14 pt-14">
      <div className=" flex items-center gap-4 mb-4 pb-4">
        <span className="font-semibold bg-gray-200 w-9 h-9 flex justify-center items-center rounded-full">
          4
        </span>
        <h3 className=" text-lg font-semibold">Targeting Rules</h3>
      </div>

      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">Visitor Device</h3>
        <label
          htmlFor="small-toggle"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle"
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>

      <div className="flex items-center gap-5">
        <div className="w-[179px] h-12 bg-neutral-100 rounded-xl flex items-center p-4">
          <input
            type="checkbox"
            className=" w-4 h-4  accent-violet-600 mr-2.5 peer"
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="peer peer-checked:text-violet-600"
          >
            <path
              d="M15 14.5C15.825 14.5 16.5 13.825 16.5 13V3.5C16.5 2.675 15.825 2 15 2H3C2.175 2 1.5 2.675 1.5 3.5V13C1.5 13.825 2.175 14.5 3 14.5H0V16H18V14.5H15ZM3 3.5H15V13H3V3.5Z"
              fill="currentColor"
            />
          </svg>
          <p className="ml-1.5 text-sm">Desktop</p>
        </div>
        <div className="w-[179px] h-12 bg-neutral-100 rounded-xl flex items-center p-4">
          <input
            type="checkbox"
            className=" w-4 h-4  accent-violet-600 mr-2.5 peer"
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="peer peer-checked:text-violet-600"
          >
            <path
              d="M12.75 0.7575L5.25 0.75C4.425 0.75 3.75 1.425 3.75 2.25V15.75C3.75 16.575 4.425 17.25 5.25 17.25H12.75C13.575 17.25 14.25 16.575 14.25 15.75V2.25C14.25 1.425 13.575 0.7575 12.75 0.7575ZM12.75 14.25H5.25V3.75H12.75V14.25Z"
              fill="currentColor"
            />
          </svg>
          <p className="ml-1.5 text-sm">Mobile</p>
        </div>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">After X Second</h3>
        <label
          htmlFor="small-toggle"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle"
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
      <div>
        <input className="w-[378px] h-9 border rounded-lg border-gray-300 px-3 py-2 text-sm"></input>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">After % Scroll</h3>
        <label
          htmlFor="small-toggle"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle"
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
      <div>
        <input className="w-[378px] h-9 border rounded-lg border-gray-300 px-3 py-2 text-sm"></input>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">Traffic Source</h3>
        <label
          htmlFor="small-toggle"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle"
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
      <div>
        <input
          className="w-[378px] h-9 border rounded-lg border-gray-300 px-3 py-2 text-sm"
          placeholder="Enter your traffic source domain"
        ></input>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">Browser Language</h3>
        <label
          htmlFor="small-toggle"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle"
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
      <div className="flex flex-col gap-4">
        <select
          id="languages"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[378px] p-2.5 "
        >
          <option selected>Choose a country</option>
          <option value="US">English</option>
          <option value="TR">Turkish</option>
          <option value="FR">French</option>
          <option value="DE">German</option>
        </select>
        <select
          id="languages"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[378px] p-2.5 appearance-none "
        ></select>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">Exit Intent Targeting</h3>
        <label
          htmlFor="small-toggle"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle"
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
    </div>
  );
}

export default TargetingRules;
