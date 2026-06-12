# nickahlers.com

Personal portfolio site built to showcase projects, skills, and experience as a Frontend Engineer. Live at **[nickahlers.com](https://nickahlers.com)**.

## Tech Stack

| Layer | Library / Tool | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.2 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
| Animations | Motion | ^12.38.0 |
| 3D / WebGL | Three.js, React Three Fiber, Drei | ^0.183.2 / ^9 / ^10 |
| UI Primitives | HeroUI | ^3.0.1 |
| Icons | Heroicons | ^2.2.0 |
| Performance | Vercel Speed Insights | ^2.0.0 |
| Deployment | Vercel | — |

## Features

**Scroll-driven animations**: Project cards stack on scroll using Motion's `useScroll`, `useSpring`, and `useTransform` hooks, making it trivially easy to add new projects without restructuring the layout.

**3D isometric logo**: A custom `LogoAnimation` component built with isometric CSS transforms and layered planes, rendered via React Three Fiber.

**Dark-only design**: Dark mode is enforced at the layout level with a dark editorial aesthetic and sky blue accents throughout.

**Performance-first**: Next.js App Router with SSR and lightweight animation primitives keeps LCP fast. Integrated with Vercel Speed Insights for real user monitoring.

## Project Structure

```
app/
├── components/     # Reusable UI components
├── sections/       # Page sections (Hero, Projects, Experience, etc.)
├── lib/            # Utilities and constants
└── page.tsx        # Root page entry point
```

## Getting Started

**Prerequisites:** Node.js 18+, Yarn

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
yarn build
yarn start
```

## Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start local development server |
| `yarn build` | Create production build |
| `yarn start` | Serve the production build |
| `yarn lint` | Run ESLint |