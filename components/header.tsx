"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/78 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/72">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded-md font-semibold text-ink dark:text-white">
          <span className="grid size-9 place-items-center rounded-lg bg-electric text-white shadow-glow">
            <Zap className="size-5" aria-hidden />
          </span>
          <span>Nova Automation</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-white/[0.06] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
                pathname === item.href
                  ? "bg-ink text-white dark:bg-white dark:text-ink"
                  : "text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="focus-ring grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <Link
            href="/contact"
            className="focus-ring hidden rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-700 sm:inline-flex"
          >
            Book Consultation
          </Link>
          <button
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 md:hidden"
            aria-label="Open navigation"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
