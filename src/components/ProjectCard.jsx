import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-0 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-neon-pink/40 hover:shadow-[0_0_80px_rgba(236,72,153,0.2)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.16),transparent_18%)] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </div>

        <div className="p-8">
          <span className="inline-flex rounded-full bg-neon-blue/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-neon-blue border border-neon-blue/20">
            {project.label}
          </span>
          <h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-neon-pink transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-4 text-slate-300 leading-7 group-hover:text-slate-200 transition-colors duration-300">
            {project.description}
          </p>

          <div className="mt-8 flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neon-blue px-5 py-3 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-neon-teal hover:shadow-[0_0_25px_rgba(45,212,191,0.3)]"
            >
              <FiGithub className="h-4 w-4" />
              View Code
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-slate-100 transition-all duration-300 hover:border-neon-pink hover:text-neon-pink hover:bg-neon-pink/5 hover:shadow-[0_0_25px_rgba(255,93,255,0.2)]"
            >
              <FiExternalLink className="h-4 w-4" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
