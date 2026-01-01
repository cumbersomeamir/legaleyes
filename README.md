# LegalEyes - Professional Class AI for Legal Practice

LegalEyes is a Next.js web application showcasing AI-powered legal technology solutions for law firms, professional service providers, and Fortune 500 companies.

## Tech Stack

- **Framework:** [Next.js 15.5.9](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Inter (body) and Playfair Display (headings) via Next.js Font Optimization
- **React:** 19.1.0

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd legaleyes
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file (optional):
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
legaleyes/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.tsx   # Main navigation component
│   │   └── Footer.tsx       # Footer component
│   ├── [pages]/             # Route pages
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── error.tsx            # Error boundary
│   ├── not-found.tsx        # 404 page
│   └── robots.ts            # Robots.txt configuration
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features

- **Responsive Design:** Mobile-first, fully responsive across all devices
- **SEO Optimized:** Page-specific metadata, Open Graph tags, structured data
- **Accessibility:** WCAG compliant with ARIA labels and keyboard navigation
- **Performance:** Optimized images, lazy loading, font optimization
- **Error Handling:** Custom 404 and error boundaries
- **Form Handling:** API routes for form submissions with validation

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

See `.env.example` for available environment variables. Create a `.env.local` file for local development.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright © 2025 LegalEyes Corporation. All rights reserved.

## Support

For support, email info@legaleyes.com or visit our [website](https://legaleyes.com).
