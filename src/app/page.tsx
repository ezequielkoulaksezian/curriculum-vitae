import {
  education,
  experience,
  languages,
  profile,
  projects,
  softSkills,
  techStack,
} from "@/data/cv";

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-white/15 pb-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">
      {children}
    </h2>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-navy">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:py-10 print:p-0">
      <div className="no-print mb-4 flex flex-wrap justify-end gap-2">
        <a
          href={profile.pdf}
          download
          className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy/90"
        >
          Download PDF
        </a>
      </div>

      <article className="grid overflow-hidden rounded-xl bg-paper shadow-xl shadow-navy/10 md:grid-cols-[17rem_1fr] print:rounded-none print:shadow-none">
        <aside className="space-y-8 border-gold bg-navy px-6 py-8 text-sm text-white/90 md:border-r-4 md:py-12">
          <section>
            <SidebarHeading>Contact</SidebarHeading>
            <ul className="space-y-1.5 break-words">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-gold">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <SidebarHeading>Tech Stack</SidebarHeading>
            <div className="space-y-4">
              {techStack.map(({ group, items }) => (
                <div key={group}>
                  <h3 className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white/55">
                    {group}
                  </h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <li key={item} className="rounded bg-white/10 px-2 py-0.5 text-xs">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SidebarHeading>Soft Skills</SidebarHeading>
            <ul className="space-y-1">
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <SidebarHeading>Languages</SidebarHeading>
            <ul className="space-y-3">
              {languages.map(({ name, level, score }) => (
                <li key={name}>
                  <div>
                    {name} <span className="text-xs text-white/55">· {level}</span>
                  </div>
                  <div className="mt-1 flex gap-1.5" aria-label={`${score} out of 5`}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`h-2 w-2 rounded-full ${i < score ? "bg-gold" : "bg-white/20"}`}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="space-y-9 px-6 py-8 sm:px-10 md:py-12">
          <header>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-gold">{profile.role}</p>
            <div className="mt-3 h-0.5 w-28 bg-gold" />
          </header>

          <section>
            <SectionHeading>About</SectionHeading>
            <p className="leading-relaxed">{profile.about}</p>
          </section>

          <section>
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-7">
              {experience.map((job) => (
                <div key={`${job.company}-${job.period}`}>
                  <h3 className="font-bold text-navy">{job.role}</h3>
                  <p className="text-sm text-muted">
                    {job.company}
                    {job.location && ` · ${job.location}`}
                    <span className="mx-2 text-gold">|</span>
                    {job.period}
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed marker:text-navy">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Selected Projects</SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <div key={project.name} className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-bold text-navy">{project.name}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Education</SectionHeading>
            {education.map((item) => (
              <div key={item.degree}>
                <h3 className="font-bold text-navy">{item.degree}</h3>
                <p className="text-sm text-muted">
                  {item.school}
                  <span className="mx-2 text-gold">|</span>
                  {item.period}
                </p>
              </div>
            ))}
          </section>
        </div>
      </article>

      <footer className="no-print mt-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
