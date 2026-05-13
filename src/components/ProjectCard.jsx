import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl transition-transform duration-300 hover:border-neon-pink/40 hover:shadow-[0_0_70px_rgba(236,72,153,0.18)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.16),transparent_18%)] opacity-90" />
      <div className="relative z-10">
        <span className="inline-flex rounded-full bg-neon-blue/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-neon-blue">{project.label}</span>
        <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
        <a href={project.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neon-teal transition hover:text-white">
          View repository
          <FiExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
