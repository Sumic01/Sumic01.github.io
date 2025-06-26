"use client";
import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#030303",
        color: "white",
        padding: "0px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav>
        <ul
          className="header-element"
          style={{
            listStyle: "none",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <HoverableButton text="About" />
          <HoverableButton text="Projects" />
          <HoverableButton text="Contact" />
          <HoverableButton text="Resume" />
        </ul>
      </nav>
      {children}
    </header>
  );
};

interface HoverableButtonProps {
  text: string;
}

const HoverableButton: React.FC<HoverableButtonProps> = ({ text }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // style={{
      //   transition: "background-color 0.5s ease", // Add transition here
      //   backgroundColor: isHovered ? "rgba(0, 0, 0, 0.5)" : "transparent", // Adjust background color based on hover state
      // }}
    >
      <span
        className="header-element absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.4s ease" }}
      />

      <span className="inline-flex h-full w-full items-center justify-center rounded-full px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
        {text}
      </span>
    </button>
  );
};

export default Header;
