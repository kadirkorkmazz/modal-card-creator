import React from 'react';
import landingModalImage from '../public/landing-modal-image.png';
import Image from 'next/image';
import LandingModalShadow from './LandingModalShadow';

function LandingModal() {
  return (
    <div className=" w-[800px] h-[468px] flex font-poppins -mt-[227px] absolute z-10">
      <div className=" w-1/2 bg-white h-full rounded-l-[40px] flex flex-col items-center py-10 px-[50px]  ">
        <svg
          width="106"
          height="38"
          viewBox="0 0 106 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[106px] h-[38px]"
        >
          <path
            d="M7.98565 0H6.88287C3.04215 0 0 3.03618 0 6.87437V29.0633C0 32.9588 3.17525 36.0141 6.9209 36.0141H7.68143C11.6552 36.0141 14.7354 32.9588 14.7354 28.4523V21.2342H9.22152V28.5859C9.22152 29.3688 8.87928 30.6482 7.51031 30.6482H7.2061C6.31247 30.6482 5.53291 29.9226 5.53291 28.6623V7.50452C5.53291 6.47337 6.29345 5.51859 7.2061 5.51859H7.51031C8.44197 5.51859 9.22152 6.47337 9.22152 7.50452V14.3407H14.7354V6.87437C14.7354 3.01709 11.6552 0 7.98565 0ZM45.6133 11.3427L41.4683 0.763819H35.7453V26.6191L41.2592 25.8553V13.7296L45.6133 22.4945L49.8913 13.5769V25.2442H55.4052V0.763819H50.0244L45.6133 11.3618V11.3427ZM81.5677 17.396H87.5189V12.5457H81.5677V5.63317H88.1083V0.763819H76.0538V27.4211C80.541 28.3568 84.6859 29.2734 88.4126 30.5146V25.2251L81.5677 23.9266V17.4342V17.396ZM103.414 18.1598C104.745 17.396 105.848 15.8111 105.848 14.0925V5.4995C105.848 2.84523 103.718 0.744724 100.923 0.744724H91.0935V31.603L96.5693 33.7417V20.2221C96.5693 20.2221 100.41 19.7829 100.41 23.6211V35.3457L106 38V22.1508C106 20.0884 104.84 18.6181 103.433 18.1598H103.414ZM100.391 13.4432C100.391 14.4744 100.125 14.99 98.889 14.99H96.5503V5.4995H98.889C100.125 5.4995 100.391 5.93869 100.391 7.00804V13.4432ZM25.8203 0.0763819H24.7175C20.8768 0.0763819 17.8726 3.11256 17.8726 6.98895V30.5146L23.3865 28.8342V21.7498H27.0561V28.1849L32.494 27.0774V6.98895C32.494 3.09347 29.4518 0.0763819 25.8203 0.0763819ZM27.0561 16.6131H23.3865V7.38995C23.3865 6.49246 24.1471 5.57588 25.0597 5.57588H25.3639C26.2956 5.57588 27.0371 6.51156 27.0371 7.38995V16.6131H27.0561ZM68.6766 0.763819H58.8086V25.3779L64.3605 25.6834V18.9809H68.6766C71.4526 18.9809 73.5821 16.8231 73.5821 13.9588V5.4995C73.5821 2.84523 71.4526 0.744724 68.6766 0.744724V0.763819ZM68.1252 12.6985C68.1252 13.8251 67.821 14.3216 66.6231 14.3216H64.3225V5.57588H66.6231C67.821 5.57588 68.1252 5.84322 68.1252 6.91256V12.6985Z"
            fill="#E60000"
          />
        </svg>
        <h5 className=" text-[40px] font-semibold mt-8 ">Join the club</h5>
        <p className="text-lg text-center mt-2.5">
          Subscribe and Get an Extra <br />
          <b>
            <u> 25% Off </u>
          </b>
          on your first purchase.
        </p>
        <input
          placeholder="Email address"
          className="border border-[#BBBBBB] rounded-xl w-[300px] h-[48px] p-4 mt-[30px] mb-[15px]"
        ></input>
        <button className="bg-black text-white border rounded-xl w-[300px] h-[48px] p-3 mb-5 ">
          Subscribe
        </button>
        <p className=" text-xs text-neutral-500 ">
          By signing up, you agree to <u> Privacy Policy </u>and
          <u> Terms of Use. </u>
        </p>
      </div>
      <div className=" w-1/2 h-full relative ">
        <Image
          src={landingModalImage}
          alt="landing-modal-image"
          className="rounded-r-[40px] absolute"
        />
        <p className="absolute left-[30px] bottom-[30px] text-4xl text-white font-semibold">
          Mediterranean Sneakers<span className=" text-lg align-top">®</span>
        </p>

        <button className=" absolute bg-white top-6 right-6 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
      <LandingModalShadow />
    </div>
  );
}

export default LandingModal;
