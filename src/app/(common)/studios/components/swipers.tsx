"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
// import { useEffect, useState } from "react";
export default function Swipers({
  data = [],
}: {
  data: {
    imgUrl: string;
    title: string;
    subtitle?: string;
    Director?: string;
    "Run-time"?: string;
    Year?: string;
  }[];
}) {
  function cyrb53(str: string, seed = 0) {
    let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h2 = Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    return (
      (h2 >>> 0).toString(16).padStart(8, "0") +
      (h1 >>> 0).toString(16).padStart(8, "0")
    );
  }
  const id = cyrb53(JSON.stringify(data));
  const prevButton = `prev-button-${id}`;
  const nextButton = `next-button-${id}`;
  return (
    <>
      <div className="flex gap-3 lg:mt-0 absolute left-0 md:left-auto -bottom-12 md:bottom-auto md:right-0 md:-top-14 z-[1]">
        <button
          className={`w-9 h-9 flex items-center justify-center hover:bg-gray-200 bg-opacity-90 transition-all duration-150 relative hover:-translate-x-1 bg-gray-100 ${prevButton}`}
        >
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.48283 16.2896L0.655199 8.78955C0.556771 8.69524 0.501116 8.56484 0.501116 8.42852C0.501116 8.29221 0.556771 8.1618 0.655199 8.06749L8.48283 0.567496L9.17466 1.28955L2.24567 7.92852L14.9297 7.92852L14.9297 8.92852L2.24567 8.92852L9.17466 15.5675L8.48283 16.2896Z"
              fill="#0C0C0C"
            ></path>
          </svg>
        </button>
        <button
          className={`w-9 h-9 flex items-center justify-center hover:bg-gray-200 bg-opacity-90 transition-all duration-150 relative hover:translate-x-1 bg-gray-100 ${nextButton}`}
        >
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.51717 0.710449L14.3448 8.21045C14.4432 8.30476 14.4989 8.43516 14.4989 8.57148C14.4989 8.70779 14.4432 8.8382 14.3448 8.9325L6.51718 16.4325L5.82534 15.7104L12.7543 9.07148L0.0703125 9.07148V8.07148L12.7543 8.07148L5.82534 1.43251L6.51717 0.710449Z"
              fill="#0C0C0C"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.${nextButton}`,
            prevEl: `.${prevButton}`,
          }}
          slidesPerView="auto"
          spaceBetween={10}
        >
          {data.map((e, idx) => (
            <SwiperSlide key={idx} className="!w-auto">
              <div className="aspect-[1.89] h-[230px] sm:h-[385px] lg:aspect-video lg:h-[540px] rounded-[3px] cursor-pointer group overflow-hidden">
                <Image
                  src={e.imgUrl}
                  alt="image"
                  fill
                  className="!static w-full h-full object-cover rounded-[3px] scale-[1.01] group-hover:scale-105 transition-all duration-&lsqb;s&rsqb; ease-linear"
                />
              </div>
              <div className="flex justify-between lg:pr-10 mt-2.5 gap-4">
                <div>
                  <div className="rw-h6">{e.title}</div>
                  <div className="text-[13px] opacity-60">{e.subtitle}</div>
                </div>
                <div className="pr-4">
                  <div className="grid grid-cols-2 gap-x-2 rw-bodycopy3">
                    {e.Director ? (
                      <>
                        <div>Director</div>
                        <div className="lg:max-w-[200px]">{e.Director}</div>
                      </>
                    ) : (
                      <></>
                    )}
                    {e["Run-time"] ? (
                      <>
                        <div>Run-time</div>
                        <div>{e["Run-time"]}</div>
                      </>
                    ) : (
                      <></>
                    )}
                    {e.Year ? (
                      <>
                        <div>Year</div>
                        <div>{e.Year}</div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
