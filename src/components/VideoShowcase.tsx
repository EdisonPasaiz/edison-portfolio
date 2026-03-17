import { motion } from "framer-motion";

const videos = [
  {
    title: "SAMPLE 01",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "SAMPLE 02",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    title: "SAMPLE 03",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];

const VideoShowcase = () => {
  return (
    <section className="section-padding">
      <p className="mono-label text-accent mb-4">SELECTED WORK</p>
      <h2 className="text-display-sm mb-16">SAMPLE VIDEOS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <motion.div
            key={video.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col gap-3"
          >
            <div className="relative aspect-[9/16] overflow-hidden glass-border">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src={video.videoUrl}
              />
            </div>
            <p className="mono-label">{video.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoShowcase;
