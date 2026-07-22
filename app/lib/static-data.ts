
export const projects = [
    {
        title: "Haven",
        desc: "Intelligent client onboarding platform for law firms. Guides clients through a conversational onboarding flow, then generates a structured chat summary and delivers it directly to the attorney dashboard.",
        tech: ["Next.js", "Neon PostgreSQL", "TypeScript", "API streaming", "Anthropic SDK"],
        href: "https://gohaven.vercel.app",
    },
    {
        title: "Personalized Investment Explorer",
        desc: "An AI-powered learning tool that maps investment concepts to your personal interests, making them easier to understand and explore.",
        tech: ["Next.js", "Tailwind", "Anthropic API", "TypeScript", "Zustand", "Zod"],
        href: "https://slice.vercel.app",
    },
    {
        title: "US Jobs & Inflation Report",
        desc: "Interactive dashboard visualizing the relationship between job growth and inflation across U.S. economic cycles, pulling from live government data sources.",
        tech: ["Next.js", "Tailwind", "Recharts", "TypeScript", "REST"],
        href: "https://jobsandinflation.vercel.app",
    },
];

export const experience = [
    {
        company: "Zumiez",
        role: "Frontend Developer",
        date: "2022 - 2025",
        location: "Lynnwood, WA",
        highlights: [
            "50% faster page load via React PWA migration",
            "40% quicker API responses after GraphQL restructuring",
            "50% fewer checkout steps by integrating Aurus tokenization",
            "30% faster design-to-production via reusable component library",
            
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