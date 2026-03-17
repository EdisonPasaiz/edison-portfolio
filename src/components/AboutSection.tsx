import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="mono-label text-accent mb-4">ABOUT</p>
            <h2 className="text-display-sm mb-6">THE EDITOR</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Creative, detail-oriented Video Editor with a background in front-end development and customer support. Passionate about excellence and constantly seeking opportunities to learn new methods, software, and creative styles.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              BSIT graduate from Don Bosco College Canlubang. Bringing technical precision from web development into the art of video editing.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="mono-label mb-1">LANGUAGES</p>
                <p className="font-mono-ui text-xs text-foreground">English, Filipino</p>
              </div>
              <div>
                <p className="mono-label mb-1">BASED IN</p>
                <p className="font-mono-ui text-xs text-foreground">Calamba, Laguna</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
