"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandBootstrap,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandAngular,
  IconBrandCSharp,
  IconBrandLaravel,
  IconBrandTypescript,
} from "@tabler/icons-react";

const Slider = () => {
  const [inView, setInView] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const currentSliderRef = sliderRef.current; // Store the ref value in a variable
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.5,
      }
    );
  
    if (currentSliderRef) {
      observer.observe(currentSliderRef);
    }
  
    return () => {
      if (currentSliderRef) {
        observer.unobserve(currentSliderRef); // Use the stored ref value in the cleanup
      }
    };
  }, []);
  

  // Only render the slider if it's in view
  return (
    <div className="navbar">
      <div className="wrapper" ref={sliderRef}>
        {inView && (
          <div className="slider" >
            <div className="slide">
            <IconBrandHtml5 className="h-[70px] w-[70px] mx-[24px] text-[#8c3416]" />
            <IconBrandCss3 className="h-[70px] w-[70px] mx-[24px] text-[#192f7a]" />
            <IconBrandBootstrap className="h-[70px] w-[70px] mx-[24px] text-[#3b2853]" />
            <IconBrandTypescript className="h-[70px] w-[70px] mx-[24px] text-[#3178c6]" />
            <IconBrandJavascript className="h-[70px] w-[70px] mx-[24px] text-[#a79737]" />
            <IconBrandReact className="h-[70px] w-[70px] mx-[24px] text-[#40909d]" />
            <IconBrandAngular className="h-[70px] w-[70px] mx-[24px] text-[#800020]" />
            <IconBrandCSharp className="h-[70px] w-[70px] mx-[24px] text-[#6a4993]" />
            <IconBrandLaravel className="h-[70px] w-[70px] mx-[24px] text-[#993d2a]" />

            <IconBrandHtml5 className="h-[70px] w-[70px] mx-[24px] text-[#8c3416]" />
            <IconBrandCss3 className="h-[70px] w-[70px] mx-[24px] text-[#192f7a]" />
            <IconBrandBootstrap className="h-[70px] w-[70px] mx-[24px] text-[#3b2853]" />
            <IconBrandTypescript className="h-[70px] w-[70px] mx-[24px] text-[#3178c6]" />
            <IconBrandJavascript className="h-[70px] w-[70px] mx-[24px] text-[#a79737]" />
            <IconBrandReact className="h-[70px] w-[70px] mx-[24px] text-[#40909d]" />
            <IconBrandAngular className="h-[70px] w-[70px] mx-[24px] text-[#800020]" />
            <IconBrandCSharp className="h-[70px] w-[70px] mx-[24px] text-[#6a4993]" />
            <IconBrandLaravel className="h-[70px] w-[70px] mx-[24px] text-[#993d2a]" />

          </div>
          <div className="slide">
            <IconBrandHtml5 className="h-[70px] w-[70px] mx-[24px] text-[#8c3416]" />
            <IconBrandCss3 className="h-[70px] w-[70px] mx-[24px] text-[#192f7a]" />
            <IconBrandBootstrap className="h-[70px] w-[70px] mx-[24px] text-[#3b2853]" />
            <IconBrandTypescript className="h-[70px] w-[70px] mx-[24px] text-[#3178c6]" />
            <IconBrandJavascript className="h-[70px] w-[70px] mx-[24px] text-[#a79737]" />
            <IconBrandReact className="h-[70px] w-[70px] mx-[24px] text-[#40909d]" />
            <IconBrandAngular className="h-[70px] w-[70px] mx-[24px] text-[#800020]" />
            <IconBrandCSharp className="h-[70px] w-[70px] mx-[24px] text-[#6a4993]" />
            <IconBrandLaravel className="h-[70px] w-[70px] mx-[24px] text-[#993d2a]" />

            <IconBrandHtml5 className="h-[70px] w-[70px] mx-[24px] text-[#8c3416]" />
            <IconBrandCss3 className="h-[70px] w-[70px] mx-[24px] text-[#192f7a]" />
            <IconBrandBootstrap className="h-[70px] w-[70px] mx-[24px] text-[#3b2853]" />
            <IconBrandTypescript className="h-[70px] w-[70px] mx-[24px] text-[#3178c6]" />
            <IconBrandJavascript className="h-[70px] w-[70px] mx-[24px] text-[#a79737]" />
            <IconBrandReact className="h-[70px] w-[70px] mx-[24px] text-[#40909d]" />
            <IconBrandAngular className="h-[70px] w-[70px] mx-[24px] text-[#800020]" />
            <IconBrandCSharp className="h-[70px] w-[70px] mx-[24px] text-[#6a4993]" />
            <IconBrandLaravel className="h-[70px] w-[70px] mx-[24px] text-[#993d2a]" />

          </div>
            {/* <IconBrandHtml5 className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandCss3 className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandBootstrap className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandJavascript className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandTypescript className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandReact className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandAngular className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandCSharp className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandLaravel className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandHtml5 className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandCss3 className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandBootstrap className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandJavascript className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandReact className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandAngular className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandCSharp className="h-[70px] w-[70px] mx-[24px] text-neutral-500" />
            <IconBrandLaravel className="h-[70px] w-[70px] mx-[24px] text-neutral-500" /> */}
          </div>
        )}
      </div>

      <style jsx>{`
        .wrapper {
          width: 100vw;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider {
          width: 1200px;
          height: 100px;
          position: relative;
          background: #060606;
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
          display: flex;
          overflow: hidden;
        }

        .slide {
          height: 100px;
          display: flex;
          align-items: center;
          animation: slideshow 25s linear infinite;
        }

        .slide * {
          padding: 0 30px;
        }

        @keyframes slideshow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .slider::before,
        .slider::after {
          height: 100px;
          width: 200px;
          position: absolute;
          content: '';
          background: linear-gradient(to right, #060606 0%, rgba(6, 6, 6, 0) 100%);
          z-index: 2;
        }

        .slider::before {
          top: 0;
          left: 0;
        }

        .slider::after {
          top: 0;
          right: 0;
          transform: rotateZ(180deg);
        }
      `}</style>
    </div>
  );
};

export default Slider;
