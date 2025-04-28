"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

export default function Nav() {
  // const pathname = usePathname();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("guestInfo") || "{}").userId);
  }, []);

  return (
    <nav className="[@media(max-width:768px)]:hidden">
      <div className="bg-black h-full max-w-[260px] min-w-[260px] overflow-hidden w-[260px]">
        <div className="bg-black flex flex-col gap-[6px] h-full">
          <div className="flex flex-col shrink-0 pt-[12px] px-[16px] pb-0 gap-2">
            <div id="menu" className="flex flex-col overflow-hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="w-full items-center bg-ui-level0 border-none rounded-tl-[8px] rounded-tr-[8px] cursor-pointer flex flex-row gap-2 p-[12px] hover:bg-gray-700 hover:text-white">
                    <div className="w-8 h-8 relative ">
                      <Image
                        className="rounded-sm"
                        alt="avatar"
                        src="https://picsum.photos/100"
                        fill
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <span className="text-white text-[14px] font-medium leading-[20px] text-left">
                        name
                      </span>
                      <span className="text-gray-300 text-[12px] font-medium leading-[16px] text-left">
                        accounttype
                      </span>
                    </div>
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
                      className="text-gray-300"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-ui-level0 text-white border-none w-[228px] ">
                  <DropdownMenuItem>
                    <Link
                      href={`/teams/${userName}/settings`}
                      className="w-full h-full flex justify-between items-start"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <div className="mx-auto">my account</div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="bg-gray-700 h-[1px] w-full"></div>
              <button className="flex justify-center border-none rounded-bl-[8px] rounded-br-[8px] p-[8px] items-center text-gray-300 cursor-pointer text-[14px] gap-[6px] leading-[20px] bg-ui-level0 hover:bg-gray-700 hover:text-white">
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
                  className="lucide lucide-user-plus "
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
                <span>Invite members</span>
              </button>
            </div>
            <div
              id="inner"
              className="flex flex-1 flex-col justify-center min-h-0"
            >
              <div id="scroller" className="flex flex-col overflow-y-auto">
                <div id="padded" className="flex-1 pt-0">
                  <div className="flex flex-col gap-[1px]">
                    <Link
                      href={`/teams/${userName}/dashboard`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] hover:bg-ui-level0 px-[8px]"
                    >
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
                        className="lucide lucide-home item-module__icon__qkg6_"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      Home
                    </Link>
                    {/* <Link
                      href={`/teams/${userName}/dashboard`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] hover:bg-ui-level0 px-[8px]"
                    >
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
                        className=""
                      >
                        <rect
                          width="20"
                          height="15"
                          x="2"
                          y="7"
                          rx="2"
                          ry="2"
                        ></rect>
                        <polyline points="17 2 12 7 7 2"></polyline>
                      </svg>
                      Mova Watch
                    </Link> */}
                  </div>
                  <div className="h-[32px] flex items-center">
                    <div className="h-[1px] w-full bg-slate-700"></div>
                  </div>
                  {/* assets */}
                  <div className="flex flex-col gap-[1px]">
                    <div className="items-center text-slate-400 flex text-[12px] font-medium  h-[32px] leading-[10px] uppercase px-[8px]">
                      Assets
                    </div>
                    <Link
                      href={`/teams/${userName}/assets?tab=private`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] hover:bg-ui-level0 px-[8px]"
                    >
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
                        className="lucide lucide-folder item-module__icon__qkg6_"
                      >
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                      </svg>
                      Private
                    </Link>
                    <Link
                      href={`/teams/${userName}/assets?tab=shared`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] hover:bg-ui-level0 px-[8px]"
                    >
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
                        className="lucide lucide-folder-symlink item-module__icon__qkg6_"
                      >
                        <path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"></path>
                        <path d="m8 16 3-3-3-3"></path>
                      </svg>
                      Shared
                    </Link>
                    <Link
                      href={`/teams/${userName}/assets/favorites`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] hover:bg-ui-level0 px-[8px]"
                    >
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
                        className="lucide lucide-heart item-module__icon__qkg6_"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                      Favorited
                    </Link>
                  </div>
                  <div className="h-[32px] flex items-center">
                    <div className="h-[1px] w-full bg-slate-700"></div>
                  </div>
                  {/* tools */}
                  <div className="flex flex-col gap-[1px]">
                    <div className="items-center text-slate-400 flex text-[12px] font-medium  h-[32px] leading-[10px] uppercase px-[8px]">
                      Tools
                    </div>
                    <Link
                      href={`/teams/${userName}/ai-tools/generate`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] px-[8px] hover:bg-ui-level0"
                    >
                      <div className="flex items-center justify-center p-[4px] rounded-[4px] bg-ui-level1-new">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </div>
                      Start a session
                    </Link>
                    <Link
                      href={`/teams/${userName}/ai-tools/generate`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] px-[8px] hover:bg-ui-level0"
                    >
                      <div className="relative flex items-center justify-center rounded-[4px] bg-ui-level1-new">
                        <Image
                          className="rounded-[4px]"
                          width={20}
                          height={20}
                          src="https://picsum.photos/id/99/30"
                          alt="img"
                        />
                      </div>
                      Generate Video
                    </Link>
                    <Link
                      href={`/teams/${userName}/ai-tools/generate`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] px-[8px] hover:bg-ui-level0"
                    >
                      <div className="relative flex items-center justify-center rounded-[4px] bg-ui-level1-new">
                        <Image
                          className="rounded-[4px]"
                          width={20}
                          height={20}
                          src="https://picsum.photos/id/100/30"
                          alt="img"
                        />
                      </div>
                      Generate Image
                    </Link>
                    <Link
                      href={`/teams/${userName}/ai-tools/generate`}
                      className="items-center text-white flex text-[14px] font-medium h-[40px] leading-[20px] rounded-[8px] gap-[14px] px-[8px] hover:bg-ui-level0"
                    >
                      <div className="relative flex items-center justify-center rounded-[4px] bg-ui-level1-new">
                        <Image
                          className="rounded-[4px]"
                          width={20}
                          height={20}
                          src="https://picsum.photos/id/101/30"
                          alt="img"
                        />
                      </div>
                      Generate Audio
                    </Link>
                  </div>
                </div>
              </div>
              <div id="footer"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
