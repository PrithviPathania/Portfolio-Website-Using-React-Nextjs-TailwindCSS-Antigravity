import Image from "next/image";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ExternalLinkIcon,
  ArrowDownIcon,
  CodeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@/components/Icons";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups, projects, experiences, education } from "@/lib/data";

/* ────────── page ────────── */

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center overflow-x-hidden font-sans">

      {/* ═══════ Background Ambient Glow ═══════ */}
      <div className="pointer-events-none select-none" aria-hidden="true">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-700/[0.03] blur-[100px]" />
      </div>

      {/* ═══════ HERO SECTION ═══════ */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <p className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Software Development Student
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-50 leading-tight">
              Prithvi{" "}
              <span className="gradient-text">Pathania</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-300 font-medium max-w-xl mx-auto lg:mx-0">
              Software Development Student at SAIT seeking industry experience
            </p>
            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Proficient in Java and Python with hands-on experience in
              object-oriented programming and file management systems. Eager to
              apply these skills in real-world environments.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/PrithviPathania"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all duration-300
                           shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
              >
                <GitHubIcon className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/prithvipathania"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                <LinkedInIcon className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                           border border-slate-700 text-slate-300 hover:border-emerald-500/40
                           hover:text-emerald-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                <ArrowDownIcon className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up-delay-1">
            <div className="relative animate-float">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-transparent blur-lg" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden
                              ring-2 ring-emerald-500/30 animate-glow-pulse">
                <Image
                  src="/profile.jpg"
                  alt="Prithvi Pathania — Software Development Student"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTENT WRAPPER (all sections below hero) ═══════ */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 py-16">

        {/* ═══════ SKILLS & TECHNOLOGIES ═══════ */}
        <section id="skills" aria-labelledby="skills-heading">
          <SectionHeading
            icon={<CodeIcon />}
            title="Skills & Technologies"
            id="skills-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
                  <span className="text-xl">{group.icon}</span>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ FEATURED PROJECTS ═══════ */}
        <section id="projects" aria-labelledby="projects-heading">
          <SectionHeading
            icon={<CodeIcon />}
            title="Featured Projects"
            id="projects-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((project) => (
              <div key={project.title} className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-slate-100 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
                    {project.tech}
                  </span>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400
                             hover:text-emerald-300 transition-colors group"
                >
                  <GitHubIcon className="w-4 h-4" />
                  View on GitHub
                  <ExternalLinkIcon className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ EXPERIENCE & VOLUNTEERING ═══════ */}
        <section id="experience" aria-labelledby="experience-heading">
          <SectionHeading
            icon={<BriefcaseIcon />}
            title="Experience & Volunteering"
            id="experience-heading"
          />
          <div className="flex flex-col gap-8 w-full">
            {experiences.map((exp) => (
              <div key={exp.title} className="timeline-item">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-slate-100">{exp.title}</h3>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">{exp.role}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mt-3">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ EDUCATION ═══════ */}
        <section id="education" aria-labelledby="education-heading">
          <SectionHeading
            icon={<AcademicCapIcon />}
            title="Education"
            id="education-heading"
          />
          <div className="flex flex-col gap-6 w-full">
            {education.map((edu) => (
              <div key={edu.degree} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                <p className="text-base text-emerald-400 font-medium mt-1">{edu.school}</p>
                <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ CONTACT ═══════ */}
        <section id="contact" aria-labelledby="contact-heading">
          <SectionHeading
            icon={<MailIcon />}
            title="Get in Touch"
            id="contact-heading"
          />
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <p className="text-slate-400 mb-8 max-w-lg">
              I&apos;m currently seeking internship and co-op opportunities in software development.
              Feel free to reach out — I&apos;d love to connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:prithvipathania1@gmail.com"
                id="contact-email-btn"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm
                           bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all duration-300
                           shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
              >
                <MailIcon className="w-5 h-5" />
                prithvipathania1@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/prithvipathania"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-btn"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm
                           border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                <LinkedInIcon className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/PrithviPathania"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-btn"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm
                           border border-slate-700 text-slate-300 hover:border-emerald-500/40
                           hover:text-emerald-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                <GitHubIcon className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="w-full border-t border-emerald-500/10 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Prithvi Pathania. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/PrithviPathania"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
              className="hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/prithvipathania"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:prithvipathania1@gmail.com"
              id="footer-email"
              className="hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
