"use client";

import { useEffect, useRef, useState } from "react";

export function ProductDemo() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.24 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPaused.current = false;
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      userPaused.current = true;
      video.pause();
      setPlaying(false);
    }
  };

  if (reduceMotion) {
    return (
      <div className="demo-shell">
        <img
          className="demo-media demo-media-static"
          src="/media/mirage-in-finder.jpg"
          alt="Finder 中打开 Mirage 后显示的真实图片与头像素材"
          width="1186"
          height="764"
        />
      </div>
    );
  }

  return (
    <div className="demo-shell">
      <video
        ref={videoRef}
        className="demo-media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/mirage-discover-full.jpg"
        aria-label="Mirage 在主应用与 Finder 之间工作的短循环演示"
      >
        <source src="/media/mirage-app-loop.mp4" type="video/mp4" />
      </video>
      <button
        className="demo-control"
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? "暂停产品演示" : "播放产品演示"}
      >
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
        {playing ? "暂停" : "播放"}
      </button>
    </div>
  );
}
