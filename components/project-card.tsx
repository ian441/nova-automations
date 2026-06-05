import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type ProjectCardData = {
  title: string;
  category: string;
  image: string;
  description: string;
  result: string;
};

export function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
      <div className="relative aspect-[16/10] overflow-hidden bg-cloud dark:bg-slate-900">
        <Image
          src={project.image}
          alt={`${project.title} workflow screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric dark:text-sky-300">{project.category}</p>
          <Link href="/contact" className="focus-ring rounded-full text-slate-400 transition hover:text-electric" aria-label={`Discuss ${project.title}`}>
            <ArrowUpRight className="size-5" />
          </Link>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-ink dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
        <p className="mt-4 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
          {project.result}
        </p>
      </div>
    </article>
  );
}
