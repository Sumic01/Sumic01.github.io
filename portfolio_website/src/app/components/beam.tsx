"use client"
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const TracingBeam = ({
  children,
  className,
  observeRef,
}: {
  children: React.ReactNode;
  className?: string;
  observeRef?: React.RefObject<HTMLElement>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollYProgressVelocity = useVelocity(scrollYProgress);
  const [velo, setVelocity] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // Function to update the SVG height when content size changes
  const updateSvgHeight = () => {
    const observedElement = observeRef?.current || contentRef.current;
    if (observedElement) {
      setSvgHeight(observedElement.offsetHeight);
    }
  };

  // Monitor content size changes dynamically using ResizeObserver
  useEffect(() => {
    const observedElement = observeRef?.current || contentRef.current;
  
    if (!observedElement) {
      console.warn("Observed element is not defined");
      return;
    }
  
    // Set initial viewport height
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
  
    const updateSvgHeight = () => {
      setSvgHeight(observedElement.offsetHeight);
    };
  
    updateViewportHeight(); // Set initial viewport height
    updateSvgHeight(); // Set initial SVG height
  
    // Use ResizeObserver to observe changes in the observed element's height
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        updateSvgHeight(); // Update svgHeight when content height changes
      }
    });
  
    observer.observe(observedElement); // Observe the element for size changes
  
    // Update on window resize as well
    window.addEventListener("resize", updateViewportHeight);
  
    return () => {
      observer.unobserve(observedElement); // Stop observing on cleanup
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, [observeRef]);
  
  
  // Track scroll velocity
  useEffect(() => {
    return scrollYProgressVelocity.onChange((latestVelocity) => {
      setVelocity(latestVelocity);
    });
  }, [scrollYProgressVelocity]);
  

  // Use `vh` based on the viewport height in the calculations
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight + 1.47 * viewportHeight]), // Using 115vh equivalent
    {
      stiffness: 400,
      damping: 120,
    }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight]),
    {
      stiffness: 400,
      damping: 120,
    }
  );


  return (
    <motion.div
      ref={ref}
      className={cn("relative ml-[10px] w-[40px] h-full", className)}
    >
      <svg
        viewBox={`0 0 40 ${svgHeight}`}
        width="40"
        height={svgHeight}
        className="hidden lg:block md:block sm:block xs:block absolute left-0 top-0"
        aria-hidden="true"
      >
        {/* First Line */}
        <motion.path
          d={`M 1 0 L 1 ${svgHeight * 0.8} l 18 24 L 19 ${svgHeight} L 19 ${svgHeight}`}
          fill="none"
          stroke="#9091A0"
          strokeOpacity="0.16"
          transition={{
            duration: 10,
          }}
        ></motion.path>

        <motion.path
          d={`M 1 0 L 1 ${svgHeight * 0.8} l 18 24 L 19 ${svgHeight} L 19 ${svgHeight}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.55"
          className="motion-reduce:hidden"
          transition={{
            duration: 10,
          }}
        ></motion.path>

        <motion.path
          d={`M 6 -2 L 6 ${svgHeight * 0.8 - 2} l 18 24 L 24 ${svgHeight} L 24 ${svgHeight}`}
          fill="none"
          stroke="#9091A0"
          strokeOpacity="0.16"
          transition={{
            duration: 10,
          }}
        ></motion.path>

        <motion.path
          d={`M 6 -2 L 6 ${svgHeight * 0.8 - 2} l 18 24 L 24 ${svgHeight} L 24 ${svgHeight}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.55"
          className="motion-reduce:hidden"
          transition={{
            duration: 10,
          }}
        ></motion.path>

        <defs>
          <motion.linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={y1}
            y2={y2}
          >
            <stop stopColor="#ffe800" stopOpacity="0"></stop>
            <stop stopColor="#ffe800"></stop>
            <stop offset="0.5" stopColor="#f30000"></stop>
            <stop offset="1" stopColor="#f30000" stopOpacity="0"></stop>
          </motion.linearGradient>
        </defs>
      </svg>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
