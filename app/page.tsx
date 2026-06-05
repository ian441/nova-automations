import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { benefits, featuredProjects, platforms, services } from "@/lib/site-data";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "AI Automation Consultant for Scalable Workflows",
  description:
    "Build intelligent business automations with Make.com, n8n, APIs, AI agents, and custom integrations that save teams hundreds of hours."
};

export default function HomePage() {
  return (
    <>
      <section className="section grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-semibold text-electric shadow-sm dark:border-sky-300/20 dark:bg-white/[0.06] dark:text-sky-200">
            <Sparkles className="size-4" />
            AI Automation Consultant
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-ink dark:text-white sm:text-6xl lg:text-7xl">
            Automate Repetitive Work. Scale Faster.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I build intelligent workflows and AI-powered automations using Make.com, n8n, APIs, and custom integrations that save businesses hundreds of hours every month.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-700">
              View Projects
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
              Book Consultation
              <Play className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["100+", "hours saved/mo"],
              ["24/7", "workflow monitoring"],
              ["30%", "cost reduction target"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <p className="text-2xl font-semibold text-ink dark:text-white">{value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="border-y border-slate-200 bg-white/68 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Trusted automation platforms</p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {platforms.map((platform) => (
              <div key={platform} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Services" title="Automation systems designed around real operational bottlenecks." copy="From AI agents to multi-app workflows, each build is scoped around measurable time savings, reliability, and clean handoffs." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
                <div className="grid size-11 place-items-center rounded-lg bg-blue-50 text-electric dark:bg-sky-400/10 dark:text-sky-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-semibold text-ink dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section pt-0">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Showcase" title="Featured automation projects with practical business outcomes." />
          <Link href="/projects" className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
            See all projects
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow="Why Work With Me" title="A practical automation partner for teams that need durable systems." copy="I focus on workflows that can be monitored, improved, documented, and trusted by the people who depend on them." />
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <div className="grid size-10 place-items-center rounded-full bg-emerald-50 text-mint dark:bg-emerald-400/10">
                  <Icon className="size-5" />
                </div>
                <p className="font-semibold text-ink dark:text-white">{benefit.title}</p>
              </div>
            );
          })}
          <div className="rounded-lg bg-ink p-5 text-white dark:bg-white dark:text-ink sm:col-span-2">
            <CheckCircle2 className="size-6 text-mint" />
            <p className="mt-3 text-lg font-semibold">Built for reliability after launch.</p>
            <p className="mt-2 text-sm leading-6 opacity-80">Each workflow can include alerts, run logs, retry paths, and documentation so your team is not left with a black box.</p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 p-8 text-white shadow-glow sm:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Next Step</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Ready to Automate Your Business?</h2>
            <p className="mt-4 text-lg leading-8 text-white/86">Book a consultation and leave with a clearer map of what to automate first, what tools to use, and what results to expect.</p>
            <Link href="/contact" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-electric transition hover:bg-blue-50">
              Book Consultation
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
