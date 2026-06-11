'use client'; 

import { 
 Mail, 
 ArrowRight, 
 GraduationCap, 
 Briefcase, 
 Code2, 
 ExternalLink, 
 FolderGit2, 
 Phone, 
 MapPin, 
} from 'lucide-react'; 
import { MouseEvent, useState } from 'react'; 

export default function Portfolio() { 
 const [mousePosition, setMousePosition] = useState({ 
 x: 0, 
 y: 0, 
 }); 

 const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => { 
 setMousePosition({ 
 x: e.clientX, 
 y: e.clientY, 
 }); 
 }; 

 const education = [ 
 { 
 degree: 'Bachelor of Computer Engineering', 
 institute: 'ABC University', 
 year: '2021 - 2025', 
 }, 
 { 
 degree: 'Higher Secondary', 
 institute: 'XYZ School', 
 year: '2019 - 2021', 
 }, 
 ]; 

 const experience = [ 
 { 
 role: 'Frontend Developer', 
 company: 'Tech Company', 
 period: '2024 - Present', 
 description: 
 'Built scalable React apps with performance optimization and modern UI systems.', 
 }, 
 { 
 role: 'Web Developer Intern', 
 company: 'Startup Inc.', 
 period: '2023 - 2024', 
 description: 
 'Developed responsive UI components and collaborated with design teams.', 
 }, 
 ]; 

 const skills = [ 
 'React', 
 'Next.js', 
 'TypeScript', 
 'Tailwind CSS', 
 'Node.js', 
 'MongoDB', 
 'Firebase', 
 'Git', 
 'Figma', 
 'Docker', 
 ]; 

 const projects = [ 
 { 
 title: 'E-Commerce Platform', 
 description: 
 'Modern shopping platform with authentication, cart, and payments.', 
 tech: 'React • Node • MongoDB', 
 }, 
 { 
 title: 'Task Manager App', 
 description: 
 'Productivity app with drag-and-drop tasks and real-time sync.', 
 tech: 'React • Firebase', 
 }, 
 { 
 title: 'Portfolio Website', 
 description: 'Animated personal portfolio with glassmorphism UI.', 
 tech: 'React • Tailwind', 
 }, 
 ]; 

 return ( 
 <div 
 className="relative min-h-screen overflow-hidden bg-[#030712] text-white" 
 onMouseMove={handleMouseMove} 
 > 
 {/* Background Glow */} 
 <div 
 className="pointer-events-none fixed inset-0" 
 style={{ 
 background: `radial-gradient( 
 600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
 rgba(139,92,246,0.15), 
 rgba(6,182,212,0.08), 
 transparent 60% 
 )`, 
 }} 
 > 
 <div className="absolute top-0 left-0 h-[400px] w-[400px] bg-violet-500/20 blur-[140px]" /> 
 <div className="absolute right-0 bottom-0 h-[400px] w-[400px] bg-cyan-500/20 blur-[140px]" /> 
 </div> 

 {/* Content Wrapper */} 
 <div className="relative z-10"> 
 {/* HEADER */} 
 <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl"> 
 <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"> 
 <h1 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-lg font-black tracking-wide text-transparent"> 
 PORTFOLIO 
 </h1> 

 <nav className="hidden gap-6 text-sm text-slate-300 md:flex"> 
 <a href="#about" className="hover:text-violet-400"> 
 About 
 </a> 
 <a href="#experience" className="hover:text-cyan-400"> 
 Experience 
 </a> 
 <a href="#education" className="hover:text-pink-400"> 
 Education 
 </a> 
 <a href="#skills" className="hover:text-violet-400"> 
 Skills 
 </a> 
 <a href="#projects" className="hover:text-cyan-400"> 
 Projects 
 </a> 
 <a href="#contact" className="hover:text-pink-400"> 
 Contact 
 </a> 
 </nav> 
 </div> 
 </header> 

 {/* HERO */} 
 <section className="px-4 py-24 text-center sm:px-6"> 
 <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"> 
 Available for Work 
 </div> 

 <h1 className="mt-6 text-4xl leading-tight font-black sm:text-6xl lg:text-7xl"> 
 <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent"> 
 Full Stack 
 </span> 
 <br /> 
 Developer 
 </h1> 

 <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-400 sm:text-base"> 
 I build modern, scalable and beautiful web applications with clean 
 architecture and premium UI experiences. 
 </p> 

 <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"> 
 <a 
 href="#projects" 
 className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-semibold text-black" 
 > 
 View Projects <ArrowRight size={18} /> 
 </a> 

 <a 
 href="#contact" 
 className="rounded-xl border border-white/10 px-6 py-3 hover:border-violet-400" 
 > 
 Contact Me 
 </a> 
 </div> 

 <div className="mt-10 flex justify-center gap-5 text-slate-400"> 
 {/* <Github className="cursor-pointer hover:text-violet-400" /> 
 <Linkedin className="cursor-pointer hover:text-cyan-400" /> */} 
 <Mail className="cursor-pointer hover:text-pink-400" /> 
 </div> 
 </section> 

 {/* ABOUT */} 
 <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6"> 
 <h2 className="mb-10 text-3xl font-black sm:text-4xl">About Me</h2> 

 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
 <div className="rounded-2xl border border-white/10 bg-white/5 p-6"> 
 <Briefcase className="mb-4 text-violet-400" /> 
 <h3 className="text-3xl font-bold">3+</h3> 
 <p className="text-slate-400">Years Experience</p> 
 </div> 

 <div className="rounded-2xl border border-white/10 bg-white/5 p-6"> 
 <FolderGit2 className="mb-4 text-cyan-400" /> 
 <h3 className="text-3xl font-bold">20+</h3> 
 <p className="text-slate-400">Projects</p> 
 </div> 

 <div className="rounded-2xl border border-white/10 bg-white/5 p-6"> 
 <Code2 className="mb-4 text-pink-400" /> 
 <h3 className="text-3xl font-bold">10+</h3> 
 <p className="text-slate-400">Technologies</p> 
 </div> 
 </div> 
 </section> 

 {/* EXPERIENCE */} 
 <section 
 id="experience" 
 className="mx-auto max-w-7xl px-4 py-20 sm:px-6" 
 > 
 <h2 className="mb-10 text-3xl font-black sm:text-4xl">Experience</h2> 

 <div className="space-y-6"> 
 {experience.map((item) => ( 
 <div 
 key={${item?.company}-${item.role}} 
 className="rounded-2xl border border-white/10 bg-white/5 p-6" 
 > 
 <Briefcase className="mb-3 text-cyan-400" /> 
 <h3 className="text-xl font-bold">{item.role}</h3> 
 <p className="text-slate-400">{item.company}</p> 
 <p className="my-2 text-violet-400">{item.period}</p> 
 <p className="text-slate-300">{item.description}</p> 
 </div> 
 ))} 
 </div> 
 </section> 

 {/* EDUCATION */} 
 <section 
 id="education" 
 className="mx-auto max-w-7xl px-4 py-20 sm:px-6" 
 > 
 <h2 className="mb-10 text-3xl font-black sm:text-4xl">Education</h2> 

 <div className="space-y-6"> 
 {education.map((item) => ( 
 <div 
 key={${item.institute}-${item.degree}} 
 className="rounded-2xl border border-white/10 bg-white/5 p-6" 
 > 
 <GraduationCap className="mb-3 text-pink-400" /> 
 <h3 className="text-xl font-bold">{item.degree}</h3> 
 <p className="text-slate-400">{item.institute}</p> 
 <p className="mt-2 text-violet-400">{item.year}</p> 
 </div> 
 ))} 
 </div> 
 </section> 

 {/* SKILLS */} 
 <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6"> 
 <h2 className="mb-10 text-3xl font-black sm:text-4xl">Skills</h2> 

 <div className="flex flex-wrap gap-3"> 
 {skills.map((skill) => ( 
 <span 
 key={skill} 
 className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:border-violet-400" 
 > 
 {skill} 
 </span> 
 ))} 
 </div> 
 </section> 

 {/* PROJECTS */} 
 <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6"> 
 <h2 className="mb-10 text-3xl font-black sm:text-4xl">Projects</h2> 

 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> 
 {projects.map((p) => ( 
 <div 
 key={p.title} 
 className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2" 
 > 
 <FolderGit2 className="mb-4 text-violet-400" /> 
 <h3 className="text-xl font-bold">{p.title}</h3> 
 <p className="my-3 text-slate-400">{p.description}</p> 
 <p className="text-sm text-cyan-400">{p.tech}</p> 

 <button className="mt-4 flex items-center gap-2 text-pink-400"> 
 View <ExternalLink size={16} /> 
 </button> 
 </div> 
 ))} 
 </div> 
 </section> 

 {/* CONTACT */} 
 <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6"> 
 <h2 className="mb-10 text-3xl font-black sm:text-4xl">Contact</h2> 

 <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"> 
 <div className="flex items-center gap-3"> 
 <Mail className="text-violet-400" /> your@email.com 
 </div> 
 <div className="flex items-center gap-3"> 
 <Phone className="text-cyan-400" /> +91 99999 99999 
 </div> 
 <div className="flex items-center gap-3"> 
 <MapPin className="text-pink-400" /> Ahmedabad, India 
 </div> 
 </div> 
 </section> 

 {/* FOOTER */} 
 <footer className="mt-20 border-t border-white/10"> 
 <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row"> 
 <p className="text-sm text-slate-500"> 
 © 2026 Portfolio. Built with React & Tailwind. 
 </p> 

 <div className="flex gap-4 text-slate-400"> 
 {/* <Github className="cursor-pointer hover:text-violet-400" /> 
 <Linkedin className="cursor-pointer hover:text-cyan-400" /> */} 
 <Mail className="cursor-pointer hover:text-pink-400" /> 
 </div> 
 </div> 
 </footer> 
 </div> 

 {/* Mouse Glow */} 
 <div 
 className="pointer-events-none fixed z-0 h-[450px] w-[450px] rounded-full blur-[140px] transition-all duration-200" 
 style={{ 
 left: mousePosition.x - 225, 
 top: mousePosition.y - 225, 
 background: 
 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(6,182,212,0.18) 40%, rgba(236,72,153,0.12) 65%, transparent 80%)', 
 }} 
 /> 
 </div> 
 ); 
}