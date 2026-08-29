
export const projects = [
    {
        title: "Haven",
        desc: "Full stack SaaS onboarding platform for law firms. Features an LLM-powered onboarding workflow that generates clear, structured client summaries in a route protected dashboard.",
        tech: ["Next.js", "PostgreSQL", "TypeScript", "LLM streaming", "OAuth"],
        href: "https://gohaven.vercel.app",
    },
    {
        title: "Personalized Investment Explorer",
        desc: "An LLM-integrated investment learning tool that converts user interests into structured, personalized recommendations grounded in passion and value investing strategies.",
        tech: ["Next.js", "Tailwind", "LLM API", "TypeScript", "Zustand", "Zod"],
        href: "https://slice.vercel.app",
    },
];

export const experience = [
    {
        company: "Haven",
        role: "Founder & Full Stack Developer",
        date: "2026 - Present",
        location: "Remote",
        highlights: [
            "Near-instant response times with LLM streaming",
            "Session-scoped API routes protected by OAuth",
            "Dynamic routing for strict data isolation",
            "Automatic workflow summaries"
        ]

    },
    {
        company: "Zumiez",
        role: "Frontend Developer",
        date: "2022 - 2025",
        location: "Lynnwood, WA",
        highlights: [
            "50% faster page load via React PWA migration",
            "Improved design-to-production time via reusable component library",
            "40% quicker API responses after GraphQL restructuring",
            "Checkout steps cut in half by integrating Aurus tokenization"
        ],
    },
    {
        company: "Ventec Life Systems",
        role: "IT Support",
        date: "2020 - 2022",
        location: "Bothell, WA",
        highlights: [
            "Saved $150K annually with Azure cloud consolidation",
            "99.98% ERP uptime via NGINX and SQL Server tuning",
            "200+ account migration from Google Workspace to O365",
        ],
    },
];

export const techDelay = projects.reduce<number[]>((total, project, i) => {
    const prev = i === 0 ? 0 : total[i - 1] + projects[i - 1].tech.length * 0.7 + 1;
    total.push(0.7 + prev);
    return total;
}, []);