"use client";
import React, { useRef } from "react";
import { TracingBeam } from "./components/beam";
import Header from "./components/header";
import { Lamp } from "./components/lamp";
import { LampGlow } from "./components/glow";
import { BackgroundGradientAnimation } from "./components/background-gradient-animation";
import { FloatingDock } from "./components/floating-dock";
import CollapsibleTimeline from "./components/collapsible-timeline";
import { HeroParallax } from "./components/hero-parallax";
import Slider from "./components/slider";

import {
    IconHome,
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
} from "@tabler/icons-react";
import ImageSlider from "./components/images-slider";

const AgePage = () => {
    const mainContentRef = useRef<HTMLDivElement>(null);

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/urossumic",
        },
        {
            title: "Email",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://mail.google.com/mail/u/0/?fs=1&to=sumicuros2001@gmail.com&tf=cm",
        },
    ];

    const products = [
        {
            title: "CREF",
            link: "#",
            thumbnail: "/assets/img/cref.png",
        },
        {
            title: "Ima na ćirilici",
            link: "#",
            thumbnail: "/assets/img/rnids.png",
        },
        {
            title: "CoinSnap",
            link: "#",
            thumbnail: "/assets/img/coinsnap.png",
        },
        {
            title: "empty1",
            link: "#",
            thumbnail: "/assets/img/empty.png",
        },
        {
            title: "empty2",
            link: "#",
            thumbnail: "/assets/img/empty.png",
        },
        {
            title: "Detektor plagijarizma",
            link: "#",
            thumbnail: "/assets/img/plagiarism.png",
        },
        {
            title: "E-Case",
            link: "#",
            thumbnail: "/assets/img/ecase.png",
        },
        {
            title: "Against violence hackaton",
            link: "#",
            thumbnail: "/assets/img/against_violence.png",
        },
    ];

    return (
        <>
            {/* <Header>
        <Lamp>
          <></>
        </Lamp>
      </Header>
      <LampGlow>
        <></>
      </LampGlow> */}
            {/* <div className="page scroll w-[100vw] h-[200vh] flex"> */}

            <div
                className="scroll main flex-grow flex flex-col items-start justify-center relative"
                style={{ width: "100vw" }}
                ref={mainContentRef}
            >
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 inset-0 flex flex-col items-left justify-center text-white font-bold px-4 pointer-events-none">
                        <p className="text-black h-[200px] text-3xl text-left md:text-4xl lg:text-9xl ml-[50px] glow-text integral-bold">
                            Uros Sumic
                        </p>
                        <p className="text-black h-[100px] text-3xl text-left md:text-4xl lg:text-2xl ml-[57px] mt-[10px] glow-text-stronger integral-bold">
                            Web Dev Coordinator
                        </p>
                    </div>
                </BackgroundGradientAnimation>
                <div className="relative top-[-300px] bg-gradient-to-b from-transparent z-100 to-[#060606] h-[300px] w-[100vw] pointer-events-none" />
                <div className="w-[100vw] h-[auto] pt-[10px] mt-[-300px] bg-[#060606]">
                    <h1 className="text-2xl md:text-5xl font-bold dark:text-white pb-[50px] monument-bold">
                        My career path
                    </h1>
                    <CollapsibleTimeline></CollapsibleTimeline>
                </div>

                <div className="flex flex-col items-center justify-center w-[100vw] h-[200px] bg-[#060606]">
                </div>

                <div className="w-[100vw] h-[auto] pt-[10px] mt-[-300px] bg-[#060606]">
                    <HeroParallax products={products} />
                </div>

                <TracingBeam
                    className="absolute sidebar z-1000 left-0 top-0"
                    observeRef={mainContentRef}
                >
                    <div className="scroll beam w-[5vw] h-[502vh] z-1000 "></div>
                </TracingBeam>

                <div className="fixed bottom-0 w-[100vw] h-[90px] dock flex items-center justify-center">
                    <FloatingDock
                        mobileClassName="translate-y-20"
                        items={links}
                    />
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default AgePage;
