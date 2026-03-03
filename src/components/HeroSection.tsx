import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Scene3D from './Scene3D';

const textReveal = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      <motion.div style={{ y: parallaxY, opacity }} className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <motion.p
            custom={0}
            variants={textReveal}
            className="text-primary font-display font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Creative Digital Agency — Hyderabad
          </motion.p>

          <div className="overflow-hidden mb-4">
            <motion.h1 custom={1} variants={textReveal} className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              <span className="text-gradient">Creative Media</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1 custom={2} variants={textReveal} className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground">
              & Digital Marketing
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 custom={3} variants={textReveal} className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              <span className="text-foreground">Agency in </span>
              <span className="text-gradient">Hyderabad</span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Turning ideas into powerful brand experiences through social media marketing,
          video production, content direction, and digital strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#works"
            className="px-8 py-3 font-display font-semibold text-sm tracking-wider uppercase border-2 border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-500 iso-hover"
          >
            View Works
          </a>
          <a
            href="#contact"
            className="px-8 py-3 font-display font-semibold text-sm tracking-wider uppercase bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 iso-hover"
          >
            Book Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
