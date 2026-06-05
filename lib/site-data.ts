import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  FileCog,
  Headphones,
  PlugZap,
  RefreshCw,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap
} from "lucide-react";

export const site = {
  name: "Nova Automation",
  url: "https://nova-automation.com",
  email: "hello@nova-automation.com",
  phone: "+1 (555) 014-9082",
  description:
    "AI automation consulting for businesses that want faster workflows, fewer manual tasks, and scalable operations."
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export const platforms = [
  "Make.com",
  "n8n",
  "OpenAI",
  "Anthropic",
  "Slack",
  "Google Workspace",
  "Stripe",
  "Airtable",
  "Notion",
  "Microsoft 365"
];

export const services = [
  { title: "AI Agents", icon: Bot, copy: "Goal-driven assistants for triage, research, support, and operations." },
  { title: "Business Process Automation", icon: Workflow, copy: "End-to-end systems that move work across teams without handoffs." },
  { title: "CRM Automation", icon: RefreshCw, copy: "Clean lead routing, enrichment, reminders, and pipeline updates." },
  { title: "Lead Generation Systems", icon: Target, copy: "Automated prospect capture, qualification, scoring, and follow-up." },
  { title: "Social Media Automation", icon: Share2, copy: "Content intake, approvals, scheduling, repurposing, and analytics." },
  { title: "Customer Support Automation", icon: Headphones, copy: "AI-assisted ticket intake, response drafting, and escalation paths." },
  { title: "Document Processing", icon: FileCog, copy: "Extract, classify, validate, and route data from business documents." },
  { title: "API Integrations", icon: PlugZap, copy: "Custom connections for SaaS tools, internal apps, and data stores." }
];

export const featuredProjects = [
  {
    title: "Lead Management Automation",
    category: "Make.com",
    image: "/workflows/lead-management.svg",
    description: "Captured inbound leads, enriched profiles, scored intent, and routed follow-ups to the right owner.",
    result: "42% faster response time and 18 hours saved weekly."
  },
  {
    title: "AI Customer Support Agent",
    category: "n8n",
    image: "/workflows/support-agent.svg",
    description: "Built an AI support workflow that drafts replies, checks policy docs, and escalates priority cases.",
    result: "63% of tickets pre-qualified before human review."
  },
  {
    title: "Invoice Processing Automation",
    category: "API Integrations",
    image: "/workflows/invoice-processing.svg",
    description: "Extracted invoice data, matched vendors, flagged exceptions, and synced approved records to accounting.",
    result: "Reduced manual entry by 31 hours per month."
  }
];

export const projects = [
  ...featuredProjects,
  {
    title: "Social Media Content Workflow",
    category: "Zapier",
    image: "/workflows/content-workflow.svg",
    description: "Turned raw ideas into briefs, approvals, scheduled posts, and reporting dashboards.",
    result: "3x faster weekly content production."
  },
  {
    title: "Employee Onboarding Automation",
    category: "Make.com",
    image: "/workflows/onboarding.svg",
    description: "Provisioned apps, sent welcome sequences, created tasks, and tracked onboarding progress.",
    result: "85% fewer manual admin steps."
  },
  {
    title: "CRM Synchronization",
    category: "CRM Systems",
    image: "/workflows/crm-sync.svg",
    description: "Synced contacts, opportunities, tasks, and status updates between sales and delivery systems.",
    result: "Near real-time visibility across revenue teams."
  },
  {
    title: "Appointment Booking Automation",
    category: "n8n",
    image: "/workflows/booking.svg",
    description: "Qualified inquiries, checked availability, booked meetings, and sent reminders automatically.",
    result: "27% fewer no-shows after reminder logic."
  }
];

export const filters = ["All", "Make.com", "n8n", "Zapier", "API Integrations", "CRM Systems"];

export const benefits = [
  { title: "Reduce manual tasks", icon: Zap },
  { title: "Improve efficiency", icon: Sparkles },
  { title: "Save operational costs", icon: BriefcaseBusiness },
  { title: "Scale without hiring additional staff", icon: BrainCircuit },
  { title: "Reliable workflow monitoring", icon: ShieldCheck }
];

export const consultationOptions = [
  "Discovery Call",
  "Automation Audit",
  "Custom Workflow Development",
  "AI Agent Development"
];

export const faqs = [
  {
    question: "How long does an automation project take?",
    answer: "Focused workflows often launch in 1-2 weeks. Larger multi-system builds usually take 3-6 weeks depending on access, complexity, and testing needs."
  },
  {
    question: "What platforms do you work with?",
    answer: "I build with Make.com, n8n, Zapier, OpenAI, Anthropic, Airtable, Google Workspace, Slack, Stripe, CRMs, APIs, and custom tools."
  },
  {
    question: "Can you integrate with our existing software?",
    answer: "Yes. If the tool has an API, webhook, database, export, or email interface, there is usually a reliable integration path."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes. Monitoring, documentation, iteration, and ongoing maintenance can be included after launch."
  }
];

export const videos = [
  {
    title: "AI Lead Intake Demo",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Lead Ops"
  },
  {
    title: "Support Agent Walkthrough",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "AI Support"
  },
  {
    title: "Document Processing Flow",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tag: "Operations"
  }
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Upwork", href: "https://www.upwork.com" },
  { label: "Email", href: `mailto:${site.email}` },
  { label: "WhatsApp", href: "https://wa.me/15550149082" }
];
