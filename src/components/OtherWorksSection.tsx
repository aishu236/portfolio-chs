import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const externalLinks = [
  {
    title: 'Namaste Grocery',
    description: 'Social media content & reels for local desi grocery store',
    url: 'https://www.instagram.com/reel/C7k6ZjzM3Am/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D',
    type: 'Instagram Reel',
  },
  {
    title: 'Ananthabhyas',
    description: 'Instagram brand profile & content management',
    url: 'https://www.instagram.com/ananthabhyas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    type: 'Instagram Profile',
  },
  {
    title: 'Nonucare',
    description: 'Digital presence & social media management',
    url: 'https://www.instagram.com/nonucare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    type: 'Instagram Profile',
  },
  {
    title: 'Sniva Studio',
    description: 'Brand identity, content creation & social media for Sniva',
    url: 'https://www.instagram.com/sniva_studio?igsh=dXZ2ZHo5d25mc3dz',
    type: 'Instagram Profile',
  },
  {
    title: 'Design Portfolio',
    description: 'Collection of graphic designs and brand materials',
    url: 'https://drive.google.com/drive/folders/1zQLYwhzigNy9tFXFzMi5LgS8m4vySE9r',
    type: 'Google Drive',
  },
  {
    title: 'Thumbnail Designs',
    description: 'YouTube thumbnail designs and visual assets',
    url: 'https://drive.google.com/drive/folders/14LrGzlb7ahLYl_SSTM8-Hg0j6d3cwb-g',
    type: 'Google Drive',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function OtherWorksSection() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-3">More Work</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">Other Productions & Edits</h2>
          <div className="glow-line w-24 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {externalLinks.map((link, i) => (
            <motion.a
              key={link.title + i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="clay-card iso-hover p-6 group flex flex-col justify-between min-h-[180px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-display tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {link.type}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-500 mb-2">
                  {link.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
