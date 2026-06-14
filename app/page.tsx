import Image from "next/image";

/* ────────── icon components ────────── */

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

function ArrowDownIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>
  );
}

function CodeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function AcademicCapIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function BriefcaseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}


/* ────────── data ────────── */

const skillGroups = [
  {
    title: "Languages & Frameworks",
    icon: "💻",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS", "TypeScript", "Oracle SQL", "React", "TailwindCSS"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    items: ["Eclipse", "VS Code", "Git", "GitHub", "Oracle", "HeidiSQL / MariaDB", "SQL Plus", "Expo", "Figma"],
  },
  {
    title: "Core Concepts",
    icon: "🧠",
    items: ["OOP", "Database Design", "UX Design"],
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    items: ["Communication", "Public Speaking", "Teamwork", "Leadership"],
  },
];

const projects = [
  {
    title: "Sorting Algorithm Benchmarking System",
    tech: "Java",
    description:
      "A team-based project to benchmark and compare sorting algorithms using geometric shape data, featuring command-line argument parsing and execution time analysis.",
    github: "https://github.com/PrithviPathania/Assignment1ComplexitySorting",
  },
  {
    title: "Library Management System",
    tech: "Java, JDBC, MySQL",
    description:
      "A full-stack console-based application supporting core library operations with persistent relational database storage and CRUD operations.",
    github: "https://github.com/PrithviPathania/Library-Management-System-JDBC/",
  },
  {
    title: "SoundCloud Library Page Clone",
    tech: "React Native, Expo",
    description:
      "A mobile UI clone recreating key interface components like a navigation sidebar, Recently Played, and Listening History.",
    github: "https://github.com/PrithviPathania/soundcloudLibraryPage",
  },
];

const experiences = [
  {
    title: "TechNation AI Equity Data Challenge",
    role: "Participant — Phase 2",
    description:
      "Collaborated in a team-based challenge addressing equity problems in AI data, working on responsible and ethical AI concepts.",
  },
  {
    title: "Activity Check-In — SAIT Winter Open House 2026",
    role: "Volunteer",
    description:
      "Welcomed guests, handed out pamphlets, explained schedules, and provided campus directions, demonstrating strong communication and customer service skills.",
  },
];

const education = [
  {
    degree: "Diploma in Software Development",
    school: "Southern Alberta Institute of Technology (SAIT)",
    period: "Sept 2024 — Present (Expected: April 2027)",
  },
  {
    degree: "High School Diploma",
    school: "John G. Diefenbaker High School",
    period: "Graduated: June 6, 2025",
  },
];


/* ────────── section heading component ────────── */

function SectionHeading({
  icon,
  title,
  id,
}: {
  icon: React.ReactNode;
  title: string;
  id?: string;
}) {
  return (
    <div id={id} className="flex items-center gap-3 mb-8 scroll-mt-24">
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        {icon}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 section-heading">
        {title}
      </h2>
    </div>
  );
}


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
