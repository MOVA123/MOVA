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
              <div className="flex items-start justify-between static z-10">
                <div className="flex items-center">
                  <a href="https://x.com/MOVAAI_" target="_blank">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#94A3B8">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 mb-6 justify-end">
                  <div className="text-left pl-5">
                    <div className="mb-4">Links</div>
                    <ul className="flex flex-col items-start">
                      <li className="text-[15px] mb-2 text-slate-400 hover:underline">
                      <a href="/studios">Studios</a>
                      </li>
                      <li className="text-[15px] mb-2 text-slate-400 hover:underline">
                        <a href="/about">About Us</a>
                      </li>
                      <li className="text-[15px] mb-2 text-slate-400 hover:underline">
                        <a href="/login">Login</a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-left pl-5">
                    <div className="mb-4">Company</div>
                    <ul className="flex flex-col items-start">
                      <li className="text-[15px] mb-2 text-slate-400 hover:underline">
                        <a href="/privacy">Privacy Policy</a>
                      </li>
                      <li className="text-[15px] mb-2 text-slate-400 hover:underline">
                        <a href="/terms">Terms of Service</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-700 py-6 text-left text-sm text-slate-400">
                © {new Date().getFullYear()} Mova. All rights reserved.
              </div>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
