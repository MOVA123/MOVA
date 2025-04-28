"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MobileNav({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const [isRendering, setIsRendering] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isVisible) {
      let left = 100;
      setIsRendering(true);
      const frame = () => {
        left -= 4;
        if (elementRef.current) elementRef.current.style.left = `${left}vw`;
        if (left > 0) {
          requestAnimationFrame(frame);
        }
      };
      requestAnimationFrame(frame);
    } else {
      let left = 0;
      const frame = () => {
        left += 4;
        if (elementRef.current) elementRef.current.style.left = `${left}vw`;
        if (left < 100) {
          requestAnimationFrame(frame);
        } else {
          setIsRendering(false);
        }
      };
      requestAnimationFrame(frame);
    }
  }, [isVisible]);
  return (
    isRendering && (
      <div
        ref={elementRef}
        className="fixed top-0 left-0 w-full h-full bg-white z-50 text-offBlack p-6 overflow-y-scroll"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="text-black font-extrabold text-lg cursor-pointer">
            <Link href="/">MOVA</Link>
          </div>
          <div className="p-3" onClick={() => onClose()}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.97 16.26L9.19 8.49L16.97 0.71L16.26 0L8.49 7.78L0.71 0L0 0.71L7.78 8.49L0 16.26L0.71 16.97L8.49 9.19L16.26 16.97L16.97 16.26Z"
                fill="#0C0C0C"
              ></path>
            </svg>
          </div>
        </div>
        <div className="pt-9">
          <div className="border-b border-mediumGray py-3">
            <div className="flex justify-between cursor-pointer items-center">
              <div className="rw-h2 text-black">
                <Link href="/research">Research</Link>
              </div>
            </div>
          </div>
          <div className="border-b border-mediumGray py-3">
            <div className="flex justify-between cursor-pointer items-center">
              <div className="rw-h2 text-black">
                <Link href="/product">product</Link>
              </div>
            </div>
          </div>
          <div className="border-b border-mediumGray py-3">
            <div className="flex justify-between cursor-pointer items-center">
              <div className="rw-h2 text-black">
                <Link href="/studios">studios</Link>
              </div>
            </div>
          </div>
          <div className="border-b border-mediumGray py-3">
            <div className="flex justify-between cursor-pointer items-center">
              <div className="rw-h2 text-black">
                <Link href="/about">company</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
