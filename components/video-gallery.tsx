import { PlayCircle } from "lucide-react";
import { videos } from "@/lib/site-data";

export function VideoGallery() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {videos.map((video) => (
        <article key={video.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <div className="relative aspect-video bg-slate-950">
            <iframe
              src={video.url}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric dark:text-sky-300">{video.tag}</p>
              <h3 className="mt-1 font-semibold text-ink dark:text-white">{video.title}</h3>
            </div>
            <PlayCircle className="size-6 text-mint" />
          </div>
        </article>
      ))}
    </div>
  );
}
