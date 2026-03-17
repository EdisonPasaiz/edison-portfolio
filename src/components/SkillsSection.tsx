import { motion } from "framer-motion";

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
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="mono-label text-accent mb-4">TOOLKIT</p>
        <h2 className="text-display-sm mb-12">SKILLS</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="glass-border px-4 py-5 group hover:border-accent/30 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
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
