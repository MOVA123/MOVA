"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("guestInfo") || "{}").userId);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] py-[24px] px-[32px] overflow-y-auto ">
      <div className="flex flex-col justify-center gap-[8px] shrink-0 w-full mt-[8px]">
        <h1 className="text-white text-[24px] font-semibold">My Account</h1>
      </div>
      <div className="flex pt-[24px] px-0 pb-[20px] flex-col">
        <form className="mb-[24px] flex flex-col gap-[24px] w-[400px]">
          <div className="flex flex-col ">
            <span className="mb-[16px] text-[14px] font-[Normal] leading-[20px] text-white break-words">
              Profile Picture
            </span>
            <div className="mb-[16px] flex items-center">
              <div className="relative w-[48px] h-[48px]">
                <Image
                  src="https://picsum.photos/30"
                  alt="logo"
                  fill
                  className="rounded-sm"
                ></Image>
              </div>
            </div>
            <span className="text-[14px] font-[Normal] leading-[20px] text-gray-500 break-words">
              Min. 200x200 px. PNG or JPG.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="mb-[16px] text-[14px] font-[Normal] leading-[20px] text-white break-words">
              Username
            </span>
            <input
              type="text"
              className="cursor-not-allowed text-gray-500 text-[16px] h-[32px] rounded-sm border border-black bg-ui-level0"
              value={userName}
            />
          </div>
          <div className="flex flex-col">
            <span className="mb-[16px] text-[14px] font-[Normal] leading-[20px] text-white break-words">
              Email
            </span>
            <span className="text-[12px] font-[Normal] leading-[16px] text-gray-400">
              To change your email, please follow these instructions
            </span>
            <input
              type="text"
              className="cursor-not-allowed text-gray-500 text-[16px] h-[32px] rounded-sm border border-black bg-ui-level0"
              value={""}
            />
          </div>
          <div className="flex flex-col">
            <span className="mb-[16px] text-[14px] font-[Normal] leading-[20px] text-white break-words">
              First Name
            </span>
            <input
              type="text"
              className="cursor-not-allowed text-gray-500 text-[16px] h-[32px] rounded-sm border border-black bg-ui-level0"
              value={""}
            />
          </div>
          <div className="flex flex-col">
            <span className="mb-[16px] text-[14px] font-[Normal] leading-[20px] text-white break-words">
              Last Name
            </span>
            <input
              type="text"
              className="cursor-not-allowed text-gray-500 text-[16px] h-[32px] rounded-sm border border-black bg-ui-level0"
              value={""}
            />
          </div>
          <div className="flex flex-col">
            <span className="mb-[16px] text-[14px] font-[Normal] leading-[20px] text-white break-words">
              Last Name
            </span>
            <input
              type="text"
              className="cursor-not-allowed text-gray-500 text-[16px] h-[32px] rounded-sm border border-black bg-ui-level0"
              value={""}
            />
          </div>
          <div className="flex pt-[16px] px-0 pb-0">
            <button className="relative mr-[8px] items-center text-center flex-1 whitespace-nowrap text-[16px] py-0 px-[16px] font-normal h-[32px] outline-none text-gray-400 bg-ui-level0 rounded-sm cursor-not-allowed">cancel</button>
            <button className="relative mr-[8px] items-center text-center flex-1 whitespace-nowrap text-[16px] py-0 px-[16px] font-normal h-[32px] outline-none text-gray-400 bg-ui-level0 rounded-sm cursor-not-allowed ">save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
