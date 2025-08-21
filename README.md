# AP CPA PLLC Website

A professional informational website for AP CPA PLLC, a certified public accounting firm in Houston, TX.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Accessibility**: WCAG 2.2 AA compliant
- **Performance**: Optimized for fast loading and high Lighthouse scores
- **Analytics**: Google Analytics 4 integration
- **Contact Form**: Functional contact form with backend integration
- **Legal Pages**: Terms of Use, Privacy Policy, and Website Disclaimer

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **SEO**: React Helmet Async
- **Analytics**: Google Analytics 4

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd apcpa-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Configuration

### Google Analytics

1. Replace `GA_MEASUREMENT_ID` in `index.html` with your actual Google Analytics 4 measurement ID
2. The analytics utility functions are available in `src/utils/analytics.ts`
3. Events are automatically tracked for phone calls, email clicks, and form submissions

### Contact Form Backend

The contact form requires a backend endpoint at `/api/contact`. A sample implementation is provided in `public/api/contact.js`.

For deployment:
- **Netlify**: Move the file to `netlify/functions/contact.js`
- **Vercel**: Move the file to `api/contact.js`
- **Other platforms**: Implement according to their serverless function structure

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Performance Optimization

The build is optimized for performance with:
- Code splitting and chunk optimization
- Minification with Terser
- Image optimization (WebP format)
- Lazy loading
- Tree shaking

## SEO Features

- Structured data (Organization, LocalBusiness, ProfessionalService, FAQ)
- Open Graph and Twitter Card meta tags
- XML sitemap (`public/sitemap.xml`)
- Robots.txt (`public/robots.txt`)
- Canonical URLs
- Semantic HTML structure

## Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Alt text for images

## Content Management

Content is managed through React components. Key areas:

- **Services**: `src/pages/ServicesPage.tsx`
- **About**: `src/pages/AboutPage.tsx`
- **FAQ**: `src/components/FAQAccordion.tsx`
- **Contact Info**: Update in multiple components (Header, Footer, ContactPage)

## Deployment

This site is optimized for deployment on:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting provider

### Environment Variables

For production deployment, set:
- `GA_MEASUREMENT_ID`: Your Google Analytics 4 measurement ID (replace in index.html)
- Configure your serverless function platform for the contact form backend
- Ensure HTTPS is enabled for security

### Final Checklist

- [ ] Replace GA_MEASUREMENT_ID in index.html with actual Google Analytics ID
- [ ] Deploy contact form backend to your serverless platform
- [ ] Run Lighthouse tests to verify ≥95 scores
- [ ] Test contact form submission
- [ ] Verify all links and phone numbers work correctly
- [ ] Test responsive design on mobile devices

## License

© 2025 AP CPA PLLC. All rights reserved.