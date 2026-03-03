import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            Let's create something <span className="text-gradient">awesome</span> together!
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Ready to elevate your brand? Get in touch and let's craft your next big story.
          </p>
          <a
            href="https://www.instagram.com/chs_media_digital.solution/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 mb-8"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-display text-sm tracking-wider">@chs_media_digital.solution</span>
          </a>
          <div className="glow-line w-16 mx-auto mb-8" />
          <p className="text-muted-foreground text-sm font-display tracking-wider uppercase">
            © {new Date().getFullYear()} CHS Media & Digital Solutions
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
