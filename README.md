# Kaya Life Science Website

A modern, production-ready Next.js website for Kaya Life Science - Southeast Asia's pioneering medical cannabis company.

## Features

- 🎨 **Modern Design** - Bottle green theme with smooth animations
- 🚀 **Performance Optimized** - Built with Next.js 14 and React 18
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant components
- 🎭 **Animated** - Framer Motion and CSS animations
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🌐 **Multi-page** - Complete site structure

## Pages

- **Home** - Hero, About, Services, Technology, Stats, Products, CTA
- **About** - Company mission, vision, values, founder message
- **Products** - Medical cannabis products catalog
- **Technology** - Aeroponics, CryoCure, AI, Solar+BESS
- **Sustainability** - ESG commitments and UN SDG alignment
- **Contact** - Contact form and business information

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
kaya-life-science/
├── app/
│   ├── about/
│   ├── products/
│   ├── technology/
│   ├── sustainability/
│   ├── contact/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Technology.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Stats.tsx
│   │   ├── Products.tsx
│   │   └── CTA.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   └── images/
└── package.json
```

## Technologies Used

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, react-intersection-observer
- **Icons:** Heroicons (via SVG)

## Color Palette

- **Primary (Bottle Green):** #2d7a55 to #0a1c15
- **Accent Gold:** #D4AF37
- **Background:** White to Bottle Green shades

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Other Platforms

Build the project and deploy the `.next` folder to your hosting platform.

## License

© 2026 Kaya Life Science. All rights reserved.
