import { createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const MainContext = createContext({} as IContext);

interface IContext {
  selectedLanguages: string[];
  setSelectedLanguages: (selectedLanguages: string[]) => void;
  selectedCard: number;
  setSelectedCard: (selectedCard: number) => void;
  size: number;
  setSize: (size: number) => void;
  position: number;
  setPosition: (position: number) => void;
  color: string;
  setColor: (color: string) => void;
  contentInputs: IContentInputs;
  setContentInputs: (contentInputs: IContentInputs) => void;
  targetingRules: ITargetingRules;
  setTargetingRules: (targetingRules: ITargetingRules) => void;
  settingsAndCode: ISettingsAndCode;
  setSettingsAndCode: (settingsAndCode: ISettingsAndCode) => void;
  uploadedImage: string;
  setUploadedImage: (uploadedImage: string) => void;
  uploadedLogo: string;
  setUploadedLogo: (uploadedLogo: string) => void;
  showCode: boolean;
  setShowCode: (showCode: boolean) => void;
}

interface ITargetingRules {
  visitorDevice: boolean;
  visitorDeviceType: string;
  afterSecond: boolean;
  afterSecondValue: number;
  afterScroll: boolean;
  afterScrollValue: number;
  trafficSource: boolean;
  trafficSourceValue: string;
  browserLanguage: boolean;
  exitIntentTargeting: boolean;
}

interface IContentInputs {
  contentInput1: string;
  contentInput2: string;
  contentInput3: string;
  contentInput4: string;
  contentInput5: string;
  contentInput6: string;
  contentInput7: string;
  contentInput8: string;
  contentInput9: string;
  contentInput10: string;
  contentInput11: string;
}

interface ISettingsAndCode {
  webhook: string;
  sendFromSubmission: boolean;
  sendClickData: boolean;
}

export { MainContext, useContext };
