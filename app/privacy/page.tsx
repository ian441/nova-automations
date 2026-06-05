import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Nova Automation."
};

export default function PrivacyPage() {
  return (
    <section className="section max-w-4xl">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-white">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-base leading-7 text-slate-600 dark:text-slate-300">
        <p>Nova Automation collects only the information you submit through the contact form or direct communication so we can respond to your inquiry and scope automation work.</p>
        <p>Project details, credentials, and operational data should be shared through approved secure channels during onboarding. Access can be revoked at any time.</p>
        <p>Analytics and CRM integrations can be connected when the site is deployed, with cookie notices and consent controls added as needed for your jurisdiction.</p>
      </div>
    </section>
  );
}
