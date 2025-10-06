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
- **Vercel Deployment**: Optimized for Vercel hosting with serverless functions

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **SEO**: React Helmet Async
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel with serverless functions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel CLI (for deployment)

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

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Vercel Deployment

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/apcpa-website)

### Manual Deployment

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy to Vercel**:
```bash
vercel
```

4. **Set up production deployment**:
```bash
vercel --prod
```

### Environment Variables Setup

In your Vercel dashboard, add these environment variables:

#### Required:
- `VITE_GA_MEASUREMENT_ID`: Your Google Analytics 4 measurement ID (e.g., `G-XXXXXXXXXX`)
- `VITE_BUSINESS_EMAIL`: Business email address (`contactus@apcpapllc.com`)
- `VITE_BUSINESS_PHONE`: Business phone number (`+17133382520`)

#### Optional:
- `VITE_VERCEL_ANALYTICS_ID`: Vercel Analytics ID (if using Vercel Analytics)
- `VITE_CONTACT_EMAIL_SERVICE_URL`: Custom email service URL
- `SENDGRID_API_KEY`: SendGrid API key (for contact form emails)
- `VITE_ENVIRONMENT`: Set to `production` for production builds

### Domain Configuration

1. **Add Custom Domain**:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Domains
   - Add your custom domain (e.g., `apcpapllc.com`)
   - Configure DNS records as instructed by Vercel

2. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates
   - Ensure HTTPS redirect is enabled

### Performance Optimization

The build is optimized for Vercel with:
- **Code Splitting**: Automatic chunk optimization
- **Image Optimization**: WebP format with Vercel's image optimization
- **Caching**: Aggressive caching for static assets
- **Compression**: Gzip/Brotli compression
- **CDN**: Global edge network distribution

### Monitoring & Analytics

1. **Vercel Analytics** (Recommended):
   - Enable in Vercel dashboard
   - Provides Core Web Vitals monitoring
   - Real user monitoring (RUM)

2. **Google Analytics 4**:
   - Replace `G-XXXXXXXXXX` in environment variables
   - Tracks page views, events, and conversions

3. **Error Monitoring**:
   - Consider integrating Sentry for error tracking
   - Vercel Functions provide built-in logging

### Contact Form Backend

The contact form uses Vercel serverless functions:

- **Endpoint**: `/api/contact`
- **Method**: POST
- **Location**: `public/api/contact.js`
- **Features**: Validation, rate limiting, CORS support

#### Email Integration Options:

1. **SendGrid** (Recommended):
```bash
npm install @sendgrid/mail
```
Add `SENDGRID_API_KEY` to environment variables.

2. **Resend**:
```bash
npm install resend
```
Add `RESEND_API_KEY` to environment variables.

3. **Nodemailer with SMTP**:
```bash
npm install nodemailer
```
Configure SMTP settings in environment variables.

### Security Features

Configured in `vercel.json`:
- **Security Headers**: CSP, HSTS, X-Frame-Options
- **CORS**: Proper cross-origin resource sharing
- **Rate Limiting**: Built into contact form
- **Input Validation**: Server-side validation for all forms

### SEO Optimization

- **Structured Data**: Organization, LocalBusiness, FAQ schemas
- **Meta Tags**: Open Graph, Twitter Cards
- **Sitemap**: Available at `/sitemap.xml`
- **Robots.txt**: Available at `/robots.txt`
- **Core Web Vitals**: Optimized for Google's performance metrics

### Deployment Checklist

- [ ] Replace `G-XXXXXXXXXX` with actual Google Analytics ID
- [ ] Configure environment variables in Vercel dashboard
- [ ] Set up custom domain and SSL
- [ ] Configure email service for contact form
- [ ] Test contact form submission
- [ ] Run Lighthouse audit (target: ≥95 scores)
- [ ] Verify all links and phone numbers
- [ ] Test responsive design on mobile devices
- [ ] Enable Vercel Analytics
- [ ] Set up monitoring and alerts

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run lint
```

### Vercel Configuration

The project includes a `vercel.json` file with:
- Build configuration
- Serverless function setup
- Security headers
- Asset caching rules
- Redirect rules

### Troubleshooting

#### Common Issues:

1. **Build Failures**:
   - Check TypeScript errors: `npm run lint`
   - Verify all dependencies are installed
   - Check environment variables

2. **Contact Form Not Working**:
   - Verify `/api/contact` endpoint is accessible
   - Check Vercel function logs
   - Validate environment variables

3. **Performance Issues**:
   - Run Lighthouse audit
   - Check Vercel Analytics
   - Optimize images and assets

4. **SEO Issues**:
   - Validate structured data with Google's Rich Results Test
   - Check meta tags and Open Graph data
   - Verify sitemap accessibility

### Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- Contact support through Vercel dashboard

## License

© 2025 AP CPA PLLC. All rights reserved.