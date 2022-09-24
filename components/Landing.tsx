import React from 'react';
import LandingBottom from './LandingBottom';
import LandingTop from './LandingTop';
import Navbar from './Navbar';

function Landing() {
  return (
    <>
      <div className="firstArea h-[910px] w-full bg-gradient-to-t from-[#E3F2F7] to-white mt-4 ">
        <Navbar />
        <LandingTop />
      </div>
      <div className="secondArea h-[630px] bg-[#666666] ">
        <LandingBottom />
      </div>
    </>
  );
}

export default Landing;
