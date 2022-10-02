import React, { useRef, useState } from 'react';
import Image from 'next/image';
import cardData from '../../public/cardData.json';
import { MainContext, useContext } from './context';
import { Upload } from 'upload-js';

const upload = new Upload({ apiKey: 'free' });

function UploadImage() {
  const { selectedCard, setUploadedImage } = useContext(MainContext);
  const haveImage = cardData[selectedCard - 1].imageArea;

  const [imageSrc, setImageSrc] = useState<string>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = async () => {
    const file = inputRef.current?.files?.[0];
    if (file?.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result?.toString());
      };
      reader.readAsDataURL(file);

      const { fileUrl } = await upload.uploadFile(file);
      console.log(`File uploaded: ${fileUrl}`);
      setUploadedImage(fileUrl);
    } else {
      console.log('dosya uyumsuz');
    }
  };

  return (
    <>
      <div className={`${haveImage ? 'block' : 'hidden'}`}>
        <p className="text-sm mb-4">Upload image</p>
        <label
          htmlFor="file"
          className="uploadLogo w-[378px] h-[178px] border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center gap-5 hover:cursor-pointer "
        >
          <div className=" w-[72px] h-20 flex-shrink-0 flex items-center justify-center relative ">
            <Image
              src={imageSrc ? imageSrc : '/content-upload-image-mockimage.png'}
              layout="fill"
            />
          </div>
          <div className="font-sans text-sm flex items-center gap-1">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5125 4.53C14.0025 1.9425 11.73 0 9 0C6.8325 0 4.95 1.23 4.0125 3.03C1.755 3.27 0 5.1825 0 7.5C0 9.9825 2.0175 12 4.5 12H14.25C16.32 12 18 10.32 18 8.25C18 6.27 16.4625 4.665 14.5125 4.53ZM14.25 10.5H4.5C2.8425 10.5 1.5 9.1575 1.5 7.5C1.5 5.9625 2.6475 4.68 4.17 4.5225L4.9725 4.44L5.3475 3.7275C6.06 2.355 7.455 1.5 9 1.5C10.965 1.5 12.66 2.895 13.0425 4.8225L13.2675 5.9475L14.415 6.03C15.585 6.105 16.5 7.0875 16.5 8.25C16.5 9.4875 15.4875 10.5 14.25 10.5ZM6 6.75H7.9125V9H10.0875V6.75H12L9 3.75L6 6.75Z"
                fill="black"
              />
            </svg>
            <div className="flex">
              <p>Drop your image here or&nbsp;</p>
              <div className="text-violet-600 hover:cursor-pointer hover:opacity-80">
                <form method="post" className="flex">
                  <input
                    ref={inputRef}
                    onChange={() => {
                      handleChange();
                    }}
                    type="file"
                    name="file"
                    id="file"
                    className="hidden hover:cursor-pointer"
                  />
                  <label
                    htmlFor="file"
                    className=" underline hover:cursor-pointer"
                  >
                    upload
                  </label>
                </form>
              </div>
            </div>
          </div>
        </label>
      </div>
    </>
  );
}

export default UploadImage;
