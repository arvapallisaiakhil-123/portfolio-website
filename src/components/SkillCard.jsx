import { motion } from 'framer-motion';

function SkillCard({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-glow backdrop-blur-xl transition-transform duration-300 hover:border-neon-blue/40"
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 h-1 rounded-full bg-gradient-to-r from-neon-blue via-transparent to-neon-pink opacity-40" />
      <div className="relative z-10">
        <div className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm font-semibold tracking-[0.15em] text-slate-100 transition group-hover:text-neon-blue">
          {skill}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">Experienced in building clean, maintainable applications and solving algorithmic challenges with precision.</p>
      </div>
    </motion.div>
  );
}

export default SkillCard;
