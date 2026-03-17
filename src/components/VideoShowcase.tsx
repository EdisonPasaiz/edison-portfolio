import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface VideoProject {
  number: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  videoUrl: string;
  layout: "full" | "split" | "floating";
}

const projects: VideoProject[] = [
  {
    number: "01",
    title: "EMOTION",
    description: "A narrative short exploring the depths of human connection through cinematic storytelling and rhythmic editing.",
    specs: [
      { label: "RESOLUTION", value: "4K UHD" },
      { label: "SOFTWARE", value: "PREMIERE PRO" },
      { label: "ROLE", value: "LEAD EDITOR" },
      { label: "DURATION", value: "3:24" },
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    layout: "full",
  },
  {
    number: "02",
    title: "VELOCITY",
    description: "Commercial content crafted for maximum impact. Fast cuts, precise timing, and seamless transitions.",
    specs: [
      { label: "RESOLUTION", value: "1080P HD" },
      { label: "SOFTWARE", value: "CAPCUT PRO" },
      { label: "ROLE", value: "EDITOR & COLORIST" },
      { label: "DURATION", value: "1:45" },
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    layout: "split",
  },
  {
    number: "03",
    title: "FRAGMENT",
    description: "An experimental piece pushing the boundaries of non-linear storytelling through innovative editing techniques.",
    specs: [
      { label: "RESOLUTION", value: "4K UHD" },
      { label: "SOFTWARE", value: "PREMIERE PRO" },
      { label: "ROLE", value: "DIRECTOR & EDITOR" },
      { label: "DURATION", value: "2:12" },
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    layout: "floating",
  },
];

const FullBleedVideo = ({ project }: { project: VideoProject }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ scale: videoScale }}
        src={project.videoUrl}
      />
      <div className="absolute inset-0 bg-background/60" />
      <motion.div className="relative z-10 h-full flex items-end pb-20 px-6 md:px-12" style={{ y: textY }}>
        <div>
          <p className="mono-label text-accent mb-4">{project.number} / {project.title}</p>
          <h2 className="text-display">{project.title}</h2>
        </div>
      </motion.div>
    </div>
  );
};

const SplitVideo = ({ project }: { project: VideoProject }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div ref={ref} className="section-padding">
      <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center">
        <div className="relative aspect-video overflow-hidden glass-border">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={project.videoUrl} />
        </div>
        <motion.div className="md:pl-12" style={{ y: textY }}>
          <p className="mono-label text-accent mb-4">{project.number} / {project.title}</p>
          <h2 className="text-display-sm mb-6">{project.title}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">{project.description}</p>
          <div className="grid grid-cols-2 gap-4">
            {project.specs.map((spec) => (
              <div key={spec.label} className="border-l-2 border-accent/30 pl-3">
                <p className="mono-label mb-1">{spec.label}</p>
                <p className="font-mono-ui text-xs text-foreground">{spec.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FloatingVideo = ({ project }: { project: VideoProject }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className="section-padding flex flex-col items-center">
      <p className="mono-label text-accent mb-4">{project.number} / {project.title}</p>
      <h2 className="text-display-sm mb-12 text-center">{project.title}</h2>
      <motion.div
        className="relative w-full max-w-4xl aspect-video overflow-hidden"
        style={{ y, boxShadow: "0 40px 100px rgba(0,0,0,0.8)" }}
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={project.videoUrl} />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
          <p className="text-muted-foreground text-sm max-w-md">{project.description}</p>
        </div>
      </motion.div>
      <div className="flex gap-8 mt-8">
        {project.specs.map((spec) => (
          <div key={spec.label} className="text-center">
            <p className="mono-label mb-1">{spec.label}</p>
            <p className="font-mono-ui text-xs text-foreground">{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const VideoShowcase = () => {
  return (
    <section>
      {projects.map((project) => {
        if (project.layout === "full") return <FullBleedVideo key={project.number} project={project} />;
        if (project.layout === "split") return <SplitVideo key={project.number} project={project} />;
        return <FloatingVideo key={project.number} project={project} />;
      })}
    </section>
  );
};

export default VideoShowcase;
