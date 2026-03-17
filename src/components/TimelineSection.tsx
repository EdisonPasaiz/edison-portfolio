import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const experiences: TimelineItem[] = [
  {
    year: "2025",
    title: "Video Editor",
    company: "Little Light Media",
    description: "Edited video content using Adobe Premiere Pro and CapCut Pro for high-impact storytelling.",
  },
  {
    year: "2024",
    title: "Front End Developer",
    company: "IAMTECH",
    description: "Developed responsive web pages and applications using HTML, CSS, and JavaScript.",
  },
  {
    year: "2021",
    title: "Email Support",
    company: "BlasterSuite",
    description: "Resolved issues related to product usage, troubleshooting, and subscription management.",
  },
  {
    year: "2019",
    title: "Customer Service Representative",
    company: "Sutherland Global Inc.",
    description: "Handled customer inquiries via phone; resolved billing, service, and account issues.",
  },
];

const TimelineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div style={{ y: headerY }}>
          <motion.p
            className="mono-label text-accent mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            THE EDIT
          </motion.p>
          <motion.h2
            className="text-display-sm mb-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            EXPERIENCE
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Static track */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-muted/30" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[7px] top-0 w-[1px] bg-accent"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
              >
                {/* Keyframe dot */}
                <motion.div
                  className="absolute left-0 top-1 w-[14px] h-[14px] border-2 border-accent bg-background rotate-45"
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.12, type: "spring", stiffness: 300 }}
                />

                <p className="mono-label text-accent mb-1">{item.year}</p>
                <h3 className="font-display font-bold text-lg tracking-tight mb-1">{item.title}</h3>
                <p className="font-mono-ui text-xs text-muted-foreground mb-2">{item.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
