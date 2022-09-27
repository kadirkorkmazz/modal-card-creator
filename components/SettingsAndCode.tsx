import React from 'react';

function SettingsAndCode() {
  return (
    <div className="mt-14">
      <div>
        <div className=" flex items-center gap-4 mb-4 pb-4">
          <span className="font-semibold bg-gray-200 w-9 h-9 flex justify-center items-center rounded-full">
            5
          </span>
          <h3 className=" text-lg font-semibold ">Settings and Code</h3>
        </div>
        <h3 className=" text-lg font-semibold tracking-tight mt-4 pt-3">
          Webhook to Send data
        </h3>
        <p className=" text-sm mt-4">Enter your Webbook URL</p>
        <p className=" text-xs mt-1">
          You can create a simple one with <strong>make.com</strong>
        </p>
        <input
          className="w-[378px] h-9 rounded-lg py-2 px-3 border mt-4"
          placeholder="Your Webhook URL"
        ></input>
        <div className="flex items-center mt-4">
          <input
            id="webhookCheckbox1"
            type="checkbox"
            className=" w-4 h-4  accent-violet-600 mr-2.5 peer"
          />
          <label htmlFor="webhookCheckbox1" className="text-sm">
            Send from submission
          </label>
        </div>
        <div className="flex items-center mt-4">
          <input
            id="webhookCheckbox2"
            type="checkbox"
            className=" w-4 h-4  accent-violet-600 mr-2.5 peer"
          />
          <label htmlFor="webhookCheckbox2" className="text-sm">
            Send click data
          </label>
        </div>
        <div className="flex flex-col">
          <button className="w-[184px] h-[60px] mb-8 bg-violet-600 rounded-xl text-lg text-white tracking-tight font-medium mt-12 shadow-[0px_5px_10px_2px_rgba(125,74,234,0.27)]">
            Get your Code
          </button>
          <div className=" w-[378px] h-[260px] bg-zinc-800 rounded-lg relative flex p-4">
            <textarea
              className=" w-full h-[188px] bg-transparent text-white text-xs font-roboto max-h-[188px]"
              value={`<script type="text/javascript" src="https://popupsmart.com/freechat.js"></script><script> window.start.init({ title: "Hi there :v:", message: "How may we help you? Just send us a message now to get assistance.", color: "#FA764F", position: "right", placeholder: "Enter your message", withText: "Write with", viaWhatsapp: "Or write us directly via Whatsapp", gty: "Go to your", awu: "and write us", connect: "Connect now", button: "Write us", device: "everywhere", services: [{"name":"whatsapp","content":null}]})aaa</script>`}
              onChange={() => {}}
            ></textarea>
            <button className=" bg-violet-600 w-[129px] h-[30px] text-sm font-medium rounded-[160px] shadow-[0px_5px_10px_2px_rgba(125, 74, 234, 0.27)] absolute right-2.5 bottom-2.5">
              Copy the code
            </button>
          </div>
          <div className="flex w-[378px] mt-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_108_10)">
                <path
                  d="M7.33301 4.66658H8.66634V5.99992H7.33301V4.66658ZM7.33301 7.33325H8.66634V11.3333H7.33301V7.33325ZM7.99967 1.33325C4.31967 1.33325 1.33301 4.31992 1.33301 7.99992C1.33301 11.6799 4.31967 14.6666 7.99967 14.6666C11.6797 14.6666 14.6663 11.6799 14.6663 7.99992C14.6663 4.31992 11.6797 1.33325 7.99967 1.33325ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.9399 2.66634 7.99992C2.66634 5.05992 5.05967 2.66659 7.99967 2.66659C10.9397 2.66659 13.333 5.05992 13.333 7.99992C13.333 10.9399 10.9397 13.3333 7.99967 13.3333Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_10">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="max-w-[331px] text-xs ml-1.5">{`Copy and paste the embed code above just before the
closing </body> tag of your website template file.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsAndCode;
