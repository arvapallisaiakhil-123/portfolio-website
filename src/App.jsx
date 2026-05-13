import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import StatCard from './components/StatCard';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';
import Loader from './components/Loader';

const skills = [
  'C++', 'JavaScript', 'SQL', 'Python', 'HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Data Structures & Algorithms'
];

const projects = [
  {
    title: 'Car Rental Management System',
    description: 'A MySQL-based relational database system with normalized schema, ER modeling, constraints, views, booking/payment management, inspections, and maintenance tracking.',
    link: 'https://github.com/arvapallisaiakhil-123/Car-Rental-Management-System',
    label: 'Database + SQL'
  },
  {
    title: 'Heart Disease Statistical Analysis',
    description: 'Python-based data analysis project using pandas for data cleaning, statistical computations, and report generation.',
    link: 'https://github.com/arvapallisaiakhil-123/Heart-Disease-Analysis-Python',
    label: 'Data Analysis'
  },
  {
    title: 'Student Record Management System',
    description: 'C++ console application using STL and file handling with CRUD operations and admin authentication.',
    link: 'https://github.com/arvapallisaiakhil-123/Student-record-management-system',
    label: 'C++ System'
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-futuristic relative text-slate-100 selection:bg-neon-teal selection:text-slate-950">
      <div className="particle-grid" />
      <AnimatedCursor />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_bottom_right,_rgba(79,70,229,0.15),_transparent_20%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <div className="text-sm uppercase tracking-[0.3em] text-slate-300/80">SAI AKHIL</div>
          <motion.nav initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className="hidden items-center gap-6 text-sm text-slate-300 md:flex relative z-20">
            <motion.a whileHover={{ y: -3 }} className="transition hover:text-white" href="#about">About</motion.a>
            <motion.a whileHover={{ y: -3 }} className="transition hover:text-white" href="#skills">Skills</motion.a>
            <motion.a whileHover={{ y: -3 }} className="transition hover:text-white" href="#projects">Projects</motion.a>
            <motion.a whileHover={{ y: -3 }} className="transition hover:text-white" href="#education">Education</motion.a>
            <motion.a whileHover={{ y: -3 }} className="transition hover:text-white" href="#contact">Contact</motion.a>
          </motion.nav>
          <div className="flex items-center gap-3">
            <motion.a whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 280 }} href="https://github.com/arvapallisaiakhil-123" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-neon-blue hover:text-neon-blue">GitHub</motion.a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8">
        <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="hero-glow relative overflow-hidden rounded-[32px] border border-white/10 bg-black/50 p-8 shadow-glow sm:p-12">
          <div className="absolute -right-24 top-12 h-64 w-64 rounded-full bg-neon-blue/10 blur-3xl animate-float" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-neon-pink/10 blur-3xl animate-float" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative z-10"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.36em] text-neon-teal/80">Premium student developer portfolio</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-neon-gradient">Arvapalli Sai Akhil</span>
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                MERN Stack Developer | DSA Enthusiast | BTech Student
              </p>
              <p className="mt-6 max-w-3xl text-slate-300/90 text-base leading-8 sm:text-lg">
                {typedText || 'Building scalable applications and solving real-world problems through clean code and modern technologies.'}
                <span className="text-neon-teal">|</span>
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="/resume.pdf" className="btn-glow inline-flex items-center justify-center rounded-full border border-neon-teal/30 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-neon-teal hover:bg-neon-teal/5 hover:text-neon-teal">
                  <FiDownload className="mr-2 h-4 w-4" /> Resume
                </a>
                <div className="flex gap-3">
                  <a href="https://github.com/arvapallisaiakhil-123" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:bg-white/10 hover:text-neon-blue">
                    <FiGithub className="mr-2 h-4 w-4" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/arvapalli-saiakhil-2ab13533b/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:bg-white/10 hover:text-neon-pink">
                    <FiLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="relative mx-auto flex max-w-md items-center justify-center"
            >
              <div className="relative h-[420px] w-[420px] overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-slate-900/40 p-6 shadow-glow backdrop-blur-xl">
                <div className="absolute left-0 top-0 h-20 w-20 rounded-full bg-neon-pink/20 blur-3xl" />
                <div className="absolute right-4 top-12 h-24 w-24 rounded-full bg-neon-blue/20 blur-3xl" />
                <div className="absolute inset-0 rounded-[32px] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_49%)]" />
                <div className="relative flex h-full flex-col items-center justify-center gap-5 text-center">
                  <div className="h-36 w-36 rounded-full border border-neon-blue/30 bg-gradient-to-br from-slate-950/80 to-slate-900/40 p-1 shadow-[0_0_80px_rgba(59,130,246,0.18)]">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-950/90">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.35),_transparent_30%)]" />
                      <div className="absolute inset-0 animate-float bg-[radial-gradient(circle,_rgba(16,185,129,0.16),_transparent_35%)]" />
                      <div className="relative flex h-full items-center justify-center text-xs uppercase tracking-[0.25em] text-slate-200/70">Profile</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300/70">Developer</p>
                    <div className="text-2xl font-semibold text-white">Futuristic UI</div>
                    <p className="max-w-xs text-sm leading-6 text-slate-400">Immersive glassmorphism, soft neon glow, and smart animations for an internship-ready portfolio.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section id="about" className="mt-20">
          <SectionTitle number="01" title="About me" subtitle="Engineering elegant systems with modern code." />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
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
          <SectionTitle number="02" title="Skills" subtitle="Technologies and tools I use often." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard key={skill} skill={skill} delay={index * 0.08} />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <SectionTitle number="03" title="Projects" subtitle="Premium applications built for learning and practical value." />
          <div className="grid gap-8 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="education" className="mt-20">
          <SectionTitle number="04" title="Education & timeline" subtitle="Academic progress and engineering milestones." />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
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
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-glow backdrop-blur-xl">
          <SectionTitle number="05" title="Contact" subtitle="Let’s build your next engineering solution together." />
          <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
