# Orthopedic Surgeon Portfolio Website

A professional Next.js website for an orthopedic surgeon's practice, built with Mantine UI components.

## Features

- 🏥 **Professional Medical Design** - Clean, trustworthy layout designed for healthcare professionals
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Modern Tech Stack** - Next.js 15 with App Router, Mantine v7, and JavaScript
- 🎨 **Beautiful UI Components** - Professional cards, forms, and layouts using Mantine
- 📧 **Contact Integration** - Easy-to-find contact information and appointment scheduling
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: Mantine v7
- **Language**: JavaScript
- **Icons**: Tabler Icons React
- **Styling**: Mantine + PostCSS
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.js          # Main landing section
│   │   ├── Services.js      # Orthopedic services showcase
│   │   ├── About.js         # Doctor bio and credentials
│   │   └── Contact.js       # Practice information
│   ├── layout.js            # Root layout with Mantine provider
│   ├── page.js              # Homepage
│   └── globals.css          # Global styles
├── .github/
│   └── copilot-instructions.md
└── Configuration files
```

## Customization

### Content Updates

1. **Doctor Information**: Update placeholder text in `About.js`
2. **Services**: Modify services array in `Services.js`
3. **Contact Details**: Update practice information in `Contact.js`
4. **Hero Section**: Customize main headline and call-to-action in `Hero.js`

### Styling

- Colors and themes can be customized in the Mantine provider
- Global styles are in `src/app/globals.css`
- Component-specific styles use Mantine's styling system

### Images

Replace placeholder images with:
- Professional headshot of the doctor
- Office/clinic photos
- Medical equipment or procedure images
- Ensure all images are optimized for web

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is ready to deploy on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (with static export)

### Environment Variables

For production deployment, consider adding:
- Contact form endpoints
- Analytics tracking IDs
- CMS integration keys

## License

This project is created for educational and professional use.

## Support

For questions or customization needs, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Mantine Documentation](https://mantine.dev/)
- [Tabler Icons](https://tabler-icons.io/)
