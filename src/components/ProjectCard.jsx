import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -16, scale: 1.03 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-neon-pink/40 hover:shadow-[0_0_100px_rgba(236,72,153,0.25)]"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),transparent_25%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.5, type: 'spring', stiffness: 200 }}
          className="absolute top-4 right-4 z-20 flex items-center gap-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-teal px-3 py-1 text-xs font-medium text-slate-950 shadow-lg"
        >
          <FiStar className="h-3 w-3" />
          Featured
        </motion.div>
      )}

      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover Reveal Effect */}
          <motion.div
            initial={{ y: '100%' }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0 bg-gradient-to-t from-slate-950/95 to-transparent flex items-end p-6"
          >
            <div className="text-white">
              <p className="text-sm opacity-90 leading-relaxed">
                {project.description.length > 120
                  ? `${project.description.substring(0, 120)}...`
                  : project.description
                }
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="inline-flex rounded-full bg-neon-blue/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-neon-blue border border-neon-blue/20 font-medium">
              {project.label}
            </span>
          </div>

          <motion.h3
            className="text-2xl font-bold text-white group-hover:text-neon-pink transition-colors duration-300 mb-3"
            whileHover={{ scale: 1.02 }}
          >
            {project.title}
          </motion.h3>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + techIndex * 0.1 + 0.3 }}
                className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 border border-white/10 hover:border-neon-teal/30 hover:text-neon-teal transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-teal px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
            >
              <FiGithub className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
              View Code
            </motion.a>

            {project.demo && (
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-slate-100 transition-all duration-300 hover:border-neon-pink hover:text-neon-pink hover:bg-neon-pink/5 hover:shadow-[0_0_25px_rgba(255,93,255,0.3)]"
              >
                <FiExternalLink className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
