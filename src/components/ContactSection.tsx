import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactItems = [
  { href: "mailto:pasaizedison@gmail.com", icon: Mail, text: "pasaizedison@gmail.com" },
  { href: "tel:+639953677345", icon: Phone, text: "+63 995 367 7345" },
  { href: undefined, icon: MapPin, text: "Calamba, Laguna" },
];

const ContactSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="mono-label text-accent mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          THE WRAP
        </motion.p>
        <motion.h2
          className="text-display-sm mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          START A PROJECT
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-sm max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's build something with rhythm. I'm available for freelance video editing, commercial projects, and creative collaborations.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <>
                <Icon className="w-4 h-4 text-accent" />
                <span className="font-mono-ui text-xs">{item.text}</span>
              </>
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {item.href ? (
                  <motion.a
                    href={item.href}
                    className="glass-border px-6 py-4 flex items-center gap-3 border-l-4 border-l-accent hover:bg-secondary/50 transition-colors duration-200"
                    whileHover={{ x: 4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <div className="glass-border px-6 py-4 flex items-center gap-3 border-l-4 border-l-accent">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          className="border-t border-foreground/[0.08] pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mono-label">© 2025 EDISON PASAIZ. ALL RIGHTS RESERVED.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
