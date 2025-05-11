"use client";
import { useEffect, useState } from "react";

export default function StickyHead() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  });
  return (
    <div
      className={`hidden lg:block fixed top-16 w-full bg-gray-100 py-3 transition-opacity z-50 duration-300 ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="rw-container">
        <div className="flex items-center justify-center">
          <div className="flex items-center mr-6">
            <a href="#AI Film Festival" className="rw-bodycopy3 item-nav">
              AI Film Festival
            </a>
          </div>
          <div className="flex items-center mr-6">
            <a href="#Hundred Film Fund" className="rw-bodycopy3 item-nav">
              Hundred Film Fund
            </a>
          </div>
          <div className="flex items-center mr-6">
            <a href="#Creative Dialogues" className="rw-bodycopy3 item-nav">
              Creative Dialogues
            </a>
          </div>
          <div className="flex items-center mr-6">
            <a href="#Short Films" className="rw-bodycopy3 item-nav">
              Short Films
            </a>
          </div>
          <div className="flex items-center mr-6">
            <a href="#AIFF Panels" className="rw-bodycopy3 item-nav">
              AIFF Panels
            </a>
          </div>
          <div className="flex items-center mr-6">
            <a href="#Music Videos" className="rw-bodycopy3 item-nav">
              Music Videos
            </a>
          </div>
          <div className="flex items-center mr-6">
            <a href="#Physical Matter" className="rw-bodycopy3 item-nav">
              Physical Matter
            </a>
          </div>
          <div className="flex items-center mr-6">
            <a href="#Behind the Scenes" className="rw-bodycopy3 item-nav">
              Behind the Scenes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
