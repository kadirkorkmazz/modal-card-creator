import React from 'react';
import Appearance from './Appearance';
import ChooseYourTemplate from './ChooseYourTemplate';
import Content from './Content';
import ModalSelector from './Modals/ModalSelector';
import SettingsAndCode from './SettingsAndCode';
import TargetingRules from './TargetingRules';
import { positionSelector } from './utils/funcs';

function CardGeneratorPage(): JSX.Element {
  return (
    <div className=" w-full ">
      <div className="pageTotal mt-16">
        <div className="mt-7 pt-7 mb-16">
          <h3 className="mb-4 font-semibold text-4xl">Modal Card Generator</h3>
          <p className="max-w-[28.75rem]">
            Measure your return on email marketing efforts easier and faster by
            using thebest online tools. Popupsmart is ready to help you build an
            efficient email list!
          </p>
        </div>
        <ChooseYourTemplate />

        <div className="flex">
          <div>
            <Appearance />
            <Content />
            <TargetingRules />
            <SettingsAndCode />
          </div>
          <div
            className={`w-screen h-screen flex sticky top-20 bottom-20  ${positionSelector()}`}
          >
            <ModalSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGeneratorPage;
