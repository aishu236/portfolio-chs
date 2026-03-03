import { motion } from 'framer-motion';
import { BarChart3, Palette, Film, Sparkles, Camera, Monitor } from 'lucide-react';

const services = [
  {
    category: 'Digital Marketing',
    items: ['Social Media Management', 'Performance & Meta Ads', 'Influencer Collaborations', 'Content Strategy & Campaign Planning'],
    icon: BarChart3,
    cardClass: 'service-card-digital',
  },
  {
    category: 'Creative Direction',
    items: ['Brand Identity & Visual Strategy', 'Campaign Concepts & Storyboarding', 'Art Direction & Set Design'],
    icon: Palette,
    cardClass: 'service-card-creative',
  },
  {
    category: 'Production & Direction',
    items: ['Music Videos', 'Commercial & Ad Films', 'Event & Show Coverage', 'Brand Films & Corporate Videos', 'Fashion & Lifestyle Shoots'],
    icon: Film,
    cardClass: 'service-card-production',
  },
  {
    category: 'Post-Production',
    items: ['Video Editing', 'VFX & Motion Graphics', 'Color Grading', 'Sound Design & Mixing'],
    icon: Sparkles,
    cardClass: 'service-card-post',
  },
  {
    category: 'Content Creation',
    items: ['Reels & Short-Form Content', 'Product Shoots', 'Promotional Visuals', 'Behind-the-Scenes & Documentary'],
    icon: Camera,
    cardClass: 'service-card-content',
  },
  {
    category: 'Web & Digital Design',
    items: ['Website Design & Development', 'Portfolio & Landing Pages', 'UI/UX for Creative Projects'],
    icon: Monitor,
    cardClass: 'service-card-web',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateY: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-3">What We Do</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">Services We Offer</h2>
          <div className="glow-line w-24 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.category}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`clay-card iso-hover p-8 group ${service.cardClass}`}
              >
                <div className="service-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-5 group-hover:text-primary transition-colors duration-500">
                  {service.category}
                </h3>
                <ul className="space-y-2.5">
                  {service.items.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="text-primary mt-1 text-xs">▸</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
