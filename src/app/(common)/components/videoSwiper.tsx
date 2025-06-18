"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import type Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
export default function VideoSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<Swiper | null>(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
      swiperRef.current.slideTo(activeIndex, 300, false); // 参数说明：索引、速度、是否触发回调
    }
  }, [activeIndex]);
  const videos = [
    {
      href: "/login",
      title: "Frames",
      source: "https://d2rbho9qhylu5v.cloudfront.net/top_2.mp4",
      subTitle: (
        <div className="mt-auto">
          A series of short films made with Gen-3, our next-generation series
          <br className="hidden lg:block" />
          of AI models for media generation and world consistency.
        </div>
      ),
    },
    {
      source: "https://d2rbho9qhylu5v.cloudfront.net/top_1.mp4",
      title: "Gen-3 Alpha",
      href: "/login",
      subTitle: (
        <div className="mt-auto ">
          A series of short films made with Gen-3, our next-generation series
          <br className="hidden lg:block" />
          of AI models for media generation and world consistency.
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="inset-0 w-auto h-full">
        <SwiperReact
          modules={[Autoplay]}
          slidesPerView="auto"
          autoplay={{
            delay: 10000,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChangeTransitionEnd={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="w-full h-full"
        >
          {videos.map((videoIndex, idx) => {
            return (
              <SwiperSlide key={idx}>
                <video
                  className="object-cover w-full h-full"
                  autoPlay
                  loop
                  muted
                >
                  <source src={videoIndex.source} />
                </video>
              </SwiperSlide>
            );
          })}
        </SwiperReact>
      </div>

      <div className="radial-gradient-overlay absolute inset-0 opacity-20"></div>
      <div className="absolute bottom-5 lg:bottom-10 left-5 lg:left-9 z-10">
        <div className="mb-4">MADE WITH GEN-3</div>
        <div
          className="titles-container"
          role="tablist"
          aria-label="Hero Titles"
          tabIndex={0}
        >
          {videos.map((videoIndex, idx) => {
            return (
              <div key={idx} className="relative">
                <Link
                  className={`!leading-[.9] font-serif cursor-pointer transition-all duration-300 hover:text-white text-[#EFEEE6]/60 rw-h2 ${
                    idx === activeIndex ? "text-white" : ""
                  }`}
                  role="tab"
                  aria-selected={activeIndex === idx ? "true" : "false"}
                  tabIndex={activeIndex === idx ? 0 : -1}
                  href={videoIndex.href}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  {videoIndex.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="lg:h-12 my-3 mb-3.5 flex w-7/12 lg:w-full">
          {videos[activeIndex].subTitle}
        </div>
        <div className="flex gap-3">
          <Link
            className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center bg-white text-black border border-white hover:text-darkGrayAlt hover:bg-salute-200 "
            target="_self"
            href="/login"
          >
            Try Dollo Now
            <div className="ml-2 mt-px w-5 h-5 relative">
              <Image src="/assets/icons/right-arrow.svg" fill alt=""></Image>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
