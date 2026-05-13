import { motion } from 'framer-motion';

function TimelineItem({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6"
    >
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-neon-teal via-transparent to-neon-purple/50" />
      <div className="relative ml-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-neon-teal shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
          <span className="text-sm uppercase tracking-[0.32em] text-neon-teal/80">{item.year}</span>
        </div>
        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
        <p className="text-slate-300 leading-7">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default TimelineItem;
