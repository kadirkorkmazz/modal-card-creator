import React, { useEffect, useState } from 'react';
import { MainContext, useContext } from './context';
import cardData from '../../public/cardData.json';
import { colorPickerVanilla } from './funcs';

function CodeCreator() {
  const {
    size,
    position,
    contentInputs,
    targetingRules,
    settingsAndCode,
    uploadedImage,
    uploadedLogo,
    selectedCard,
    selectedLanguages,
    showCode,
  } = useContext(MainContext);

  let code = `<script type="text/javascript" src="https://modal-creator-page-kadir.vercel.app//ModalsStatic/Modal2Static.js"></script><script> window.start.init({
    contentImg: '${uploadedImage ? uploadedImage : ''}',
    title: ${JSON.stringify(contentInputs.contentInput1)},
    subtitle: ${JSON.stringify(contentInputs.contentInput2)},
    button1: ${JSON.stringify(contentInputs.contentInput3)},
    button2: ${JSON.stringify(contentInputs.contentInput4)},
    color: '${colorPickerVanilla('color')}',
    backgroundColor: '${colorPickerVanilla('bg')}',
    languages: ${
      targetingRules.browserLanguage ? JSON.stringify(selectedLanguages) : false
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
      targetingRules.trafficSource ? targetingRules?.trafficSourceValue : null
    },
    exitIntent: ${targetingRules?.exitIntentTargeting},

    webhook: ${
      settingsAndCode.webhook
        ? JSON.stringify(settingsAndCode.webhook)
        : JSON.stringify('')
    },
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
      {code}
    </div>
  );
}

export default CodeCreator;
