import React from 'react';
import LanguageSelector from './utils/LanguageSelector';
import { MainContext, useContext } from '../components/utils/context';

function TargetingRules() {
  const { targetingRules, setTargetingRules } = useContext(MainContext);

  return (
    <div className=" mt-16">
      <div className=" flex items-center gap-4 mb-4 pb-4">
        <span className="font-semibold bg-gray-200 w-9 h-9 flex justify-center items-center rounded-full">
          4
        </span>
        <h3 className="text-lg font-semibold">Targeting Rules</h3>
      </div>

      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">Visitor Device</h3>
        <label
          htmlFor="small-toggle1"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle1"
            className="sr-only peer"
            checked={targetingRules.visitorDevice}
            onChange={(e) => {
              setTargetingRules({
                ...targetingRules,
                visitorDevice: e.target.checked,
              });
            }}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>

      <div
        className={`flex items-center gap-5 ${
          !targetingRules.visitorDevice
            ? 'pointer-events-none text-gray-400'
            : ''
        }`}
      >
        <div
          className="w-[179px] h-12 bg-neutral-100 rounded-xl flex items-center p-4 
        "
        >
          <input
            disabled={!targetingRules.visitorDevice}
            id="desktopCheckbox"
            type="checkbox"
            className=" w-4 h-4  accent-violet-600 mr-2.5 peer cursor-pointer "
            name="visitorDeviceType"
            checked={targetingRules.visitorDeviceType === 'desktop'}
            onChange={() => {
              setTargetingRules({
                ...targetingRules,
                visitorDeviceType: 'desktop',
              });
            }}
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="peer peer-checked:text-violet-600 cursor-pointer"
          >
            <path
              d="M15 14.5C15.825 14.5 16.5 13.825 16.5 13V3.5C16.5 2.675 15.825 2 15 2H3C2.175 2 1.5 2.675 1.5 3.5V13C1.5 13.825 2.175 14.5 3 14.5H0V16H18V14.5H15ZM3 3.5H15V13H3V3.5Z"
              fill={`${
                !targetingRules.visitorDevice ? 'gray' : 'currentColor'
              }`}
            />
          </svg>
          <label
            htmlFor="desktopCheckbox"
            className="ml-1.5 text-sm hover:cursor-pointer"
          >
            Desktop
          </label>
        </div>
        <div className="w-[179px] h-12 bg-neutral-100 rounded-xl flex items-center p-4">
          <input
            disabled={!targetingRules.visitorDevice}
            id="mobileCheckbox"
            type="checkbox"
            className=" w-4 h-4  accent-violet-600 mr-2.5 peer cursor-pointer"
            name="visitorDeviceType"
            checked={targetingRules.visitorDeviceType === 'mobile'}
            onChange={() => {
              setTargetingRules({
                ...targetingRules,
                visitorDeviceType: 'mobile',
              });
            }}
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="peer peer-checked:text-violet-600 cursor-pointer"
          >
            <path
              d="M12.75 0.7575L5.25 0.75C4.425 0.75 3.75 1.425 3.75 2.25V15.75C3.75 16.575 4.425 17.25 5.25 17.25H12.75C13.575 17.25 14.25 16.575 14.25 15.75V2.25C14.25 1.425 13.575 0.7575 12.75 0.7575ZM12.75 14.25H5.25V3.75H12.75V14.25Z"
              fill={`${
                !targetingRules.visitorDevice ? 'gray' : 'currentColor'
              }`}
            />
          </svg>
          <label
            htmlFor="mobileCheckbox"
            className="ml-1.5 text-sm cursor-pointer"
          >
            Mobile
          </label>
        </div>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">After X Second</h3>
        <label
          htmlFor="small-toggle2"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle2"
            className="sr-only peer"
            checked={targetingRules.afterSecond}
            onChange={(e) => {
              setTargetingRules({
                ...targetingRules,
                afterSecond: e.target.checked,
              });
            }}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
      <div>
        <input
          disabled={!targetingRules.afterSecond}
          className="w-[378px] h-9 border rounded-lg border-gray-300 px-3 py-2 text-sm disabled:text-gray-400"
          type="number"
          value={targetingRules.afterSecondValue}
          onChange={(e) => {
            setTargetingRules({
              ...targetingRules,
              afterSecondValue: e.target.value,
            });
          }}
        ></input>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">After % Scroll</h3>
        <label
          htmlFor="small-toggle3"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle3"
            className="sr-only peer"
            checked={targetingRules.afterScroll}
            onChange={(e) => {
              setTargetingRules({
                ...targetingRules,
                afterScroll: e.target.checked,
              });
            }}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
      <div>
        <input
          disabled={!targetingRules.afterScroll}
          className="w-[378px] h-9 border rounded-lg border-gray-300 px-3 py-2 text-sm disabled:text-gray-400"
          type="number"
          value={targetingRules.afterScrollValue}
          onChange={(e) => {
            setTargetingRules({
              ...targetingRules,
              afterScrollValue: e.target.value,
            });
          }}
        ></input>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">Traffic Source</h3>
        <label
          htmlFor="small-toggle4"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle4"
            className="sr-only peer"
            checked={targetingRules.trafficSource}
            onChange={(e) => {
              setTargetingRules({
                ...targetingRules,
                trafficSource: e.target.checked,
              });
            }}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
      <div>
        <input
          disabled={!targetingRules.trafficSource}
          className="w-[378px] h-9 border rounded-lg border-gray-300 px-3 py-2 text-sm disabled:text-gray-400"
          placeholder="Enter your traffic source domain"
          value={targetingRules.trafficSourceValue}
          onChange={(e) => {
            setTargetingRules({
              ...targetingRules,
              trafficSourceValue: e.target.value,
            });
          }}
        ></input>
      </div>
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">Browser Language</h3>
        <label
          htmlFor="small-toggle5"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle5"
            className="sr-only peer"
            checked={targetingRules.browserLanguage}
            onChange={(e) => {
              setTargetingRules({
                ...targetingRules,
                browserLanguage: e.target.checked,
              });
            }}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
      <LanguageSelector />
      <div className="flex justify-between w-[378px] mt-4 pt-4 ">
        <h3 className=" text-sm font-semibold">Exit Intent Targeting</h3>
        <label
          htmlFor="small-toggle6"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="small-toggle6"
            className="sr-only peer"
            checked={targetingRules.exitIntentTargeting}
            onChange={(e) => {
              setTargetingRules({
                ...targetingRules,
                exitIntentTargeting: e.target.checked,
              });
            }}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-violet-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600"></div>
        </label>
      </div>
    </div>
  );
}

export default TargetingRules;
