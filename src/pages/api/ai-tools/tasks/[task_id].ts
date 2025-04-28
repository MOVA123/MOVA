import { NextApiRequest, NextApiResponse } from "next";
import * as nc from "next-connect";
import request from "@/request/axios";

const DASHSCOPE_API_KEY = process.env.DASHSCOPE_API_KEY || '';
const Authorization = `Bearer ${DASHSCOPE_API_KEY}`;

const router = nc.createRouter();
router.get((async (req: NextApiRequest, res: NextApiResponse) => {
  const { task_id } = req.query; // 通过文件系统捕获的动态参数
  const { data } = await request.get(
    `https://dashscope.aliyuncs.com/api/v1/tasks/${task_id}`,
    {
      headers: {
        Authorization,
      },
    }
  );
  res.send({ code: 200, data });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any);
export default router.handler();
