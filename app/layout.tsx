import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nova Automation | AI Automation Consultant",
    template: "%s | Nova Automation"
  },
  description: site.description,
  keywords: [
    "AI automation consultant",
    "Make.com expert",
    "n8n automation",
    "Zapier consultant",
    "AI agents",
    "business process automation"
  ],
  openGraph: {
    title: "Nova Automation | AI Automation Consultant",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Automation | AI Automation Consultant",
    description: site.description,
    images: ["/og.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    areaServed: "Global",
    serviceType: "AI Automation Consulting"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            const stored = localStorage.getItem('theme');
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (stored === 'dark' || (!stored && systemDark)) document.documentElement.classList.add('dark');
          } catch (_) {}
        `}</Script>
        <Script id="schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
