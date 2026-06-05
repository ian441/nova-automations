"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
      className="relative"
    >
      <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-sky-200 via-emerald-200 to-amber-100 blur-3xl dark:from-sky-500/20 dark:via-emerald-500/20 dark:to-amber-500/20" />
      <div className="glass relative overflow-hidden rounded-lg p-3">
        <video
          className="aspect-[16/10] w-full rounded-md object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          poster="/workflows/hero-dashboard.svg"
          aria-label="Automation workflow demo video"
        >
          <source src="/workflows/hero-video.webm" type="video/webm" />
          <source src="/workflows/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
}
