import { motion } from 'framer-motion';

function SkillCard({ skill, delay }) {
  const getSkillLevel = (skill) => {
    const levels = {
      'C++': 85,
      'JavaScript': 90,
      'SQL': 88,
      'Python': 82,
      'HTML': 95,
      'CSS': 92,
      'React.js': 88,
      'Node.js': 85,
      'Express.js': 83,
      'MongoDB': 80,
      'Git': 90,
      'GitHub': 88,
      'Data Structures & Algorithms': 75
    };
    return levels[skill] || 80;
  };

  const skillLevel = getSkillLevel(skill);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -12, scale: 1.03 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-neon-blue/40 hover:shadow-[0_0_40px_rgba(91,157,249,0.15)]"
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 h-1 rounded-full bg-gradient-to-r from-neon-blue via-transparent to-neon-pink opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm font-semibold tracking-[0.15em] text-slate-100 transition-all duration-300 group-hover:text-neon-blue group-hover:bg-neon-blue/10">
          {skill}
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Proficiency</span>
            <span>{skillLevel}%</span>
          </div>
          <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skillLevel}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-blue to-neon-teal rounded-full shadow-[0_0_10px_rgba(91,157,249,0.5)]"
            />
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
          {skill === 'Data Structures & Algorithms'
            ? 'Strong foundation in algorithms, data structures, and problem-solving techniques.'
            : 'Experienced in building clean, maintainable applications and solving complex challenges.'
          }
        </p>
      </div>
    </motion.div>
  );
}

export default SkillCard;
