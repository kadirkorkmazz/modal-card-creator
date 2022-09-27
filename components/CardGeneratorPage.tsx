import React from 'react';
import Appearance from './Appearance';
import ChooseYourTemplate from './ChooseYourTemplate';
import Content from './Content';
import SettingsAndCode from './SettingsAndCode';
import TargetingRules from './TargetingRules';

function CardGeneratorPage() {
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
        <Appearance />
        <Content />
        <TargetingRules />
        <SettingsAndCode />
      </div>
    </div>
  );
}

export default CardGeneratorPage;
