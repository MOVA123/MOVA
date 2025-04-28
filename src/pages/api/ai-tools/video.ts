import { NextApiRequest, NextApiResponse } from "next";
import * as nc from "next-connect";
import request from "@/request/axios";
const Authorization = "Bearer sk-0c86ae9b58c14a09abd472747a1e8c78";
const router = nc.createRouter();
router.post((async (req: NextApiRequest, res: NextApiResponse) => {
  const { model, input } = req.body;
  try {
    const { data } = await request.post(
      "https://dashscope.aliyuncs.com/api/v1/services/aigc/video-generation/video-synthesis",
      {
        model,
        input,
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
