import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const works = [
  {
    title: 'Songs Production',
    description: 'From concept to completion, our team handled the entire production of rap music videos — including pre-production planning, shooting, editing, and VFX.',
    links: [
      { label: 'DEVA - DHOORANGUNDU', url: 'https://www.youtube.com/watch?v=nhIMW1szms8', type: 'YouTube' },
      { label: 'Choostu Undu - LADY SKAVYA', url: 'https://www.youtube.com/watch?v=jO_CHsaHpA8', type: 'YouTube' },
      { label: 'Maryaada Remix - Lady Skavya', url: 'https://www.youtube.com/watch?v=M15ZRysNIv0', type: 'YouTube' },
    ],
  },
  {
    title: 'Wellversed ICN 3 Days Production',
    description: 'We managed the complete production of the national-level ICN Fitness Competition, covering three days of high-intensity events with multi-camera coverage and live editing.',
    links: [
      { label: 'Day 1 Highlights', url: 'https://www.instagram.com/reel/DNq3Y-Hz5i9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D', type: 'Instagram' },
      { label: 'Day 2 Highlights', url: 'https://www.instagram.com/reel/DNu7C1PZoOR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D', type: 'Instagram' },
      { label: 'Day 3 Highlights', url: 'https://www.instagram.com/reel/DNxn9IIZl_8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D', type: 'Instagram' },
    ],
  },
  {
    title: 'ConflktMagazine Fashion Shows',
    description: 'From concept to curtain call, we executed fashion shows handling creative direction, stage design, visual storytelling, full production and post-editing.',
    links: [
      { label: 'Fashion Show Film 1', url: 'https://www.youtube.com/watch?v=XvRnD0FJSbw', type: 'YouTube' },
      { label: 'Fashion Show Film 2', url: 'https://www.youtube.com/watch?v=7T693LlgKtM', type: 'YouTube' },
      { label: 'Fashion Show Film 3', url: 'https://www.youtube.com/watch?v=phh57G6fYBI', type: 'YouTube' },
      { label: 'Behind the Scenes', url: 'https://www.instagram.com/p/DKKZLVfSVVc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D', type: 'Instagram' },
      { label: 'Runway Reel', url: 'https://www.instagram.com/reel/DMNUSRAxrwe/?utm_source=ig_embed&ig_rid=6d8fa8a9-429d-4b2c-9aae-db41753358ea', type: 'Instagram' },
      { label: 'Highlights Reel', url: 'https://www.instagram.com/reel/DKkGj-YJeRW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D', type: 'Instagram' },
    ],
  },
];

const workVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function WorksSection() {
  return (
    <section id="works" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-3">Our Work</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">Featured Works</h2>
          <div className="glow-line w-24 mt-6" />
        </motion.div>

        <div className="space-y-8">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={workVariants}
              className="clay-card iso-hover p-8 md:p-12 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                  <span className="font-display font-bold text-primary text-xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{work.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {work.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      >
                        {link.type === 'YouTube' ? <Play className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                        <span className="font-display text-xs tracking-wide">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
