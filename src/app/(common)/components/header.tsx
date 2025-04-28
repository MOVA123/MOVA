"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./pushNav";
export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const onClose = () => {
    console.log(1111)
    setIsVisible(false);
  };
  const baseClassName = useMemo(() => [
    "fixed top-0 w-full z-50 transition-colors duration-200 bg-opacity-95 py-4 lg:py-0",
  ],[]);
  const [initClassName, setInitClassName] = useState([
    "[@media(min-width:1600px)]:bg-white [@media(min-width:1600px)]:text-black text-white",
  ]);

  const [buttonClassName, setButtonClassName] = useState([
    "px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center border border-white hover:bg-gray-200 hover:text-black [@media(min-width:1600px)]:border-black [@media(min-width:1600px)]:text-black [@media(min-width:1600px)]:hover:bg-gray-200 opacity-0 lg:opacity-100",
  ]);
  const buttonScrolledClassName =useMemo(()=> ["text-black bg-white"],[]);
  const scrolledClassName =useMemo(()=> ["bg-black text-white"],[]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [classNames, setClassNames] = useState({
    bg: [baseClassName, initClassName].join(" "),
    buttonBg: [buttonClassName].join(" "),
    hovered: false,
  });
  useEffect(() => {
    if (pathname === "/research") {
      const newInitClassName = [
        "[@media(min-width:1600px)]:bg-black [@media(min-width:1600px)]:text-white text-black",
      ];
      const newButtonClassName = [
        "px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center border border-white hover:bg-gray-200 hover:text-black [@media(min-width:1600px)]:border-black [@media(min-width:1600px)]:text-black [@media(min-width:1600px)]:hover:bg-gray-200 opacity-0 lg:opacity-100 !text-black !bg-white",
      ];

      if (JSON.stringify(initClassName) !== JSON.stringify(newInitClassName) || 
          JSON.stringify(buttonClassName) !== JSON.stringify(newButtonClassName)) {
        setInitClassName(newInitClassName);
        setButtonClassName(newButtonClassName);
        setClassNames({
          hovered: false,
          bg: [baseClassName, newInitClassName].join(" "),
          buttonBg: [newButtonClassName].join(" "),
        });
      }
    } else {
      const newInitClassName = [
        "[@media(min-width:1600px)]:bg-white [@media(min-width:1600px)]:text-black text-white",
      ];
      const newButtonClassName = [
        "px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center border border-white hover:bg-gray-200 hover:text-black [@media(min-width:1600px)]:border-black [@media(min-width:1600px)]:text-black [@media(min-width:1600px)]:hover:bg-gray-200 opacity-0 lg:opacity-100",
      ];
      
      if (JSON.stringify(initClassName) !== JSON.stringify(newInitClassName) || 
          JSON.stringify(buttonClassName) !== JSON.stringify(newButtonClassName)) {
        setInitClassName(newInitClassName);
        setButtonClassName(newButtonClassName);
        setClassNames({
          bg: [baseClassName, newInitClassName].join(" "),
          buttonBg: [newButtonClassName].join(" "),
          hovered: false,
        });
      }
    }
  }, [pathname, baseClassName]);

  useEffect(() => {
    const handleScroll = function () {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        setIsScrolled(true);
        setClassNames(prev => ({
          ...prev,
          hovered: false,
          bg: [baseClassName, scrolledClassName].join(" "),
          buttonBg: [buttonClassName, buttonScrolledClassName].join(" "),
        }));
      } else {
        setIsScrolled(false);
        setClassNames(prev => ({
          ...prev,
          hovered: false,
          bg: [baseClassName, initClassName].join(" "),
          buttonBg: [buttonClassName].join(" "),
        }));
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [baseClassName, buttonClassName, initClassName, scrolledClassName, buttonScrolledClassName]);
  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     const scrollTop =
  //       document.documentElement.scrollTop || document.body.scrollTop;
  //     if (scrollTop > 100) {
  //       setIsScrolled(true);
  //       setClassNames({
  //         hovered: false,
  //         bg: [baseClassName, scrolledClassName].join(" "),
  //         buttonBg: [buttonClassName, buttonScrolledClassName].join(" "),
  //       });
  //     } else {
  //       setIsScrolled(false);
  //       setClassNames({
  //         hovered: false,
  //         bg: [baseClassName, initClassName].join(" "),
  //         buttonBg: [buttonClassName].join(" "),
  //       });
  //     }
  //   });
  // });
  return (
    <>
      <header className={classNames.bg}>
        <div className="rw-container max-w-screen-large">
          <div className="flex items-center justify-between static z-10">
            <div className="lg:w-2/12 relative z-20">
              <Link
                className="hover:text-mediumGray translate-y-1 inline-flex relative items-center"
                href="/"
              >
                <span className="text-[2.25rem] font-black hover:text-slate-200">
                  MOVA
                </span>
              </Link>
            </div>
            <div>
              <nav
                onMouseOver={() =>
                  setClassNames({
                    hovered: true,
                    bg: [baseClassName, scrolledClassName].join(" "),
                    buttonBg: [buttonClassName, buttonScrolledClassName].join(
                      " "
                    ),
                  })
                }
                onMouseLeave={() =>
                  !isScrolled &&
                  setClassNames({
                    hovered: false,
                    bg: [baseClassName, initClassName].join(" "),
                    buttonBg: [buttonClassName].join(" "),
                  })
                }
              >
                <ul className="hidden lg:flex items-center justify-center relative z-20 cursor-pointer">
                  <li className="mb-5 pt-5 transition-all duration-200 false opacity-100 hover:opacity-60">
                    <Link className="rw-eyebrow px-4 py-2" href="/research">
                      Research
                    </Link>
                  </li>
                  <li className="mb-5 pt-5 transition-all duration-200 false opacity-100 hover:opacity-60">
                    <Link className="rw-eyebrow px-4 py-2" href="/product">
                      Product
                    </Link>
                  </li>
                  <li className="mb-5 pt-5 transition-all duration-200 false opacity-100 hover:opacity-60">
                    <Link className="rw-eyebrow px-4 py-2" href="/studios">
                      Studios
                    </Link>
                  </li>
                  <li className="mb-5 pt-5 transition-all duration-200 false opacity-100 hover:opacity-60">
                    <Link className="rw-eyebrow px-4 py-2" href="/about">
                      Company
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:w-2/12 flex justify-end items-center relative z-20">
              <Link className={classNames.buttonBg} target="_self" href="/login">
                Get Started
              </Link>
              <div
                className="block lg:hidden ml-3 p-2"
                onClick={() => setIsVisible(true)}
              >
                <svg
                  width="23"
                  height="9"
                  viewBox="0 0 23 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="23" height="1" className="fill-current"></rect>
                  <rect
                    y="4"
                    width="23"
                    height="1"
                    className="fill-current"
                  ></rect>
                  <rect
                    y="8"
                    width="23"
                    height="1"
                    className="fill-current"
                  ></rect>
                </svg>
              </div>
              <MobileNav isVisible={isVisible} onClose={onClose} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
