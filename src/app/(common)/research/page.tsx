import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Research | ReelMagic',
  icons: {
    icon: '/assets/icons/logo.ico'
  }
}
export default function Page() {
  return (
    <main>
      <section className="bg-white pt-28 lg:pt-48 pb-16">
        <div className="rw-container">
          <div className="lg:w-15/16 mx-auto flex items-center justify-center flex-col text-center">
            <div className="rw-h6 mb-2.5">Our Research</div>
            <h1 className="rw-h2 mb-4">
            Building general-purpose multimodal{" "}
              <br className="hidden lg:block" />
              simulators of the world.
            </h1>
            <div className="rw-bodycopy2 lg:w-1/2 mx-auto">
            We believe models that use video as their main input/output modality, 
            when supplemented by other modalities like text and audio, 
            will form the next paradigm of computing.
            </div>
            <div className="mt-3 lg:mt-6">
              <Link
                className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-black border border-black hover:bg-black hover:text-white "
                target="_self"
                href="#"
              >
                Learn more about General World Models
                <svg
                  className="ml-2 mt-px"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.46812 0L9.89321 4.77037C9.96143 4.83035 10 4.9133 10 5C10 5.0867 9.96143 5.16965 9.89321 5.22963L4.46812 10L3.98863 9.54074L8.7909 5.31802L0 5.31803V4.68198L8.7909 4.68198L3.98863 0.459263L4.46812 0Z"
                    className="fill-current"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 lg:pb-16 bg-black pt-6 lg:pt-12">
        <div className="rw-container">
          <div className="lg:w-14/16 mx-auto">
            <Link className="group" href="#">
              <div className="aspect-video overflow-hidden rounded-[3px]">
                <Image
                  fill
                  alt=""
                  className="!static w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-all duration-3s ease-linear"
                  src="https://picsum.photos/1080/960"
                />
              </div>
            </Link>
            <Link className="text-center text-white mt-8 block" href="#">
              <div className="rw-eyebrow mb-2.5">FEATURED</div>
              <div className="rw-h3 mb-2.5 lg:w-3/4 mx-auto">
                Introducing ReelMagic Gen-3 <br className="hidden lg:block" />
              </div>
              <div className="rw-bodycopy3 text-mediumGray opacity-60">
                ReelMagic Research / March 31st, 2025
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white pt-20 lg:pt-28 pb-12 lg:pb-0">
        <div className="rw-container">
          <div className="xl:w-14/16 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="lg:w-1/2">
              <div className="rw-h4">
              We&apos;re advancing research in AI systems
               that can understand and simulate the
                world and its dynamics.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-6 lg:pt-20 pb-16">
        <div className="rw-container">
          <div className="xl:w-14/16 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-9 lg:gap-x-2.5 gap-y-10 lg:gap-y-20">
              {[1, 2, 3].map((e) => (
                <Link key={e} href="#">
                  <div className="aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      alt=""
                      fill
                      className="!static w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-3s ease-linear"
                      src={`https://picsum.photos/id/${300 + 2 * e}/1080/960`}
                    ></Image>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="rw-container">
        <div className="xl:w-14/16 mx-auto">
          <div className="bg-offWhite py-12 lg:py-20 text-center relative overflow-hidden">
            <Image
              fill
              alt="RNA Sessions"
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              src="https://picsum.photos/1080/960"
            />
            <div className="rw-h5 text-white">RNA Sessions</div>
            <div className="rw-bodycopy2 text-white mb-2 px-6">
              An ongoing series of talks about frontier research in{" "}
              <br className="lg:block hidden" /> AI and art, hosted by ReelMagic.
            </div>
            <a
              className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-offBlack hover:bg-offBlack hover:text-white "
              target="_self"
              href="#"
            >
              Learn more
              <svg
                className="ml-2 mt-px"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.46812 0L9.89321 4.77037C9.96143 4.83035 10 4.9133 10 5C10 5.0867 9.96143 5.16965 9.89321 5.22963L4.46812 10L3.98863 9.54074L8.7909 5.31802L0 5.31803V4.68198L8.7909 4.68198L3.98863 0.459263L4.46812 0Z"
                  className="fill-current"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <section className="bg-white pt-6 lg:pt-20 pb-16">
        <div className="rw-container">
          <div className="xl:w-14/16 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-9 lg:gap-x-2.5 gap-y-10 lg:gap-y-20">
              {[
                {id: 1, title: "Introducing Act-One"},
                {id: 2, title: "Foundations for Safe Generative Media"},
                {id: 3, title: "Pioneering New Interfaces in the Age of Generative Media"},
                {id: 4, title: "Introducing Gen-3 Alpha: A New Frontier for Video Generation"},
                {id: 5, title: "Introducing General World Models"},
                {id: 6, title: "More control, fidelity and expressibility"},
                {id: 7, title: "Mitigating stereotypical biases in text to image generative systems"},
                {id: 8, title: "Scale, Speed and Stepping Stones: The path to Gen-2"},
                {id: 9, title: "Gen-2: Generate novel videos with text, images or video clips"},
                {id: 10, title: "Gen-1: The next step forward for generative AI"},
                {id: 11, title: "Towards unified keyframe propagation models"},
                {id: 12, title: "High-Resolution Image Synthesis with Latent Diffusion Models"},
                {id: 13, title: "Soundify: Matching sound effects to video"},
                {id: 14, title: "Distributing Work: Adventures in queuing"}
              ].map((item) => (
                <Link href="#" target="_self" key={item.id}>
                  <div className="aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      alt=""
                      src={`https://picsum.photos/id/${1000 + 2 * item.id}/1080/960`}
                      fill
                      className="!static w-full h-full object-cover scale-[1.01] transform-gpu hover:scale-110 transition-all duration-3s ease-linear"
                    ></Image>
                  </div>
                  <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 text-white bg-black">
        <div className="rw-container">
          <div className="xl:w-14/16 mx-auto">
            <div className="rw-h4 mb-5">Discover more</div>
            <div className="grid lg:grid-cols-3 w-full gap-9 lg:gap-2.5">
            {[
                {id: 1, title: "ReelMagic Partners with Lionsgate"},
                {id: 2, title: "Exploring the Future of Filmmaking: ReelMagic’s programming partnership with Tribeca Festival 2024"},
                {id: 3, title: "Partnering with Media.Monks to expand creative horizons"}
              ].map((item) => (
                <Link href="#" target="_self" key={item.id}>
                  <div className="aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      alt=""
                      src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/1080/960`}
                      fill
                      className="!static w-full h-full object-cover scale-[1.01] transform-gpu hover:scale-110 transition-all duration-3s ease-linear"
                    ></Image>
                  </div>
                  <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
