import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="driver-none relative z-20 h-full w-[80px] shrink-0 bg-transparent">
      <div className="relative h-full w-20">
        <div className="flex h-full w-full flex-row flex-nowrap">
          <div className="flex w-full shrink-0 flex-col space-y-7 border-r-[1px] border-default">
            <div className="flex flex-col items-center justify-center pt-7 mx-4 ">
              <Link href="/">ICON</Link>
              <hr className="w-full border-t-0 border-b border-default" />
            </div>
            <div className="flex grow flex-col items-center">

            </div>
            <div className="flex flex-col justify-center items-center !mb-8">
                
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
