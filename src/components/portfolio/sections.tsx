import { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Gauge,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import photo from "@/assets/bobbadiramesh.png";
import leaveflowImg from "@/assets/leaveflow-dashboard.svg";
import offlineiqImg from "@/assets/offlineiq-practice.svg";
import crashriskImg from "@/assets/crashrisk-analytics.svg";
import {
  certifications,
  experience,
  focusAreas,
  navLinks,
  profile,
  projects,
  resumeUrl,
  skillGroups,
  type Project,
} from "@/lib/portfolio-data";
import { Chip, GithubIcon, LinkedinIcon, Section, btnGhost, btnPrimary, ext, iconBtn } from "./ui";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled || open ? "border-border bg-background/90 backdrop-blur" : "border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-md font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-card font-mono text-xs text-primary">
            BR
          </span>
          <span className="hidden sm:inline">Bobbadi Ramesh</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-border px-5 pb-4 pt-2 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-card hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function SocialLinks() {
  return (
    <div className="flex gap-3">
      <a href={profile.github} {...ext} aria-label="GitHub profile" className={iconBtn}>
        <GithubIcon className="h-5 w-5" />
      </a>
      <a href={profile.linkedin} {...ext} aria-label="LinkedIn profile" className={iconBtn}>
        <LinkedinIcon className="h-5 w-5" />
      </a>
      <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} className={iconBtn}>
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> SOFTWARE ENGINEER
          </p>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Ramesh.</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl font-medium leading-snug text-foreground/90 sm:text-2xl">
            I build reliable web applications and practical software solutions.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Computer Science graduate with experience building full-stack applications, developing
            REST APIs, integrating AI services, working with databases, and investigating
            application performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={btnPrimary}>
              View My Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className={btnGhost}>
              Get in Touch
            </a>
            {resumeUrl && (
              <a href={resumeUrl} {...ext} className={btnGhost}>
                <Download className="h-4 w-4" /> Download Resume
              </a>
            )}
          </div>
          <div className="mt-8 flex items-center gap-5">
            <SocialLinks />
            <span className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:inline-flex">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>
        </div>
        <div className="animate-rise mx-auto w-full max-w-sm [animation-delay:120ms]">
          <div className="relative rounded-3xl border border-border bg-card p-3 shadow-card">
            <div
              aria-hidden
              className="absolute -inset-px -z-10 rounded-3xl bg-[image:var(--gradient-accent)] opacity-25 blur-2xl"
            />
            <img
              src={photo}
              alt="Portrait of Bobbadi Ramesh, Software Engineer"
              width={480}
              height={600}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <div className="flex items-center justify-between px-2 pt-3 pb-1">
              <div>
                <p className="text-sm font-semibold text-foreground">{profile.name}</p>
                <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
              </div>
              <span className="font-mono text-xs text-accent">B.Tech CSE 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const focusIcons = [Layers, Database, BrainCircuit, Gauge];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineer with a practical, full-stack focus.">
      <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
        I am a Computer Science graduate with experience developing, testing, and maintaining web
        applications and platform solutions. I build frontend components with React and JavaScript,
        develop backend services with Node.js and Express.js, work with RESTful APIs and databases,
        and integrate AI APIs into applications. I enjoy solving technical problems, debugging
        application issues, and collaborating with developers to build reliable software.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((f, i) => {
          const Icon = focusIcons[i] ?? Layers;
          return (
            <li key={f} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <Icon className="h-5 w-5 text-primary" aria-hidden />
              <p className="mt-4 font-medium text-foreground">{f}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

const skillIcons = [Code2, Server, Database, Sparkles, Terminal];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="Tools I work with."
      className="bg-secondary"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = skillIcons[i] ?? Code2;
          return (
            <article
              key={g.title}
              className={cn(
                "rounded-xl border border-border bg-card p-6 shadow-card",
                i === 4 && "lg:col-span-2",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-secondary">
                  <Icon className="h-4 w-4 text-accent" aria-hidden />
                </span>
                <h3 className="font-semibold text-foreground">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

const projectImages: Partial<Record<NonNullable<Project["image"]>, { src: string; alt: string }>> =
  {
    leaveflow: {
      src: leaveflowImg,
      alt: "LeaveFlow employee leave dashboard showing balances, requests, and team availability",
    },
    offlineiq: {
      src: offlineiqImg,
      alt: "OfflineIQ interview practice screen showing a question, progress, and answer scoring",
    },
    crashrisk: {
      src: crashriskImg,
      alt: "CrashRisk AI analytics dashboard showing prediction inputs and a high-risk result",
    },
  };

function ProjectVisual({ p }: { p: Project }) {
  const img = p.image ? projectImages[p.image] : null;
  if (img) {
    return (
      <div className="mb-5">
        <div className="aspect-[1200/650] w-full overflow-hidden rounded-md border border-border bg-background">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            width={1200}
            height={650}
            className={cn(
              "h-full w-full transition-transform duration-500 ease-out hover:scale-105 motion-reduce:transform-none",
              "object-cover",
            )}
          />
        </div>
      </div>
    );
  }
  return null;
}

export function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  return (
    <Section id="projects" eyebrow="Featured projects" title="Things I've built.">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p) => {
          const expanded = expandedProjects.includes(p.name);
          const detailsId = `project-details-${p.image ?? p.name.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <article
              key={p.name}
              className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-colors hover:border-primary/40"
            >
              <div className="shrink-0 p-6 pb-4">
                <ProjectVisual p={p} />
                <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                <p className="text-sm font-medium text-accent">{p.fullName}</p>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
                  {p.description}
                </p>
                <Button
                  type="button"
                  variant="link"
                  className="mt-3 px-0"
                  aria-expanded={expanded}
                  aria-controls={detailsId}
                  onClick={() =>
                    setExpandedProjects((current) =>
                      expanded ? current.filter((name) => name !== p.name) : [...current, p.name],
                    )
                  }
                >
                  {expanded ? "See less" : "See more"}
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "transition-transform motion-reduce:transition-none",
                      expanded && "rotate-180",
                    )}
                  />
                </Button>
              </div>
              {expanded && (
                <div
                  id={detailsId}
                  role="region"
                  aria-label={`${p.name} project details`}
                  tabIndex={0}
                  className="project-details h-52 overflow-y-auto overscroll-y-contain border-t border-border p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                >
                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {p.tech.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-auto flex shrink-0 flex-wrap gap-3 border-t border-border p-6 pt-5">
                {p.live && (
                  <a
                    href={p.live}
                    {...ext}
                    className={cn(btnPrimary, "py-2.5")}
                    aria-label={`Open ${p.name} live demo (new tab)`}
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    {...ext}
                    className={cn(btnGhost, "py-2.5")}
                    aria-label={`View ${p.name} source on GitHub (new tab)`}
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional experience"
      title="Where I've worked."
      className="bg-secondary"
    >
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-primary bg-background sm:-left-[47px]"
            />
            <article className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{e.role}</h3>
                  <p className="text-primary">{e.company}</p>
                </div>
                <div className="font-mono text-xs text-muted-foreground sm:text-right">
                  <p>{e.period}</p>
                  <p>{e.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <article className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-card sm:flex-row sm:p-8">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-secondary">
          <GraduationCap className="h-6 w-6 text-primary" aria-hidden />
        </span>
        <div className="flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <p className="font-mono text-xs text-muted-foreground">August 2022 – May 2026</p>
          </div>
          <p className="mt-1 text-muted-foreground">
            Vikas College of Engineering and Technology, Vijayawada
          </p>
          <p className="mt-4 text-sm text-foreground">
            CGPA: <span className="font-semibold text-accent">7.65/10</span>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Relevant coursework:</span>
            {["Data Structures", "Object-Oriented Programming", "Database Management Systems"].map(
              (c) => (
                <Chip key={c}>{c}</Chip>
              ),
            )}
          </div>
        </div>
      </article>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & recognition"
      title="Credentials."
      className="bg-secondary"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((c) => (
          <article
            key={c.url}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/40"
          >
            <BadgeCheck className="h-6 w-6 text-accent" aria-hidden />
            <h3 className="mt-4 font-semibold leading-snug text-foreground">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <a
              href={c.url}
              {...ext}
              className="mt-auto inline-flex items-center gap-1.5 self-start rounded-md pt-6 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`View certificate: ${c.title} (new tab)`}
            >
              View Certificate <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card">
        <Award className="h-6 w-6 shrink-0 text-primary" aria-hidden />
        <div>
          <h3 className="font-semibold text-foreground">Recognition</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Recognized by TestSeries Pro for designing a mobile prototype of its website.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const items = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail className="h-5 w-5" />,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/bobbadi-ramesh",
      href: profile.linkedin,
      icon: <LinkedinIcon className="h-5 w-5" />,
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/ramesh-bobbadi",
      href: profile.github,
      icon: <GithubIcon className="h-5 w-5" />,
      external: true,
    },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2
            id="contact-title"
            className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Let's Build Something <span className="text-gradient">Meaningful.</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            I'm interested in software engineering opportunities where I can contribute to building
            reliable web applications, solve technical problems, and continue growing as an
            engineer.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {items.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  {...(it.external ? ext : {})}
                  className="flex items-center gap-4 rounded-xl border border-border bg-secondary p-4 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-card text-primary">
                    {it.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{it.label}</span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      {it.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-foreground">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bobbadi Ramesh
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <a href="#top" aria-label="Back to top" className={iconBtn}>
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
