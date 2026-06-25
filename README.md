# Tanusha Hande — Personal Portfolio

A world-class personal portfolio website built with Next.js 15, featuring cinematic animations, 3D backgrounds, and a premium dark luxury aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

- **Cinematic Hero** — 3D particle background (React Three Fiber), typing animation, glowing profile photo
- **Interactive Skills Galaxy** — Animated orbit system with category switching
- **Premium Project Cards** — Architecture previews, hover animations, extensible structure
- **Tanu AI Assistant** — Mock AI widget for portfolio exploration
- **Glassmorphism UI** — Dark luxury theme with neon accents (#00F5D4, #7B61FF)
- **Premium Effects** — Cursor glow, magnetic buttons, scroll progress, parallax
- **EmailJS Integration** — Contact form with graceful demo fallback
- **SEO Optimized** — Open Graph, Twitter cards, semantic HTML, accessibility

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, Glassmorphism, Custom animations |
| Animation | Framer Motion, GSAP |
| 3D | Three.js, React Three Fiber, Drei |
| UI | ShadCN-style components, Lucide Icons |
| Email | EmailJS |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <your-repo-url>
cd PortFolio
npm install
```

### Profile Photo

Replace the placeholder with your professional photo:

```
public/images/profile.jpg
```

Recommended: 800×800px or larger, square crop, high quality.

### Resume

Add your resume PDF:

```
public/resume.pdf
```

### EmailJS Setup (Optional)

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Copy `.env.example` to `.env.local`
3. Fill in your service ID, template ID, and public key

```bash
cp .env.example .env.local
```

Without EmailJS configured, the contact form runs in demo mode (simulated success).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables from `.env.local`
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme, utilities, animations
│   ├── layout.tsx           # Root layout, SEO metadata
│   └── page.tsx             # Main page composition
├── components/
│   ├── effects/             # Cursor glow, particles, transitions
│   ├── layout/              # Navbar, Footer, ScrollProgress
│   ├── sections/            # Hero, About, Skills, etc.
│   ├── three/               # R3F 3D scenes
│   └── ui/                  # Reusable UI components
├── hooks/                   # Custom React hooks
└── lib/
    ├── data.ts              # Site content & configuration
    ├── email.ts             # EmailJS integration
    └── utils.ts             # Utility functions
public/
├── images/
│   └── profile.jpg          # Profile photo
└── resume.pdf               # Downloadable resume
```

## Customization

### Site Content

Edit `src/lib/data.ts` to update:

- Personal info & social links
- Skills, experience, projects
- Publications & achievements
- AI assistant responses

### Colors

Theme colors are defined in `src/app/globals.css`:

```css
--color-background: #050816;
--color-primary: #00f5d4;
--color-secondary: #7b61ff;
```

### Adding Projects

Add new entries to the `projects` array in `src/lib/data.ts`. The card layout supports unlimited projects.

## Performance

- Dynamic imports for Three.js (no SSR)
- Next.js Image optimization
- Reduced motion media query support
- Lazy-loaded 3D canvas

## Accessibility

- Semantic HTML landmarks
- Skip to main content link
- ARIA labels on interactive elements
- Keyboard-navigable navigation
- `prefers-reduced-motion` support

## License

MIT © Tanusha Hande
