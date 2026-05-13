/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(79, 70, 229, 0.12)',
      },
      backgroundImage: {
        'futuristic': 'radial-gradient(circle at top, rgba(79, 70, 229, 0.24), transparent 30%), radial-gradient(circle at right, rgba(16, 185, 129, 0.18), transparent 22%), radial-gradient(circle at bottom left, rgba(34, 211, 238, 0.12), transparent 18%), linear-gradient(180deg, #020617 0%, #060912 100%)'
      },
      colors: {
        neon: {
          blue: '#5B9DF9',
          teal: '#29F0D7',
          pink: '#FF5DFF',
          purple: '#8B5CF6'
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(79, 70, 229, 0.18)' },
          '50%': { boxShadow: '0 0 60px rgba(79, 70, 229, 0.26)' }
        },
        drift: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '50%': { transform: 'translateX(12px) translateY(-8px)' },
          '100%': { transform: 'translateX(0px) translateY(0px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        pulseGlow: 'pulseGlow 3.4s ease-in-out infinite',
        drift: 'drift 8s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
