"use client";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("guestInfo") || "{}").userId);
  }, []);

  return (
    <header className="px-[32px] shrink-0 flex bg-center justify-between gap-[10px] py-0 h-[56px] bg-black items-center">
      <button className="cursor-pointer border-none bg-transparent p-0 h-[32px] w-[32px] shrink-0 hidden [@media(max-width:768px)]:block">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            cursor="default"
          >
            <path
              fill="#dfdfe4"
              d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
            ></path>
          </svg>
        </div>
      </button>
      <input
        className="bg-ui-level0 text-slate-200 text-[14px] font-medium max-w-[392px] w-full border-[1px] border-transparent rounded-[6px] py-[8px] px-[16px] outline-none focus-within:bg-gray-50 focus-within:opacity-60 h-fit "
        type="search"
        spellCheck="false"
        autoComplete="off"
        placeholder="Search for tools, assets and projects (⌘ + K)"
        data-active="false"
      />
      <div className="flex  items-center duration-500">
        <button className="mr-[10px] items-center flex cursor-pointer h-[32px] justify-center w-[32px]  border-[1px] border-transparent  p-0 relative">
          <Popover>
            <PopoverTrigger asChild>
              <Image
                className="rounded-[6px]"
                src={`https://picsum.photos/30`}
                alt="img"
                fill
              ></Image>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col overflow-x-hidden w-[180px] bg-ui-level0 text-white border-none mr-4">
              <div className="text-[12px] flex flex-col text-nowrap items-center">
                <div className="relative h-[32px] w-[32px] felx flex-col">
                  <Image
                    className="rounded-[6px]"
                    src={`https://picsum.photos/30`}
                    alt="img"
                    fill
                  ></Image>
                </div>
                <div className=" pt-2 w-full overflow-hidden text-ellipsis mb-2">
                  {userName}
                </div>
                <div className="flex flex-col w-full">
                  <Link
                     href={`/teams/${userName}/account`}
                    className="hover:bg-slate-700 flex items-center gap-[8px] mb-[16px] py-[8px] px-[4px] rounded-[8px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A0AEC0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <div className="flex flex-col justify-between">
                      <span className="flex items-center text-[12px] text-white gap-[4px] leading-[16px] overflow-hidden text-ellipsis ">
                        My Accont
                      </span>
                      <span className="text-gray-500 text-[12px] leading-[16px]">
                        Edit account profile
                      </span>
                    </div>
                  </Link>
                  <Separator className="bg-gray-500" />
                  <Link
                    href={`/teams/${userName}/settings`}
                    className="hover:bg-slate-700 flex items-center gap-[8px] mt-[16px] py-[8px] px-[4px] rounded-[8px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A0AEC0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <div className="flex flex-col justify-between">
                      <span className="flex items-center text-[12px] text-white gap-[4px] leading-[16px] overflow-hidden text-ellipsis ">
                        Workspace Settings
                      </span>
                      <span className="text-gray-500 text-[12px] leading-[16px]">
                        Edit workspace
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </button>
        <button className="items-center flex cursor-pointer h-[32px] justify-center w-[32px]  border-[1px] border-transparent  p-0 relative bg-gray-600 rounded-[8px] text-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 11 18-5v12L3 14v-3z"></path>
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
