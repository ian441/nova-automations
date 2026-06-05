import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Zap } from "lucide-react";
import { navItems, site, socialLinks } from "@/lib/site-data";

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  WhatsApp: MessageCircle,
  Upwork: Zap
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/72 dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 font-semibold text-ink dark:text-white">
            <span className="grid size-9 place-items-center rounded-lg bg-electric text-white">
              <Zap className="size-5" />
            </span>
            {site.name}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            Intelligent automation systems for leaner operations, faster response times, and cleaner scale.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink dark:text-white">Navigation</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-600 transition hover:text-electric dark:text-slate-300">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="text-slate-600 transition hover:text-electric dark:text-slate-300">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink dark:text-white">Connect</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? Zap;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="focus-ring grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-5 py-5 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        Copyright {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
