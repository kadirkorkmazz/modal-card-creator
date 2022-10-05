/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { MainContext, useContext } from './context';
import cardData from '../../public/cardData.json';
import { colorPickerVanilla } from './funcs';

function CodeCreator(): JSX.Element {
  const {
    size,
    position,
    contentInputs,
    targetingRules,
    settingsAndCode,
    uploadedImage,
    selectedCard,
    selectedLanguages,
    showCode,
  } = useContext(MainContext);

  const code = `<script type="text/javascript" src="https://modal-creator-page-kadir.vercel.app/ModalsStatic/Modal2Static.js"></script><script> window.start.init({
    contentImg: ${JSON.stringify(uploadedImage)},
    title: ${JSON.stringify(contentInputs.contentInput1)},
    subtitle: ${JSON.stringify(contentInputs.contentInput2)},
    button1: ${JSON.stringify(contentInputs.contentInput3)},
    button2: ${JSON.stringify(contentInputs.contentInput4)},
    color: '${colorPickerVanilla('color')}',
    backgroundColor: '${colorPickerVanilla('bg')}',
    languages: ${
      targetingRules.browserLanguage ? JSON.stringify(selectedLanguages) : ''
    },
    position: ${position},
    size: ${size},
    deviceType: '${
      targetingRules.visitorDevice ? targetingRules.visitorDeviceType : 'all'
    }',
    afterSeconds: ${
      targetingRules.afterSecond ? targetingRules?.afterSecondValue : null
    },
    afterScroll: ${
      targetingRules.afterScroll ? targetingRules?.afterScrollValue : null
    },
    trafficSource: ${
      targetingRules.trafficSource
        ? JSON.stringify(targetingRules.trafficSourceValue)
        : null
    },
    exitIntent: ${targetingRules?.exitIntentTargeting},

    webhook: ${JSON.stringify(settingsAndCode.webhook)},
    sendFromSubmission: ${settingsAndCode.sendFromSubmission},
    sendClickData: ${settingsAndCode.sendClickData},
    
  })</script>`;

  return (
    <div
      className={
        `w-full h-[188px] bg-transparent text-white text-xs font-roboto max-h-[188px]` +
        (showCode ? ' ' : ' hidden')
      }
    >
      {cardData[selectedCard - 1].codeAvailable
        ? code
        : 'This card does not have a code available'}
    </div>
  );
}

export default CodeCreator;
