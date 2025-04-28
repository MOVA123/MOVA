import Image from "next/image";
import Link from "next/link";
import Swipers from "./components/swiper";
export default function Page() {
  return (
    <main>
      <section className="bg-white [@media(min-width:1600px)]:px-4">
        <div className="flex lg:aspect-video flex-col items-center justify-center text-white relative xl:h-auto lg:max-h-[900px] w-full [@media(min-width:1600px)]:w-auto mx-auto [@media(min-width:1600px)]:mt-16 [@media(min-width:1600px)]:rounded-[3px] overflow-hidden h-[470px]">
          <Image
            src="https://picsum.photos/id/100/1080/960"
            alt="img"
            fill
            className="object-cover"
          ></Image>
          <div className="relative text-center w-full mb-6 lg:mb-12 mt-auto">
            <div className="rw-container">
              <div className="mx-auto w-full">
                <h1 className="rw-h1 font-serif">
                Advancing creativity
                  <br className="hidden lg:block" />
                  with artificial intelligence.
                </h1>
                <div className="lg:w-2/3 mx-auto">
                  <div className="text-[18px] mb-5"></div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-1.5">
                    <Link
                      className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center bg-white text-black border border-white hover:text-gray-400 hover:bg-gray-100 "
                      target="_self"
                      href="#"
                    >
                      View Careers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="rw-container">
          <div className="flex flex-col lg:flex-row rw-bodycopy1 lg:w-7/12 mx-auto gap-6 lg:gap-16 pt-16 lg:pt-40 pb-16 lg:pb-40">
            <div className="lg:w-1/2">
              We believe that AI systems applied to audiovisual content will
              forever change art and creativity.
              <br />
              <br />
              Since 2018, Mova has been at the forefront of AI media ensuring
              that the future of content creation is accessible, controllable
              and empowering for everyone.
            </div>
            <div className="lg:w-1/2">
              We bring research into production within weeks instead of years,
              and we embed research into our engineering and product teams,
              instead of having each team work in silos. We are laser-focused on
              applying research to product development and therefore broadening
              access to AI-backed experiences for our users.
            </div>
          </div>
          <div className="lg:w-10/12 mx-auto pb-12 lg:pb-24">
            <div className="relative">
              <video
                className="rounded-[3px] w-full object-cover"
                poster="https://picsum.photos/id/270/1080/960"
              >
                <source src="https://d2rbho9qhylu5v.cloudfront.net/top_1.mp4" type="video/mp4" />
              </video>
              <div className="w-10 lg:w-20 absolute top-[50%] mt-[-33px] ml-[-33px] left-[50%] cursor-pointer hover:scale-105 transition-transform duration-200">
                <svg
                  width="66"
                  height="66"
                  viewBox="0 0 66 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="66" height="66" fill="white"></rect>
                  <path
                    d="M40.9696 33.7926L30.6097 41.7618C29.9521 42.2676 29 41.7988 29 40.9691V25.0309C29 24.2012 29.9521 23.7324 30.6097 24.2382L40.9696 32.2074C41.49 32.6077 41.49 33.3923 40.9696 33.7926Z"
                    fill="#0C0C0C"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-10 lg:pt-20">
        <div className="rw-container">
          <div className="text-center w-14/16 mx-auto rw-h3 mb-24">
            We have offices in New York <br className="block lg:hidden" /> and
            San Francisco. <br /> With team members working remotely from all
            over the world.
          </div>
        </div>
        <div className="relative cursor-grab active:cursor-grabbing overflow-hidden">
          <div>
            <Swipers
              data={[
                { url: "https://picsum.photos/id/11/1080/960" },
                { url: "https://picsum.photos/id/12/1080/960" },
                { url: "https://picsum.photos/id/13/1080/960" },
                { url: "https://picsum.photos/id/14/1080/960" },
                { url: "https://picsum.photos/id/15/1080/960" },
                { url: "https://picsum.photos/id/16/1080/960" },
                { url: "https://picsum.photos/id/17/1080/960" },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start bg-black text-white relative pt-20 lg:pt-24 pb-10">
        <div className="rw-container">
          <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto">
            <div className="lg:w-1/2 mb-4">
              <div className="rw-eyebrow mb-2">Our Research</div>
              <div className="rw-h4">
                We are pioneering general-purpose multimodal simulators of the
                world.
              </div>
            </div>
            <Link
              className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-black "
              target="_self"
              href="#"
            >
              Read more
            </Link>
            <div className="grid md:grid-cols-3 w-full mt-16 lg:mt-20 gap-9 md:gap-2.5">
              <Link className="group" target="_self" href="#">
                <div className="aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    alt="img"
                    className="!static w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-&lsqb;3s&rsqb; ease-linear"
                    src="https://picsum.photos/id/403/1080/960"
                  />
                </div>
                <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                  Introducing Frames
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-darkGrayAlt">
                    Research /
                  </div>
                  <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                    November 26, 2024
                  </div>
                </div>
              </Link>
              <Link className="group" target="_self" href="#">
                <div className="aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    alt="img"
                    className="!static w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-&lsqb;3s&rsqb; ease-linear"
                    src="https://picsum.photos/id/404/1080/960"
                  />
                </div>
                <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                  Introducing Frames
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-darkGrayAlt">
                    Research /
                  </div>
                  <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                    December 26, 2023
                  </div>
                </div>
              </Link>
              <Link className="group" target="_self" href="#">
                <div className="aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    alt="img"
                    className="!static w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-&lsqb;3s&rsqb; ease-linear"
                    src="https://picsum.photos/id/406/1080/960"
                  />
                </div>
                <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                Introducing General World Models
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-darkGrayAlt">
                    Research /
                  </div>
                  <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                  November 12, 2023
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
