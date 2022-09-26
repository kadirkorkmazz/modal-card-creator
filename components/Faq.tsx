import React, { useState } from 'react';

function Faq() {
  const [selected, setSelected] = useState<number>(0);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(0);
    }
    setSelected(i);
  };

  return (
    <div className="my-14 mb-14 container mx-auto ">
      <h1 className=" font-semibold text-4xl mb-12 text-center">
        Frequently Asked Questions
      </h1>
      <div className="questionArea">
        <div
          className={selected === 1 ? ' questionContent' : ' question'}
          onClick={() => {
            toggle(1);
          }}
        >
          <div className="questionDiv ">
            <h3
              className={
                selected === 1 ? 'questionTitle text-black' : 'questionTitle'
              }
            >
              How do I pay for the essentials or premium plan?
            </h3>

            {selected === 1 ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_79_9693)">
                  <path
                    d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#7D4AEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_9693">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
                  fill="#999999"
                />
              </svg>
            )}
          </div>
          <div className="w-full max-w-[53.1rem] h-20">
            <p
              className={selected === 1 ? 'w-full mt-5 ' : 'w-full mt-5 hidden'}
            >
              You can pay with a credit card or via net banking (if you’re in
              United States). We willrenew your subscription automatically at
              the end of every billing cycle. You can paywith a credit card or
              via net banking (if you’re in United States). We will renew your
              subscription automatically at the end of every billing cycle.
            </p>
          </div>
        </div>

        {/* <-- Q-Divider --> */}
        <div
          className={selected === 2 ? ' questionContent ' : ' question'}
          onClick={() => {
            toggle(2);
          }}
        >
          <div className="questionDiv">
            <h3
              className={
                selected === 2 ? 'questionTitle text-black' : 'questionTitle'
              }
            >
              Can I cancel my essentials or premium plan subscription at my
              time?
            </h3>

            {selected === 2 ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_79_9693)">
                  <path
                    d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#7D4AEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_9693">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
                  fill="#999999"
                />
              </svg>
            )}
          </div>
          <div className="w-full max-w-[53.1rem] h-20">
            <p
              className={selected === 2 ? 'w-full mt-5' : 'w-full mt-5 hidden'}
            >
              You can pay with a credit card or via net banking (if you’re in
              United States). We willrenew your subscription automatically at
              the end of every billing cycle. You can paywith a credit card or
              via net banking (if you’re in United States). We will renew your
              subscription automatically at the end of every billing cycle.
            </p>
          </div>
        </div>
        {/* <-- Q-Divider --> */}
        <div
          className={selected === 3 ? ' questionContent' : ' question'}
          onClick={() => {
            toggle(3);
          }}
        >
          <div className="questionDiv">
            <h3
              className={
                selected === 3 ? 'questionTitle text-black' : 'questionTitle'
              }
            >
              How do I pay for the essentials or premium plan?
            </h3>

            {selected === 3 ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_79_9693)">
                  <path
                    d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#7D4AEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_9693">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
                  fill="#999999"
                />
              </svg>
            )}
          </div>
          <div className="w-full max-w-[53.1rem] h-20">
            <p
              className={selected === 3 ? 'w-full mt-5' : 'w-full mt-5 hidden'}
            >
              You can pay with a credit card or via net banking (if you’re in
              United States). We willrenew your subscription automatically at
              the end of every billing cycle. You can paywith a credit card or
              via net banking (if you’re in United States). We will renew your
              subscription automatically at the end of every billing cycle.
            </p>
          </div>
        </div>
        {/* <-- Q-Divider --> */}
        <div
          className={selected === 4 ? ' questionContent' : ' question'}
          onClick={() => {
            toggle(4);
          }}
        >
          <div className="questionDiv">
            <h3
              className={
                selected === 4 ? 'questionTitle text-black' : 'questionTitle'
              }
            >
              We need to add new users to our team, how will that be billed?
            </h3>

            {selected === 4 ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_79_9693)">
                  <path
                    d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#7D4AEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_9693">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
                  fill="#999999"
                />
              </svg>
            )}
          </div>
          <div className="w-full max-w-[53.1rem] h-20">
            <p
              className={selected === 4 ? 'w-full mt-5' : 'w-full mt-5 hidden'}
            >
              You can pay with a credit card or via net banking (if you’re in
              United States). We willrenew your subscription automatically at
              the end of every billing cycle. You can paywith a credit card or
              via net banking (if you’re in United States). We will renew your
              subscription automatically at the end of every billing cycle.
            </p>
          </div>
        </div>
        {/* <-- Q-Divider --> */}
        <div
          className={selected === 5 ? ' questionContent' : ' question'}
          onClick={() => {
            toggle(5);
          }}
        >
          <div className="questionDiv">
            <h3
              className={
                selected === 5 ? 'questionTitle text-black' : 'questionTitle'
              }
            >
              How do I pay for the essentials or premium plan?
            </h3>

            {selected === 5 ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_79_9693)">
                  <path
                    d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#7D4AEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_9693">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
                  fill="#999999"
                />
              </svg>
            )}
          </div>
          <div className="w-full max-w-[53.1rem] h-20">
            <p
              className={selected === 5 ? 'w-full mt-5' : 'w-full mt-5 hidden'}
            >
              You can pay with a credit card or via net banking (if you’re in
              United States). We willrenew your subscription automatically at
              the end of every billing cycle. You can paywith a credit card or
              via net banking (if you’re in United States). We will renew your
              subscription automatically at the end of every billing cycle.
            </p>
          </div>
        </div>
        {/* <-- Q-Divider --> */}

        <div
          className={
            selected === 6
              ? ' questionContent border-b border-b-gray-200'
              : ' question border-b border-b-gray-200 '
          }
          onClick={() => {
            toggle(6);
          }}
        >
          <div className="questionDiv">
            <h3
              className={
                selected === 6 ? 'questionTitle text-black' : 'questionTitle'
              }
            >
              Can I cancel my essentials or premium plan subscription at my
              time?
            </h3>

            {selected === 6 ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_79_9693)">
                  <path
                    d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#7D4AEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_9693">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
                  fill="#999999"
                />
              </svg>
            )}
          </div>
          <div className="w-full max-w-[53.1rem] h-20">
            <p
              className={selected === 6 ? 'w-full mt-5' : 'w-full mt-5 hidden'}
            >
              You can pay with a credit card or via net banking (if you’re in
              United States). We willrenew your subscription automatically at
              the end of every billing cycle. You can paywith a credit card or
              via net banking (if you’re in United States). We will renew your
              subscription automatically at the end of every billing cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
