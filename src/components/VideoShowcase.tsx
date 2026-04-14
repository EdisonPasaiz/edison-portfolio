import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const videos = [
  {
    title: "SAMPLE 01",
    videoUrl: "assets/videos/Angela_Video52_Revised2.mp4",
  },
  {
    title: "SAMPLE 02",
    videoUrl: "assets/videos/Angela_Video69_Revised2.mp4",
  },
  {
    title: "SAMPLE 03",
    videoUrl: "assets/videos/Edison_Pasaiz_Test_Task.mp4",
  },
];

const VideoShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="section-padding">
      <motion.div style={{ y: headerY }}>
        <motion.p
          className="mono-label text-accent mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          SELECTED WORK
        </motion.p>
        <motion.h2
          className="text-display-sm mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          SAMPLE VIDEOS
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <motion.div
            key={video.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="flex flex-col gap-3"
          >
            <motion.div
              className="relative aspect-[9/16] overflow-hidden glass-border"
              whileHover={{ scale: 1.02, borderColor: "hsl(10 80% 50% / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src={video.videoUrl}
              />
              <motion.div
                className="absolute inset-0 bg-background/40"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            <p className="mono-label">{video.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoShowcase;
