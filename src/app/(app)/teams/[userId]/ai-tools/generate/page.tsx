"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import request from "@/request/axios";
import Image from "next/image";
import { toast } from "sonner";
export default function Page() {
  //视频生成
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => inputRef.current?.click(); // 触发文件对话框
  const [imgurl, setImgurl] = useState("");
  const [videoPrompt, setVideoPrompt] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const [videoLoading, setvideoLoading] = useState(0);
  const [videoGenerate, setVideoGenerate] = useState(true);
  const [model, setModel] = useState("wanx2.1-i2v-turbo"); //视频生成模型
  const [curGen, setCurGen] = useState("image");
  const [videoProgress, setVideoProgress] = useState(5);
  //图片生成
  const [imgPrompt, setImgPrompt] = useState("");
  const [nagPrompt, setNagPrompt] = useState("");
  const [imgModel, setImgModel] = useState("wanx2.1-t2i-plus");
  const [genImgSrc, setGenImgSrc] = useState("");
  const [imgLoading, setImgLoading] = useState(false);
  const [imgProgress, setImgProgress] = useState(5);
  const [genImgSize, setGenImgSize] = useState("1024*768");
  const uploadImageApi = async (formData: InstanceType<typeof FormData>) => {
    const {
      data: {
        code,
        data: { img_url },
      },
    } = await request.post("/api/upload/img", formData, {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundaryx2mqINKHVPJ8yMdK",
      },
    });
    if (code === 200) setImgurl(img_url);
  };
  //获取生成视频状态
  const getVideoStatus = async (task_id: string) => {
    const { data } = await request.get("/api/ai-tools/tasks/" + task_id);
    // console.log("getVideoStatus", data);
    if (data.data.output.task_status === "SUCCEEDED") {
      setVideoProgress(100);
      setVideoSrc(data.data.output.video_url);
      return;
    }
    if (data.data.output.task_status === "PENDING") {
      // console.log("PENDING");
      setTimeout(async () => {
        setVideoProgress(25);
        console.log(data.data.output);
        if (videoGenerate) {
          await getVideoStatus(task_id);
        }
      }, 10000);
    }
    if (data.data.output.task_status === "RUNNING") {
      // console.log("RUNNING");
      setTimeout(async () => {
        setVideoProgress(80);
        console.log(data.data.output);
        if (videoGenerate) {
          await getVideoStatus(task_id);
        }
      }, 10000);
    }
  };
  //生成视频api
  const generateApi = async () => {
    if (!imgurl || videoLoading) return;
    setVideoSrc("");
    setvideoLoading(1);
    const { data } = await request.post("/api/ai-tools/video", {
      model,
      input: {
        prompt: videoPrompt,
        img_url: imgurl,
      },
    });
    if (data.code === "DataInspectionFailed") {
      toast("输入的参数不合规", {
        description: "输入内容敏感",
      });
      setvideoLoading(0);
      return;
    }
    if (data.output.task_status === "PENDING") {
      console.log(data.output.task_id);
      setvideoLoading(1);
      getVideoStatus(data.output.task_id);
    }
  };
  //图片生成
  const generateImgApi = async () => {
    if (!imgPrompt || imgLoading) return;
    setImgProgress(0);
    setGenImgSrc("");
    setImgLoading(true);
    const { data } = await request.post("/api/ai-tools/img", {
      model: imgModel,
      input: {
        prompt: imgPrompt,
        negative_prompt: nagPrompt,
      },
      parameters: {
        size: genImgSize,
        n: 1,
      },
    });
    // console.log(data)
    if (data.code === "DataInspectionFailed") {
      toast("输入的参数不合规", {
        description: "输入内容敏感",
      });
      setImgLoading(false);
      return;
    }
    if (data.output.task_status === "PENDING") {
      console.log(data.output.task_id);
      getImgStatus(data.output.task_id);
    }
  };
  //获取图片生成状态
  const getImgStatus = async (task_id: string) => {
    const { data } = await request.get("/api/ai-tools/tasks/" + task_id);
    if (data.data.output.task_status === "SUCCEEDED") {
      setImgLoading(false);
      setImgProgress(100);
      setGenImgSrc(data.data.output.results[0].url);
      return;
    }
    if (data.data.output.task_status === "PENDING") {
      // console.log("PENDING");
      setTimeout(async () => {
        setImgProgress(25);
        console.log(data.data.output);
        if (videoGenerate) {
          await getImgStatus(task_id);
        }
      }, 3000);
    }
    if (data.data.output.task_status === "RUNNING") {
      // console.log("RUNNING");
      setTimeout(async () => {
        setImgProgress(80);
        console.log(data.data.output);
        if (videoGenerate) {
          await getImgStatus(task_id);
        }
      }, 3000);
    }
  };
  const imgContainer = () => {
    if (imgLoading) {
      return (
        <div className="text-white bg-ui-level0 p-[16px] rounded-md w-[350px] flex flex-col items-center">
          loading...
          <Progress
            value={imgProgress}
            className="bg-white primary-white opacity-40 my-[16px] "
          />
        </div>
      );
    } else if (!imgLoading && !genImgSrc) {
      return (
        <div className="text-white bg-ui-level0 p-[16px] rounded-md">
          Text to Image
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-full">
          <Image src={genImgSrc} alt="" fill objectFit="contain"></Image>
        </div>
      );
    }
  };
  return (
    <div className="flex-1 flex">
      <Tabs
        defaultValue={curGen}
        onValueChange={(e) => {
          setCurGen(e);
          if (e === "image") {
            // setVideoGenerate(false);
            // setVideoSrc("");
          }
        }}
        className="w-[400px] min-w-[200px] flex flex-col"
      >
        <TabsList className="grid grid-cols-2 w-full bg-black">
          <TabsTrigger
            value="image"
            className="data-[state=active]:bg-ui-level0  data-[state=active]:text-white"
          >
            image
          </TabsTrigger>
          <TabsTrigger
            value="video"
            className="data-[state=active]:bg-ui-level0  data-[state=active]:text-white"
          >
            video
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="video"
          className="flex-1 flex flex-col data-[state=inactive]:hidden"
        >
          <div className="w-[20vw] bg-ui-level0 min-w-[400px] h-full">
            <div className="flex flex-col w-full h-full overflow-hidden">
              <div className="flex flex-col pt-[16px] px-[16px] bg-ui-level0 h-full">
                <div className="bg-black items-center border border-dashed flex flex-col gap-[12px] justify-center p-[12px] relative border-gray-700 grow-[25]">
                  {imgurl ? (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={imgurl}
                        fill
                        alt="img"
                        objectFit="contain"
                      ></Image>
                      <div
                        className="absolute w-[16px] h-[16px] right-[-8px] top-[-8px] translate-y-50%] bg-black rounded-[50%] hover:bg-ui-level0 cursor-pointer"
                        onClick={() => {
                          setImgurl("");
                          setVideoGenerate(false);
                          setvideoLoading(0);
                        }}
                      >
                        <Image
                          src="/assets/icons/delete.svg"
                          fill
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex z-[2] flex-col justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                        <line x1="16" x2="22" y1="5" y2="5"></line>
                        <line x1="19" x2="19" y1="2" y2="8"></line>
                        <circle cx="9" cy="9" r="2"></circle>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                      </svg>
                      <p className="text-white font-[normal] font-medium leading-[24px] text-center text-[16px]">
                        select an image or video
                      </p>
                      <div className="relative flex gap-[8px] text-white text-[14px] mt-[16px]">
                        <span
                          className="border border-gray-600 px-[5px] rounded-[5px] font-medium cursor-pointer hover:bg-ui-level0 focus-within:"
                          onClick={handleButtonClick}
                        >
                          upload Image
                        </span>
                        <input
                          type="file"
                          ref={inputRef}
                          accept="image/png, image/jpeg"
                          className="hidden"
                          onChange={async (e) => {
                            const form = new FormData();
                            const files = e.target.files;
                            if (files) form.append("image", files[0]);
                            await uploadImageApi(form);
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="h-[16px] flex-shrink-1"></div>
                <div className="grow-[25] overflow-hidden max-h-[300px] min-h-[100px]">
                  <div className="flex-col flex w-full h-full">
                    <Textarea
                      value={videoPrompt}
                      className="resize-none border-gray-700 text-white text-[1.25rem] h-full w-full "
                      placeholder="describe you video"
                      onChange={(e) => setVideoPrompt(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-[8px] px-[16px] py-[8px]"></div>
              <div className="flex justify-between px-[16px] py-[8px]">
                <Select defaultValue={model} onValueChange={(e) => setModel(e)}>
                  <SelectTrigger className="font-semibold w-[120px] text-white ">
                    <SelectValue placeholder="select a model" />
                  </SelectTrigger>
                  <SelectContent className="bg-ui-level0 text-white border-none">
                    <SelectItem value="wanx2.1-i2v-turbo">
                      model turbo
                    </SelectItem>
                    <SelectItem value="wanx2.1-i2v-plus">model Plus</SelectItem>
                  </SelectContent>
                </Select>
                {/* <Select defaultValue="3s">
              <SelectTrigger className="font-semibold w-[120px] text-white ">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-ui-level0 text-white border-none">
                <SelectItem value="3">3s</SelectItem>
                <SelectItem value="5">5s</SelectItem>
              </SelectContent>
            </Select> */}
              </div>
              <div className="flex h-[48px] w-full mb-[0.5rem] px-[16px]">
                <button
                  className={`mx-auto   font-semibold px-[8px] rounded-md w-[100%]  ${
                    imgurl || videoLoading
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-500 cursor-not-allowed"
                  }`}
                  onClick={generateApi}
                >
                  generate
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="image"
          className="flex-1 flex flex-col data-[state=inactive]:hidden px-[16px] bg-ui-level0 w-[20vw]  min-w-[400px]"
        >
          <div className="flex-1 min-h-[200px] flex flex-col">
            <h3 className="text-white mb-[8px]">prompt</h3>
            <Textarea
              value={imgPrompt}
              onChange={(e) => setImgPrompt(e.target.value)}
              className="outline-none border-dashed resize-none text-white flex-1"
              placeholder="describe the picture"
            ></Textarea>
          </div>
          <Separator className="bg-gray-500 my-[16px] " />
          <div className="flex-1 min-h-[200px] flex flex-col">
            <h3 className="text-white mb-[8px]">nagative prompt</h3>
            <Textarea
              value={nagPrompt}
              onChange={(e) => setNagPrompt(e.target.value)}
              className="outline-none border-dashed resize-none text-white flex-1"
              placeholder="Describe the content you don't want to see on the screen, and you can restrict the screen"
            ></Textarea>
          </div>
          <Separator className="bg-gray-500 my-[16px] " />
          <div className="my-[8px] flex justify-between">
            <div>
              <h3 className="text-white mb-[8px]">model</h3>
              <Select
                defaultValue="wanx2.1-t2i-plus"
                onValueChange={(e) => setImgModel(e)}
              >
                <SelectTrigger className="font-semibold w-[120px] text-white ">
                  <SelectValue placeholder="select a model" />
                </SelectTrigger>
                <SelectContent className="bg-ui-level0 text-white border-none">
                  <SelectItem value="wanx2.1-t2i-turbo">
                    model 2.1-turbo
                  </SelectItem>
                  <SelectItem value="wanx2.0-t2i-turbo">
                    model 2.0-turbo
                  </SelectItem>
                  <SelectItem value="wanx2.1-t2i-plus">model Plus</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="text-white mb-[8px]">
                size <span className="text-gray-400">(宽*高)</span>{" "}
              </h3>
              <Select
                defaultValue={genImgSize}
                onValueChange={(e) => setGenImgSize(e)}
              >
                <SelectTrigger className="font-semibold w-[120px] text-white">
                  <SelectValue placeholder="select the picture size" />
                </SelectTrigger>
                <SelectContent className="bg-ui-level0 text-white border-none">
                  <SelectItem value="1024*768">1024*768</SelectItem>
                  <SelectItem value="786*1024">786*1024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className=" mt-[16px]">
            <div className="flex h-[48px] w-full mb-[0.5rem]">
              <button
                className={`mx-auto   font-semibold rounded-md w-[100%]  ${
                  imgPrompt || imgLoading
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
                onClick={generateImgApi}
              >
                generate
              </button>
            </div>
          </div>
          {/* <div className=" mt-[16px]">
            <div className="flex h-[48px] w-full mb-[0.5rem]">
              <button
                className={`mx-auto   font-semibold rounded-md w-[100%]  ${
                  imgPrompt
                    ? "bg-gray-300 hover:bg-gray-500 text-black"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                cancel
              </button>
            </div>
          </div> */}
        </TabsContent>
      </Tabs>
      <div
        className={`flex-col flex justify-center items-center flex-1 ${
          curGen === "image" ? "hidden" : ""
        }`}
      >
        {videoSrc ? (
          <video controls>
            <source src={videoSrc} />
          </video>
        ) : (
          <div className=" text-gray-400 flex flex-col text-[16px] gap-[16px] h-full justify-center leading-[20px] my-0 mx-auto w-[396px] text-center">
            <div className="bg-ui-level0 w-full rounded-md">
              {videoLoading ? (
                <div className="flex flex-col justify-center px-[16px] py-[8px]">
                  loading...
                  <Progress
                    value={videoProgress}
                    className="bg-white primary-white opacity-40 my-[16px] "
                  />
                </div>
              ) : (
                <div className="py-[32px] px-[40px]">
                  <div className="items-center flex text-white flex-1 flex-col text-[22px] gap-[8px] justify-center leading-[28px]">
                    <span>upload a image</span>
                  </div>
                  <div className="text-gray-400 text-[14px] font-normal leading-[20px]">
                    Select where your generations will be saved
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div
        className={`flex-col flex justify-center items-center flex-1 ${
          curGen === "video" ? "hidden" : ""
        }`}
      >
        {imgContainer()}
      </div>
    </div>
  );
}
