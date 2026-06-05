import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { faqs, site, socialLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book an AI Automation Consultation",
  description:
    "Contact Nova Automation to plan an automation audit, AI agent build, or custom workflow development project."
};

export default function ContactPage() {
  return (
    <>
      <section className="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-6xl">Let&apos;s Build Your Automation System</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Share the workflow, bottleneck, or idea you want to automate. I&apos;ll help you turn it into a clear build plan.
          </p>
          <div className="mt-8 grid gap-3">
            <Link href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-ink shadow-sm transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
              <Mail className="size-5 text-electric" />
              {site.email}
            </Link>
            <Link href="https://wa.me/15550149082" className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-ink shadow-sm transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
              <MessageCircle className="size-5 text-mint" />
              WhatsApp consultation chat
            </Link>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-ink shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
              <PhoneCall className="size-5 text-sunrise" />
              Discovery calls available worldwide
            </div>
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="section pt-0">
        <SectionHeading eyebrow="Social" title="Find me on the platforms where project work happens." />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-electric hover:text-electric hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <SectionHeading eyebrow="FAQ" title="Common questions before starting an automation project." />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
              <h2 className="font-semibold text-ink dark:text-white">{faq.question}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
