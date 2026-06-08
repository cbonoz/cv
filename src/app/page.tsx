"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, ExternalLinkIcon, Code2, GitCommitIcon, GitPullRequestIcon, StarIcon, Terminal } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { useState, useEffect } from "react";

// Live status indicator component
function StatusIndicator() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit"
    }));
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit"
      }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>Boston, MA</span>
      <span className="text-border">|</span>
      <span>{time} ET</span>
    </div>
  );
}

// Recent GitHub activity
function GitHubActivity() {
  const [events, setEvents] = useState<Array<{icon: any; text: string; time: string}>>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/cbonoz/events/public?per_page=5")
      .then(r => r.json())
      .then(data => {
        const mapped = data.slice(0, 5).map((e: any) => {
          const repo = e.repo?.name?.replace("cbonoz/", "") || "";
          const type = e.type;
          let text = "";
          let icon = Code2;
          let time = "";

          if (type === "PushEvent") {
            const count = e.payload?.size || e.payload?.commits?.length || 0;
            text = `${count} commit${count !== 1 ? "s" : ""} → ${repo}`;
            icon = GitCommitIcon;
          } else if (type === "PullRequestEvent") {
            text = `PR ${e.payload?.action} → ${repo}`;
            icon = GitPullRequestIcon;
          } else if (type === "CreateEvent") {
            text = `Created ${e.payload?.ref_type} → ${repo}`;
            icon = StarIcon;
          } else if (type === "ForkEvent") {
            text = `Forked ${repo}`;
            icon = GitPullRequestIcon;
          } else if (type === "IssuesEvent") {
            text = `Issue ${e.payload?.action} → ${repo}`;
            icon = Terminal;
          } else {
            text = type.replace("Event", "") + " → " + repo;
          }

          const minutesAgo = Math.floor((Date.now() - new Date(e.created_at).getTime()) / 60000);
          if (minutesAgo < 60) time = `${minutesAgo}m ago`;
          else if (minutesAgo < 1440) time = `${Math.floor(minutesAgo / 60)}h ago`;
          else time = `${Math.floor(minutesAgo / 1440)}d ago`;

          return { icon, text, time };
        });
        setEvents(mapped);
      })
      .catch(() => {});
  }, []);

  if (events.length === 0) return null;

  return (
    <div className="space-y-2">
      {events.map((event, i) => (
        <div
          key={i}
          className="flex items-center gap-3 text-xs font-mono text-muted-foreground animate-slide-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <event.icon className="h-3 w-3 text-emerald-400 shrink-0" />
          <span className="flex-1 truncate">{event.text}</span>
          <span className="text-border shrink-0">{event.time}</span>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Sticky nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-mono text-sm font-medium">cbuonocore.com</span>
          <div className="flex items-center gap-2">
            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <MailIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16 space-y-12">
        {/* Hero section */}
        <section className="space-y-6 animate-fade-in">
          <div className="flex items-start gap-6">
            <Avatar className="h-20 w-20 ring-2 ring-border glow">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback className="text-lg">{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-2">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{RESUME_DATA.name}</h1>
                <p className="text-muted-foreground font-mono text-sm mt-1">
                  {RESUME_DATA.about}
                </p>
              </div>
              <StatusIndicator />
            </div>
          </div>

          {/* GitHub activity feed */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="pt-4 pb-4">
              <GitHubActivity />
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {RESUME_DATA.summary}
          </p>
        </section>

        {/* Work Experience */}
        <Section className="space-y-4">
          <h2 className="text-sm font-mono font-medium text-muted-foreground uppercase tracking-wider">
            Experience
          </h2>
          <div className="space-y-3">
            {RESUME_DATA.work.slice(0, 4).map((work, i) => (
              <Card
                key={work.company}
                className="bg-card/30 border-border/30 hover-lift hover:bg-card/50 transition-colors"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm">
                        <a href={work.link} className="hover:text-emerald-400 transition-colors">
                          {work.company}
                        </a>
                      </h3>
                      {work.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0 h-4 bg-secondary/50"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground tabular-nums">
                      {work.start} — {work.end}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{work.title}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground/80 leading-relaxed">
                    {work.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section className="space-y-4">
          <h2 className="text-sm font-mono font-medium text-muted-foreground uppercase tracking-wider">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section className="space-y-4">
          <h2 className="text-sm font-mono font-medium text-muted-foreground uppercase tracking-wider">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {RESUME_DATA.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-mono bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section className="space-y-4">
          <h2 className="text-sm font-mono font-medium text-muted-foreground uppercase tracking-wider">
            Education
          </h2>
          <div className="space-y-2">
            {RESUME_DATA.education.map((edu) => (
              <div key={edu.school} className="flex items-center justify-between text-sm">
                <span className="font-medium">{edu.school}</span>
                <span className="text-xs font-mono text-muted-foreground">{edu.degree}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>Built with Next.js + shadcn/ui · Hosted on Cloudflare</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
