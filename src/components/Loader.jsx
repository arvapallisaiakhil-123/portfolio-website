import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-neon-blue/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-neon-teal/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-neon-pink/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>

      <div className="relative flex flex-col items-center gap-8 text-center text-white">
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl font-bold tracking-wider text-transparent bg-gradient-to-r from-neon-blue via-neon-teal to-neon-pink bg-clip-text"
        >
          SAI AKHIL
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-neon-blue/30 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_0_80px_rgba(79,70,229,0.4)]">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-neon-blue via-neon-teal to-neon-pink bg-clip-border"
            />

            {/* Inner Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="h-12 w-12 rounded-full border-4 border-neon-teal/50 border-t-transparent"
            />

            {/* Center Dot */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute h-2 w-2 rounded-full bg-neon-teal shadow-[0_0_20px_rgba(45,212,191,0.8)]"
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-2"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-lg font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
          >
            Initializing Portfolio
          </motion.p>
          <motion.p
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.9, duration: 2, ease: 'easeInOut' }}
            className="text-sm text-slate-400 max-w-xs leading-relaxed"
          >
            Loading cutting-edge technologies and premium design elements...
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-64 h-1 bg-slate-800/50 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ delay: 1.5, duration: 2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-neon-blue via-neon-teal to-neon-pink rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Loader;
