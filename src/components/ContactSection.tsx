import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Send, User, Building2 } from 'lucide-react';
import Scene3DContact from './Scene3DContact';

const serviceTypes = [
  'Social Media Management',
  'Video Production',
  'Content Creation',
  'Brand Identity',
  'Digital Marketing',
  'Web Design',
  'Photography',
  'Post-Production',
];

const businessTypes = [
  'Restaurant / Café',
  'Salon / Spa',
  'Fitness / Gym',
  'Fashion / Clothing',
  'Real Estate / Interiors',
  'E-commerce',
  'Healthcare',
  'Education',
  'Events & Entertainment',
  'Other',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    businessType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzCFbp23siEMT0jLIePc87z0IENofs72ULN0F01Ot3950E5QdufloVKp79Hu0EiKtEsiA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error('Sheet sync error:', err);
    }
    const whatsappMessage = `Hi! I'm ${formData.name}. I'm interested in ${formData.service} for my ${formData.businessType} business. ${formData.message}`;
    const whatsappUrl = `https://wa.me/919542551647?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setLoading(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Scene3DContact />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-display tracking-[0.2em] uppercase text-xs mb-3">Get Started</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">Book Our Services</h2>
          <div className="glow-line w-24 mt-6 mx-auto" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="clay-card p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-display text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Your Name
              </label>
              <input type="text" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className={inputClass} />
            </div>
            <div className="space-y-2">
              <label className="font-display text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> Phone Number
              </label>
              <input type="tel" required maxLength={15} pattern="[0-9+\-\s()]+" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className={inputClass} />
            </div>
            <div className="space-y-2">
              <label className="font-display text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" /> Service Needed
              </label>
              <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={`${inputClass} appearance-none`}>
                <option value="" disabled>Select a service</option>
                {serviceTypes.map((s) => (<option key={s} value={s}>{s}</option>))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-display text-sm text-muted-foreground tracking-wider uppercase flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" /> Business Type
              </label>
              <select required value={formData.businessType} onChange={(e) => setFormData({ ...formData, businessType: e.target.value })} className={`${inputClass} appearance-none`}>
                <option value="" disabled>Select business type</option>
                {businessTypes.map((b) => (<option key={b} value={b}>{b}</option>))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-display text-sm text-muted-foreground tracking-wider uppercase">Tell us more (optional)</label>
            <textarea maxLength={500} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Brief about your project..." rows={3} className={`${inputClass} resize-none`} />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 rounded-full bg-foreground text-background font-display font-bold tracking-wider uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            {loading ? 'Sending...' : submitted ? '✓ Redirecting to WhatsApp...' : 'Book Now →'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
