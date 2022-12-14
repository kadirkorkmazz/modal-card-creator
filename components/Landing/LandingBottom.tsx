import React from 'react';
import LandingModal from './LandingModal';

function LandingBottom(): JSX.Element {
  return (
    <div className="container mx-auto font-poppins ">
      <LandingModal />
      <div className=" relative top-[22.5rem] flex text-white mx-auto">
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
        <div>
          <div className=" text-4xl font-semibold mb-4">
            Popupsmart meets all <br /> your business <br /> needs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBottom;
