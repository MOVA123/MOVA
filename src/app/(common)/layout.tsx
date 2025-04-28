// import { connection } from "next/server";
import "../globals.css";
import Header from "@/app/(common)/components/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // connection()
  return (
    <html lang="en">
      <body className="debug-screens">
        <Header></Header>
        {children}
        <footer>
          <section className="bg-black text-white pt-5 [@media(min-width:1600px)]:pt-28">
            <div className="ml-auto mr-auto pl-5 pr-5 max-w-[1600px]">
              <div className="aspect-video lg:aspect-[2.36] w-full rounded-[3px] mb-16 overflow-hidden relative">
                <video autoPlay muted loop>
                  <source src={`https://d2rbho9qhylu5v.cloudfront.net/bottom (${Math.floor(Math.random() * 3) + 1}).mp4`}/>
                </video>
                <div className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3 text-[16px] opacity-70 scale-90 lg:scale-100">
                  Made with Mova Gen-3
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0 mb-52 flex-1">
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">Product</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Our Tools
                      </li>
                      <li className="mb-1 hover:underline">
                        API
                      </li>
                      <li className="mb-1 hover:underline">
                        Gen-3
                      </li>
                      <li className="mb-1 hover:underline">
                        Act-One
                      </li>
                      <li className="mb-1 hover:underline">
                        Frames
                      </li>

                    </ul>
                  </div>
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">Initiatives</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Studios
                      </li>
                      <li className="mb-1 hover:underline">
                        Creative Partners Program
                      </li>
                      <li className="mb-1 hover:underline">
                        The Human Film Fund
                      </li>

                    </ul>
                  </div>
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">Company</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Our Research
                      </li>
                      <li className="mb-1 hover:underline">
                        Careers
                      </li>
                      <li className="mb-1 hover:underline">
                        <a href="/about">About Us</a>
                      </li>
                      <li className="mb-1 hover:underline">
                        Customer Stories
                      </li>
                      <li className="mb-1 hover:underline">
                        News
                      </li>
                      <li className="mb-1 hover:underline">
                        Store
                      </li>
                      <li className="mb-1 hover:underline">
                        Talent Network
                      </li>

                    </ul>
                  </div>
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">Get Started</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        For Enterprises
                      </li>
                      <li className="mb-1 hover:underline">
                        For Eucators
                      </li>
                      <li className="mb-1 hover:underline">
                        Login
                      </li>
                      <li className="mb-1 hover:underline">
                        Pricing
                      </li>
                      <li className="mb-1 hover:underline">
                        DataSecurity
                      </li>
                      <li className="mb-1 hover:underline">
                        Changelog
                      </li>
                    </ul>
                  </div>
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">Connect</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Press
                      </li>
                      <li className="mb-1 hover:underline">
                        Twitter
                      </li>
                      <li className="mb-1 hover:underline">
                        Istagram
                      </li>
                      <li className="mb-1 hover:underline">
                        YouTube
                      </li>
                      <li className="mb-1 hover:underline">
                        Discord
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end pb-6 relative"></div>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
