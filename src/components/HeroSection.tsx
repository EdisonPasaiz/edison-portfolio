import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero_bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(0 40% 0 40%)", "inset(0 0% 0 0%)"]
  );
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with clip-path */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath }}
        >
          <motion.img
            src={heroBg}
            alt="Video editing workspace"
            className="w-full h-full object-cover opacity-50"
            style={{ scale: imgScale }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          style={{ y: textY }}
        >
          <p className="mono-label mb-6">LEAD VIDEO EDITOR</p>
          <h1 className="text-display mb-8">
            EDISON<br />PASAIZ
          </h1>
          <p className="mono-label max-w-lg mx-auto leading-relaxed text-xs">
            I DON'T JUST CUT FOOTAGE. I BUILD RHYTHM.
          </p>
          <div className="flex justify-center gap-12 mt-12">
            <div className="text-center">
              <p className="text-display-sm text-accent">3+</p>
              <p className="mono-label mt-2">PROJECTS</p>
            </div>
            <div className="text-center">
              <p className="text-display-sm text-accent">240+</p>
              <p className="mono-label mt-2">HOURS EDITED</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="mono-label">SCROLL TO EXPLORE</p>
          <div className="w-[1px] h-8 bg-accent/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
