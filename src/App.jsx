import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import StatCard from './components/StatCard';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';
import Loader from './components/Loader';
import profileImage from './assets/profile.jpg';

const skills = [
  'C++', 'JavaScript', 'SQL', 'Python', 'HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Data Structures & Algorithms'
];

const projects = [
  {
    title: 'Car Rental Management System',
    description: 'A MySQL-based relational database system with normalized schema, ER modeling, constraints, views, booking/payment management, inspections, and maintenance tracking.',
    link: 'https://github.com/arvapallisaiakhil-123/Car-Rental-Management-System',
    label: 'Database + SQL',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center'
  },
  {
    title: 'Heart Disease Statistical Analysis',
    description: 'Python-based data analysis project using pandas for data cleaning, statistical computations, and report generation.',
    link: 'https://github.com/arvapallisaiakhil-123/Heart-Disease-Analysis-Python',
    label: 'Data Analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center'
  },
  {
    title: 'Student Record Management System',
    description: 'C++ console application using STL and file handling with CRUD operations and admin authentication.',
    link: 'https://github.com/arvapallisaiakhil-123/Student-record-management-system',
    label: 'C++ System',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center'
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <div className="text-sm uppercase tracking-[0.3em] text-slate-300/80">SAI AKHIL</div>

          {/* Desktop Navigation */}
          <motion.nav initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className="hidden items-center gap-8 text-sm text-slate-300 md:flex relative z-20">
            {[
              { href: '#about', label: 'About' },
              { href: '#skills', label: 'Skills' },
              { href: '#projects', label: 'Projects' },
              { href: '#education', label: 'Education' },
              { href: '#contact', label: 'Contact' }
            ].map((item) => (
              <motion.a
                key={item.href}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={item.href}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-neon-teal bg-neon-teal/10 shadow-[0_0_20px_rgba(45,212,191,0.2)]'
                    : 'hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-neon-teal/5 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-20 p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </motion.div>
          </motion.button>

          <div className="hidden items-center gap-3 sm:flex">
            <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} href="https://github.com/arvapallisaiakhil-123" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition-all duration-300 hover:border-neon-blue hover:text-neon-blue hover:bg-white/10 hover:shadow-[0_0_20px_rgba(91,157,249,0.2)]">GitHub</motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-2xl"
            >
              <div className="px-6 py-6 space-y-4">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#education', label: 'Education' },
                  { href: '#contact', label: 'Contact' }
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-neon-teal bg-neon-teal/10 shadow-[0_0_20px_rgba(45,212,191,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    href="https://github.com/arvapallisaiakhil-123"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition-all duration-300 hover:border-neon-blue hover:text-neon-blue hover:bg-white/10"
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
        <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="hero-glow relative overflow-hidden rounded-[32px] border border-white/10 bg-black/50 p-6 shadow-glow sm:p-8 lg:p-12">
          <div className="absolute -right-24 top-12 h-64 w-64 rounded-full bg-neon-blue/10 blur-3xl animate-float" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-neon-pink/10 blur-3xl animate-float" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr] lg:items-center lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="relative z-10"
            >
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="text-neon-gradient">Arvapalli Sai Akhil</span>
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300 sm:mt-4 sm:text-lg lg:text-xl">
                MERN Stack Developer | DSA Enthusiast | BTech Student
              </p>
              <p className="mt-5 max-w-3xl text-slate-300/90 text-sm leading-7 sm:mt-6 sm:text-base lg:text-lg">
                {typedText || 'Building scalable applications and solving real-world problems through clean code and modern technologies.'}
                <span className="text-neon-teal animate-pulse">|</span>
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-8">
                <a href="/resume.pdf" download className="btn-glow inline-flex items-center justify-center rounded-full border border-neon-teal/30 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-teal hover:bg-neon-teal/5 hover:text-neon-teal hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                  <FiDownload className="mr-2 h-4 w-4" /> Resume
                </a>
                <div className="flex gap-3">
                  <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} href="https://github.com/arvapallisaiakhil-123" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-3 text-sm text-slate-100 transition-all duration-300 hover:bg-white/10 hover:text-neon-blue hover:shadow-[0_0_20px_rgba(91,157,249,0.2)]">
                    <FiGithub className="mr-2 h-4 w-4" /> GitHub
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} href="https://www.linkedin.com/in/arvapalli-saiakhil-2ab13533b/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-3 text-sm text-slate-100 transition-all duration-300 hover:bg-white/10 hover:text-neon-pink hover:shadow-[0_0_20px_rgba(255,93,255,0.2)]">
                    <FiLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
              className="relative mx-auto flex items-center justify-center"
            >
              <div className="relative flex flex-col items-center justify-center gap-4">
                <motion.div
                  animate={{ y: [0, -16, 0] }}
                  transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/40 via-transparent to-neon-pink/40 blur-3xl opacity-90 animate-pulseGlow" />
                  <div className="relative h-52 w-52 overflow-hidden rounded-full border-2 border-neon-blue/60 bg-slate-950 p-1 shadow-[0_0_140px_rgba(91,157,249,0.28)] sm:h-56 sm:w-56 md:h-64 md:w-64">
                    <img
                      src={profileImage}
                      alt="Sai Akhil"
                      className="relative h-full w-full overflow-hidden rounded-full object-cover"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-full border border-neon-teal/20 opacity-60 shadow-[0_0_45px_rgba(45,212,191,0.25)]" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-sm uppercase tracking-[0.35em] text-neon-teal"
                >
                  Developer
                </motion.p>
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
            <SectionTitle number="02" title="Skills" subtitle="Technologies and tools I use often." />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-12"
          >
            {skills.map((skill, index) => (
              <SkillCard key={skill} skill={skill} delay={index * 0.08} />
            ))}
          </motion.div>
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
              className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950/70 p-8 text-center"
            >
              <div className="mb-6 inline-flex rounded-full border border-neon-blue/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-neon-teal">Let's connect</div>
              <p className="text-slate-300">Ready to collaborate on impactful software engineering work and internship-level projects.</p>
              <a href="mailto:arvapallisaiakhil@gmail.com" className="mt-8 inline-flex items-center justify-center rounded-full bg-neon-blue px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-neon-teal">Send Email <BsArrowRight className="ml-2 h-4 w-4" /></a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
