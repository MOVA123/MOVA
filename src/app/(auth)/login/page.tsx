"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Page() {
  const router = useRouter()
  const getUuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  const guestLogin = () => {
    const userId = "guest" + getUuid(),
      guestInfo = { type: "guest", userId };
    localStorage.setItem("guestInfo", JSON.stringify(guestInfo));
    router.push(`/teams/${userId}/dashboard`)
  };
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div id="App" className="w-full h-full bg-[#151515]">
        <div className="flex flex-col h-full w-full" id="MainWrapper">
          <div
            id="MainContent"
            className="flex flex-1 flex-col min-h-0 overflow-hidden relative "
          >
            <div
              id="index_content"
              className="bg-white flex flex-row h-full w-full"
            >
              <div
                className="[@media(min-width:768px)]:flex bg-black hidden flex-col h-full justify-center overflow-hidden relative text-center w-[50%] "
                id="leftContent"
              >
                <div className="h-full left-0 opacity-70 overflow-hidden absolute top-0 w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-full"
                  >
                    <source src="https://d2rbho9qhylu5v.cloudfront.net/loginPage.mp4" />
                  </video>
                </div>
                <div className="relative py-0 px-[60px] font-serif text-white ">
                  <h1 className="text-[48px] not-italic font-medium ">
                    Everything you need,
                    <br /> to make anything you want.
                  </h1>
                  <p className="text-[16px] px-[20%] pt-4 not-italic">
                    Dozens of creative tools to ideate, generate and edit
                    content like never before.
                  </p>
                </div>
                
                <div className="left-[20px] absolute top-[20px] text-white font-extrabold text-xl ">
                  <Image className="max-w-[60px]" src="/assets/icons/logo.ico" alt="Mova Logo" width={60} height={60} />
                  MOVA
                </div>
              </div>
              <div className="items-center flex flex-1 flex-col justify-center">
                <div className="overflow-y-scroll py-0 px-login">
                  <div className="h-full min-w-[330px] w-full relative">
                    <div className="min-w-0 flex flex-col">
                      <div className="min-w-0 flex mb-[16px] flex-col gap-[8px]">
                        <h2 className="text-[1.8em] font-semibold ">
                          Welcome!
                        </h2>
                        <span className="text-slate-700">
                          Don&apos;t have an account?
                          <button className="text-blue-600"
                            onClick={(e) => {
                              e.preventDefault();
                              alert("Will come soon, you can try Guest login please!");
                            }}
                          >
                            sign up for free
                          </button>
                        </span>
                      </div>
                      <form className="flex mt-[8px] flex-col">
                        <div className="flex flex-col gap-[8px]">
                          <input
                            type="text"
                            className="border-[1px] p-4 rounded-[8px] focus-visible:outline-1 focus-visible:outline-blue-600"
                            placeholder="Username or Email"
                          />
                          <input
                            type="password"
                            className="border-[1px] p-4 rounded-[8px] focus-visible:outline-1 focus-visible:outline-blue-600"
                            placeholder="Password"
                          />
                        </div>
                        <div className="grow p-[8px] min-h-[14px] text-[12px] leading-[1.1] text-orange-500"></div>
                        <button
                          type="submit"
                          className="bg-black h-[50px] rounded-[25px] font-semibold tracking-[0.01em]"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("Will come soon, you can try Guest login please!");
                          }}
                        >
                          <span className="relative">
                            <span className="text-white flex gap-[4px] justify-center items-center ">
                              Log in
                            </span>
                          </span>
                        </button>
                      </form>
                      <div className="flex mt-[8px] gap-4 flex-col">
                        <div className="relative border-b border-gray-100 h-[20px] text-center w-full mb-[16px]">
                          <div className="w-full h-[50%] relative">
                            <div
                              className="absolute bg-white py-0 px-[16px]"
                              style={{
                                top: "calc(50% + 6px)",
                                left: "calc(50% - 25px)",
                              }}
                            >
                              <span className="text-slate-700 bg-white rounded-[90px] text-[12px] font-serif leading-[16px] break-words max-w-full max-h-full">
                                OR
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Guest login */}
                        <button
                          className="flex p-0 h-[50px] rounded-[25px] border border-gray-300 bg-white relative cursor-pointer overflow-hidden hover:border-blue-600"
                          onClick={() => guestLogin()}
                        >
                          <span className="absolute top-0 left-0 h-[50px] w-[50px] flex justify-center items-center">
                            <svg
                              className="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="2678"
                              width="1.5em"
                              height="1.5em"
                            >
                              <path
                                d="M761.8 600.9c-64 57.6-147.2 96-243.2 96s-179.2-38.4-249.6-96C108.8 684.2 0 793 0 991.4H1024.2c0-198.4-108.8-300.8-262.4-390.5z m-249.7 19.2c160 0 288.1-134.4 288.1-294.5 0-160-128-294.5-288.1-294.5s-288 134.6-288 294.6c0 166.4 134.4 294.4 288 294.4z m0 0"
                                fill=""
                                p-id="2679"
                              ></path>
                            </svg>
                          </span>
                          <span className="flex justify-center items-center w-full h-full text-slate-700 font-bold text-[14px]">
                            Guest login
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
