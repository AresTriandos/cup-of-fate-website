# Cup of Fate - Marketing Website

A beautiful, mystical marketing website for the Cup of Fate AI coffee fortune telling app.

## Features

- **Next.js 14+** with App Router for optimal performance
- **Tailwind CSS** for responsive, utility-first styling
- **Mystical Design** with blue (#0F4C97) and gold (#D9B56D) color palette
- **Fully Responsive** mobile-first design
- **Smooth Animations** with hover effects and transitions
- **Complete Sections**:
  - Hero banner with call-to-action
  - How it works (4-step visual guide)
  - Features showcase
  - Download section with TestFlight link
  - About tasseography
  - Frequently asked questions
  - Footer with links and social media

## Tech Stack

- **Framework**: Next.js 16.2.6
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure

```
cup-of-fate-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (imports all components)
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico         # Site favicon
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── HowItWorks.tsx      # 4-step process guide
│   ├── Features.tsx        # Feature cards
│   ├── Download.tsx        # App download section
│   ├── About.tsx           # About tasseography
│   ├── FAQ.tsx             # Frequently asked questions
│   └── Footer.tsx          # Footer with links and social
├── tailwind.config.ts      # Custom Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ (v24.16.0 used in this project)
- npm or yarn

### Installation

```bash
cd cup-of-fate-website
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### AWS Amplify

This static site is ready to deploy to AWS Amplify:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cup of Fate marketing website"
   git remote add origin https://github.com/yourusername/cup-of-fate-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Amplify**:
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New App" → "Host Web App"
   - Select GitHub and authorize
   - Select the repository and main branch
   - Amplify will auto-detect Next.js

3. **Build Settings**:
   - Build command: `npm run build`
   - Base directory: `.` (root)
   - Start command: `npm run start`

4. **Environment Variables** (if needed):
   - None required for this static site

### Other Hosting Options

- **Vercel**: Push to GitHub → Auto-deploy (NextJS-optimized)
- **Netlify**: Connect GitHub → Deploy
- **AWS S3 + CloudFront**: Build locally, upload to S3

## Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: {
    700: '#0F4C97',  // Main blue
    // ... other shades
  },
  accent: {
    700: '#D9B56D',  // Main gold
    // ... other shades
  },
}
```

### Content

Update component content directly in the respective files:
- **Hero**: `components/Hero.tsx`
- **Features**: `components/Features.tsx`
- **FAQ**: `components/FAQ.tsx`
- etc.

### Fonts

Custom fonts are imported in `app/layout.tsx`. To change:

```typescript
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  serif: ['YourFont', 'serif'],
  sans: ['AnotherFont', 'sans-serif'],
}
```

## Performance

- **Static Generation**: All pages are pre-rendered as static HTML
- **Image Optimization**: Next.js auto-optimizes images
- **CSS**: Tailwind CSS is optimized and tree-shaken
- **Bundle Size**: Minimal with only essential dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO

The site includes:
- Meta tags for social sharing (Open Graph)
- Structured metadata in `app/layout.tsx`
- Semantic HTML
- Mobile viewport configuration

## License

Private - Cup of Fate App

## Support

For issues or questions, contact: hello@cupoffate.com

---

Built with ❤️ using Next.js and Tailwind CSS ☕✨
# Rebuild trigger
