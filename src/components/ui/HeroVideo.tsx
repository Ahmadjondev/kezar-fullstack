"use client";

import { useEffect, useRef, useState } from "react";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with actual Kezar Teks video ID

export default function HeroVideo() {
    const [isReady, setIsReady] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsReady(true);
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-black"
        >
            {isReady && (
                <div className="absolute inset-0">
                    <iframe
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw] pointer-events-none"
                        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0`}
                        title="Kezar Teks — Company Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
            )}

            <div className="absolute inset-0 bg-black/32 pointer-events-none" />

            <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/55 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/55 to-transparent pointer-events-none" />
        </section>
    );
}
