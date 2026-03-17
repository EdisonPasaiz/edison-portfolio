import { useScroll, useTransform, useSpring, motion } from "framer-motion";

const ScrollPlayhead = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const timestamp = useTransform(scrollYProgress, (v) => {
    const totalSeconds = Math.floor(v * 3600);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    const f = String(Math.floor(v * 24) % 24).padStart(2, "0");
    return `${h}:${m}:${s}:${f}`;
  });

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <motion.div className="h-[2px] bg-accent origin-left" style={{ width }} />
      <motion.span className="mono-label absolute top-1 right-3 text-accent">
        {timestamp}
      </motion.span>
    </motion.div>
  );
};

export default ScrollPlayhead;
