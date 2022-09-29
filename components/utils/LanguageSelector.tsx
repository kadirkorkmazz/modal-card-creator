import React, { useState } from 'react';

function LanguageSelector() {
  const languages = [
    'English',
    'French',
    'German',
    'Polish',
    'Dutch',
    'Finnish',
    'Spanish',
    'Italian',
    'Portuguese',
    'Russian',
    'Turkish',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Hindi',
  ];
  const [selectedLanguages, setSelectedLanguages] = useState([
    'English',
    'French',
  ]);
  const [expanded, setExpanded] = useState(false);

  const toggleLang = (e: any) => {
    if (selectedLanguages.includes(e.target.value)) {
      setSelectedLanguages(
        selectedLanguages.filter((language) => language !== e.target.value)
      );
    } else {
      setSelectedLanguages([...selectedLanguages, e.target.value]);
    }
  };

  const removeLang = (lang: any) => {
    setSelectedLanguages(
      selectedLanguages.filter((language) => language !== lang)
    );
  };

  const toggleAll = () => {
    if (selectedLanguages.length === languages.length) {
      setSelectedLanguages([]);
    } else {
      setSelectedLanguages(languages);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <form>
          <div className="multiselect">
            <div className="selectBox relative">
              <div className="w-[378px] h-9 p-1 text-neutral-500 border rounded-lg flex items-center relative">
                {
                  <div className="flex items-center gap-2 h-full hover:cursor-pointer overflow-scroll no-scrollbar">
                    {selectedLanguages.length === 0 ? (
                      <p
                        className=" text-sm font-poppins ml-3 "
                        onClick={() => setExpanded(!expanded)}
                      >
                        Select
                      </p>
                    ) : (
                      selectedLanguages.map((language) => (
                        <div
                          key={language}
                          className="z-10 flex items-center gap-1 pl-4 pr-3 bg-gray-100  min-w-24 h-full justify-between hover:border rounded-md text-black hover:bg-transparent hover:border-red-600 group hover:cursor-pointer"
                          onClick={() => removeLang(language)}
                        >
                          <p className="text-xs mr-0.5">{language}</p>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current rounded-full p-[2px] w-3 h-3 group-hover:bg-red-600 group-hover:text-white "
                          >
                            <g clipPath="url(#clip0_79_9869)">
                              <path d="M9.5 8.515L8.515 9.5L6 6.985L3.485 9.5L2.5 8.515L5.015 6L2.5 3.485L3.485 2.5L6 5.015L8.515 2.5L9.5 3.485L6.985 6L9.5 8.515Z" />
                            </g>
                            <defs>
                              <clipPath id="clip0_79_9869">
                                <rect width="12" height="12" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      ))
                    )}
                  </div>
                }
                <div
                  className="z-10 bg-white h-full absolute w-7 px-1 right-0 flex items-center justify-center hover:cursor-pointer rounded-lg"
                  onClick={() => setExpanded(!expanded)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-neutral-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              id="checkboxes"
              className={`absolute z-10 flex-col w-[260px] h-[305px] border bg-white border-zinc-300 rounded-md shadow-[0px_4px_10px_rgba(0, 0, 0, 0.25)] ${
                expanded ? 'flex' : '!hidden'
              }`}
            >
              <div className=" flex items-center font-sans text-sm  px-5 mb-2 pb-2 mt-2.5 pt-2.5   hover:bg-neutral-100">
                <input
                  type="checkbox"
                  id="allLanguages"
                  className=" w-[18px] h-[18px] hover:cursor-pointer"
                  checked={selectedLanguages.length === languages.length}
                  onChange={() => {
                    toggleAll();
                  }}
                />
                <label htmlFor="allLanguages" className="ml-2.5 cursor-pointer">
                  All Languages
                </label>
              </div>
              <hr className="bg-gray-200  mx-5" />
              <div className="overflow-scroll gap-3 my-1">
                {languages.map((language) => (
                  <div
                    key={language}
                    className=" flex items-center font-sans text-xs h-[30px] py-[6px] pl-5 hover:bg-neutral-100 "
                  >
                    <input
                      type="checkbox"
                      id={language}
                      className=" w-[18px] h-[18px]"
                      value={language}
                      onChange={toggleLang}
                      checked={selectedLanguages.includes(language)}
                    />
                    <label
                      htmlFor={language}
                      className="ml-2.5 hover:cursor-pointer"
                    >
                      {language}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between  border-t py-4 px-5">
                <button
                  className=" font-semibold hover:text-gray-500"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedLanguages([]);
                  }}
                >
                  Clear All
                </button>
                <button
                  className="hover:text-red-800"
                  onClick={(e) => {
                    e.preventDefault();
                    setExpanded(!expanded);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LanguageSelector;
