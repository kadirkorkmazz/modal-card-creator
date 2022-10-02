import React from 'react';
import { colorPicker, scaleSize } from '../utils/funcs';
import { MainContext, useContext } from '../utils/context';

function Modal3() {
  const { contentInputs } = useContext(MainContext);

  return (
    <div
      className={`bg-white border relative rounded-xl shadow-[0_5px_30px_rgba(0,0,0,0.15)] ${scaleSize()} font-sans`}
    >
      <div className="w-[480px] h-[549px] pt-12 px-14">
        <div>
          <h3
            className={`text-lg font-medium text-center ${colorPicker('text')}`}
          >
            {contentInputs.contentInput1 !== ''
              ? contentInputs.contentInput1
              : 'PLANS'}
          </h3>
          <h3 className=" text-3xl font-bold text-center my-4">
            {contentInputs.contentInput2 !== ''
              ? contentInputs.contentInput2
              : 'Choose best for you'}
          </h3>
          <p className=" text-xl text-center mb-11">
            {contentInputs.contentInput3 !== ''
              ? contentInputs.contentInput3
              : 'Only pay for the capacity that you use.'}
          </p>
        </div>
        <div>
          <div className="flex gap-2.5 ml-5 mb-6">
            <input
              id="starter"
              type="radio"
              name="plan"
              value={'starter'}
              className={`w-6 h-6 accent-current ${colorPicker('text')} `}
            />
            <div className="flex flex-col justify-center gap-2">
              <label
                htmlFor="starter"
                className=" font-medium text-lg hover:cursor-pointer"
              >
                {contentInputs.contentInput4 !== ''
                  ? contentInputs.contentInput4
                  : 'Starter'}
              </label>
              <p className=" text-slate-500">
                {contentInputs.contentInput5 !== ''
                  ? contentInputs.contentInput5
                  : '1 free (then $15 per meember / month)'}
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 ml-5 mb-6">
            <input
              id="pro"
              type="radio"
              name="plan"
              value={'pro'}
              className={`w-6 h-6 accent-current ${colorPicker('text')} `}
            />{' '}
            <div className="flex flex-col justify-center gap-2">
              <label
                htmlFor="pro"
                className=" font-medium text-lg hover:cursor-pointer group"
              >
                {contentInputs.contentInput6 !== ''
                  ? contentInputs.contentInput6
                  : 'Pro'}
              </label>
              <p className=" text-slate-500">
                {contentInputs.contentInput7 !== ''
                  ? contentInputs.contentInput7
                  : '$19 per member/month'}
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 ml-5 mb-6">
            <input
              id="business"
              type="radio"
              name="plan"
              value={'business'}
              className={`w-6 h-6 accent-current ${colorPicker('text')} `}
            />{' '}
            <div className="flex flex-col justify-center gap-2">
              <label
                htmlFor="business"
                className=" font-medium text-lg hover:cursor-pointer"
              >
                {contentInputs.contentInput8 !== ''
                  ? contentInputs.contentInput8
                  : 'Business'}
              </label>
              <p className=" text-slate-500">
                {contentInputs.contentInput9 !== ''
                  ? contentInputs.contentInput9
                  : '$29 per member/month'}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[14.5px]">
          <button className="w-[168px] h-12 border border-slate-300 rounded-lg">
            {contentInputs.contentInput10 !== ''
              ? contentInputs.contentInput10
              : 'Cancel'}
          </button>
          <button
            className={`w-[168px] h-12 border border-slate-300 rounded-lg ${colorPicker(
              'bg'
            )}`}
          >
            {contentInputs.contentInput11 !== ''
              ? contentInputs.contentInput11
              : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal3;
