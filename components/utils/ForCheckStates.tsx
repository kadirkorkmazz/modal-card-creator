import React from 'react';
import { MainContext, useContext } from './context';

function forCheckStates() {
  const {
    selectedLanguages,
    selectedCard,
    size,
    position,
    color,
    contentInputs,
    targetingRules,
    settingsAndCode,
  } = useContext(MainContext);

  return (
    <div className=" top-0 sticky text-right z-50 w-60 ml-auto opacity-30 mr-4">
      <div className="checkContexts z-50 right-1 top-0 absolute ">
        <div> selectedCard:{selectedCard}</div>
        <div>size: {size}</div>
        <div>position: {position}</div>
        <div>color: {color}</div>
        <div>
          {Object.values(contentInputs).map((content, index) => {
            return (
              <div key={index}>{`content${index + 1} ${
                content as string
              }`}</div>
            );
          })}
        </div>
        <div>
          visitorDevice: {`${targetingRules.visitorDevice ? 'true' : 'false'}`}
        </div>
        <div> visitorDeviceType: {targetingRules.visitorDeviceType}</div>
        <div>
          afterXSecond: {`${targetingRules.afterSecond ? 'true' : 'false'}`}
        </div>
        <div>afterXSecondValue: {targetingRules.afterSecondValue}</div>
        <div>
          afterScroll: {`${targetingRules.afterScroll ? 'true' : 'false'}`}
        </div>
        <div>afterScrollValue: {targetingRules.afterScrollValue}</div>

        <div>
          trafficSource: {`${targetingRules.trafficSource ? 'true' : 'false'}`}
        </div>
        <div>trafficSourceValue: {targetingRules.trafficSourceValue}</div>
        <div>
          browserLanguage:{' '}
          {`${targetingRules.browserLanguage ? 'true' : 'false'}`}
        </div>

        {selectedLanguages.map((language: any) => (
          <div key={language}> {language}</div>
        ))}

        <div>
          exitIntentTargeting:
          {`${targetingRules.exitIntentTargeting ? 'true' : 'false'}`}
        </div>
        <div>webhook: {settingsAndCode.webhook}</div>
        <div>
          sendFromSubmission:
          {`${settingsAndCode.sendFromSubmission ? 'true' : 'false'}`}
        </div>
        <div>
          sendClickData:
          {`${settingsAndCode.sendClickData ? 'true' : 'false'}`}
        </div>
      </div>
    </div>
  );
}

export default forCheckStates;
