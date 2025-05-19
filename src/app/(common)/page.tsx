import Link from "next/link";
import VideoSwiper from "./components/videoSwiper";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ReelMagic',
  icons: {
    icon: '/assets/icons/logo.ico'
  }
}

export default function Page() {
  return (
    <main>
      <section className="bg-white [@media(min-width:1600px)]:px-4">
        <div className="flex lg:aspect-video flex-col items-center justify-center text-white relative xl:h-auto lg:max-h-[900px] w-full [@media(min-width:1600px)]:w-auto mx-auto [@media(min-width:1600px)]:mt-16 [@media(min-width:1600px)]:rounded-[3px] overflow-hidden h-[90vh] max-h-[660px] min-h-[500px]">
          <VideoSwiper />
        </div>
      </section>
      <section
        data-header-color="dark"
        className="bg-white w-full pt-16 lg:pt-28 pb-8"
      >
        <div className="ml-auto mr-auto pl-5 pr-5 max-w-[1600px]">
          <div className="text-center mb-10 lg:mb-20">
            <div className="rw-h2 mb-2 lg:mb-0 font-serif">
              Advancing creativity
              <br className="hidden lg:block" /> with artificial intelligence.
            </div>
            <div className="lg:w-1/2 mx-auto rw-bodycopy2 mb-5">
              ReelMagic is an applied research company building the next era of
              art,
              <br className="hidden lg:block" /> entertainment and human
              creativity.
            </div>
            <a
              className="px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-black border border-black hover:bg-black hover:text-white "
              target="_self"
              href="/product"
            >
              Our Tools
            </a>
          </div>
          <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto mb-16 lg:mb-24">
            <div className="text-[22px] mb-5 ">News</div>
            <div className="grid md:grid-cols-3 w-full gap-9 md:gap-2.5">
              <a
                className="group"
                target="_self"
                href="#"
              >
                <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    alt=""
                    className="w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-3s ease-linear"
                    src="https://picsum.photos/1080/721"
                  />
                </div>
                <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                  ReelMagic Launches Global Talent Network
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-darkGrayAlt">
                    News /
                  </div>
                  <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                    December 19, 2024
                  </div>
                </div>
              </a>
              <a
                className="group"
                target="_self"
                href="#"
              >
                <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    alt=""
                    className="object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-3s ease-linear"
                    src="https://picsum.photos/1080/960"
                  />
                </div>
                <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                  ReelMagic Partners with Lionsgate
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-darkGrayAlt">
                    News /
                  </div>
                  <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                    September 19, 2024
                  </div>
                </div>
              </a>
              <a
                className="group"
                target="_self"
                href="#"
              >
                <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    alt=""
                    className="object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-3s ease-linear"
                    src="https://picsum.photos/1080/720"
                  />
                </div>
                <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                  Exploring the Future of Filmmaking with Tribeca Festival 2024
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-darkGrayAlt">
                    News /
                  </div>
                  <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                    May 11, 2024
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-slate-100 xl:w-14/16 mx-auto p-10 flex flex-col lg:flex-row items-center justify-between rounded-[3px]">
            <div className="mb-6 lg:mb-0">
              <div className="rw-eyebrow">Latest Update</div>
              <div className="rw-h5">
                Introducing Frames: An image generation model offering
                unprecedented stylistic control.
              </div>
            </div>
            <Link
              className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-black border border-black hover:bg-black hover:text-white "
              target="_self"
              href="#"
            >
              Try Now
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start bg-black text-white relative pt-20 lg:pt-24 pb-10">
        <div className="rw-container">
          <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto">
            <div className="lg:w-1/2 mb-4">
              <div className="[@media(min-width:1600px)]:text-[11px] font-medium">
                Our Research
              </div>
              <div className="rw-h4 text-[22px]">
                We are pioneering general-purpose multimodal simulators of the
                world.
              </div>
            </div>
            <Link
              href="#"
              className="px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-black "
            >
              Read more
            </Link>
            <div className="grid md:grid-cols-3 w-full mt-16 lg:mt-20 gap-9 md:gap-2.5">
              <Link href="#">
                <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    className="!static w-full h-full object-cover scale-[1.01] transform-gpu hover:scale-110 transition-all duration-1000 ease-linear"
                    src="https://picsum.photos/id/237/1080/960"
                    fill
                    alt=""
                    objectFit="cover"
                  />
                </div>
                <div className="pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                  Introducing Gen-3
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-slate-400">
                    Research/
                  </div>
                  <div className="inline rw-bodycopy3 text-slate-400 ml-1">
                    April 1, 2025
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    className="w-full h-full object-cover scale-[1.01] transform-gpu hover:scale-110 transition-all duration-1000 ease-linear"
                    src="https://picsum.photos/id/239/1080/960"
                    fill
                    alt=""
                    objectFit="cover"
                  />
                </div>
                <div className="pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                  Introducing Frames
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-slate-400">
                    Research/
                  </div>
                  <div className="inline rw-bodycopy3 text-slate-400 ml-1">
                    November 26, 2024
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                  <Image
                    className="w-full h-full object-cover scale-[1.01] transform-gpu hover:scale-110 transition-all duration-1000 ease-linear"
                    objectFit="cover"
                    src="https://picsum.photos/id/240/1080/960"
                    fill
                    alt=""
                  />
                </div>
                <div className="pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                  Introducing General World Models
                </div>
                <div className="mt-1">
                  <div className="inline rw-bodycopy3 text-slate-400">
                    Research/
                  </div>
                  <div className="inline rw-bodycopy3 text-slate-400 ml-1">
                    December 12, 2023
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white w-full pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="ml-auto mr-auto pl-5 pr-5 max-w-[1600px]">
          <div className="flex items-center justify-center mb-6">
            <b>ReelMagic</b> Studio
          </div>
          <div className="text-52px font-serif leading-none text-center mb-12 rw-h1">
            For anyone with <br /> a story to tell.
          </div>
          <div className="lg:w-8/12 mx-auto">
            <div className="w-full relative">
              <div className="absolute h-40 w-full bg-gradient-to-b from-transparent to-black"></div>
              <div className="aspect-video relative rounded-[3px] overflow-hidden group">
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster="https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/Homepage_006.webp"
                >
                  <source
                    src="https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/Homepage_006.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-offBlack "
                    target="_self"
                    href="/studios"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 lg:mt-20 min-large:text-[36px] text-[22px]">
            ReelMagic Studios is the entertainment and production arm of ReelMagic,
            <br className="hidden lg:block" />
            dedicated to productin and fnding films, documentaries,
            <br className="hidden lg:block" />
            printed publications, music videos and other media.
          </div>
          <div className="flex justify-center mt-5">
            <Link
              href="#"
              className="text-[16px] [@media(min-witdh:1600px)]:text-[14px] px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-black "
            >
              Go to ReelMagic Studios
            </Link>
          </div>
          <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto">
            <div className="mt-24 lg:mt-48 mb-4 lg:mb-8 [@media(min-witdh:1600px)]:text-[30px] [@media(min-width:768px)]:text-[24px] text-[26px]">
              ReelMagic Studios Initiatives
            </div>
            <div className="grid md:grid-cols-3 w-full gap-9 md:gap-2.5">
              {[1, 2, 3].map((e) => (
                <Link className="group" key={e} href="#">
                  <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-3s ease-linear"
                      fill
                      src={`https://picsum.photos/id/${100 + e}/1080/960`}
                      alt=""
                    ></Image>
                  </div>
                  {/* <div className="text-[22px] pr-5 hover:opacity-70 transition-opacity duration-200 flex items-center">
                    AI Film Festival
                    <span className="rw-bodycopy1 ml-3.5">→</span>
                  </div>
                  <div className="text-slate-400 mt-1 lg:pr-20">
                    An annual celebration of the art and artists at the forefront of storytelling.
                  </div> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-20 bg-white">
        <div className="max-w-[1600px] ml-auto mr-auto pl-5 pr-5">
          <div className="text-center">
            <div className="mb-5 rw-h1 font-serif">
              How the world&apos;s top creatives
              <br />
              are using ReelMagic.
            </div>
            <Link
              href="#"
              className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-black border border-offBlack hover:bg-black hover:text-white "
            >
              More Custormer Stories
            </Link>
          </div>
          <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto pb-12 lg:pb-24">
            <div className="grid md:grid-cols-3 w-full mt-16 lg:mt-20 gap-9 md:gap-2.5">
              {[1, 2, 3].map((e) => (
                <Link className="group" href="#" key={e}>
                  <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-3s ease-linear"
                      src={`https://picsum.photos/id/${200 + e}/1080/960 `}
                      alt=""
                      fill
                    ></Image>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-16 lg:pb-32">
          <div className="text-center mb-7 [@media(min-witdh:1600px)]:text-[13px] text-[14px] text-slate-400">
            Select Enterprise Partners
          </div>
          <div className="max-w-[1600px] ml-auto mr-auto pl-5 pr-5">
            <div className="w-full md:w-12/16 lg:w-14/16 mx-auto">
              <div className="grid grid-cols-3 lg:grid-cols-6 items-center place-items-center justify-center gap-y-3 gap-x-3 md:gap-24 opacity-70 text-slate-400">
                <div className="max-w-[110px] lg:max-w-[90px] flex items-center justify-center relative w-12 h-12">
                  <svg className="w-full" viewBox="0 0 88 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.667969 1.21578H9.91544C12.1296 1.21578 14.3033 1.38072 16.4562 1.73112C18.5887 2.06099 20.5982 3.00812 22.4844 4.53253C24.2476 6.03641 25.6216 7.95191 26.6059 10.2798C27.6107 12.6072 28.1641 14.9967 28.2462 17.4689C28.2871 17.6339 28.3075 17.8193 28.3075 18.0048V18.9109C28.2462 21.4865 27.7128 23.9576 26.7081 26.3676C25.7237 28.7577 24.2677 30.7147 22.3403 32.2589C20.6387 33.5157 18.8338 34.3195 16.8863 34.6901C14.9589 35.0815 12.9698 35.2875 10.9607 35.3696H0.667969V1.21578ZM7.43456 29.2104C7.66003 29.2104 7.90593 29.2104 8.17226 29.2313C8.43859 29.2522 8.72608 29.2522 9.01284 29.2522H9.56666C9.76237 29.2929 9.96168 29.3134 10.1613 29.3134H10.7152C11.0435 29.3134 11.3711 29.2932 11.6995 29.2724C12.0278 29.2724 12.3555 29.2313 12.7042 29.2101C13.6961 29.124 14.6779 28.9446 15.6364 28.6749C16.5799 28.3868 17.4201 27.9543 18.1173 27.3777C19.2041 26.4511 20.0243 25.1936 20.5777 23.6285C21.1312 22.0634 21.4183 20.4356 21.4391 18.7463V18.0462C21.4197 16.3975 21.1358 14.7633 20.5985 13.2054C20.0651 11.6399 19.2658 10.3629 18.2202 9.37404C17.4778 8.66243 16.5677 8.15214 15.5755 7.89105C14.5911 7.62348 13.566 7.47906 12.5003 7.43801C12.2748 7.39696 12.0285 7.37643 11.8031 7.37643H7.43563V29.2101L7.43456 29.2104ZM47.3562 34.8143L45.2851 32.3622C44.3854 33.2006 43.353 33.8827 42.2307 34.3811C41.1191 34.9015 39.9254 35.2223 38.7038 35.3289C38.5823 35.3531 38.4586 35.3667 38.3346 35.37H37.9658C37.6991 35.37 37.4528 35.3498 37.1865 35.3289C36.9201 35.308 36.6735 35.2666 36.4072 35.2468C35.8846 35.1409 35.3705 34.9965 34.8694 34.8143C34.3618 34.631 33.874 34.3962 33.4137 34.1139C32.5731 33.5377 31.9172 32.7749 31.4042 31.8476C30.8913 30.8998 30.5837 29.9317 30.4815 28.9428C30.4611 28.8186 30.4611 28.6958 30.4611 28.5924V28.0162C30.4815 27.9129 30.4815 27.8103 30.4815 27.7069C30.4815 27.6658 30.502 27.6446 30.502 27.6248C30.5224 27.5837 30.5224 27.5625 30.5224 27.5005C30.5224 27.4595 30.5428 27.3972 30.5428 27.3154C30.5633 27.2531 30.5633 27.1923 30.5633 27.1501C30.8296 25.6877 31.4447 24.473 32.4294 23.5046C33.4137 22.5359 34.5005 21.691 35.6688 20.929C34.9533 20.1681 34.3396 19.316 33.8439 18.3952C33.3521 17.5096 33.1062 16.5618 33.1062 15.6143C33.1062 15.4288 33.1062 15.2433 33.147 15.0374C33.1674 14.8519 33.1879 14.6459 33.2083 14.4817C33.2492 14.3373 33.2696 14.2138 33.3112 14.0902C33.3521 13.9458 33.3929 13.8227 33.4134 13.6988C33.8234 12.4009 34.6231 11.4743 35.7924 10.8768C36.9614 10.2794 38.1912 9.97041 39.524 9.97041C41.1847 9.97041 42.702 10.4238 44.076 11.3302C45.45 12.2158 46.1472 13.5547 46.1472 15.2855V15.718C46.0443 16.8095 45.6339 17.7574 44.9374 18.5399C44.2463 19.3099 43.4917 20.0197 42.6816 20.6618C42.497 20.7644 42.3124 20.8678 42.1482 21.0115C41.9841 21.1357 41.8199 21.2585 41.6564 21.3619L45.8192 26.2441C46.0443 26.0381 46.2497 25.8317 46.4547 25.6257C46.6598 25.4208 46.8444 25.2141 47.0283 24.9872C47.4588 24.5756 47.8692 24.1431 48.2785 23.7102C48.689 23.2576 49.0786 22.8247 49.4475 22.372L52.2158 25.3178C51.9079 25.647 51.5803 25.9765 51.2724 26.3067C50.9598 26.638 50.6523 26.9744 50.3501 27.3154C50.0013 27.6446 49.6737 27.9748 49.3658 28.3043L48.4434 29.2932L52.9955 34.814H47.3555V34.815L47.3562 34.8143ZM35.5455 29.6847C35.8121 30.0351 36.0788 30.3232 36.3247 30.5497C36.5911 30.7968 36.8574 30.9621 37.1449 31.1061C37.4116 31.2505 37.6578 31.374 37.9242 31.4353C38.1905 31.4976 38.4371 31.5386 38.7035 31.5386C39.2333 31.5368 39.757 31.4248 40.2412 31.2095C40.7019 30.9902 41.141 30.728 41.5532 30.4266C41.902 30.1795 42.312 29.8291 42.7425 29.3757L38.088 23.7938C37.9858 23.8561 37.8829 23.9382 37.7596 23.9998C37.6568 24.061 37.5754 24.1442 37.4933 24.2047C36.9879 24.644 36.5215 25.1266 36.0989 25.647C35.6476 26.1821 35.3401 26.7389 35.1554 27.3154C35.1146 27.4599 35.0737 27.6035 35.0526 27.748C35.0117 27.8924 35.0117 28.0573 35.0117 28.2013C35.0117 28.4693 35.0526 28.717 35.1554 28.9641C35.2587 29.2104 35.4024 29.4575 35.5455 29.6847ZM39.2773 18.9724C39.3182 18.9519 39.3386 18.9314 39.3598 18.9109C39.4007 18.8903 39.4211 18.8903 39.4824 18.8493C39.5028 18.8287 39.5437 18.8082 39.5648 18.7672C39.5853 18.7466 39.6057 18.7466 39.6466 18.7466C40.1595 18.3761 40.6309 17.9843 41.0818 17.5928C41.5123 17.1808 41.7991 16.645 41.9428 16.0065V15.5325C41.9428 14.8526 41.6969 14.2966 41.2256 13.8846C40.7746 13.4726 40.2617 13.2256 39.7082 13.1427H39.1745C38.7644 13.1838 38.3543 13.3693 37.9851 13.6786C37.6159 13.9674 37.3904 14.4197 37.3496 15.0176C37.3496 15.0381 37.3291 15.0791 37.3291 15.1209C37.3087 15.162 37.3087 15.203 37.3087 15.2653C37.3087 15.2858 37.2883 15.3064 37.2883 15.3474C37.2678 15.3885 37.2678 15.4295 37.2678 15.4918C37.2678 16.0072 37.4116 16.5013 37.6983 16.9338C37.9858 17.3868 38.293 17.8193 38.621 18.2313C38.7648 18.3552 38.8669 18.4783 38.9698 18.6022L39.2777 18.9728L39.2773 18.9724ZM87.6471 16.7688V17.9014C87.6471 20.9917 87.1338 23.8752 86.1086 26.5736C85.0835 29.272 83.1152 31.4558 80.1421 33.1242C79.1987 33.7419 78.1738 34.1953 77.0257 34.5457C75.898 34.8748 74.7699 35.1219 73.6426 35.2663C73.2322 35.2872 72.8425 35.3286 72.4737 35.3495C72.084 35.3495 71.7145 35.3696 71.346 35.3696H70.6896C70.4645 35.3696 70.2591 35.3495 70.034 35.3073C67.2864 35.1427 64.6618 34.3807 62.0989 33.0411C59.5563 31.723 57.4852 29.9314 55.9273 27.686C55.148 26.4908 54.5336 25.1929 54.0612 23.8338C53.597 22.4923 53.2812 21.104 53.1188 19.693C53.098 19.4255 53.0568 19.1161 53.036 18.828C53.036 18.5187 53.0159 18.2101 53.0159 17.9011C53.0159 14.6261 53.8561 11.5153 55.5585 8.549C57.26 5.58265 59.6588 3.33727 62.7548 1.81287C63.4065 1.48515 64.0858 1.21614 64.7851 1.00943C65.4823 0.782911 66.1788 0.597447 66.9172 0.411982C67.6012 0.268653 68.2926 0.165657 68.9884 0.103356C69.6856 0.0205271 70.3624 0 71.0187 0H71.5105C74.1753 0.0615813 76.759 0.700442 79.2815 1.87445C81.7831 3.06934 83.9561 4.71691 85.781 6.81824L80.8605 10.4231C79.5066 9.08414 78.0921 8.05418 76.5744 7.31233C75.0628 6.59028 73.4096 6.21719 71.7356 6.22079C71.1671 6.22475 70.5989 6.25932 70.034 6.32343C69.4279 6.40517 68.8257 6.51537 68.2295 6.6533C65.7071 7.43621 63.8212 8.89904 62.5286 11.0414C61.2576 13.204 60.6217 15.4702 60.6217 17.9007C60.6217 18.0656 60.6217 18.2511 60.6424 18.4571C60.6625 18.6426 60.7034 18.828 60.7242 19.0135C60.7242 19.1161 60.745 19.2195 60.765 19.3016C60.7858 19.3837 60.7858 19.4871 60.7858 19.5904C60.8267 19.6725 60.8475 19.7553 60.8676 19.858C60.8883 19.9613 60.8883 20.064 60.8883 20.1256C61.3389 22.7829 62.4666 24.8846 64.3123 26.3881C66.1577 27.8916 68.146 28.8182 70.2989 29.1276C70.5857 29.2097 70.9144 29.2518 71.2424 29.272C71.57 29.2929 71.8779 29.2929 72.1647 29.2929C74.215 29.2929 76.0192 28.7365 77.639 27.6446C79.2388 26.5325 80.0378 24.9674 80.0378 22.9072L80.1407 22.6803H71.775V16.7688H87.6461H87.6471ZM24.3301 38.4397H25.6216C26.5238 38.4397 27.2827 39.2424 27.2827 40.2526C27.2827 41.2627 26.5238 42.0442 25.6216 42.0654H24.3301V38.44V38.4397ZM24.8839 38.8718V41.6322H25.4786C26.2991 41.6113 26.7088 40.9526 26.7088 40.272C26.7088 39.5914 26.2987 38.995 25.6219 38.8927L24.8842 38.8718H24.8839ZM29.456 38.3565C30.5629 38.3565 31.4447 39.2014 31.4447 40.2522C31.4447 41.303 30.5633 42.1472 29.456 42.1472C28.3487 42.1472 27.4673 41.303 27.4673 40.2522C27.4673 39.2014 28.3691 38.3565 29.456 38.3565ZM29.456 38.8099C30.2557 38.8099 30.9117 39.4484 30.9117 40.2522C30.9117 41.056 30.2557 41.6736 29.456 41.6736C28.6563 41.6736 28.0207 41.0351 28.0207 40.2522C28.0225 39.4567 28.6638 38.8121 29.456 38.8099ZM31.6092 38.4397H32.1426V41.6326H33.1678V42.0651H31.6096V38.4397H31.6092ZM34.8895 38.3363C35.2995 38.3363 35.6892 38.4595 36.0172 38.6655V39.3249C35.7408 38.9849 35.3264 38.7883 34.8895 38.7897C34.0898 38.7897 33.4542 39.4484 33.4542 40.2522C33.4564 41.0477 34.0976 41.692 34.8895 41.6945C35.3404 41.6945 35.7505 41.4885 36.0172 41.1593V41.8389C35.6792 42.0521 35.2884 42.1663 34.8895 42.1681C33.803 42.1681 32.9008 41.303 32.9008 40.2522C32.9008 39.2014 33.803 38.3363 34.8895 38.3363ZM36.7352 41.6326H38.027V42.0651H36.1817V38.4397H38.027V38.8513H36.7352V39.9234H38.027V40.3559H36.7352V41.6329V41.6326ZM40.0566 41.8177C39.9971 41.8774 39.9276 41.9261 39.8516 41.9621C39.7903 42.0031 39.7079 42.024 39.6261 42.0442C39.6057 42.0442 39.5853 42.0442 39.5648 42.0651H39.5035C39.4422 42.0651 39.4007 42.0442 39.3394 42.0442C39.2809 42.0251 39.2254 41.9977 39.1752 41.9621C39.1343 41.921 39.0935 41.8587 39.0526 41.7968L38.9913 41.6117V41.5083H39.0117V41.4673C39.0322 41.3639 39.073 41.2822 39.1555 41.2L39.4014 41.0142L39.2781 40.8291C39.2372 40.7881 39.2168 40.706 39.2168 40.644V40.5619C39.2372 40.5619 39.2372 40.541 39.2372 40.541C39.2576 40.4618 39.3003 40.3905 39.3605 40.335C39.4422 40.294 39.5042 40.2731 39.586 40.2731H39.6473C39.729 40.2731 39.8319 40.3152 39.9136 40.3764C39.9835 40.4474 40.0208 40.5446 40.0165 40.6444C40.0165 40.7477 39.9961 40.8295 39.934 40.8914C39.8523 40.9735 39.7903 41.0358 39.7086 41.0765L40.0982 41.5512C40.1186 41.509 40.1595 41.468 40.2011 41.406C40.242 41.365 40.2624 41.3239 40.3032 41.2829L40.4266 41.406C40.4061 41.4482 40.3653 41.4892 40.3448 41.5303C40.3244 41.5713 40.2835 41.6124 40.2427 41.6534L40.2222 41.6743C40.2222 41.6743 40.2222 41.6952 40.2018 41.6952L40.4886 42.0244H40.2427L40.0573 41.8173L40.0566 41.8177ZM39.5853 41.8796C39.6516 41.8778 39.7157 41.8562 39.7699 41.8177C39.8107 41.7766 39.872 41.7355 39.9136 41.6945H39.934L39.9545 41.6736L39.5035 41.159C39.5035 41.1724 39.4967 41.1792 39.4831 41.1792L39.4627 41.2C39.4218 41.2202 39.4014 41.2411 39.3605 41.2613C39.3193 41.3034 39.2985 41.3232 39.2781 41.3646C39.2576 41.3646 39.2576 41.3855 39.2576 41.4057C39.2372 41.4266 39.2372 41.4478 39.2372 41.4676C39.2168 41.4885 39.2168 41.5087 39.2168 41.5087V41.5706C39.2168 41.6527 39.2372 41.715 39.2985 41.7968C39.3673 41.8544 39.4551 41.8839 39.5444 41.88H39.5853V41.8796ZM39.4211 40.6026V40.6437C39.4211 40.6847 39.4211 40.7258 39.4415 40.7668C39.462 40.8089 39.5028 40.85 39.5232 40.8702L39.5641 40.9123L39.5845 40.9325H39.605C39.605 40.9325 39.6254 40.9325 39.6254 40.9123C39.6663 40.8914 39.7071 40.8702 39.7487 40.8291C39.7878 40.7888 39.8161 40.7391 39.8304 40.6847V40.6437C39.8322 40.5889 39.8097 40.536 39.7691 40.4992C39.7319 40.4762 39.6896 40.4621 39.6458 40.4582H39.605C39.5641 40.4582 39.5225 40.4582 39.4817 40.4992C39.4433 40.519 39.4197 40.5594 39.4207 40.6026H39.4211ZM43.3784 38.3154C44.0653 38.3176 44.708 38.6558 45.1005 39.2219L44.6291 39.4689C44.361 39.0465 43.8975 38.7904 43.3989 38.7894C42.5787 38.7894 41.9432 39.448 41.9432 40.2518C41.9432 41.0556 42.5787 41.6941 43.3989 41.6941C44.0756 41.6941 44.6087 41.3639 44.6499 40.6642H43.4806V40.2306H45.2234V40.2515C45.2234 41.3844 44.608 42.1875 43.3777 42.1875C42.1475 42.1875 41.3682 41.3225 41.3682 40.2515C41.3682 39.1805 42.2712 38.3151 43.3781 38.3151L43.3784 38.3154ZM44.9162 42.0647L46.4139 38.4393H46.7616L48.2592 42.0647H47.6857L47.2752 41.0347H45.9013L45.4908 42.0647H44.9166H44.9162ZM46.1056 40.5817L46.5977 39.2845L47.0691 40.5817H46.1052H46.1056ZM53.5077 42.0647L54.9835 38.4393H55.3323L56.8299 42.0647H56.2553L55.8456 41.0347H54.4716L54.0612 42.0647H53.5081H53.5077ZM54.6766 40.5817L55.1688 39.2845L55.6603 40.5817H54.6766ZM60.6432 42.0647L62.1397 38.4393H62.4885L63.9851 42.0647H63.4115L62.981 41.0347H61.6282L61.2178 42.0647H60.6435H60.6432ZM61.8322 40.5817L62.3046 39.2845L62.7971 40.5817H61.8325H61.8322ZM49.55 38.8513C49.9196 38.8934 50.0422 39.0371 50.0422 39.4077C50.0422 39.7581 49.7963 39.9428 49.4894 39.9428H49.017V38.8509H49.5496L49.55 38.8513ZM49.5912 40.3754H49.6113C49.878 40.3754 50.3497 40.4373 50.3497 41.0347C50.3497 41.5083 49.9393 41.6322 49.5496 41.6322H49.6324H49.017V40.3754H49.5916H49.5912ZM48.894 42.0647H49.8167C50.4522 42.0647 50.9236 41.6322 50.9236 41.0347C50.9236 40.5612 50.6368 40.2108 50.2271 40.0671C50.4522 39.9227 50.5748 39.6547 50.5748 39.3252C50.5748 38.7901 50.2271 38.4397 49.6733 38.4397C49.3865 38.4188 49.0786 38.4397 48.7919 38.4397H48.4642V42.0651H48.8937V42.0647H48.894ZM52.2976 38.8513C52.6463 38.8934 52.77 39.0371 52.7897 39.4077C52.7897 39.7581 52.5438 39.9428 52.2359 39.9428H51.7645V38.8509H52.2972L52.2976 38.8513ZM52.3184 40.3754H52.3384C52.6051 40.3754 53.0769 40.4373 53.0769 41.0347C53.0769 41.5083 52.6671 41.6322 52.2775 41.6322H52.3793H51.7645V40.3754H52.3184ZM51.6212 42.0647H52.565C53.2005 42.0647 53.6518 41.6322 53.6518 41.0347C53.6518 40.5612 53.364 40.2108 52.9546 40.0671C53.2005 39.9227 53.3235 39.6547 53.3235 39.3252C53.3235 38.7901 52.9546 38.4397 52.422 38.4397C52.114 38.4188 51.8273 38.4397 51.5197 38.4397H51.1921V42.0651H51.6215V42.0647H51.6212ZM57.0754 38.4397H57.4231L59.9456 41.1169V38.4397H60.4381V42.0651H60.0686L57.5877 39.4081V42.0651H57.0754V38.4397Z" className="fill-current"></path>
                  </svg>
                </div>
                <div className="max-w-[110px] lg:max-w-[90px] flex items-center justify-center relative w-12 h-12">
                  <svg className="w-full" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.647461 0.09375H42.6425V4.65522H26.4001V21.1554H42.6475V25.8155H26.3137V42.0913H21.7202V25.9289H5.25328V42.0666H0.647461V0.09375ZM5.29275 21.0987H21.5846V4.79822H5.29275V21.0987Z" className="fill-current"></path>
                  </svg>
                </div>
                <div className="max-w-[110px] lg:max-w-[90px] flex items-center justify-center relative w-12 h-12">
                  <svg className="w-full" width="83" viewBox="0 0 83 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6948 1.22928H17.7391L21.7172 13.2745H23.3839L26.9612 0.0078125H25.7619L22.6504 12.0752H22.606L18.4948 0.0078125H17.0056L13.0497 12.0752H13.0275L9.87163 0.0078125H8.58203L12.0944 13.2745H13.8276L17.6948 1.22928Z" className="fill-current"></path><path d="M28.6727 4.05246V13.2745H29.8055V4.05246H28.6727ZM29.8958 0.0078125H28.584V1.38613H29.8958V0.0078125Z" className="fill-current"></path><path d="M40.8293 8.91694C40.8293 6.02723 39.6966 3.76172 36.5407 3.76172C33.7413 3.76172 32.3408 6.16189 32.3408 8.65078C32.3408 11.1619 33.6526 13.5398 36.452 13.5398C38.7191 13.5398 40.1196 12.518 40.6963 10.3174H39.5192C39.2308 11.5849 38.1408 12.518 36.8085 12.518C34.497 12.518 33.5861 10.8735 33.5417 8.89634H40.8309V8.91694H40.8293ZM33.6067 7.8935C33.7619 6.27121 34.7394 4.75981 36.5629 4.75981C38.5179 4.75981 39.4748 6.09377 39.6079 7.8935H33.6067Z" className="fill-current"></path><path d="M49.7185 8.42748C49.7185 10.5171 48.9628 12.5387 46.5183 12.5387C44.3621 12.5387 43.852 10.205 43.852 8.49402C43.852 6.73864 44.5411 4.78207 46.6736 4.78207C48.8963 4.78365 49.7185 6.56121 49.7185 8.42748ZM49.8294 13.2722H50.9844C50.94 12.6496 50.8956 11.916 50.8956 11.2047V0.00390625H49.7629V5.40469L49.7185 5.42687C49.0515 4.33847 47.7414 3.76022 46.4961 3.76022C43.6967 3.76022 42.6289 6.22693 42.6289 8.6271C42.6289 10.9385 43.6951 13.5605 46.4961 13.5605C47.8079 13.5605 48.9406 12.9601 49.7185 11.8495L49.7629 11.916L49.8294 13.2722Z" className="fill-current"></path><path d="M61.6741 8.91694C61.6741 6.02723 60.5413 3.76172 57.3854 3.76172C54.586 3.76172 53.1855 6.16189 53.1855 8.65078C53.1855 11.1619 54.4973 13.5398 57.2967 13.5398C59.5638 13.5398 60.9643 12.518 61.541 10.3174H60.3861C60.0977 11.5849 59.0077 12.518 57.6754 12.518C55.3639 12.518 54.453 10.8735 54.4086 8.89634H61.6757V8.91694H61.6741ZM54.4514 7.8935C54.6066 6.27121 55.5841 4.75981 57.4076 4.75981C59.3626 4.75981 60.3195 6.09377 60.4526 7.8935H54.4514Z" className="fill-current"></path><path d="M65.3627 7.9632C65.3627 6.31873 66.2071 4.78516 68.0512 4.78516C69.5848 4.78516 70.5179 5.71829 70.5179 7.31841V13.2737H71.6507V7.49585C71.6507 6.42963 71.4067 3.76172 68.3396 3.76172C67.1165 3.76172 66.0503 4.29562 65.4055 5.42837L65.3611 5.38401L65.2946 4.02788H64.1396C64.184 4.65049 64.2284 5.38401 64.2284 6.09535V13.2515H65.3611V7.9632" className="fill-current"></path><path d="M2.13777 32.6717L2.16153 25.7373L8.62695 32.6717H10.2952L3.51609 25.3824L9.7391 19.3828H8.20553L2.16153 25.2272L2.13777 19.3828H0.938477V32.6717H2.13777Z" className="fill-current"></path><path d="M19.8938 28.3193C19.8938 25.4296 18.761 23.1641 15.6052 23.1641C12.8058 23.1641 11.4053 25.5642 11.4053 28.0531C11.4053 30.5642 12.717 32.9422 15.5165 32.9422C17.7836 32.9422 19.184 31.9203 19.7607 29.7198H18.5836C18.2953 30.9872 17.2053 31.9203 15.8729 31.9203C13.5615 31.9203 12.6505 30.2759 12.6062 28.2987H19.8954V28.3193H19.8938ZM12.6489 27.2958C12.8042 25.6736 13.7817 24.1622 15.6052 24.1622C17.5602 24.1622 18.5171 25.4961 18.6501 27.2958H12.6489Z" className="fill-current"></path><path d="M23.5619 27.3616C23.5619 25.7172 24.4063 24.1836 26.2504 24.1836C27.784 24.1836 28.7171 25.1167 28.7171 26.7168V32.6721H29.8499V26.8943C29.8499 25.8281 29.6059 23.1602 26.5388 23.1602C25.3157 23.1602 24.2495 23.6941 23.6047 24.8268L23.5603 24.7824L23.4938 23.4263H22.3389C22.3832 24.0489 22.4276 24.7825 22.4276 25.4938V32.6499H23.5603V27.3616" className="fill-current"></path><path d="M33.9408 27.3616C33.9408 25.7172 34.7852 24.1836 36.6293 24.1836C38.1629 24.1836 39.0961 25.1167 39.0961 26.7168V32.6721H40.2288V26.8943C40.2288 25.8281 39.9848 23.1602 36.9177 23.1602C35.6946 23.1602 34.6284 23.6941 33.9836 24.8268L33.9392 24.7824L33.8727 23.4263H32.7178C32.7621 24.0489 32.8065 24.7825 32.8065 25.4938V32.6499H33.9392L33.9408 27.3616Z" className="fill-current"></path><path d="M51.2073 28.3193C51.2073 25.4296 50.0745 23.1641 46.9187 23.1641C44.1192 23.1641 42.7188 25.5642 42.7188 28.0531C42.7188 30.5642 44.0305 32.9422 46.8299 32.9422C49.097 32.9422 50.4975 31.9203 51.0742 29.7198H49.8971C49.6087 30.9872 48.5188 31.9203 47.1864 31.9203C44.8749 31.9203 43.964 30.2759 43.9196 28.2987H51.2089V28.3193H51.2073ZM43.9846 27.2958C44.1398 25.6736 45.1173 24.1622 46.9408 24.1622C48.8958 24.1622 49.8527 25.4961 49.9858 27.2958H43.9846Z" className="fill-current"></path><path d="M60.2085 27.8259C60.2085 29.9156 59.4528 31.9371 57.0082 31.9371C54.8521 31.9371 54.3419 29.6035 54.3419 27.8925C54.3419 26.1371 55.0311 24.1805 57.1635 24.1805C59.3641 24.1583 60.2085 25.9596 60.2085 27.8259ZM60.2972 32.6706H61.4521C61.4078 32.048 61.3634 31.3145 61.3634 30.6031V19.4023H60.2307V24.8031L60.1863 24.8475C59.5193 23.7591 58.2091 23.1808 56.9639 23.1808C54.1645 23.1808 53.0967 25.6475 53.0967 28.0477C53.0967 30.3592 54.1629 32.9811 56.9639 32.9811C58.2757 32.9811 59.4084 32.3807 60.1863 31.2701L60.2307 31.3367L60.2972 32.6706Z" className="fill-current"></path><path d="M62.8955 23.4297L66.7849 32.6739L65.3622 36.1847H66.5853L71.7849 23.4297H70.5634L67.4297 31.1625L64.2516 23.4297H62.8955Z" className="fill-current"></path><path d="M76.3203 13.2734V23.4524H77.4087V13.2734" className="fill-current"></path><path d="M71.6748 18.8943H82.0534V17.8281H71.6748" className="fill-current"></path>
                  </svg>
                </div>
                <div className="max-w-[110px] lg:max-w-[90px] flex items-center justify-center relative w-12 h-12">
                  <svg className="w-full" width="69" viewBox="0 0 69 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.23161 45.9912C8.23161 44.8315 7.65289 43.4492 4.90101 43.4492H0.0527344V51.7662H1.74166V48.5448H4.90101C7.65289 48.5448 8.23161 47.1567 8.23161 45.9912ZM1.74166 45.0189H4.65889C6.43639 45.0189 6.58403 45.4816 6.58403 46.0029C6.58403 46.5241 6.43639 46.9751 4.65889 46.9751H1.74166V45.0189Z" className="fill-current"></path>
                    <path d="M18.6197 48.2812V43.4492H16.9308V48.2812C16.9308 49.7279 16.0745 50.4308 14.3147 50.4308C12.555 50.4308 11.6987 49.7279 11.6987 48.2812V43.4492H10.0098V48.2812C10.0098 50.6533 11.5392 51.9536 14.3147 51.9536C17.0903 51.9536 18.6197 50.6475 18.6197 48.2812Z" className="fill-current"></path><path d="M29.4969 49.2652C29.4969 48.2637 28.9714 47.7014 28.4812 47.3793C28.871 47.0864 29.2371 46.6179 29.2371 45.8037C29.2371 43.4492 26.7214 43.4492 25.9006 43.4492H21.1055V51.7662H25.3868C26.7214 51.7662 29.5028 51.7662 29.5028 49.2652H29.4969ZM25.3278 44.9779C26.9931 44.9779 27.5423 45.1009 27.5423 45.8154C27.5423 46.0497 27.5423 46.6706 25.6408 46.6706H22.7826V44.9779H25.3278ZM25.9774 50.1965H22.7826V48.1992H26.0778C27.7844 48.1992 27.7844 48.9255 27.7844 49.2359C27.7844 49.8158 27.4773 50.1965 25.9774 50.1965Z" className="fill-current"></path><path d="M39.4116 50.1965H33.6362V43.4492H31.9473V51.7662H39.4116V50.1965Z" className="fill-current"></path><path d="M42.7544 43.4492H41.0654V51.7662H42.7544V43.4492Z" className="fill-current"></path><path d="M53.9268 49.56L54.104 49.2144L52.604 48.4881L52.4328 48.8103C51.8541 49.8704 50.921 50.3916 49.5805 50.3916C47.6318 50.3916 46.4743 49.4018 46.4743 47.7443C46.4743 45.8173 47.5196 44.7982 49.4978 44.7982C50.9328 44.7982 51.8836 45.3136 52.3206 46.3269L52.4741 46.6842L53.9682 45.9989L53.8146 45.6592C53.1532 44.1657 51.5293 43.2695 49.4801 43.2695C46.5688 43.2695 44.7559 44.9388 44.7559 47.633C44.7559 49.7239 46.0019 51.9613 49.486 51.9613C51.6238 51.9613 53.0765 51.1765 53.915 49.56H53.9268Z" className="fill-current"></path><path d="M57.7475 43.4492H56.0586V51.7662H57.7475V43.4492Z" className="fill-current"></path><path d="M64.3848 46.6685C62.8376 46.528 61.8987 46.3991 61.8987 45.7607C61.8987 44.9173 63.2924 44.7884 64.125 44.7884C65.9202 44.7884 66.5875 45.5498 66.9123 45.9188L67.2076 46.2527L68.4418 45.257L68.2351 44.9641C67.9458 44.5659 66.8001 43.2539 64.1486 43.2539C60.7058 43.2539 60.1921 44.9114 60.1921 45.9013C60.1921 47.8926 62.4243 48.1035 64.2195 48.2734C65.8021 48.4256 66.8355 48.5721 66.8355 49.2456C66.8355 50.3409 64.686 50.376 64.438 50.376C62.3357 50.376 61.7038 49.5443 61.2845 48.9879L61.0424 48.6658L60.0208 49.5326L59.7314 49.7962L59.9913 50.0832C60.6645 50.827 61.6802 51.9457 64.3376 51.9457C66.2805 51.9457 68.5481 51.237 68.5481 49.2456C68.5481 47.0375 66.245 46.8325 64.3907 46.6627L64.3848 46.6685Z" className="fill-current"></path><path d="M7.62325 63.1422H10.6409C10.322 64.2258 9.1173 64.6182 8.10158 64.6182C6.18235 64.6182 5.03672 63.6284 5.03672 61.9708C5.03672 60.0439 6.07015 59.0248 8.01891 59.0248C8.62716 59.0248 10.1035 59.1712 10.6999 60.5124L10.8653 60.8873L12.318 60.1259L12.1763 59.8037C11.5326 58.3629 9.99128 57.4961 8.05434 57.4961C5.14301 57.4961 3.33008 59.1653 3.33008 61.8596C3.33008 63.9505 4.5761 66.1879 8.06615 66.1879C9.35351 66.1879 10.1862 65.8482 10.7472 65.4499V66.0649H12.3298V61.5726H7.63506V63.1422H7.62325Z" className="fill-current"></path><path d="M23.3135 60.165C23.3135 59.0287 22.7289 57.6758 19.9357 57.6758H15.1523V65.9927H16.8413V62.6425H19.2625L21.7132 65.9927H23.8095L21.2289 62.5371C22.3037 62.3028 23.3194 61.5883 23.3194 60.165H23.3135ZM16.8354 59.2455H19.7231C21.347 59.2455 21.6659 59.5793 21.6659 60.1533C21.6659 60.7273 21.3529 61.0728 19.7231 61.0728H16.8354V59.2455Z" className="fill-current"></path><path d="M29.8688 57.4961C26.9693 57.4961 25.0205 59.2591 25.0205 61.8888C25.0205 64.8408 27.5362 66.1879 29.8688 66.1879C32.2014 66.1879 34.717 64.8408 34.717 61.8888C34.717 59.2591 32.7683 57.4961 29.8688 57.4961ZM29.8688 64.6182C29.1306 64.6182 26.7271 64.4073 26.7271 61.7248C26.7271 60.1376 28.0204 59.0248 29.8688 59.0248C31.7171 59.0248 33.0104 60.1317 33.0104 61.7248C33.0104 64.4132 30.6069 64.6182 29.8688 64.6182Z" className="fill-current"></path><path d="M43.4914 62.5078C43.4914 63.9545 42.6351 64.6573 40.8753 64.6573C39.1155 64.6573 38.2592 63.9545 38.2592 62.5078V57.6758H36.5703V62.5078C36.5703 64.8799 38.0998 66.1801 40.8753 66.1801C43.6508 66.1801 45.1803 64.874 45.1803 62.5078V57.6758H43.4914V62.5078Z" className="fill-current"></path><path d="M52.2789 57.6758H47.4307V65.9927H49.1196V62.7714H52.2789C55.0308 62.7714 55.6095 61.3833 55.6095 60.2177C55.6095 59.0522 55.0308 57.6758 52.2789 57.6758ZM49.1196 59.2455H52.0427C53.8202 59.2455 53.9679 59.7082 53.9679 60.2294C53.9679 60.7507 53.8202 61.2017 52.0427 61.2017H49.1196V59.2455Z" className="fill-current"></path><path d="M58.9702 62.4668H63.8775V60.8971H58.9702V59.2455H64.8401V57.6758H57.2812V65.9927H64.9641V64.423H58.9702V62.4668Z" className="fill-current"></path><path d="M56.667 39.2267L51.6416 36.2807C52.6455 36.4095 53.5254 35.9644 54.3462 35.3787L55.8757 37.2295L54.9426 34.9336C55.9583 34.1429 56.791 33.2936 57.8303 33.2643C60.6649 33.194 58.6807 36.5735 59.7141 36.5852C60.8716 36.597 62.1294 32.825 59.348 31.1675C56.4721 29.4397 53.9564 31.9348 51.925 31.5072L59.5547 28.1277H48.4113L48.0157 27.3839C50.0353 28.2859 51.4703 27.4483 52.4329 26.5112L55.604 26.9622L52.9821 25.9431C53.608 25.2929 54.1395 24.7892 54.8009 25.0411C55.7399 25.3984 56.295 26.2183 57.9248 26.2359C60.6826 26.2652 62.6904 21.4039 59.0468 19.2954C59.3244 22.7627 57.6945 22.9384 54.8718 21.0935L55.8402 19.5238L54.3934 20.7889C51.677 19.5941 50.3542 21.972 49.2145 22.7451C48.0688 23.5124 47.0236 21.972 45.6358 23.8053C47.7086 23.1317 48.7598 25.0938 50.1239 23.8053C49.557 27.2843 47.5433 22.7451 45.5355 24.4788C47.2775 24.6077 48.1869 26.1539 49.5688 26.1539C52.1199 26.1539 49.8463 21.2809 53.4427 21.2809L52.8462 20.9002C54.8836 20.7128 54.9899 22.7276 58.0606 22.7686C58.3795 23.2254 57.2575 23.2606 56.4721 22.997C56.3422 23.6471 60.6413 25.0938 59.6078 20.2501C60.9602 20.9763 60.6649 24.0278 59.4012 25.1817C59.1531 25.4042 58.9228 25.5155 58.7752 25.2812C58.4268 24.76 59.3185 24.7717 59.5665 23.9868C58.6039 24.8185 56.9623 24.7482 55.8461 23.7174C54.73 22.6866 53.0529 21.4273 52.3325 23.6003C51.6179 25.7732 51.0156 26.7806 49.6987 26.804C47.8799 26.8333 45.9547 23.8111 43.9351 25.4804C47.7913 25.8376 48.7007 31.9172 52.0963 31.9933C54.73 31.9933 55.3265 30.8454 57.0449 30.8454C58.7634 30.8454 60.5645 31.7415 60.5645 33.9906C60.5645 35.3494 59.8441 36.1108 59.8441 36.1108C59.8441 36.1108 60.3755 35.0097 60.1098 33.6099C59.8559 32.2686 58.7043 31.4545 57.1985 31.4545C55.0844 31.4545 53.3777 34.8926 51.0215 34.8926C46.309 34.8926 45.0985 25.8786 40.1675 27.2668C43.7993 29.6974 44.1949 33.5923 46.1496 35.08C48.1279 36.5911 50.4841 35.9761 51.7951 37.1124C52.3266 37.5751 52.551 38.3541 52.7222 39.2033H52.2734C52.114 38.764 51.8778 38.3599 51.488 38.0202C50.3601 36.8429 46.9645 37.3584 45.4055 35.6891C43.8524 34.014 42.7068 29.0004 39.636 28.2273C42.3111 29.9317 42.9076 34.3244 44.8268 36.474C46.7401 38.6293 49.2676 37.4872 50.4369 38.6176C50.6436 38.8168 50.8148 39.01 50.9743 39.1975H48.7775C48.5826 39.1623 48.3759 39.1389 48.1397 39.1389C47.7854 39.1389 47.4252 39.1623 47.0649 39.1975H44.0355C43.6398 39.0745 43.2678 38.8695 42.943 38.5298C41.4254 36.9367 41.5671 35.2674 41.6852 33.2877C41.9804 35.1444 42.3407 39.4142 45.5591 38.9339C41.5139 37.5634 43.8642 30.6814 38.9156 28.9184C38.3782 28.7251 38.5672 26.9973 39.9136 26.7396C37.2444 27.2492 37.2562 26.2769 39.1459 24.3324C37.9825 25.0645 36.7129 24.8537 36.4353 25.6854C36.4353 25.6854 38.6262 29.0941 38.6262 29.7618C38.6262 30.4295 37.1853 33.112 37.0259 33.1999C36.4826 33.4869 34.7287 33.4986 34.2799 33.3697C33.8134 33.2292 33.2701 31.7649 33.4827 31.3081C33.8193 30.5994 36.5298 30.0137 36.5771 28.9594C36.6125 28.1336 35.4846 28.0516 35.52 28.4909C36.1755 28.7076 36.4531 29.6623 34.5397 30.1015L34.9708 29.4163C34.9708 29.4163 33.5535 30.5408 33.4827 30.5877C33.4118 30.6345 33.0811 30.658 32.8685 30.5935C32.6618 30.5291 30.6127 29.551 30.9611 28.5846C30.9611 28.5846 31.5812 28.854 33.1343 28.854C34.6874 28.854 34.835 28.1863 34.835 28.1863C34.835 28.1863 34.0023 28.3972 33.1579 28.3972C32.3134 28.3972 31.4749 28.1863 31.4749 28.1863C30.8017 28.034 31.5162 27.1906 31.7524 27.1789H33.3646C33.465 27.1789 33.6008 26.9563 33.3764 26.9446C33.211 26.9446 32.1835 26.9153 32.1067 26.6635C31.9709 26.2359 31.6934 23.5593 31.6934 23.5593C31.6934 23.5593 32.0477 22.7276 31.7524 22.4523C31.4631 22.1712 31.3213 22.3176 31.3213 22.3176C31.9886 26.0368 29.1187 28.3503 27.4711 27.9052L27.2762 27.87C27.6423 28.1453 28.1207 28.3972 28.7348 28.6021C25.6699 29.2464 24.418 27.3956 23.9279 26.2711C23.6621 26.4058 23.6503 27.1262 23.6858 27.5889C23.048 26.8978 22.6641 25.8318 23.2488 25.0528C22.4693 25.4277 22.4338 25.5448 22.4338 25.5448C22.4634 24.9064 23.5913 24.4905 24.1582 23.7467C24.7192 23.0029 24.607 21.8607 23.3905 21.3746C23.4732 22.5226 22.9003 23.3074 21.7311 23.694C20.5973 24.0688 20.7921 23.0439 19.7351 23.2723C21.4535 23.6588 21.365 26.0134 23.0775 26.9856C20.7862 26.4526 20.3906 23.3601 17.6033 23.6706C19.2095 21.4039 21.7429 23.3484 22.7941 21.7787C20.0776 22.3937 18.2292 20.1212 17.9162 17.632C17.4379 13.8191 14.19 15.6992 14.2431 13.8191C15.8789 14.5512 19.4989 11.7691 20.5677 14.9378C21.6898 18.247 23.9456 19.5941 25.9829 18.0654L17.119 9.14519L18.241 12.8878C15.9262 13.3388 13.1329 11.9741 14.6506 8.75863C12.4597 7.75123 9.56022 11.3591 12.2353 14.1939C13.4754 15.5 16.4931 15.0198 17.2844 17.6906L14.4085 17.4621L17.3612 18.2294L18.241 20.8182L11.3732 17.4621L15.6014 22.341C13.1329 23.6354 12.5188 19.9221 9.3181 20.0041C7.07998 20.0568 4.57612 22.341 5.62136 25.0118C8.96378 23.0029 10.0385 24.4378 11.4617 25.8318L9.40077 26.9212L11.8397 26.1891C12.7078 26.9856 13.7648 27.6592 15.5246 27.5303C18.4123 27.3195 20.9634 26.3941 21.6189 27.173C22.1208 27.7646 21.5421 28.116 20.5028 28.116H6.69023L12.2294 31.0621C11.692 31.4721 10.1507 33.3522 9.08779 33.3522C8.02483 33.3522 5.62727 31.7239 4.9954 34.5704C7.45792 34.1546 8.70394 39.4903 13.8829 35.2323L11.4617 39.2033H0.0644531V40.568H68.4835V39.2033H56.6906L56.667 39.2267ZM53.9624 23.0907C55.232 23.6354 51.2991 27.4307 50.0944 27.2902C52.61 26.5522 52.6927 22.5402 53.9624 23.0907ZM54.4761 34.301C55.3678 31.9524 58.1551 30.9391 59.3067 32.9949C59.3598 33.0945 59.2771 33.1765 59.0764 32.9773C57.6355 31.5424 55.7871 32.907 54.6297 34.4006C54.4643 34.6114 54.4112 34.4767 54.482 34.301H54.4761ZM14.0896 9.12176C13.3632 10.3752 13.505 12.6711 16.4163 13.3505C11.5326 14.4282 11.6566 8.92848 14.0896 9.12176ZM10.1389 24.0805C7.88901 22.8564 5.89891 24.3148 5.89891 24.3148C6.57212 22.1009 10.7354 21.9135 10.1389 24.0805ZM11.1251 23.202C10.7885 22.7569 10.4992 22.3703 10.133 22.2473C9.6606 22.095 9.14094 22.1126 8.67442 22.136C8.1016 22.1653 7.60555 22.1887 7.45202 21.8315C7.35163 21.603 7.45792 21.357 7.75909 21.1403C8.06617 20.9236 8.51497 20.7772 8.96378 20.7538C9.47754 20.7186 9.91453 20.8416 10.198 21.0935C10.4814 21.3453 10.5996 21.3629 10.6468 21.3395C10.7177 21.3043 10.6999 21.1403 10.694 21.0232C10.6822 20.9412 10.6704 20.8768 10.7177 20.8826C11.5208 21.0115 11.9105 21.5035 12.318 21.9955C13.003 22.8154 14.066 24.0571 16.6407 23.6237C15.9911 25.8962 12.3003 25.2227 11.1192 23.1903L11.1251 23.202ZM13.2038 26.3003C13.068 25.3047 18.0993 24.5725 18.1407 25.9958C18.1761 27.2375 13.3573 27.3956 13.2038 26.3003ZM39.1813 32.4268C37.5101 35.982 41.6261 38.2076 42.3938 38.9163C42.4824 38.9983 42.571 39.1037 42.6596 39.2267H41.2718C40.8643 38.3833 40.4333 37.7391 39.9431 37.5165C40.2797 38.0202 40.5336 38.6 40.7462 39.2267H40.0848C39.1282 37.3466 37.5396 35.9117 39.1754 32.4268H39.1813ZM38.7679 39.2267H38.1833L37.5042 37.2881C38.0357 37.5575 38.4254 38.2838 38.7679 39.2267ZM37.0908 39.2267H36.4472C36.7247 38.1608 36.8664 37.0245 36.1932 35.654C37.268 36.5267 37.2562 37.8855 37.0849 39.2267H37.0908ZM35.9511 39.2267H35.3783C35.6263 38.3892 35.6972 37.4989 34.9826 36.228C36.0397 37.1182 36.1165 38.1608 35.9511 39.2267ZM31.6934 39.2267C32.03 37.7566 31.4217 37.3115 30.1698 35.9878C32.0477 37.2705 32.7268 38.1549 32.6028 39.2267H31.6934ZM33.2169 36.6497C34.1559 37.7274 34.4216 38.5122 34.4393 39.2267H33.8665C33.8961 38.5356 33.7661 37.7274 33.2169 36.6497ZM33.1166 34.1253C33.9374 34.1253 35.4964 34.0784 35.5436 34.0784C35.7621 34.0784 35.8094 34.1487 35.8153 34.1897C35.8153 34.2717 35.7149 34.6817 35.5495 34.7286C35.5377 34.7344 34.0142 35.0917 33.1166 35.0448C32.2249 35.0917 30.7013 34.7344 30.6836 34.7286C30.5182 34.6876 30.406 34.2776 30.4178 34.1897C30.4237 34.1487 30.4651 34.0784 30.6836 34.0784C30.6836 34.0784 32.2898 34.1253 33.1106 34.1253H33.1166ZM30.7426 28.5201C30.0753 28.7369 29.9631 29.8028 31.9001 30.2362C31.2741 30.3241 29.7328 30.043 29.6856 28.9887C29.6442 28.1629 30.7721 28.0809 30.7485 28.5201H30.7426ZM28.847 30.3358C30.6481 30.4412 32.5496 31.3374 32.5496 31.3374C32.7622 31.7942 32.2248 33.2585 31.7465 33.399C31.3036 33.5279 29.1423 33.3053 28.8293 32.3916C30.1285 32.7372 30.217 32.2569 30.217 32.2569C30.217 32.2569 29.0301 32.2628 28.5517 31.4486C29.4789 31.7766 29.9218 31.4369 29.9218 31.4369C29.9218 31.4369 28.1207 30.7517 28.0616 30.3417H28.8411L28.847 30.3358ZM27.0518 32.3213L27.0931 31.9758C27.2112 36.2397 30.3351 36.9132 30.3351 39.0335C30.3351 39.0979 30.3352 39.1623 30.3233 39.2209H29.7741C29.8096 38.8343 29.721 38.4478 29.4375 38.0671C27.4002 35.3728 27.3175 34.793 27.3175 34.793C27.4947 36.8371 28.8057 37.0948 29.1186 39.2209H28.2742C27.9612 37.6336 26.3372 37.0128 27.0518 32.3155V32.3213ZM27.2408 39.2267H25.7349L26.538 37.9499C26.9455 38.4595 27.164 38.8753 27.2467 39.2267H27.2408ZM24.796 39.2267H23.8098C25.2861 36.4974 24.4653 32.0636 25.7408 30.699C24.855 32.2803 26.2546 36.0991 24.796 39.2267ZM25.2034 28.9477C24.6011 29.4807 21.8492 31.8762 22.7055 38.4068C23.5735 36.9952 22.8295 31.6536 25.3983 29.715C23.6031 31.8879 24.5538 35.736 23.2547 39.2209H21.9909C22.3512 36.4095 20.7803 32.1925 25.2034 28.9419V28.9477ZM20.1307 39.2267H19.5461C19.9536 38.6469 20.2725 37.9441 20.615 37.1592C20.6386 37.6454 20.5146 38.4478 20.1307 39.2267ZM22.983 27.9637C23.5086 28.5436 20.2075 30.0254 18.5895 29.4573C21.3 29.4924 22.4456 27.3839 22.983 27.9637ZM19.2213 30.1191C21.0874 30.1191 22.1917 29.51 22.6641 29.0414C22.4811 30.371 21.052 30.8337 19.239 30.8337C17.4261 30.8337 15.7549 28.8481 14.379 30.1777C16.806 29.8965 17.1663 32.4385 19.9063 31.5834C17.5383 34.1136 15.8021 29.6564 13.0798 30.9449C14.4616 27.6767 17.3671 30.125 19.2272 30.125L19.2213 30.1191ZM5.73356 34.1897C7.14494 32.1163 8.24333 34.9746 10.5936 33.3815C11.3791 34.6056 9.45983 35.367 8.33781 34.6876C7.2158 33.9964 6.31819 33.973 5.72766 34.1897H5.73356ZM12.6074 35.6657C11.568 36.4622 8.92244 37.2705 8.96378 35.5544C11.7157 36.0815 12.3475 32.2101 14.7982 33.3463C14.1782 33.4635 13.629 34.8809 12.6074 35.6657ZM20.302 34.793C20.2961 36.2631 20.0894 37.3291 19.7469 38.1256L15.7726 39.2267H12.2294L20.302 34.793Z" className="fill-current"></path><path d="M35.3611 18.5645C33.4418 18.7694 33.743 21.3524 35.1898 21.3524C36.6366 21.3524 36.8433 20.6847 37.9358 20.6847C39.0283 20.6847 39.4121 21.3934 40.292 21.3934C41.1719 21.3934 41.6857 20.7725 41.29 20.2278C40.7231 21.1474 39.7192 19.894 38.981 19.894C37.8472 19.894 37.363 20.3567 36.6248 20.7257C35.7981 21.1415 35.0067 20.7491 35.3138 20.263C34.6819 20.2513 34.2686 19.4723 35.3611 18.5586V18.5645Z" className="fill-current"></path><path d="M42.3049 10.6567C40.4506 13.3861 42.9072 16.1916 39.0156 17.1639C43.6395 17.2107 41.236 13.3041 42.925 11.055C44.6139 8.80592 46.5213 9.63761 47.1414 7.03125C46.167 9.15148 43.3678 9.09292 42.3108 10.6567H42.3049Z" className="fill-current"></path><path d="M36.9909 15.8348C35.9338 14.8039 36.4063 12.9531 36.4063 12.9531C36.4063 12.9531 34.7351 15.0265 36.9909 15.8348Z" className="fill-current"></path><path d="M43.5391 11.5632C42.0509 13.7479 43.7635 16.9165 40.6514 17.836C44.5725 17.9298 42.6887 13.4257 44.106 11.8678C45.3461 10.0755 46.4799 10.3801 47.0645 8.47656C46.2378 9.99938 44.3835 10.3157 43.5391 11.5632Z" className="fill-current"></path><path d="M49.0549 18.2799C45.8128 16.962 43.8877 19.996 43.8877 20.9097C44.6731 20.5348 45.9664 19.1408 46.4447 18.8246C47.3246 18.2506 48.6946 18.602 49.0549 18.2799Z" className="fill-current"></path><path d="M41.4311 23.0416C41.6614 23.5571 42.6299 22.4091 44.0885 22.8484C43.3858 22.374 41.3071 22.3798 41.4311 23.0416Z" className="fill-current"></path><path d="M52.1318 16.6719C51.4467 19.8229 45.4824 17.4919 45.5355 21.9842C46.7992 19.7644 52.6514 19.9577 52.1318 16.6719Z" className="fill-current"></path><path d="M40.3391 24.5276C40.4513 25.2011 41.6442 23.8013 43.9355 24.7736C43.15 23.6432 40.1679 23.5319 40.3391 24.5276Z" className="fill-current"></path><path d="M35.662 15.8289C33.353 12.0687 38.7682 11.2019 37.2387 8.09766C37.4336 10.5283 32.231 13.0351 35.662 15.8289Z" className="fill-current"></path><path d="M36.2533 30.418C35.9403 30.6347 35.1962 30.8514 34.6175 31.2379C34.5584 31.3375 34.458 31.6948 34.3281 31.7768C34.9246 31.8998 36.206 31.0447 36.2533 30.418Z" className="fill-current"></path><path d="M28.8232 21.7074C27.9256 21.5258 26.8509 22.4278 25.8115 22.9022C26.7918 24.302 29.0654 24.4133 29.9807 24.9112C30.1874 24.6007 30.8783 22.1057 28.8291 21.7015L28.8232 21.7074ZM27.778 23.9858C26.8449 23.6343 27.2347 21.8597 28.4748 22.1174C28.3981 22.2579 27.8311 23.3415 27.778 23.9858ZM28.4866 24.1966C28.8941 23.7632 29.1835 22.7148 29.2543 22.5508C30.1519 23.2361 29.2543 24.4895 28.4866 24.1966Z" className="fill-current"></path><path d="M32.0902 20.2776C31.104 21.4315 30.4013 20.1664 29.1434 20.1664C28.0627 20.1546 26.8108 21.3495 26.5923 20.5763C26.4211 19.9789 27.5313 18.9774 28.9781 18.8661C27.7438 18.5264 25.7301 19.6509 25.3699 20.8868C24.9743 20.9219 24.6436 20.8165 24.6436 20.8165C25.1455 22.9191 27.2891 20.7696 28.293 20.7696C29.2025 20.7696 32.037 22.802 32.0902 20.2718V20.2776Z" className="fill-current"></path><path d="M31.8057 7.48735L32.8804 10.2694C32.8804 10.2694 31.9002 11.4057 31.9002 13.4263C31.9002 17.3915 35.1776 17.7605 34.9532 16.1616C32.6501 17.2041 32.5379 13.9008 33.1698 13.1979C33.1698 13.1979 32.7505 14.9316 34.2918 15.5583C32.2367 12.1847 36.2819 10.902 36.2819 8.20776C36.2819 5.96453 34.8882 5.2324 34.9237 3.17074C34.9591 0.693227 38.6381 0.0431002 38.6736 0.997791C38.7031 1.6772 36.0043 1.75334 35.9571 4.31285C35.9158 6.70837 38.6145 7.28235 38.5554 9.61344C38.5141 11.1363 35.7563 12.5478 37.4748 15.4119L41.39 4.45928L38.3901 7.81534C37.4334 6.62637 36.6776 6.51509 36.6776 4.389C36.6776 2.2629 39.0692 1.94662 39.0692 0.950934C39.0692 0.154382 37.8704 0.0430997 36.9905 0.00210067C35.6382 -0.0564693 33.2407 1.10907 33.2407 3.58073C33.2407 6.05238 34.9355 7.31749 33.2525 9.64858L31.8057 7.47563V7.48735ZM35.343 6.9485C36.4118 10.3104 32.8922 11.2007 32.597 13.4146C32.3785 10.7321 35.7563 9.46116 35.343 6.9485Z" className="fill-current"></path>
                    <path d="M29.2603 25.2904C28.7052 24.9214 26.7329 24.9742 25.6226 23.8555C25.6226 23.8555 25.54 24.0897 25.6463 24.2772C24.2821 24.816 24.666 26.1046 24.666 26.1046C24.666 26.1046 25.5577 25.0327 26.1187 25.0503C26.1187 25.0503 25.9947 25.9113 26.2486 26.3037L26.3667 26.4853C25.8884 24.7047 29.2603 25.2904 29.2603 25.2904Z" className="fill-current"></path><path d="M19.1865 9.6941L21.6549 10.8655C21.7317 11.703 22.086 12.5933 22.9423 13.5831C23.899 14.6901 26.5091 15.0181 26.6154 17.6303C27.4067 16.8396 26.7867 15.0064 25.021 13.9697C18.407 10.1158 29.5386 4.07724 22.3872 1.916C28.5642 1.50601 25.9304 7.04673 26.4265 9.26654C27.1115 12.3356 29.9637 11.5918 31.4932 13.5129L29.8161 4.20023L28.2217 10.6898C26.1194 10.3794 26.8634 7.42158 26.9166 4.73908C27.017 -0.350657 18.2417 1.10774 19.4345 3.97181C19.8834 5.06121 22.8537 2.6247 22.8714 5.19592C22.8892 6.94716 21.7849 8.46413 21.6609 10.1802L19.1983 9.68824L19.1865 9.6941ZM20.0192 3.56768C19.4168 2.84726 22.3872 2.03314 22.9305 3.84881C21.466 2.89998 20.3026 3.90738 20.0192 3.56768Z" className="fill-current"></path><path d="M25.2864 8.89453C22.3692 14.365 32.4496 11.8757 31.1386 16.5262C33.2586 11.5009 24.1821 14.3005 25.2864 8.89453Z" className="fill-current"></path><path d="M51.411 33.9562C53.0882 33.921 54.4109 32.2811 55.3617 31.6837C53.9976 31.9941 53.283 33.1948 51.411 33.2416C48.3403 33.3002 46.7399 24.6904 41.5078 26.4475C46.8994 26.8692 46.7754 34.0675 51.411 33.962V33.9562Z" className="fill-current"></path><path d="M28.8993 15.9615C28.7516 15.9615 28.6158 15.9146 28.4918 15.8385C27.795 15.4051 27.4288 14.2161 26.7261 14.345C27.1336 14.6554 26.9505 15.7741 27.5292 16.3949C27.8009 16.7053 28.2024 16.8986 28.6512 16.8986C29.4839 16.8986 30.1512 16.2368 30.1512 15.4109C30.1512 14.9307 29.9268 14.5089 29.5725 14.2395C29.041 13.8295 28.291 13.5601 26.0942 12.8163C20.8739 11.0592 28.6926 5.80545 25.0903 2.85938C27.0686 7.08813 21.2991 9.60078 24.299 12.5703C25.5982 13.9115 28.4446 13.7124 29.4248 14.6671C29.5666 14.8018 29.6611 15.0009 29.6611 15.2118C29.6611 15.6218 29.3245 15.9615 28.9052 15.9615H28.8993Z" className="fill-current"></path><path d="M24.4009 19.1048C23.462 19.0813 21.9502 18.6362 21.4247 17.3828C20.9345 18.5249 22.4345 21.594 24.4009 19.1048Z" className="fill-current"></path><path d="M36.7185 31.2617C36.6595 31.4081 36.2402 31.5721 35.3839 31.8943C35.2658 32.0876 35.006 32.398 34.7402 32.562C35.7619 32.8431 36.8898 31.8123 36.7185 31.2617Z" className="fill-current"></path><path d="M41.0718 22.1538C41.2844 22.5052 41.6033 21.8375 42.182 21.5212C41.4261 21.4158 40.9655 21.9605 41.0718 22.1538Z" className="fill-current"></path><path d="M40.4325 22.6327C39.3931 22.1583 38.3243 21.2563 37.4267 21.4379C35.3716 21.842 36.0625 24.3371 36.2633 24.6475C37.1846 24.1496 39.4522 24.0384 40.4325 22.6385V22.6327ZM38.4719 23.6694C38.4719 23.6694 37.8519 21.9416 37.7751 21.801C39.0152 21.5433 39.399 23.3238 38.4719 23.6694ZM36.9897 22.2344C37.0605 22.3984 37.3499 23.4468 37.7574 23.8802C36.9897 24.1731 36.1039 22.9197 36.9897 22.2344Z" className="fill-current"></path><path d="M44.9519 16.588C44.0307 17.5895 44.0957 18.4095 42.7197 19.2822C44.5149 20.0495 44.5622 17.6891 46.3574 17.1795C47.5798 16.8222 48.5129 18.2924 50.2608 17.4958C52.0147 16.6992 51.3828 13.4779 52.2332 12.0546C53.0895 10.6372 55.4339 9.31357 57.0933 12.1718C57.0933 12.1718 54.2883 9.43071 52.9655 12.7048C53.8808 11.9492 55.239 11.7149 55.239 12.4412C54.5186 12.6696 53.3611 13.0913 53.3198 15.645C53.2784 18.6203 52.0679 19.2646 51.123 19.8737C49.7648 20.7699 46.5936 20.723 45.8909 22.7495L56.8689 17.8941H53.5206C53.9576 15.4576 53.0009 11.8262 57.5893 12.6696C58.1503 11.4631 54.3355 7.5799 51.0167 12.0078L50.6978 10.8891C50.001 16.7871 46.8594 14.497 44.946 16.588H44.9519ZM50.7569 13.636C51.3238 14.5966 49.6349 16.3361 49.6349 16.3361C50.0778 16.4943 50.06 17.1268 49.5049 17.2849C48.5069 17.5778 47.7156 16.465 46.4401 16.7871C46.7058 16.3361 49.3632 16.4298 50.751 13.636H50.7569Z" className="fill-current"></path><path d="M23.6214 20.5895C18.9916 20.6656 22.399 15.6286 18.9443 14.8906C20.7218 16.0796 19.7475 17.1514 19.7593 19.0784C19.777 21.4036 22.582 22.1064 23.6214 20.5895Z" className="fill-current"></path><path d="M39.8192 13.8026C39.2818 15.2376 37.7996 15.6417 37.0791 16.8893C37.4866 16.901 39.6361 16.4149 40.4333 15.0795C41.201 13.7851 40.451 10.019 42.9136 9.09948C45.4942 8.13307 48.1929 6.70982 45.1399 3.62904C49.8169 4.80044 47.189 9.7496 46.6339 10.4759C46.1024 11.1494 44.384 12.5024 44.384 14.6753C44.384 16.286 42.9254 18.1193 41.7916 18.3477C42.9903 18.828 44.7856 16.1103 44.7856 16.1103L50.6141 8.63091L47.2599 10.347C47.2599 10.347 48.1811 9.56218 48.1811 6.95581C48.1811 3.2659 44.1891 2.60992 44.2245 3.75203C44.2541 4.51344 45.5828 5.05229 45.6241 6.30569C45.6595 7.55908 43.8879 8.26778 42.5061 8.66606L41.886 6.60439V8.92376C39.6184 10.0835 40.3802 12.2915 39.8192 13.8026Z" className="fill-current"></path>
                  </svg>
                </div>
                <div className="max-w-[110px] lg:max-w-[90px] flex items-center justify-center relative w-22 h-12">
                  <svg className="w-full" width="145" viewBox="0 0 911 225" fill="none" xmlns="http://www.w3.org/2000/svg"><g>
                    <path d="M805.587 182.431C845.386 182.431 868.329 171.731 868.329 146.502C868.329 129.497 854.994 118.229 822.843 115.544L800.292 113.634C790.092 112.683 785.588 110.382 785.588 105.611C785.588 100.449 792.452 97.7714 803.627 97.7714C817.739 97.7714 822.843 100.832 824.411 107.713L864.409 106.754C860.882 86.8794 841.266 76.1792 805.195 76.1792C765.197 76.1792 747.349 89.3647 747.349 109.623C747.349 127.011 760.685 137.145 791.468 140.005L814.603 142.107C823.427 142.874 828.331 145.168 828.331 150.522C828.331 156.443 821.859 159.888 807.547 159.888C792.452 159.888 786.956 155.676 785.196 147.845L744.213 148.796C746.965 169.437 764.805 182.431 805.587 182.431ZM65.604 181.096C78.3558 181.096 88.7475 171.155 88.7475 158.929C88.7475 146.886 78.3558 136.569 65.6123 136.569C52.6686 136.569 42.6689 146.886 42.6689 158.92C42.6689 171.155 52.6686 181.096 65.604 181.096ZM146.769 178.419V123.959C146.769 112.108 155.401 104.277 167.36 104.277C176.376 104.277 183.04 110.957 183.04 119.564V178.419H226.182V123.959C226.182 112.3 235.198 104.277 246.374 104.277C255.397 104.277 262.653 109.623 262.653 119.564V178.419H305.788V113.634C305.788 89.7484 286.572 76.9381 260.885 76.9381C243.438 76.9381 229.51 82.676 220.103 93.7599C212.655 82.676 200.495 76.9465 182.456 76.9465C166.576 76.9465 154.025 82.1006 145.201 92.4255L144.217 79.8154H103.634V178.419H146.769ZM388.345 182.047C425.208 182.047 457.951 163.132 457.951 129.689C457.951 95.8616 426.384 76.5628 388.345 76.5628C351.091 76.5628 318.74 95.1026 318.74 129.689C318.74 163.132 351.091 182.047 388.345 182.047ZM388.145 154.725C373.634 154.725 362.266 143.258 362.266 129.305C362.266 115.544 373.642 103.893 388.145 103.893C402.657 103.893 414.416 115.544 414.416 129.305C414.416 143.258 402.657 154.725 388.145 154.725ZM514.029 178.419V125.869C514.029 112.683 523.637 105.227 536.572 105.227C547.556 105.227 554.22 111.149 554.22 120.898V178.419H597.363V113.067C597.363 89.5565 577.363 77.1383 551.676 77.1383C534.612 77.1383 521.677 82.676 512.853 93.3763L511.285 79.8154H470.895V178.419H514.029ZM745.648 79.8154H693.69L674.091 96.6289L656.243 113.059L656.635 92.2337V42.3605H613.5V178.419H656.635V147.653L667.027 140.005L676.242 151.856L697.418 178.419H749.96L696.242 119.564L745.648 79.8154Z" className="fill-current"></path></g>
                  </svg>
                </div>
                <div className="max-w-[110px] lg:max-w-[90px] flex items-center justify-center relative w-22 h-12">
                  <svg className="w-full" width="117" viewBox="0 0 117 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M116.326 14.1371C116.326 15.0808 115.636 15.7141 114.819 15.7141V15.7083C113.979 15.7141 113.302 15.0808 113.302 14.1374C113.302 13.1942 113.979 12.5627 114.819 12.5627C115.636 12.5624 116.326 13.194 116.326 14.1371ZM116.937 14.1371C116.937 12.8419 115.936 12.0902 114.819 12.0902C113.695 12.0902 112.694 12.8419 112.694 14.1371C112.694 15.4313 113.695 16.186 114.819 16.186C115.936 16.186 116.937 15.4313 116.937 14.1371ZM114.468 14.3103H114.695L115.22 15.2369H115.797L115.215 14.2712C115.516 14.2497 115.763 14.1061 115.763 13.6995C115.763 13.194 115.416 13.0318 114.829 13.0318H113.979V15.2369H114.467L114.468 14.3103ZM114.468 13.9369V13.4062H114.808C114.993 13.4062 115.245 13.4212 115.245 13.6477C115.245 13.8939 115.114 13.9369 114.896 13.9369H114.468ZM102.674 2.85607L105.315 10.1109H99.9517L102.674 2.85607ZM99.846 0.031184L93.7605 15.5157H98.0574L99.02 12.7794H106.222L107.133 15.5157H111.798L105.667 0.0291794L99.846 0.031184ZM87.6284 15.5214H91.9881V0.0264264L87.6276 0.025426L87.6284 15.5214ZM57.3622 0.025426L53.7248 12.3064L50.2404 0.0264264L45.5363 0.025426L50.5127 15.5214H56.7936L61.8102 0.025426H57.3622ZM74.9849 3.39958H76.8589C79.5771 3.39958 81.3355 4.62523 81.3355 7.80596C81.3355 10.9872 79.5771 12.2131 76.8589 12.2131H74.9849V3.39958ZM70.6618 0.025426V15.5214H77.7295C81.4953 15.5214 82.7252 14.8928 84.0547 13.4828C84.9939 12.4926 85.6014 10.3193 85.6014 7.94408C85.6014 5.76529 85.0873 3.82298 84.191 2.61285C82.5764 0.448821 80.2501 0.025426 76.7782 0.025426H70.6618ZM29.3633 0.00390625V15.5214H33.7599V3.7389L37.1666 3.7399C38.2946 3.7399 39.0987 4.02242 39.6419 4.60496C40.3308 5.3419 40.6121 6.53151 40.6121 8.7078V15.5214H44.8725V6.9479C44.8725 0.828928 40.9889 0.00390625 37.189 0.00390625H29.3633ZM63.6451 0.025426L63.6468 15.5214H68.0046V0.025426H63.6451Z" className="fill-current"></path><path d="M3.23801 6.97027C3.23801 6.97027 5.38962 3.70796 9.68566 3.37046V2.1869C4.92724 2.57962 0.806641 6.72119 0.806641 6.72119C0.806641 6.72119 3.14048 13.6543 9.68566 14.2893V13.0312C4.8825 12.4103 3.23801 6.97027 3.23801 6.97027ZM9.68566 10.5293V11.6815C6.05554 11.0163 5.04791 7.13858 5.04791 7.13858C5.04791 7.13858 6.79088 5.15435 9.68566 4.83257V6.09679C9.68347 6.09679 9.68194 6.09611 9.68012 6.09611C8.16078 5.90874 6.97388 7.36731 6.97388 7.36731C6.97388 7.36731 7.63913 9.82266 9.68566 10.5293ZM9.68566 0.00390625V2.1869C9.82535 2.1759 9.96504 2.16656 10.1055 2.16165C15.5153 1.97428 19.0402 6.72119 19.0402 6.72119C19.0402 6.72119 14.9917 11.7801 10.774 11.7801C10.3874 11.7801 10.0256 11.7432 9.68566 11.6813V13.0312C9.98629 13.0709 10.2891 13.091 10.5921 13.0914C14.517 13.0914 17.3554 11.0315 20.1038 8.59351C20.5595 8.96854 22.425 9.88093 22.8085 10.2802C20.1953 12.5287 14.1051 14.341 10.6523 14.341C10.3195 14.341 9.99984 14.3204 9.68566 14.2893V16.186H24.6039V0.00390625H9.68566ZM9.68566 4.83257V3.37046C9.82392 3.36054 9.96322 3.35297 10.1055 3.34835C13.9957 3.22279 16.5479 6.78378 16.5479 6.78378C16.5479 6.78378 13.7913 10.718 10.8356 10.718C10.4102 10.718 10.0288 10.6478 9.68557 10.5292V6.0967C11.2 6.28475 11.5048 6.97223 12.4153 8.532L14.4405 6.7773C14.4405 6.7773 12.9622 4.78501 10.4703 4.78501C10.1994 4.78491 9.94018 4.80457 9.68566 4.83257Z" className="fill-current"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
