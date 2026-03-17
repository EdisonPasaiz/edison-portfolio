import { useScroll, useTransform, motion } from "framer-motion";

const ScrollPlayhead = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timestamp = useTransform(scrollYProgress, (v) => {
    const totalSeconds = Math.floor(v * 3600);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    const f = String(Math.floor(v * 24) % 24).padStart(2, "0");
    return `${h}:${m}:${s}:${f}`;
  });

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <motion.div className="h-[2px] bg-accent origin-left" style={{ width }} />
      <motion.span className="mono-label absolute top-1 right-3 text-accent">
        {timestamp}
      </motion.span>
    </div>
  );
};

export default ScrollPlayhead;
