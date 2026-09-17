"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

export default function MakyScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frame = useTransform(scrollYProgress, [0, 1], [1, 300]);

  useMotionValueEvent(frame, "change", (latest) => {
    setFrameIndex(Math.floor(latest));
  });

  const frameNumber = frameIndex.toString().padStart(3, "0");
  const currentImage = `/maky_BG/ezgif-frame-${frameNumber}.jpg`;

  return (
    <div ref={containerRef} className="absolute  h-[400vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative  w-full h-full mx-auto">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={currentImage}
              alt="Maky Background Animation"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
