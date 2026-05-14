import { motion } from 'framer-motion';
import { FiCheck, FiX, FiAlertCircle } from 'react-icons/fi';

const Toast = ({ message, type, onClose }) => {
  const icons = {
    success: <FiCheck className="h-5 w-5" />,
    error: <FiX className="h-5 w-5" />,
    warning: <FiAlertCircle className="h-5 w-5" />
  };

  const colors = {
    success: 'bg-green-500/20 border-green-500/50 text-green-400',
    error: 'bg-red-500/20 border-red-500/50 text-red-400',
    warning: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-4 right-4 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-xl ${colors[type]}`}
    >
      {icons[type]}
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 rounded-full p-1 hover:bg-white/10 transition-colors"
      >
        <FiX className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

export default Toast;