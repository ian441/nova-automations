"use client";

import { useMemo, useState } from "react";
import { filters, projects } from "@/lib/site-data";
import { ProjectCard } from "@/components/project-card";

export function PortfolioFilter() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => (active === "All" ? projects : projects.filter((project) => project.category === active)), [active]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === filter
                ? "border-electric bg-electric text-white shadow-glow"
                : "border-slate-200 bg-white text-slate-600 hover:border-electric hover:text-electric dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
