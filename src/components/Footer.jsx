import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 px-6 py-10 text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-300">© 2026 Arvapalli Sai Akhil. Crafted for student internships and developer opportunities.</p>
          <p className="mt-2 text-sm text-slate-500">Designed with React, Tailwind CSS, and modern motion.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:arvapallisaiakhil@gmail.com" className="transition hover:text-white"><FiMail className="h-5 w-5" /></a>
          <a href="https://github.com/arvapallisaiakhil-123" target="_blank" rel="noreferrer" className="transition hover:text-white"><FiGithub className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/arvapalli-saiakhil-2ab13533b/" target="_blank" rel="noreferrer" className="transition hover:text-white"><FiLinkedin className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
