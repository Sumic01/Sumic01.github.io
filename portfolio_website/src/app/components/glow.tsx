"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function LampDemo() {
  return (
    <LampGlow>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampGlow>
  );
}

export const LampGlow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[90px] flex-col items-start  overflow-hidden w-full rounded-md z-1",
        className
      )}
      style={{ position: "fixed", top: "72px", zIndex: 1 }}
    >
      <div className="relative flex w-full flex-1 items-start justify-center isolate z-1 ">

        <motion.div
          initial={{ width: "0rem" }}
          whileInView={{ width: "100vw" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-1 h-3 w-[100vw] -translate-y-[0.7rem] rounded bg-[#D00C30] blur-2xl"
        ></motion.div>

      </div>

      <div className="relative z-1 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
