import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';

// 定义自定义文件类型
interface UploadFile {
  originalFilename?: string;
  filepath: string;
  mimetype?: string;
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToCloud(file: UploadFile) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: `uploads/${Date.now()}_${file.originalFilename?.replace(/[^\w.-]/g, '')}`,
    Body: fs.createReadStream(file.filepath),
    ContentType: file.mimetype || 'application/octet-stream'
  };

  try {
    await s3Client.send(new PutObjectCommand(params));
    return `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;
  } catch (error) {
    console.error('S3 Upload Error:', error);
    throw error;
  }
}