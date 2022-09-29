import React from 'react';

function LandingTop() {
  return (
    <div className="container mx-auto ">
      <h1 className="text-7xl font-semibold text-left pt-20 font-poppins leading-[5rem] mb-3">
        Simple modal <br />
        card creator
      </h1>
      <p className="font-poppins text-3xl mb-16">
        A utility-first CSS framework packed with classeslike flex, pt-4,
        text-center and <br /> rotate-90 that can becomposed to build any
        design, directly in your markup.
      </p>
      <button className="bg-purple-600 hover:bg-purple-800 text-white text-l rounded-xl px-7 py-3 shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-16">
        Try it out now
      </button>
      <div className="flex opacity-60">
        <div className="flex mr-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs font-poppins mx-2">Free and paid plans</p>
        </div>
        <div className="flex mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs font-poppins mx-2">Setup in minutes</p>
        </div>
        <div className="flex mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs font-poppins mx-2">No credit card required*</p>
        </div>
      </div>
    </div>
  );
}

export default LandingTop;
