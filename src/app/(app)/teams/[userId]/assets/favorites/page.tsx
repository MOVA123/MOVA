import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  export default async function Page() {
    return (
      <div className="flex flex-col h-full overflow-auto w-full">
        <div className="shrink-0 h-[32px] w-full "></div>
        <div className="flex flex-col gap-[24px] mb-[16px] px-[16px] pb-[16px]">
          <div className="items-center flex gap-[8px]">
            <div className="text-white flex-1 text-[22px] font-semibold leading-[22px]">
              <span>Assets</span>
              <span className="text-gray-500 font-normal">.Favorited</span>
            </div>
            <button className="rounded-[8px] text-[16px] font-normal h-[40px] leading-[24px] px-[12px] border border-gray-950 text-white items-center cursor-pointer flex justify-center overflow-hidden whitespace-nowrap ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 10v6"></path>
                <path d="M9 13h6"></path>
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
              </svg>
              <span>New Folder</span>
            </button>
            <button className="rounded-[8px] text-[16px] font-normal h-[40px] leading-[24px] px-[12px] border border-gray-950 text-white items-center cursor-pointer flex justify-center overflow-hidden whitespace-nowrap bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                <path d="M12 12v9"></path>
                <path d="m16 16-4-4-4 4"></path>
              </svg>
              <span>Upload</span>
            </button>
          </div>
          <div className="px-[16px]">
            <div className="border-b-[1px] border-ui-level0 justify-between items-center bg-black flex gap-[8px] pb-[16px]">
              <div className="flex gap-1">
                <Select>
                  <SelectTrigger className="w-[180px] text-white">
                    <SelectValue placeholder="type" />
                  </SelectTrigger>
                  <SelectContent className="bg-ui-level0 text-white border-none">
                    <SelectGroup>
                      <SelectLabel>type</SelectLabel>
                      <SelectItem value="all">all</SelectItem>
                      <SelectItem value="upload">upload</SelectItem>
                      <SelectItem value="export">export</SelectItem>
                      <SelectItem value="Favorited">Favorited</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px] text-white">
                    <SelectValue placeholder="media" />
                  </SelectTrigger>
                  <SelectContent className="bg-ui-level0 text-white border-none">
                    <SelectGroup>
                      <SelectItem value="apple">All</SelectItem>
                      <SelectItem value="banana">Image</SelectItem>
                      <SelectItem value="blueberry">video</SelectItem>
                      <SelectItem value="grapes">audio</SelectItem>
                      <SelectItem value="pineapple">text</SelectItem>
                      <SelectItem value="font">font</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px] text-white">
                    <SelectValue placeholder="tag" />
                  </SelectTrigger>
                  <SelectContent className="bg-ui-level0 text-white border-none">
                    <SelectGroup>
                      <SelectItem value="pineapple">no tags</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-[6px] pr-[16px]">
                <button className="bg-ui-level0 text-white items-center border-none rounded-[6px] flex h-[32px] justify-center p-0 w-[32px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1"
                  >
                    <rect
                      width="7.52947"
                      height="7.52947"
                      rx="2"
                      fill="currentColor"
                    ></rect>
                    <rect
                      x="8.4707"
                      width="7.52947"
                      height="7.52947"
                      rx="2"
                      fill="currentColor"
                    ></rect>
                    <rect
                      y="8.4707"
                      width="7.52947"
                      height="7.52947"
                      rx="2"
                      fill="currentColor"
                    ></rect>
                    <rect
                      x="8.4707"
                      y="8.4707"
                      width="7.52947"
                      height="7.52947"
                      rx="2"
                      fill="currentColor"
                    ></rect>
                  </svg>
                </button>
                <button className="bg-ui-level0 text-white items-center border-none rounded-[6px] flex h-[32px] justify-center p-0 w-[32px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1"
                  >
                    <path
                      d="M2.66675 8H13.3334M2.66675 4H13.3334M2.66675 12H13.3334"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="date created" />
                  </SelectTrigger>
                  <SelectContent className="bg-ui-level0 text-white border-none">
                    <SelectGroup>
                      <SelectLabel>sort by</SelectLabel>
                      <SelectItem value="date created">date created</SelectItem>
                      <SelectItem value="name">name</SelectItem>
                      <SelectItem value="media type">media type</SelectItem>
                    </SelectGroup>
  
                    <SelectGroup>
                      <SelectLabel>order</SelectLabel>
                      <SelectItem value="newest first">
                        newest first
                      </SelectItem>{" "}
                      <SelectItem value="oldest first">oldest first</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          {/* <div className="relative h-[200px]">
            <div className="h-full absolute top-0 w-full ">
              <div className="py-0 grid gap-[16px] grid-cols-[240px]">
                <div className="w-full">
                  <div className="cursor-pointer flex flex-col gap-[8px] h-full overflow-hidden relative w-full">
                    <div className="aspect-[16/9] bg-ui-level0 rounded-[6px] grid gap-[8px] overflow-hidden p-[8px] relative w-full text-white justify-center items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="lucide lucide-folder asset-group-tile-module__folderIcon__iy3o0"
                      >
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col overflow-hidden pb-[12px] w-full">
                      <div className="items-center flex gap-[4px] justify-center">
                        <span className="text-white text-[16px] font-medium leading-[24px] text-ellipsis whitespace-nowrap">Sessions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="text-white h-full w-full text-center">
            no favorites
          </div>
        </div>
      </div>
    );
  }