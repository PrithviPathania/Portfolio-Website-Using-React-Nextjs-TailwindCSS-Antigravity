# Personal Portfolio Website

A modern, highly responsive portfolio website designed to showcase my software development projects, technical skills, and academic background.

**Live Link:** [prithvipathania.vercel.app](https://prithvipathania.vercel.app/)

---

## 🛠️ Tech Stack & Architecture

* **Framework:** Next.js (React)
* **Styling:** Tailwind CSS
* **Language:** TypeScript / JavaScript
* **Deployment:** Vercel

---

## 🚀 Key Features Demonstrated

* **Dynamic Skills Grid:** Categorized display of languages, tools, core concepts (OOP, Database Design), and soft skills.
* **Featured Projects Showcase:** Highlighted repository summaries featuring clean iconography and direct GitHub links.
* **Responsive Timeline:** Interactive experience and education layout mapping out academic milestones and volunteer history.

---

## 🤖 Behind the Code (AI Orchestration)

This entire portfolio website was generated in an experimental single prompt to test the limits of agentic developer workflows.

* **IDE & Orchestrator:** Google Antigravity
* **Core Model:** Claude 4.6 Opus

<details>
<summary>💬 Click to view the generation prompt</summary>

```text
Please build a modern, fully responsive personal portfolio website from scratch using React, Next.js, and Tailwind CSS. The design should feature a premium dark green theme, clean typography, smooth scrolling, and perfect padding across small, large, portrait, and landscape screens. Use the following strict structural constraints and content details to build the entire code for page.tsx:

Page Layout & Responsiveness Rules:
Root Wrapper: Wrap the entire page in a single <main className="w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center overflow-x-hidden font-sans">.
Structural Flow: Use normal document flow. Do not use 'absolute' or 'fixed' positioning for sections, and never use fixed heights like 'h-screen' or hardcoded pixel widths on parent containers.
Content Frame: Wrap all sections BELOW the hero section in a single, unified width-controller: <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 py-16">.

Hero Section:
Structure a balanced, responsive side-by-side flex/grid layout that centers vertically on mobile and spreads horizontally on desktop.
Name: Prithvi Pathania
Headline: Software Development Student at SAIT seeking industry experience
Bio: Proficient in Java and Python with hands-on experience in object-oriented programming and file management systems. Eager to apply these skills in real-world environments.
Image Asset: Use the file "151-901-3203_7tp9_1.jpg" verbatim as the profile picture. Style it inside a clean, glowing rounded container.
Action Links: Styled buttons linking to my GitHub, LinkedIn, and an anchor link pointing down to the contact section.

Skills & Technologies Section:
Group skills into clean cards using a responsive grid layout: grid grid-cols-1 md:grid-cols-2 gap-6 w-full
Languages & Frameworks: Java, Python, JavaScript, HTML, CSS, TypeScript, Oracle SQL, React, TailwindCSS
Tools & Platforms: Eclipse, VS Code, Git, GitHub, Oracle, HeidiSQL/MariaDB, SQL Plus, Expo, Figma
Core Concepts: OOP, Database Design, UX Design
Soft Skills: Communication, Public Speaking, Teamwork, Leadership

Featured Projects Section:
Use a responsive layout: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full.
Card 1: "Sorting Algorithm Benchmarking System (Java)" - A team-based project to benchmark and compare sorting algorithms using geometric shape data, featuring command-line argument parsing and execution time analysis. (GitHub Link: [https://github.com/PrithviPathania/Assignment1ComplexitySorting](https://github.com/PrithviPathania/Assignment1ComplexitySorting))
Card 2: "Library Management System (Java, JDBC, MySQL)" - A full-stack console-based application supporting core library operations with persistent relational database storage and CRUD operations. (GitHub Link: [https://github.com/PrithviPathania/Library-Management-System-JDBC/](https://github.com/PrithviPathania/Library-Management-System-JDBC/))
Card 3: "SoundCloud Library Page Clone (React Native, Expo)" - A mobile UI clone recreating key interface components like a navigation sidebar, Recently Played, and Listening History. (GitHub Link: [https://github.com/PrithviPathania/soundcloudLibraryPage](https://github.com/PrithviPathania/soundcloudLibraryPage))

Experience & Volunteering Section:
Layout: A vertical stack of full-width clean timelines or text blocks.
TechNation AI Equity Data Challenge (Participant - Phase 2): Collaborated in a team-based challenge addressing equity problems in AI data, working on responsible and ethical AI concepts.
Activity Check-In (SAIT Winter Open house 2026): Welcomed guests, handed out pamphlets, explained schedules, and provided campus directions, demonstrating strong communication and customer service skills.

Education Section:
Diploma in Software Development, Southern Alberta Institute of Technology (SAIT) | Sept 2024 - Present (Expected: April 2027)
High School Diploma, John G. Diefenbaker High School | Graduated: June 6, 2025

Contact & Footer Section:
Email: prithvipathania1@gmail.com
LinkedIn: [linkedin.com/in/prithvipathania](https://linkedin.com/in/prithvipathania)
GitHub: [github.com/PrithviPathania](https://github.com/PrithviPathania)

Please output the clean, modular, and complete production-ready code for this portfolio website.
