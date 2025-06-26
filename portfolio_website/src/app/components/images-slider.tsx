"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const imagesData = [
    "/assets/img/my_images/Barcelona/04.JPG",
    "/assets/img/my_images/Barcelona/05.JPG",
    "/assets/img/my_images/Barcelona/10.JPG",
    "/assets/img/my_images/Barcelona/14.JPG",
    "/assets/img/my_images/Barcelona/15.JPG",
    "/assets/img/my_images/Barcelona/16.JPG",
    "/assets/img/my_images/Barcelona/17.JPG",
    "/assets/img/my_images/Barcelona/19.JPG",
    "/assets/img/my_images/Barcelona/20.JPG",
    "/assets/img/my_images/Barcelona/21.JPG",
    "/assets/img/my_images/Barcelona/23.JPG",
    "/assets/img/my_images/Barcelona/24.JPG",
    "/assets/img/my_images/Barcelona/27.JPG",
    "/assets/img/my_images/Barcelona/30.JPG",
    "/assets/img/my_images/Barcelona/34.JPG",
    "/assets/img/my_images/Barcelona/38.JPG",
    "/assets/img/my_images/Barcelona/43.JPG",
    "/assets/img/my_images/Barcelona/48.JPG",
    "/assets/img/my_images/Barcelona/49.JPG",
    "/assets/img/my_images/Barcelona/52.JPG",
    "/assets/img/my_images/Barcelona/53.JPG",
    "/assets/img/my_images/Barcelona/54.JPG",
    "/assets/img/my_images/Barcelona/57.JPG",
    "/assets/img/my_images/Barcelona/60.JPG",

    "/assets/img/my_images/Paris/04.JPG",
    "/assets/img/my_images/Paris/06.JPG",
    "/assets/img/my_images/Paris/08.JPG",
    "/assets/img/my_images/Paris/09.JPG",
    "/assets/img/my_images/Paris/10.JPG",
    "/assets/img/my_images/Paris/12.JPG",
    "/assets/img/my_images/Paris/14.JPG",
    "/assets/img/my_images/Paris/15.JPG",
    "/assets/img/my_images/Paris/16.JPG",
    "/assets/img/my_images/Paris/17.JPG",
    "/assets/img/my_images/Paris/18.JPG",
    "/assets/img/my_images/Paris/19.JPG",
    "/assets/img/my_images/Paris/21.JPG",
    "/assets/img/my_images/Paris/24.JPG",
    "/assets/img/my_images/Paris/28.JPG",
    "/assets/img/my_images/Paris/31.JPG",
    "/assets/img/my_images/Paris/33.JPG",
    "/assets/img/my_images/Paris/36.JPG",
    "/assets/img/my_images/Paris/37.JPG",
    "/assets/img/my_images/Paris/38.JPG",
    "/assets/img/my_images/Paris/46.JPG",
    "/assets/img/my_images/Paris/49.JPG",
    "/assets/img/my_images/Paris/54.JPG",
    "/assets/img/my_images/Paris/55.JPG",
    "/assets/img/my_images/Paris/56.JPG",
    "/assets/img/my_images/Paris/57.JPG",
    "/assets/img/my_images/Paris/59.JPG",
    "/assets/img/my_images/Paris/61.JPG",
    "/assets/img/my_images/Paris/63.JPG",
    "/assets/img/my_images/Paris/65.JPG",

    "/assets/img/my_images/Prague/15.JPG",
    "/assets/img/my_images/Prague/16.JPG",
    "/assets/img/my_images/Prague/18.JPG",
    "/assets/img/my_images/Prague/19.JPG",
    "/assets/img/my_images/Prague/20.JPG",
    "/assets/img/my_images/Prague/21.JPG",
    "/assets/img/my_images/Prague/22.JPG",
    "/assets/img/my_images/Prague/23.JPG",
    "/assets/img/my_images/Prague/24.JPG",
    "/assets/img/my_images/Prague/25.JPG",
    "/assets/img/my_images/Prague/26.JPG",
    "/assets/img/my_images/Prague/27.JPG",
    "/assets/img/my_images/Prague/28.JPG",
    "/assets/img/my_images/Prague/30.JPG",
    "/assets/img/my_images/Prague/31.JPG",
    "/assets/img/my_images/Prague/32.JPG",
    "/assets/img/my_images/Prague/33.JPG",
    "/assets/img/my_images/Prague/36.JPG",
    "/assets/img/my_images/Prague/37.JPG",
    "/assets/img/my_images/Prague/38.JPG",
    "/assets/img/my_images/Prague/39.JPG",

    "/assets/img/my_images/Rome/06.JPG",
    "/assets/img/my_images/Rome/38.JPG",
    "/assets/img/my_images/Rome/41.JPG",
    "/assets/img/my_images/Rome/42.JPG",
    "/assets/img/my_images/Rome/44.JPG",
    "/assets/img/my_images/Rome/45.JPG",
    "/assets/img/my_images/Rome/48.JPG",
    "/assets/img/my_images/Rome/49.JPG",
    "/assets/img/my_images/Rome/51.JPG",
    "/assets/img/my_images/Rome/52.JPG",
    "/assets/img/my_images/Rome/59.JPG",
    "/assets/img/my_images/Rome/60.JPG",
    "/assets/img/my_images/Rome/64.JPG",
    "/assets/img/my_images/Rome/66.JPG",
];

interface ImageItem {
    src: string;
    status: "active" | "inactive";
    x: number;
    y: number;
    order: number;
}

const ImageSlider: React.FC = () => {
    const [images, setImages] = useState<ImageItem[]>(
        imagesData.map((src) => ({
            src,
            status: "inactive",
            x: 0,
            y: 0,
            order: -1, // Initialize order to -1 for inactive images
        }))
    );

    const [globalIndex, setGlobalIndex] = useState(0);
    const [last, setLast] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const activate = (index: number, x: number, y: number) => {
        setImages((prevImages) =>
            prevImages.map((image, idx) =>
                idx === index
                    ? { ...image, status: "active", x, y, order: globalIndex }
                    : image
            )
        );
        setLast({ x, y });
    };

    const distanceFromLast = (x: number, y: number): number => {
        return Math.hypot(x - last.x, y - last.y);
    };

    const handleOnMove = (x: number, y: number) => {
        if (distanceFromLast(x, y) > window.innerWidth / 20) {
            const leadIndex = globalIndex % images.length;
            const tailIndex = (globalIndex - 5 + images.length) % images.length;

            activate(leadIndex, x, y);

            setImages((prevImages) =>
                prevImages.map((image, idx) =>
                    idx === tailIndex
                        ? { ...image, status: "inactive", order: -1 }
                        : image
                )
            );

            setGlobalIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isHovering) {
            const container = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - container.left; // Relative to container
            const y = e.clientY - container.top; // Relative to container
            handleOnMove(x, y);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isHovering) {
            const container = e.currentTarget.getBoundingClientRect();
            const x = e.touches[0].clientX - container.left; // Relative to container
            const y = e.touches[0].clientY - container.top; // Relative to container
            handleOnMove(x, y);
        }
    };

    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt={`slider-${index}`}
                    width={500} // Set appropriate width
                    height={500} // Set appropriate height
                    style={{
                        position: "absolute",
                        display: image.status === "active" ? "block" : "none",
                        left: `${image.x}px`,
                        top: `${image.y}px`,
                        width: "40vmin",
                        transform: "translate(-50%, -50%)",
                        transition: "opacity 400ms ease, left 100ms, top 100ms",
                        zIndex: image.order, // Use the order as the zIndex
                    }}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
