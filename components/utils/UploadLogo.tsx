import React, { useRef, useState } from 'react';
import { MainContext, useContext } from './context';
import cardData from '../../public/cardData.json';
import Image from 'next/image';
import defaultLogo from '../../public/defaultLogo.svg';
import { Upload } from 'upload-js';

const upload = new Upload({ apiKey: 'free' });

function UploadLogo(): JSX.Element {
  const { selectedCard, setUploadedLogo } = useContext(MainContext);
  const haveLogo = cardData[selectedCard - 1].logoArea;
  const logoInputRef = useRef<HTMLInputElement | null>(null);
  const [logoSrc, setLogoSrc] = useState<string>();

  const handleChange = async (): Promise<void> => {
    const file = logoInputRef.current?.files?.[0];
    if (file?.name.match(/\.(jpg|jpeg|png|gif)$/) != null) {
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoSrc(e.target?.result?.toString());
      };
      reader.readAsDataURL(file);

      const { fileUrl } = await upload.uploadFile(file);
      console.log(`File uploaded: ${fileUrl}`);
      setUploadedLogo(fileUrl);
    } else {
      console.log('dosya uyumsuz');
    }
  };

  return (
    <div className={`${haveLogo === true ? 'block' : 'hidden'}`}>
      <p className=" text-sm font-sans my-4">Upload Logo</p>
      <label
        htmlFor="logoFile"
        className="uploadLogo w-[378px] h-[178px] border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center gap-5 hover:cursor-pointer"
      >
        <div className=" w-20 h-20 bg-violet-600 bg-opacity-10 rounded-xl flex-shrink-0 flex items-center justify-center relative">
          <Image
            src={logoSrc !== null && logoSrc !== '' ? logoSrc : defaultLogo}
            layout={logoSrc !== null ? 'fill' : 'fixed'}
            alt="logo"
          />
        </div>

        <div className="flex">
          <p>Drop your image here or&nbsp;</p>
          <div className="text-violet-600 hover:cursor-pointer hover:opacity-80">
            <form method="post" className="flex">
              <input
                ref={logoInputRef}
                onChange={() => {
                  void handleChange();
                }}
                type="file"
                name="logoFile"
                id="logoFile"
                className="hidden hover:cursor-pointer"
              />
              <label
                htmlFor="logoFile"
                className=" underline hover:cursor-pointer"
              >
                upload
              </label>
            </form>
          </div>
        </div>
      </label>
    </div>
  );
}

export default UploadLogo;
