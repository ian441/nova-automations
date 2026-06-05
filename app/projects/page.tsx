import type { Metadata } from "next";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { SectionHeading } from "@/components/section-heading";
import { VideoGallery } from "@/components/video-gallery";

export const metadata: Metadata = {
  title: "Automation Projects and Portfolio",
  description:
    "Explore AI automation workflow examples for lead management, customer support, invoices, onboarding, CRM sync, and appointment booking."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section pb-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Projects</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-6xl">Automation workflows that turn busywork into business leverage.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Browse completed automation concepts across Make.com, n8n, Zapier, API integrations, and CRM systems.
          </p>
        </div>
      </section>
      <section className="section pt-0">
        <PortfolioFilter />
      </section>
      <section className="section pt-0">
        <SectionHeading eyebrow="Video Gallery" title="Project demos and workflow walkthroughs." copy="Lazy-loaded embeds are ready for real YouTube or Vimeo case study videos when published." />
        <div className="mt-10">
          <VideoGallery />
        </div>
      </section>
    </>
  );
}
