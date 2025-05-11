"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("guestInfo") || "{}").userId);
  }, []);
  return (
    <div className="py-[16px] px-[32px] overflow-scroll flex-col flex w-full h-full">
      <div className="flex mb-[24px] items-center gap-[16px]">
        <div className="rounded-[4px] shrink-0 text-[0.8rem] h-[45px] w-[45px] items-center border border-black text-gray-200 relative">
          <Image
            className="rounded-sm"
            src="https://picsum.photos/100"
            alt="avartar"
            fill
          ></Image>
        </div>
        <span className="text-white text-[24px] font-semibold">{userName}</span>
      </div>
      <div className="flex max-w-[400px] flex-col">
        <div className="mb-[24px] flex flex-col">
          <span className="mb-[16px] text-[14px] font-[Normal] leading-[20px] text-white break-words">
            Workspace Name
          </span>
          <input
            type="text"
            className="bg-ui-level0 text-gray-50 w-full h-[32px] rounded-[4px] py-0 px-[10px] duration-200 border border-transparent focus-within:border-gray-500 "
            value={userName}
          />
        </div>
        <div className="mb-[24px] flex flex-col">
          <span className="mb-[16px] text-[14px] font-[Normal] leading-[20px] text-white break-words">
            Workspace Logo
          </span>
          <div className="mb-[16px]">
            <div className="rounded-[4px] shrink-0 text-[0.8rem] h-[45px] w-[45px] items-center border border-black text-gray-200 relative">
              <Image src="https://picsum.photos/100" fill alt="Logo"></Image>
            </div>
          </div>
          <span className="text-[12px] font-[Normal] leading-[16px] text-gray-500 break-words">
            Min. 200x200 px. PNG or JPG.
          </span>
        </div>
      </div>
    </div>
  );
}
