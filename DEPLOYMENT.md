# Deployment Guide - Cup of Fate Marketing Website

This guide covers deployment to various platforms. The website is a static Next.js site and can be deployed anywhere.

## Prerequisites

- Node.js 18+ installed locally
- Git repository initialized
- GitHub account (for most platforms)

## Quick Start - AWS Amplify (Recommended)

AWS Amplify is optimized for Next.js and provides:
- Free tier with generous limits
- Automatic HTTPS
- Custom domain support
- Continuous deployment from GitHub

### Steps:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cup of Fate website"
   git branch -M main
   git remote add origin https://github.com/yourusername/cup-of-fate-website.git
   git push -u origin main
   ```

2. **Connect to Amplify**:
   - Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "Create app" → "Deploy an app"
   - Select GitHub and authorize
   - Choose your repository and `main` branch
   - Click "Save and deploy"

3. **Build Settings** (auto-detected for Next.js):
   ```
   Build command: npm run build
   Base directory: (leave empty)
   ```

4. **Configure Custom Domain** (optional):
   - In Amplify console, go to "Domain management"
   - Add your custom domain (e.g., cupoffate.com)
   - Follow DNS configuration steps

5. **Environment Variables** (if needed in future):
   - App settings → Environment variables
   - No environment variables needed for this site

## Alternative: Vercel (Easiest for Next.js)

Vercel is built by the Next.js team and is the easiest option.

1. **Push to GitHub** (same as above)

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Custom Domain**:
   - Project Settings → Domains
   - Add your domain and follow instructions

4. **Automatic Deployments**:
   - Every push to `main` automatically deploys

## Alternative: Netlify

Good option if you prefer a different UI.

1. **Build Locally**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub and select repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

3. **Netlify Functions** (if adding backend later):
   - API routes can be deployed as serverless functions
   - Currently not used in this site

## Alternative: AWS S3 + CloudFront

For static hosting without server capabilities.

1. **Build Locally**:
   ```bash
   npm run build
   npm run export  # Export as static HTML
   ```

2. **Create S3 Bucket**:
   - AWS S3 Console → Create bucket
   - Name: `cupoffate-website`
   - Uncheck "Block public access"

3. **Upload Files**:
   ```bash
   aws s3 sync out/ s3://cupoffate-website --delete
   ```

4. **Configure CloudFront**:
   - CloudFront Console → Create distribution
   - Origin: S3 bucket
   - Enable HTTPS
   - Add custom domain via Route 53

## Alternative: Self-Hosted

Deploy on your own server.

1. **Build**:
   ```bash
   npm run build
   ```

2. **Server Requirements**:
   - Node.js 18+
   - 512MB RAM minimum
   - 1GB disk space

3. **Start Server**:
   ```bash
   npm run start
   ```

4. **Use Reverse Proxy** (nginx):
   ```nginx
   upstream nextjs {
     server localhost:3000;
   }

   server {
     listen 80;
     server_name cupoffate.com www.cupoffate.com;

     location / {
       proxy_pass http://nextjs;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

5. **SSL Certificate** (Let's Encrypt):
   ```bash
   certbot certonly --standalone -d cupoffate.com -d www.cupoffate.com
   ```

## Performance Optimization

### Build Size
```bash
npm run build
# Check output size in .next/server and .next/static
```

### Cache Headers
Already configured in `next.config.ts`:
- Static files: 1-year cache (immutable)
- HTML: No cache (served fresh)

### CDN Benefits
- **Amplify**: Built-in CloudFront CDN ✓
- **Vercel**: Built-in edge network ✓
- **Netlify**: Built-in global CDN ✓
- **S3 + CloudFront**: Manual CDN setup

## Post-Deployment

### Monitor
- Check deployment logs in chosen platform
- Monitor error rates and page load times
- Set up alerts for deployment failures

### Analytics
- Add Google Analytics (update layout.tsx)
- Add PostHog or Plausible for privacy-friendly tracking

### Domain
- Point domain DNS to platform
- Set up email forwarding (e.g., noreply@cupoffate.com)
- Verify SSL certificate

### Updates
- Push changes to GitHub
- Automatic deployment (Amplify/Vercel/Netlify)
- Manual deployment (S3/self-hosted):
  ```bash
  npm run build
  # Upload files accordingly
  ```

## Troubleshooting

### Build Fails
```bash
# Clean build
rm -rf .next
npm run build
```

### Site Not Loading
- Check domain DNS settings
- Verify SSL certificate
- Check platform build logs for errors

### Slow Load Times
- Use Chrome DevTools Network tab
- Check for large unoptimized images
- Enable gzip compression (usually automatic)

### 404 Errors
- Ensure all routes are in `app/` directory
- Check trailing slashes in next.config.ts

## Adding Analytics

### Google Analytics (in layout.tsx):
```typescript
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Vercel Analytics (auto-included with Vercel):
```bash
npm install @vercel/analytics
```

Then in `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Maintenance

### Regular Updates
```bash
npm update              # Minor updates
npm outdated          # Check for updates
npm audit fix         # Fix vulnerabilities
```

### Backups
- GitHub serves as your backup
- Amplify/Vercel keep build history

### Monitoring
Set up alerts for:
- Build failures
- Performance degradation
- Error rates
- SSL certificate expiration

## Support

For platform-specific help:
- **Amplify**: [AWS Amplify Docs](https://docs.amplify.aws/)
- **Vercel**: [Vercel Docs](https://vercel.com/docs)
- **Netlify**: [Netlify Docs](https://docs.netlify.com/)
- **Next.js**: [Next.js Docs](https://nextjs.org/docs)

---

Ready to launch! Choose your platform and deploy with confidence. 🚀☕✨
