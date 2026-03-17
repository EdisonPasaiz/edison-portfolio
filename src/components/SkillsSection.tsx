import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Adobe Premiere Pro",
  "CapCut Pro",
  "Graphic Design",
  "Front End Development",
  "Design Thinking",
  "AI Tools",
  "Problem-Solving",
  "Strong Communication",
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

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
            TOOLKIT
          </motion.p>
          <motion.h2
            className="text-display-sm mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            SKILLS
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="glass-border px-4 py-5 group hover:border-accent/30 transition-colors duration-200 cursor-default"
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <p className="font-mono-ui text-xs text-foreground">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
