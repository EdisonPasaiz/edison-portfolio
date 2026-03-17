import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const labelY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div style={{ y: labelY }}>
            <motion.p
              className="mono-label text-accent mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            >
              ABOUT
            </motion.p>
            <motion.h2
              className="text-display-sm mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            >
              THE EDITOR
            </motion.h2>
          </motion.div>
          <motion.div style={{ y }}>
            <motion.p
              className="text-muted-foreground text-sm leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            >
              Creative, detail-oriented Video Editor with a background in front-end development and customer support. Passionate about excellence and constantly seeking opportunities to learn new methods, software, and creative styles.
            </motion.p>
            <motion.p
              className="text-muted-foreground text-sm leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
            >
              BSIT graduate from Don Bosco College Canlubang. Bringing technical precision from web development into the art of video editing.
            </motion.p>
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div>
                <p className="mono-label mb-1">LANGUAGES</p>
                <p className="font-mono-ui text-xs text-foreground">English, Filipino</p>
              </div>
              <div>
                <p className="mono-label mb-1">BASED IN</p>
                <p className="font-mono-ui text-xs text-foreground">Calamba, Laguna</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
