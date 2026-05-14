import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMenu, FiUser, FiX } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import SectionTitle from './components/SectionTitle';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import StatCard from './components/StatCard';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AnimatedCursor from './components/AnimatedCursor';
import Loader from './components/Loader';
import profileImage from './assets/profile.png';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 88, icon: '⚛️' },
      { name: 'JavaScript', level: 90, icon: '🟨' },
      { name: 'HTML', level: 95, icon: '🏗️' },
      { name: 'CSS', level: 92, icon: '🎨' },
      { name: 'Tailwind CSS', level: 90, icon: '💨' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express.js', level: 83, icon: '🚂' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'Python', level: 82, icon: '🐍' }
    ]
  },
  {
    category: 'Database & Languages',
    items: [
      { name: 'SQL', level: 88, icon: '🗄️' },
      { name: 'C++', level: 85, icon: '⚡' },
      { name: 'Data Structures & Algorithms', level: 75, icon: '🧠' }
    ]
  },
  {
    category: 'Tools & Version Control',
    items: [
      { name: 'Git', level: 90, icon: '📚' },
      { name: 'GitHub', level: 88, icon: '🐙' },
      { name: 'VS Code', level: 95, icon: '💻' }
    ]
  }
];

const projects = [
  {
    title: 'Car Rental Management System',
    description: 'A comprehensive MySQL-based relational database system with normalized schema, ER modeling, constraints, views, booking/payment management, inspections, and maintenance tracking.',
    link: 'https://github.com/arvapallisaiakhil-123/Car-Rental-Management-System',
    demo: null, // No live demo available
    label: 'Database + SQL',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center',
    tech: ['MySQL', 'SQL', 'Database Design', 'ER Modeling'],
    featured: true
  },
  {
    title: 'Heart Disease Statistical Analysis',
    description: 'Python-based data analysis project using pandas for data cleaning, statistical computations, and comprehensive report generation with data visualization.',
    link: 'https://github.com/arvapallisaiakhil-123/Heart-Disease-Analysis-Python',
    demo: null,
    label: 'Data Analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
    tech: ['Python', 'Pandas', 'Data Analysis', 'Statistics'],
    featured: false
  },
  {
    title: 'Student Record Management System',
    description: 'C++ console application using STL and file handling with complete CRUD operations, admin authentication, and data persistence.',
    link: 'https://github.com/arvapallisaiakhil-123/Student-record-management-system',
    demo: null,
    label: 'C++ System',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center',
    tech: ['C++', 'STL', 'File Handling', 'CRUD Operations'],
    featured: false
  }
];

const timeline = [
  { year: '2024', title: 'Joined SRM University AP', description: 'Started BTech CSE with a focus on full-stack development and data structures.' },
  { year: '2025', title: 'Built Real-World Applications', description: 'Delivered multi-tier applications using MERN technologies and backend architecture.' },
  { year: '2026', title: 'DSA & Algorithm Practice', description: 'Solved 100+ problems to strengthen algorithmic thinking and interview readiness.' }
];

