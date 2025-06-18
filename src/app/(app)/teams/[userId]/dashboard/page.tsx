"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("guestInfo") || "{}").userId);
  }, []);
  return (
    <div className="flex-1  pt-[16px] px-[16px] pb-[36px] overflow-y-auto">
      <div className="flex max-w-[1920px] flex-col flex-1 overflow-y-auto">
        <div className="items-stretch bg-ui-level0 rounded-[12px] grid gap-[12px] justify-between pt-4 px-4 pb-8">
          <div className="flex gap-[12px] pt-[12px] pb-[16px]">
            <div className=" flex-1">
              <h1 className="font-medium  text-white text-4xl">
                Introducing Frames
              </h1>
              <div className="pt-3 max-w-[400px] text-slate-200 text-[18px] font-normal leading-[30px]">
                Our most advanced base model for image generation, offering
                unprecedented stylistic control and visual fidelity.{" "}
                <span> Available now for Unlimited and Enterprise plans.</span>
              </div>
            </div>
            <div className="relative flex-1">
              <video
                className="rounded-[12px] h-full object-cover w-full"
                autoPlay
                muted
                loop
              >
                <source src="https://d2rbho9qhylu5v.cloudfront.net/top_2.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-[56px] max-w-[1920px] ">
          <div className="items-center flex justify-between">
            <div className="text-white text-[20px] font-bold">
              Pick up where you left off in Generative Session
            </div>
          </div>
          <div className="grid gap-[16px] grid-cols-5 [@media(max-width:1200px)]:grid-cols-4">
            <Link
              href={`/teams/${userName}/ai-tools/generate`}
              className="items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]"
            >
              <div className="items-center bg-ui-level1-new rounded-[4px] flex h-[100%] felx-1 justify-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A5B4C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
              {/* <div className="text-white text-[16px] pb-[20px] font-semibold text-center">
                Start a new session
              </div> */}
            </Link>
            <div className="items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]"></div>
            <div className="items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]"></div>
            <div className="items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]"></div>
            <div className="items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px] [@media(max-width:1200px)]:hidden"></div>
          </div>
        </div>
        <div className="flex flex-col max-w-[1920px] gap-8 mt-[56px]">
          <div className="items-center flex justify-between">
            <div className="text-white text-[20px] font-bold">AI Tools</div>
          </div>
          <div className="grid gap-[16px] grid-cols-5 [@media(max-width:1200px)]:grid-cols-4">
            <Link
              href={`/teams/${userName}/ai-tools/generate`}
              className="relative items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]"
            >
              <Image
                src={`https://picsum.photos/id/1/1080/960`}
                objectFit="cover"
                fill
                alt="img"
              ></Image>
            </Link>
            <Link
              href={`/teams/${userName}/ai-tools/generate`}
              className="relative items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]"
            >
              <Image
                src={`https://picsum.photos/id/2/1080/960`}
                objectFit="cover"
                fill
                alt="img"
              ></Image>
            </Link>
            <Link
              href={`/teams/${userName}/ai-tools/generate`}
              className="relative items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]"
            >
              <Image
                src={`https://picsum.photos/id/3/1080/960`}
                objectFit="cover"
                fill
                alt="img"
              ></Image>
            </Link>
            <Link
              href={`/teams/${userName}/ai-tools/generate`}
              className="relative items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]"
            >
              <Image
                src={`https://picsum.photos/id/4/1080/960`}
                objectFit="cover"
                fill
                alt="img"
              ></Image>
            </Link>
            <Link
              href={`/teams/${userName}/ai-tools/generate`}
              className="relative items-center aspect-[1.2] bg-gray-900 rounded-[8px] flex-col justify-center pt-[24px] px-[24px] pb-[16px]  [@media(max-width:1200px)]:hidden"
            >
              <Image
                src={`https://picsum.photos/id/5/1080/960`}
                objectFit="cover"
                fill
                alt="img"
              ></Image>
            </Link>
          </div>
        </div>
        <div className="min-w-0 flex flex-col gap-0">
          <div className="items-center flex justify-between">
            <div className="text-white text-[20px] font-bold">Tutorials</div>
          </div>
          <div className="flex gap-2 mt-[32px] pb-[4px]">
            <div className="cursor-pointer relative">
              <video controls className="w-full aspect-[16/9] rounded-[8px]">
                <source src="https://d2rbho9qhylu5v.cloudfront.net/bottom (1).mp4" />
              </video>
            </div>
            <div className="cursor-pointer relative">
              <video controls className="w-full aspect-[16/9] rounded-[8px]">
                <source src="https://d2rbho9qhylu5v.cloudfront.net/bottom (2).mp4" />
              </video>
            </div>
            <div className="cursor-pointer relative">
              <video controls className="w-full aspect-[16/9] rounded-[8px]">
                <source src="https://d2rbho9qhylu5v.cloudfront.net/bottom (3).mp4" />
              </video>
            </div>
            <div className="cursor-pointer relative">
              <video controls className="w-full aspect-[16/9] rounded-[8px]">
                <source src="https://d2rbho9qhylu5v.cloudfront.net/bottom (4).mp4" />
              </video>
            </div>
            <div className="cursor-pointer relative">
              <video controls className="w-full aspect-[16/9] rounded-[8px]">
                <source src="https://d2rbho9qhylu5v.cloudfront.net/bottom (5).mp4" />
              </video>
            </div>
            <div className="cursor-pointer relative">
              <video controls className="w-full aspect-[16/9] rounded-[8px]">
                <source src="https://d2rbho9qhylu5v.cloudfront.net/bottom (6).mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
