"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { consultationOptions } from "@/lib/site-data";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [option, setOption] = useState(consultationOptions[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const description = String(form.get("description") ?? "").trim();

    if (!name || !emailPattern.test(email) || description.length < 20) {
      setStatus("Please add your name, a valid email, and at least 20 characters about the project.");
      return;
    }

    setStatus("Thanks. Your request is ready to send once this form is connected to your preferred CRM or email service.");
    event.currentTarget.reset();
    setOption(consultationOptions[0]);
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-lg p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink dark:text-white">
          Name
          <input name="name" className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-electric dark:border-white/10 dark:bg-slate-950" required />
        </label>
        <label className="text-sm font-medium text-ink dark:text-white">
          Email
          <input name="email" type="email" className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-electric dark:border-white/10 dark:bg-slate-950" required />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink dark:text-white">
        Company <span className="text-slate-400">(optional)</span>
        <input name="company" className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-electric dark:border-white/10 dark:bg-slate-950" />
      </label>
      <div className="mt-5">
        <p className="text-sm font-medium text-ink dark:text-white">Consultation option</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {consultationOptions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setOption(item)}
              className={`rounded-md border px-3 py-3 text-left text-sm font-semibold transition ${
                option === item
                  ? "border-electric bg-blue-50 text-electric dark:bg-sky-400/10 dark:text-sky-200"
                  : "border-slate-200 bg-white text-slate-600 hover:border-electric dark:border-white/10 dark:bg-slate-950 dark:text-slate-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <input type="hidden" name="option" value={option} />
      </div>
      <label className="mt-5 block text-sm font-medium text-ink dark:text-white">
        Project Description
        <textarea
          name="description"
          rows={6}
          className="mt-2 w-full resize-none rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-electric dark:border-white/10 dark:bg-slate-950"
          required
        />
      </label>
      {status ? <p className="mt-4 rounded-md bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:bg-amber-400/10 dark:text-amber-100">{status}</p> : null}
      <button className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-700 sm:w-auto">
        Send Request
        <Send className="size-4" />
      </button>
    </form>
  );
}