const stats = [
  { value: '100+', label: 'DSA Problems Solved' },
  { value: '3+', label: 'Projects Completed' },
  { value: 'MERN', label: 'Stack Developer' }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactMessage, setContactMessage] = useState(null);
  const [toast, setToast] = useState(null);
  const [contactErrors, setContactErrors] = useState({});
  const [profileImageError, setProfileImageError] = useState(false);
  const fullText = 'Building scalable applications and solving real-world problems through clean code and modern technologies.';

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      let current = 0;
      const typing = window.setInterval(() => {
        setTypedText(fullText.slice(0, current + 1));
        current += 1;
        if (current >= fullText.length) {
          window.clearInterval(typing);
        }
      }, 28);
      return () => window.clearInterval(typing);
    }
  }, [loading]);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Enhanced scroll handler with better detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact form handlers
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!contactForm.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!contactForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(contactForm.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!contactForm.message.trim()) {
      errors.message = 'Message is required';
    } else if (contactForm.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });

    // Clear error when user starts typing
    if (contactErrors[name]) {
      setContactErrors({
        ...contactErrors,
        [name]: ''
      });
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setContactLoading(true);
    setContactMessage(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        setContactForm({ name: '', email: '', message: '' });
        setContactErrors({});
      } else {
        showToast(data.message || 'Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      showToast('Network error. Please check your connection and try again.', 'error');
    } finally {
      setContactLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-futuristic relative text-slate-100 selection:bg-neon-teal selection:text-slate-950">
      <div className="particle-grid" />
      <AnimatedCursor />

      {/* Animated Background Blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 80, -100, 0],
            y: [0, -100, 60, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-neon-teal/5 rounded-full blur-3xl"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_bottom_right,_rgba(79,70,229,0.15),_transparent_20%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-3xl supports-[backdrop-filter]:bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-slate-300/80 font-semibold hover:text-white transition-colors duration-300 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            SAI AKHIL
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="hidden items-center gap-2 text-sm text-slate-300 md:flex relative z-20"
          >
            {[
              { href: 'about', label: 'About' },
              { href: 'skills', label: 'Skills' },
              { href: 'projects', label: 'Projects' },
              { href: 'education', label: 'Education' },
              { href: 'contact', label: 'Contact' }
            ].map((item) => (
              <motion.button
                key={item.href}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                  activeSection === item.href
                    ? 'text-neon-teal bg-neon-teal/10 shadow-[0_0_25px_rgba(45,212,191,0.3)] border border-neon-teal/20'
                    : 'hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-neon-teal/5 rounded-xl -z-10 border border-neon-teal/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-20 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </motion.div>
          </motion.button>

          <div className="hidden items-center gap-3 sm:flex">
            <motion.a
              whileHover={{ scale: 1.05, y: -2, rotate: 5 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/arvapallisaiakhil-123"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition-all duration-300 hover:border-neon-blue hover:text-neon-blue hover:bg-white/10 hover:shadow-[0_0_25px_rgba(91,157,249,0.3)] font-medium"
            >
              <FiGithub className="inline h-4 w-4 mr-2" />
              GitHub
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-white/10 bg-black/30 backdrop-blur-3xl"
            >
              <div className="px-6 py-6 space-y-2">
                {[
                  { href: 'about', label: 'About' },
                  { href: 'skills', label: 'Skills' },
                  { href: 'projects', label: 'Projects' },
                  { href: 'education', label: 'Education' },
                  { href: 'contact', label: 'Contact' }
                ].map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      scrollToSection(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 font-medium ${
                      activeSection === item.href
                        ? 'text-neon-teal bg-neon-teal/10 shadow-[0_0_20px_rgba(45,212,191,0.2)] border border-neon-teal/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    href="https://github.com/arvapallisaiakhil-123"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition-all duration-300 hover:border-neon-blue hover:text-neon-blue hover:bg-white/10 font-medium"
                  >
                    <FiGithub className="h-4 w-4" /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8">
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="hero-glow relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-black/60 via-slate-950/80 to-black/60 p-6 shadow-glow backdrop-blur-xl sm:p-8 lg:p-12"
        >
          {/* Enhanced Background Effects */}
          <div className="absolute -right-32 top-8 h-80 w-80 rounded-full bg-gradient-to-br from-neon-blue/15 via-neon-teal/10 to-transparent blur-3xl animate-float" />
          <div className="absolute -left-28 bottom-4 h-96 w-96 rounded-full bg-gradient-to-tr from-neon-pink/12 via-purple-500/8 to-transparent blur-3xl animate-drift" />
          <div className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-blue/8 to-neon-teal/8 blur-3xl animate-pulseGlow" />

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            className="absolute inset-x-0 top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="relative"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-teal/30 bg-neon-teal/5 px-4 py-2 text-sm text-neon-teal backdrop-blur-sm"
              >
                <div className="h-2 w-2 rounded-full bg-neon-teal animate-pulse" />
                Available for internships
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-neon-blue via-neon-teal to-neon-pink bg-clip-text text-transparent">
                  Sai Akhil
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg lg:text-xl"
              >
                <span className="font-semibold text-neon-teal">MERN Stack Developer</span> |{' '}
                <span className="font-semibold text-neon-blue">DSA Enthusiast</span> |{' '}
                <span className="font-semibold text-neon-pink">BTech Student</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-5 max-w-3xl text-slate-300/90 text-sm leading-7 sm:mt-6 sm:text-base lg:text-lg"
              >
                {typedText || 'Building scalable applications and solving real-world problems through clean code and modern technologies.'}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-neon-teal"
                >
                  |
                </motion.span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href="/resume.pdf"
                  download
                  className="btn-glow group inline-flex w-full items-center justify-center rounded-full border border-neon-teal/40 bg-gradient-to-r from-neon-teal/10 to-neon-blue/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-neon-teal hover:bg-neon-teal/20 hover:shadow-[0_0_40px_rgba(45,212,191,0.4)] sm:w-auto"
                >
                  <FiDownload className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download Resume
                </motion.a>

                <div className="flex w-full gap-2 sm:w-auto sm:gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/arvapallisaiakhil-123"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex flex-1 items-center justify-center rounded-full bg-white/5 px-4 py-3 text-sm text-slate-100 transition-all duration-300 hover:bg-white/10 hover:text-neon-blue hover:shadow-[0_0_25px_rgba(91,157,249,0.3)] sm:flex-none sm:px-5"
                  >
                    <FiGithub className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    <span className="hidden xs:inline">GitHub</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/arvapalli-saiakhil-2ab13533b/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex flex-1 items-center justify-center rounded-full bg-white/5 px-4 py-3 text-sm text-slate-100 transition-all duration-300 hover:bg-white/10 hover:text-neon-pink hover:shadow-[0_0_25px_rgba(255,93,255,0.3)] sm:flex-none sm:px-5"
                  >
                    <FiLinkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    <span className="hidden xs:inline">LinkedIn</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
              className="relative mx-auto flex items-center justify-center"
            >
              <div className="relative flex flex-col items-center justify-center gap-6">
                {/* Enhanced Profile Container */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                  className="relative group"
                >
                  {/* Multiple Glow Layers */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/30 via-neon-teal/25 to-neon-pink/30 blur-2xl opacity-80 animate-pulseGlow" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/20 to-transparent blur-xl animate-float" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-neon-pink/15 to-transparent blur-lg animate-drift" />

                  {/* Profile Image Container */}
                  <div className="relative z-10 h-56 w-56 overflow-hidden rounded-full border-2 border-white/20 bg-gradient-to-br from-slate-900 to-slate-950 p-1 shadow-[0_0_160px_rgba(91,157,249,0.35)] transition-all duration-500 group-hover:shadow-[0_0_200px_rgba(45,212,191,0.5)] sm:h-64 sm:w-64 md:h-72 md:w-72">
                    {!profileImageError ? (
                      <motion.img
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        src={profileImage}
                        alt="Sai Akhil - MERN Stack Developer"
                        loading="eager"
                        onError={() => setProfileImageError(true)}
                        className="absolute inset-0 h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-900/95 to-slate-950/95 p-6 text-center">
                        <div className="space-y-4">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neon-teal/10 text-neon-teal shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                            <FiUser className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium text-slate-300">Profile image unavailable</p>
                        </div>
                      </div>
                    )}

                    {/* Inner Glow Ring */}
                    <div className="absolute inset-0 rounded-full border border-neon-teal/30 opacity-60 shadow-[inset_0_0_30px_rgba(45,212,191,0.2)]" />
                  </div>

                  {/* Rotating Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 -z-10 rounded-full border-2 border-transparent bg-gradient-to-r from-neon-blue/40 via-neon-teal/40 to-neon-pink/40 bg-clip-border p-1"
                  />
                </motion.div>

                {/* Enhanced Role Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative"
                >
                  <div className="rounded-full border border-neon-teal/30 bg-neon-teal/5 px-6 py-3 backdrop-blur-sm">
                    <span className="bg-gradient-to-r from-neon-blue to-neon-teal bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                      Full-Stack Developer
                    </span>
                  </div>
                  <div className="absolute -inset-1 rounded-full border border-neon-teal/20 opacity-50 blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section id="about" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionTitle number="01" title="About me" subtitle="Engineering elegant systems with modern code." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] mt-12"
          >
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-glow backdrop-blur-xl">
              <p className="text-lg leading-8 text-slate-300">
                I am passionate about software development and thrive on converting complex ideas into polished digital products.
                My focus is building scalable MERN stack applications, optimizing backend services, and refining database systems.
              </p>
              <p className="text-lg leading-8 text-slate-300">
                With over 100 DSA problems solved, I enjoy developing solutions that balance performance, maintainability, and real-world impact.
                I love working on projects that use modern technology to solve practical problems and deliver delightful user experiences.
              </p>
            </div>
            <div className="space-y-5 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-glow backdrop-blur-xl">
              <div className="rounded-3xl border border-neon-blue/20 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-neon-teal/80">Core strengths</p>
                <ul className="mt-6 space-y-4 text-slate-300">
                  <li>• MERN stack development and backend architecture</li>
                  <li>• Database design, SQL modeling, and schema optimization</li>
                  <li>• DSA fundamentals and algorithmic problem solving</li>
                  <li>• Building clean, maintainable, accessible interfaces</li>
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-5 text-slate-300">BTech CSE student at SRM University AP</div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-5 text-slate-300">Focus on backend and full-stack application architecture</div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionTitle number="02" title="Skills" subtitle="Technologies and tools I use to build amazing applications." />
          </motion.div>

          <div className="mt-12 space-y-12">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.2 }}
                  className="text-lg font-semibold text-neon-teal border-b border-neon-teal/20 pb-2"
                >
                  {category.category}
                </motion.h3>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.08 + 0.3,
                        ease: 'easeOut'
                      }}
                      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-6 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-neon-blue/40 hover:shadow-[0_0_50px_rgba(91,157,249,0.2)]"
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{skill.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-100 group-hover:text-neon-blue transition-colors duration-300">
                              {skill.name}
                            </h4>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Proficiency</span>
                            <span className="font-medium text-neon-teal">{skill.level}%</span>
                          </div>

                          <div className="relative h-3 bg-slate-800/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.5,
                                delay: categoryIndex * 0.1 + skillIndex * 0.08 + 0.5,
                                ease: 'easeOut'
                              }}
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-blue via-neon-teal to-neon-pink rounded-full shadow-[0_0_15px_rgba(91,157,249,0.6)]"
                            />
                          </div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.08 + 0.7 }}
                          className="mt-4 text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                        >
                          {skill.name === 'Data Structures & Algorithms'
                            ? 'Strong foundation in algorithms and problem-solving'
                            : skill.name === 'React.js'
                            ? 'Modern UI development with hooks and state management'
                            : skill.name === 'Node.js'
                            ? 'Server-side JavaScript and API development'
                            : skill.name === 'MongoDB'
                            ? 'NoSQL database design and optimization'
                            : 'Building robust and scalable applications'
                          }
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionTitle number="03" title="Projects" subtitle="Premium applications built for learning and practical value." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="grid gap-8 xl:grid-cols-3 mt-12"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </section>

        <section id="education" className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionTitle number="04" title="Education & timeline" subtitle="Academic progress and engineering milestones." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="grid gap-8 lg:grid-cols-[1fr_0.7fr] mt-12"
          >
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-glow backdrop-blur-xl">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-neon-teal/80">SRM University AP</p>
                <h3 className="text-2xl font-semibold text-white">BTech Computer Science and Engineering</h3>
                <p className="text-slate-300">CGPA: 8.67</p>
              </div>
              <div className="mt-4 space-y-4">
                {timeline.map((item) => (
                  <TimelineItem key={item.year} item={item} />
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-glow backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-neon-teal/80">Highlights</p>
              <div className="mt-8 grid gap-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mt-20 rounded-[32px] border border-white/10 bg-slate-950/60 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <SectionTitle number="05" title="Contact" subtitle="Let's build your next engineering solution together." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-8">I’m always open to student developer opportunities, internships, and collaborations. Reach out via email or connect on GitHub and LinkedIn.</p>
              <div className="space-y-4 rounded-3xl border border-neon-blue/20 bg-slate-900/80 p-6">
                <div className="flex items-center gap-3 text-slate-100">
                  <FiMail className="h-5 w-5 text-neon-teal" />
                  <span>arvapallisaiakhil@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-100">
                  <FiGithub className="h-5 w-5 text-neon-blue" />
                  <a href="https://github.com/arvapallisaiakhil-123" target="_blank" rel="noreferrer" className="transition hover:text-white">github.com/arvapallisaiakhil-123</a>
                </div>
                <div className="flex items-center gap-3 text-slate-100">
                  <FiLinkedin className="h-5 w-5 text-neon-pink" />
                  <a href="https://www.linkedin.com/in/arvapalli-saiakhil-2ab13533b/" target="_blank" rel="noreferrer" className="transition hover:text-white">linkedin.com/in/arvapalli-saiakhil-2ab13533b</a>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950/70 p-8"
            >
              <div className="mb-6 inline-flex rounded-full border border-neon-blue/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-neon-teal">Let's connect</div>
              <p className="mb-6 text-slate-300">Ready to collaborate on impactful software engineering work and internship-level projects.</p>

              {/* Contact Form */}
              <motion.form
                onSubmit={handleContactSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    placeholder="Your full name"
                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-slate-100 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      contactErrors.name
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-neon-teal focus:ring-neon-teal/20'
                    }`}
                  />
                  {contactErrors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-400"
                    >
                      {contactErrors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    placeholder="your.email@example.com"
                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-slate-100 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      contactErrors.email
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-neon-teal focus:ring-neon-teal/20'
                    }`}
                  />
                  {contactErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-400"
                    >
                      {contactErrors.email}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows="4"
                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-slate-100 placeholder-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      contactErrors.message
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-neon-teal focus:ring-neon-teal/20'
                    }`}
                  />
                  {contactErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-400"
                    >
                      {contactErrors.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={contactLoading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={!contactLoading ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!contactLoading ? { scale: 0.98 } : {}}
                  className={`group relative w-full overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    contactLoading
                      ? 'cursor-not-allowed bg-slate-600 text-slate-400'
                      : 'bg-gradient-to-r from-neon-blue to-neon-teal text-slate-950 hover:shadow-lg hover:shadow-neon-blue/25'
                  }`}
                >
                  {contactLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-4 w-4 border-2 border-slate-400 border-t-transparent rounded-full"
                      />
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span>Send Message</span>
                      <BsArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
