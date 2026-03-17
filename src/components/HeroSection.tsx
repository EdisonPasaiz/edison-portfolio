import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero_bg.jpg";

const easeOut = [0.19, 1, 0.22, 1] as const;

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8 + i * 0.04,
      duration: 0.8,
      ease: easeOut as unknown as [number, number, number, number],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: easeOut as unknown as [number, number, number, number] },
  }),
};

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const clipPath = useTransform(
    smoothProgress,
    [0, 0.5],
    ["inset(0 40% 0 40%)", "inset(0 0% 0 0%)"]
  );
  const textY = useTransform(smoothProgress, [0, 1], [0, -150]);
  const textOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const imgScale = useTransform(smoothProgress, [0, 1], [1.1, 1]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5], [0.6, 0.3]);

  const name1 = "EDISON";
  const name2 = "PASAIZ";

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
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.p
            className="mono-label mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            LEAD VIDEO EDITOR
          </motion.p>

          <h1 className="text-display mb-8 overflow-hidden">
            <span className="block overflow-hidden">
              {name1.split("").map((char, i) => (
                <motion.span
                  key={`n1-${i}`}
                  className="inline-block"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {name2.split("").map((char, i) => (
                <motion.span
                  key={`n2-${i}`}
                  className="inline-block"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + name1.length}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            className="mono-label max-w-lg mx-auto leading-relaxed text-xs"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.4}
          >
            I DON'T JUST CUT FOOTAGE. I BUILD RHYTHM.
          </motion.p>

          <motion.div
            className="flex justify-center gap-12 mt-12"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.6}
          >
            <div className="text-center">
              <p className="text-display-sm text-accent">3+</p>
              <p className="mono-label mt-2">PROJECTS</p>
            </div>
            <div className="text-center">
              <p className="text-display-sm text-accent">240+</p>
              <p className="mono-label mt-2">HOURS EDITED</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="mono-label">SCROLL TO EXPLORE</p>
          <motion.div
            className="w-[1px] h-8 bg-accent/50"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
