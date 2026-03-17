import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mono-label text-accent mb-4">THE WRAP</p>
        <h2 className="text-display-sm mb-6">START A PROJECT</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-12">
          Let's build something with rhythm. I'm available for freelance video editing, commercial projects, and creative collaborations.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <motion.a
            href="mailto:pasaizedison@gmail.com"
            className="glass-border px-6 py-4 flex items-center gap-3 border-l-4 border-l-accent hover:bg-secondary/50 transition-colors duration-200"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="w-4 h-4 text-accent" />
            <span className="font-mono-ui text-xs">pasaizedison@gmail.com</span>
          </motion.a>

          <motion.a
            href="tel:+639953677345"
            className="glass-border px-6 py-4 flex items-center gap-3 border-l-4 border-l-accent hover:bg-secondary/50 transition-colors duration-200"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Phone className="w-4 h-4 text-accent" />
            <span className="font-mono-ui text-xs">+63 995 367 7345</span>
          </motion.a>

          <div className="glass-border px-6 py-4 flex items-center gap-3 border-l-4 border-l-accent">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-mono-ui text-xs">Calamba, Laguna</span>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-foreground/[0.08] pt-8">
          <p className="mono-label">© 2025 EDISON PASAIZ. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
