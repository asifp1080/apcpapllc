# cPanel Deployment Guide for AP CPA PLLC Website

This guide outlines the steps to deploy the AP CPA PLLC website to cPanel using Git Version Control.

## Prerequisites

- cPanel account with Git Version Control enabled
- SSH access for private repository cloning
- Node.js 18+ available on the server
- Git 2.0+ installed on the server

## Deployment Steps

### 1. Initial Setup in cPanel

1. Log in to **cPanel → Git Version Control**
2. Click **Create** and configure:
   - **Repository Path**: `/home/[username]/repositories/apcpa-website`
   - **Repository Clone URL**: Your Git repository URL (GitHub, GitLab, etc.)
   - **Deployment Path**: `/home/[username]/public_html`
   - **Branch**: `main` (or your production branch)

### 2. Configure SSH Keys (for private repositories)

1. In cPanel, go to **SSH Access → Manage SSH Keys**
2. Generate a new key pair or upload existing public key
3. Add the public key to your Git provider (GitHub/GitLab)

### 3. Deployment Configuration

The `.cpanel.yml` file in the repository root contains the deployment configuration:

- Installs Node.js dependencies
- Builds the React application
- Copies built files to the web root
- Sets proper file permissions
- Creates `.htaccess` for SPA routing and security
- Protects sensitive directories

### 4. Environment Variables

Before deployment, ensure you have:

1. **Google Analytics**: Replace `GA_MEASUREMENT_ID` in `index.html` with your actual GA4 measurement ID
2. **Contact Form**: Set up the backend endpoint for the contact form

### 5. Deploy

1. Push your code to the configured branch
2. In cPanel Git Version Control, click **Deploy HEAD**
3. Monitor the deployment logs for any errors

### 6. Post-Deployment Verification

1. **Test the website**: Visit your domain to ensure it loads correctly
2. **Check routing**: Test all pages (services, about, contact, etc.)
3. **Verify contact form**: Test form submission functionality
4. **Check mobile responsiveness**: Test on various devices
5. **Run Lighthouse audit**: Ensure performance scores remain high

## Security Features

The deployment includes several security measures:

- `.git` directory is protected from public access
- Security headers are set via `.htaccess`
- Sensitive files (`.env`, logs, etc.) are blocked
- Proper file permissions are set

## Rollback Procedure

If you need to rollback to a previous version:

1. Log into cPanel → Git Version Control
2. Navigate to your repository
3. Use Git commands to checkout a previous commit:
   ```bash
   git checkout <commit-hash>
   ```
4. Click **Deploy HEAD** to redeploy

## Continuous Deployment

For automatic deployment on code changes:

1. Set up webhooks in your Git provider
2. Configure the webhook URL to trigger cPanel deployment
3. Ensure the webhook secret is properly configured

## Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version compatibility
2. **404 errors**: Verify `.htaccess` is properly configured for SPA routing
3. **Permission errors**: Ensure proper file permissions are set
4. **Assets not loading**: Check file paths and build output

### Logs:

Deployment logs are available in cPanel Git Version Control interface.

## Performance Optimization

The build is optimized for production with:

- Code splitting and minification
- Asset optimization
- Caching headers via `.htaccess`
- Gzip compression

## Support

For deployment issues, check:

1. cPanel error logs
2. Git deployment logs
3. Browser developer console
4. Network tab for failed requests

---

**Note**: This deployment configuration is specifically tailored for the AP CPA PLLC website structure and requirements.
