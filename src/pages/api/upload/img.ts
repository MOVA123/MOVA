import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from 'formidable';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';

// 配置S3客户端 (建议使用环境变量)
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const config = {
  api: {
    bodyParser: false // 必须禁用默认解析
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      code: -1,
      msg: '仅支持POST方法' 
    });
  }

  const form = new IncomingForm();
  
  try {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ 
          code: -1,
          msg: '文件解析失败' 
        });
      }

      const file = files.image?.[0];
      if (!file) {
        return res.status(400).json({ 
          code: -1,
          msg: '未接收到有效文件' 
        });
      }

      // 生成唯一文件名
      const timestamp = Date.now();
      const ext = file.originalFilename?.split('.').pop() || 'bin';
      const s3Key = `uploads/${timestamp}.${ext}`;

      try {
        // 上传到S3
        const fileStream = fs.createReadStream(file.filepath);
        await s3Client.send(
          new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: s3Key,
            Body: fileStream,
            ContentType: file.mimetype || 'application/octet-stream',
            // ACL: 'public-read'
          })
        );

        // 生成访问URL (根据您的S3配置调整)
        const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;

        return res.status(200).json({
          code: 200,
          msg: "文件上传成功",
          data: {
            img_url: fileUrl,
            filePath: s3Key // 保持与原接口相同的响应结构
          }
        });
      } catch (s3Error) {
        console.error('S3上传错误:', s3Error);
        return res.status(500).json({ 
          code: -1,
          msg: '云存储上传失败' 
        });
      }
    });
  } catch (error) {
    console.error('处理请求时出错:', error);
    return res.status(500).json({ 
      code: -1,
      msg: '服务器内部错误' 
    });
  }
}