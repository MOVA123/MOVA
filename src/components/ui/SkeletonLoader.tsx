// components/SkeletonLoader.tsx
"use client";

import { useState, useEffect } from "react";

type SkeletonLoaderProps = {
  skeleton: React.ReactNode;    // 骨架屏插槽
  children: React.ReactNode;    // 真实界面插槽
  delay?: number;               // 模拟加载延迟（可选）
};

const SkeletonLoader = ({
  skeleton,
  children,
  delay = 0, 
}: SkeletonLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading ? skeleton : children;
};

export default SkeletonLoader;