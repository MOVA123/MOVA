"use client";
import "@/app/globals.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuPortal,
  // DropdownMenuSeparator,
  // DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("guestInfo") || "{}").userId);
  }, []);
  return (
    <html>
      <body>
        <main className="flex-col w-screen flex flex-1 bg-black overflow-x-hidden relative h-screen">
          <nav className="relative">
            <div className="w-full flex bg-black min-h-[44px] px-[6px] py-[10px] items-center justify-between border border-gray-700 flex-nowrap">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="bg-transparent p-0 outline-0 border-0 flex items-center gap-[4px] cursor-pointer">
                    <div className="flex items-center justify-center h-[28px] w-[28px] rounded-[6px] text-gray-400">
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
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-ui-level0 border-none ml-[16px]">
                  <DropdownMenuItem className="text-white">
                    <Link href={`/teams/${userName}/dashboard`}>
                      go to dashborad
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white">
                    <Link href={`/teams/${userName}/assets?tab=private`}>
                      open assets
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex justify-center left-0 my-0 mx-auto max-w-[512px] absolute right-0">
                <div className="flex gap-[6px] justify-center w-full">
                  <div className="text-gray-400 text-[16px] font-medium leading-[24px] overflow-hidden text-ellipsis text-nowrap ">
                    Untitled session
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
