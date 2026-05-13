import { motion } from 'framer-motion';

function SectionTitle({ number, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className="mb-10 flex flex-col gap-3"
    >
      <div className="flex items-center gap-4 text-sm uppercase tracking-[0.35em] text-neon-teal/85">
        <span>{number}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-neon-blue via-neon-teal to-neon-pink opacity-50" />
      </div>
      <div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default SectionTitle;
