import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import request from "@/request/axios";

const router = createRouter();

const DASHSCOPE_API_KEY = process.env.DASHSCOPE_API_KEY || '';
const Authorization = `Bearer ${DASHSCOPE_API_KEY}`;

// 添加API Key验证
if (!DASHSCOPE_API_KEY) {
  console.error('DASHSCOPE_API_KEY is missing in environment variables');
}

router.post((async (req: NextApiRequest, res: NextApiResponse) => {
  const { model, input, parameters } = req.body;
  try {
    const { data } = await request.post(
      "https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis",
      {
        model,
        input,
        parameters,
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization,
          "X-DashScope-Async": "enable",
        },
      }
    );
    res.status(200).send(data);
  } catch {
    res.status(400).send({ code: "DataInspectionFailed" });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any);
export default router.handler();
