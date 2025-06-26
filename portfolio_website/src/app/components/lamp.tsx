"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function LampDemo() {
    return (
      <Lamp>
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
      </Lamp>
    );
  }

  export const Lamp = ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => {
      return (
        <div
          className={cn(
            "relative flex min-h-[0.40vh]  flex-col justify-end overflow-hidden w-full z-1000",
            "bg-[#060606]",
            className
          )}
        >
          <div className="relative flex w-full scale-y-125 items-center justify-center isolate z-1000 ">
            <motion.div
              initial={{ opacity: 0.5, width: "0rem" }}
              whileInView={{ opacity: 1, width: "100vw" }} 
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0.5, width: "0rem" }} 
              whileInView={{ opacity: 1, width: "100vw" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
            </motion.div>

            <motion.div
              initial={{ width: "0rem" }}
              whileInView={{ width: "100vw" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-1000 h-0.5 w-full -translate-y-[1px] bg-[#C10C30] "
            ></motion.div>
          </div>
        </div>
      );
    };
