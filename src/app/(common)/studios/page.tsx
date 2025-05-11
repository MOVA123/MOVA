import Image from "next/image";
import Link from "next/link";
import Swipers from "./components/swipers";
import StickyHead from "./components/stickyHead";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Studios | Mova',
  icons: {
    icon: '/assets/icons/logo.ico'
  }
}
export default function Page() {
  return (
    <main>
      <section className="bg-white [@media(min-width:1600px)]:px-4">
        <div className="flex lg:aspect-[21/9] flex-col items-center justify-center text-white relative h-[450px] xl:h-auto lg:max-h-[900px] max-w-[1600px] w-full mx-auto [@media(min-width:1600px)]:mt-16 [@media(min-width:1600px)]:rounded-[3px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="https://d2rbho9qhylu5v.cloudfront.net/top_1.mp4" />
          </video>
        </div>
      </section>
      <StickyHead />
      <section className="bg-white relative">
        <div className="rw-container">
          <div className="flex flex-col lg:flex-row py-9">
            <div className="lg:w-1/2 order-last lg:order-first">
              <div className="text-[13px] text-gray-400">Index</div>
              <div className="rw-h5 flex flex-col items-start">
                <a
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-200"
                  href="#AI Film Festival"
                >
                  AI Film Festival
                </a>
                <a
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-200"
                  href="#Hundred Film Fund"
                >
                  Hundred Film Fund
                </a>
                <a
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-200"
                  href="#Creative Dialogues"
                >
                  Creative Dialogues
                </a>
                <a
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-200"
                  href="#Short Films"
                >
                  Short Films
                </a>
                <a
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-200"
                  href="#AIFF Panels"
                >
                  AIFF Panels
                </a>
                <a
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-200"
                  href="#Music Videos"
                >
                  Music Videos
                </a>
                <a
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-200"
                  href="#Physical Matter"
                >
                  Physical Matter
                </a>
                <a
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-200"
                  href="#Behind the Scenes"
                >
                  Behind the Scenes
                </a>
              </div>
              <svg
                className="mt-4"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7227 6.44686L8.22266 14.2745C8.12835 14.3729 7.99794 14.4286 7.86163 14.4286C7.72531 14.4286 7.59491 14.3729 7.5006 14.2745L0.000601487 6.44686L0.722657 5.75503L7.36163 12.684L7.36163 -3.65472e-07L8.36163 -3.21761e-07L8.36163 12.684L15.0006 5.75503L15.7227 6.44686Z"
                  fill="#0C0C0C"
                ></path>
              </svg>
            </div>
            <div className="lg:w-1/2 rw-bodycopy1 mb-10 lg:mb-0">
              Mova Studios is the production and entertainment arm of Mova.
              <br />
              <br />
              We work directly with filmmakers, studios, musicians, writers and independent artists
              <br className="hidden lg:block" />
              to help bring unique creative projects to life.
              <br />
              <br />
              If you have a project you&apos;d like to discuss, 
              <a className="underline" href="/contact">
                contact us
              </a>
              .<br />
              <br />
              <a className="underline" href="/studios#open-roles">
                View Roles
              </a>{" "}
              at Mova Studios.
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 relative py-3">
        <div className="rw-container">
          <div className="text-center text-[13px]">
            We’re looking for experienced screenwriters, animators, creative
            producers and business affairs specialists to join our team. If
            that’s you,
            <Link target="_blank" className="underline" href="#">
              reach out
            </Link>
            .
          </div>
        </div>
      </section>
      <div>
        <div>
          <section className="studios-section relative pt-12 lg:pt-16 overflow-hidden pb-12 lg:pb-20 bg-black text-white undefined">
            <div
              className="absolute -top-20 w-16 h-1 left-0"
              id="AI Film Festival"
            ></div>
            <div className="rw-container">
              <div className="flex justify-between mb-2.5 lg:mb-5">
                <div>
                  <div className="rw-h2 font-serif">AI Film Festival</div>
                  <div className="md:w-2/3 text-[18px]">
                  An annual celebration of the art and artists embracing new and emerging AI techniques for filmmaking.
                  Works showcased offer a glimpse at a new creative era.
                  </div>
                  <a className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-offBlack mt-3 mb-2">
                    Visit AIFF site
                  </a>
                </div>
              </div>
              <Link href="#">
                <div className="w-full aspect-[21/9] cursor-pointer rounded-[3px] group overflow-hidden">
                  <Image
                    className="!static object-cover w-full h-full group-hover:scale-105 transition-all duration-3s ease-linear"
                    alt=""
                    fill
                    src="https://picsum.photos/1080/960"
                  ></Image>
                </div>
              </Link>
            </div>
          </section>
        </div>
        <div>
          <section className="studios-section relative pt-12 lg:pt-16 overflow-hidden pb-12 lg:pb-20 bg-white text-offBlack undefined">
            <div
              className="absolute -top-20 w-16 h-1 left-0"
              id="Hundred Film Fund"
            ></div>
            <div className="rw-container">
              <div className="flex justify-between mb-2.5 lg:mb-5">
                <div>
                  <div className="rw-h2 font-serif">Hundred Film Fund</div>
                </div>
              </div>
              <div>
                <div className="w-full aspect-[21/9] cursor-pointer rounded-[3px] group overflow-hidden">
                  <Image
                    fill
                    alt=""
                    className="!static object-cover w-full h-full group-hover:scale-105 transition-all duration-3s ease-linear"
                    src="https://picsum.photos/id/1000/1080/960"
                  ></Image>
                </div>
                <div className="flex pr-10 mt-2.5 gap-4">
                  <div className="w-1/2">
                    <div className="rw-h6">Migration</div>
                    <div className="rw-bodycopy3 opacity-60 hidden"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 rw-bodycopy3">
                    <div>Director</div>
                    <div>Jeremy Higgins</div>
                    <div>Run-time</div>
                    <div>1:50</div>
                    <div>Year</div>
                    <div>2024</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-black py-20 text-white relative">
            <Image
              src="https://picsum.photos/id/1004/1080/960"
              alt=""
              fill
              className="absolute top-0 left-0 w-full h-full object-cover"
            ></Image>
            <div className="rw-container text-center relative z-10">
              <span className="italic font-serif mb-1 block text-lg">
              The Hundred Film Fund
              </span>
              <div className="rw-h4">
                Funding one hundred films <br /> for a new era of media.
              </div>
              <div className="rw-bodycopy1 mt-2">
                The Hundred Film Fund is an open call to creative professionals
                who have AI-augmented <br className="hidden lg:block" /> film
                projects in the pre- or post-production phases that are in need
                of funding.
              </div>
              <Link
                className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center bg-white text-black border border-white hover:text-slate-300 hover:bg-offWhite mt-4"
                target="_self"
                href="/hundred-film-fund"
              >
                Read More
              </Link>
            </div>
          </section>
        </div>
        <div>
          <section className="studios-section relative pt-12 lg:pt-16 overflow-hidden pb-12 lg:pb-20 bg-white text-black undefined">
            <div
              className="absolute -top-20 w-16 h-1 left-0"
              id="Creative Dialogues"
            ></div>
            <div className="rw-container">
              <div className="flex justify-between mb-2.5 lg:mb-5">
                <div>
                  <div className="rw-h2 font-serif">Creative Dialogues</div>
                  <div className="md:w-2/3 rw-bodycopy1">
                    A series of conversations exploring the relationship between
                    creativity and AI, with the artists who are actually using
                    it.
                  </div>
                </div>
              </div>
              <div className="relative mb-10 lg:mb-0">
                <Swipers
                  data={[
                    {
                      imgUrl: "https://picsum.photos/id/1001/1080/960",
                      title: "Episode 3: The Periphery",
                      subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "SixtyForty",
                      "Run-time": "6:14",
                      Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1002/1080/960",
                      title: "Episode 2: Big Space",
                      subtitle: "Featuring Anna Ridler & Lex Fefegha",
                      Director: "SixtyForty",
                      "Run-time": "6:02",
                      Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1001/1080/960",
                      title: "Episode 1: Indestructible",
                      subtitle: "Featuring Claire Evans & Stephen Marche",
                      Director: "SixtyForty",
                      "Run-time": "5:55",
                      Year: "2023",
                    },
                  ]}
                ></Swipers>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="border-t-2 studios-section relative pt-12 lg:pt-16 overflow-hidden pb-12 lg:pb-20 bg-white text-black undefined">
            <div
              className="absolute -top-20 w-16 h-1 left-0"
              id="Short Films"
            ></div>
            <div className="rw-container">
              <div className="flex justify-between mb-2.5 lg:mb-5">
                <div>
                  <div className="rw-h2 font-serif">Short Films</div>
                  {/* <div className="md:w-2/3 rw-bodycopy1">
                    A series of conversations exploring the relationship between
                    creativity and AI, with the artists who are actually using
                    it.
                  </div> */}
                </div>
              </div>
              <div className="relative mb-10 lg:mb-0">
                <Swipers
                  data={[
                    {
                      imgUrl: "https://picsum.photos/id/1003/1080/960",
                      title: "A Very Brief History of the Tools We Use to Tell Stories",
                      // subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "Dion Lee",
                      "Run-time": "1:47",
                      Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1004/1080/960",
                      title: "A Whole New Language",
                      // subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "Dion Lee",
                      "Run-time": "2:54",
                      Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1005/1080/960",
                      title: "The Human Feeling of Artificial Intelligence",
                      // subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "Dion Lee",
                      "Run-time": "3:11",
                      Year: "2024",
                    },
                  ]}
                ></Swipers>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="border-t-2 studios-section relative pt-12 lg:pt-16 overflow-hidden pb-12 lg:pb-20 bg-white text-black undefined">
            <div
              className="absolute -top-20 w-16 h-1 left-0"
              id="AIFF Panels"
            ></div>
            <div className="rw-container">
              <div className="flex justify-between mb-2.5 lg:mb-5">
                <div>
                  <div className="rw-h2 font-serif">AIFF Panels</div>
                  {/* <div className="md:w-2/3 rw-bodycopy1">
                    A series of conversations exploring the relationship between
                    creativity and AI, with the artists who are actually using
                    it.
                  </div> */}
                </div>
              </div>
              <div className="relative mb-10 lg:mb-0">
                <Swipers
                  data={[
                    {
                      imgUrl: "https://picsum.photos/id/1006/1080/960",
                      title: "AIFF 2024 Los Angeles Panel",
                      subtitle: "Paul Trillo, Joel Kuwahara, Claire Evans & Cristobal Valenzuela. Moderated by Dana Harris-Bridson.",
                      // Director: "Dion Lee",
                      // "Run-time": "1:47",
                      Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1009/1080/960",
                      title: "AIFF 2024 New York In Conversation",
                      subtitle: "Jane Rosenthal & Cristóbal Valenzuela. Moderated by Dana Harris-Bridson.",
                      // Director: "Dion Lee",
                      // "Run-time": "1:47",
                      Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1008/1080/960",
                      title: "AIFF 2023 New York Panel",
                      subtitle: "Paul Trillo, Souki Mehdaoui, Cleo Abram, Darren Aronofsky & Cristóbal Valenzuela.",
                      // Director: "Dion Lee",
                      // "Run-time": "1:47",
                      Year: "2023",
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="border-t-2 studios-section relative pt-12 lg:pt-16 overflow-hidden pb-12 lg:pb-20 bg-white text-black undefined">
            <div
              className="absolute -top-20 w-16 h-1 left-0"
              id="Music Videos"
            ></div>
            <div className="rw-container">
              <div className="flex justify-between mb-2.5 lg:mb-5">
                <div>
                  <div className="rw-h2 font-serif">Music Videos</div>
                  {/* <div className="md:w-2/3 rw-bodycopy1">
                    A series of conversations exploring the relationship between
                    creativity and AI, with the artists who are actually using
                    it.
                  </div> */}
                </div>
              </div>
              <div className="relative mb-10 lg:mb-0">
                <Swipers
                  data={[
                    {
                      imgUrl: "https://picsum.photos/id/1009/1080/960",
                      title: "Smile by Ta-ku",
                      // subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "Ta-ku",
                      "Run-time": "3:01",
                      Year: "2023",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1010/1080/960",
                      title: "After Light",
                      // subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "Vallée Duhamel",
                      "Run-time": "1:27",
                      Year: "2023",
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="border-t-2 studios-section relative pt-12 lg:pt-16 overflow-hidden pb-12 lg:pb-20 bg-white text-black undefined">
            <div
              className="absolute -top-20 w-16 h-1 left-0"
              id="Physical Matter"
            ></div>
            <div className="rw-container">
              <div className="flex justify-between mb-2.5 lg:mb-5">
                <div>
                  <div className="rw-h2 font-serif">Physical Matter</div>
                  <div className="md:w-2/3 rw-bodycopy1">
                    An ever-evolving collection of physical items designed to embody and celebrate the act of human creativity.
                  </div>
                </div>
              </div>
              <div className="relative mb-10 lg:mb-0">
                <Swipers
                  data={[
                    {
                      imgUrl: "https://picsum.photos/id/1012/1080/960",
                      title: "Episode 3: The Periphery",
                      subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "Dion Lee",
                      "Run-time": "1:47",
                      Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1013/1080/960",
                      title: "Episode 3: The Periphery",
                      subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "Dion Lee",
                      "Run-time": "1:47",
                      Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1014/1080/960",
                      title: "Episode 3: The Periphery",
                      subtitle: "Featuring Claire Hentschker & Golan Levin",
                      Director: "Dion Lee",
                      "Run-time": "1:47",
                      Year: "2024",
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="border-t-2 studios-section relative pt-12 lg:pt-16 overflow-hidden pb-12 lg:pb-20 bg-white text-black undefined">
            <div
              className="absolute -top-20 w-16 h-1 left-0"
              id="Behind the Scenes"
            ></div>
            <div className="rw-container">
              <div className="flex justify-between mb-2.5 lg:mb-5">
                <div>
                  <div className="rw-h2 font-serif">Behind the Scenes</div>
                  {/* <div className="md:w-2/3 rw-bodycopy1">
                    A series of conversations exploring the relationship between
                    creativity and AI, with the artists who are actually using
                    it.
                  </div> */}
                </div>
              </div>
              <div className="relative mb-10 lg:mb-0">
                <Swipers
                  data={[
                    {
                      imgUrl: "https://picsum.photos/id/1015/1080/960",
                      title: "",
                      // subtitle: "Featuring Claire Hentschker & Golan Levin",
                      // Director: "Dion Lee",
                      // "Run-time": "1:47",
                      // Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1016/1080/960",
                      title: "",
                      // subtitle: "Featuring Claire Hentschker & Golan Levin",
                      // Director: "Dion Lee",
                      // "Run-time": "1:47",
                      // Year: "2024",
                    },
                    {
                      imgUrl: "https://picsum.photos/id/1018/1080/960",
                      title: "",
                      // subtitle: "Featuring Claire Hentschker & Golan Levin",
                      // Director: "Dion Lee",
                      // "Run-time": "1:47",
                      // Year: "2024",
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
