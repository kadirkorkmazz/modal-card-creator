import React from 'react';
import LandingModal from './LandingModal';
import LandingModalShadow from './LandingModalShadow';

function LandingBottom() {
  return (
    <div className="container mx-auto font-poppins ">
      <LandingModal />
      <LandingModalShadow />
      <div className=" relative top-[361px] flex text-white">
        <div className=" mr-32">
          <div className=" text-7xl font-semibold mb-4">3x</div>
          <div>
            Increase
            <br /> Conversion Rate
          </div>
        </div>
        <div className=" mr-32">
          <div className=" text-7xl font-semibold mb-4">120%</div>
          <div>
            Email
            <br /> Subscribers
          </div>
        </div>
        <div className=" mr-32">
          <div className=" text-7xl font-semibold mb-4">390%</div>
          <div>
            More Customer
            <br /> Engagement
          </div>
        </div>
        <div className=" mr-32">
          <div className=" text-4xl font-semibold mb-4">
            Popupsmart meets all <br /> your business <br /> needs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBottom;
