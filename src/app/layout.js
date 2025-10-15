import { Montserrat } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Script from 'next/script';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hjemmeside-laege.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dr. Kristian Høy, PhD – Klinisk lektor, Ortopædkirurgi',
    template: '%s | Dr. Kristian Høy',
  },
  description:
    'Overlæge og klinisk lektor i ortopædkirurgi. Specialiseret i rygkirurgi, nakke-hals kirurgi, skoliose og speciallægeerklæringer.',
  applicationName: 'Dr. Kristian Høy – Ortopædkirurgi',
  authors: [{ name: 'Dr. Kristian Høy' }],
  keywords: [
    'ortopædkirurgi',
    'ortopæd',
    'rygkirurgi',
    'skoliose',
    'speciallægeerklæring',
    'klinisk lektor',
    'overlæge',
    'Aarhus',
    'Danmark',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Dr. Kristian Høy – Ortopædkirurgi',
    description:
      'Overlæge og klinisk lektor i ortopædkirurgi. Specialiseret i rygkirurgi, nakke-hals kirurgi, skoliose og speciallægeerklæringer.',
    siteName: 'Dr. Kristian Høy',
    locale: 'da_DK',
    images: [
      {
        url: `${siteUrl}/photos/about_picture.jpg`,
        width: 1200,
        height: 630,
        alt: 'Dr. Kristian Høy – Ortopædkirurgi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Kristian Høy – Ortopædkirurgi',
    description:
      'Overlæge og klinisk lektor i ortopædkirurgi. Specialiseret i rygkirurgi, nakke-hals kirurgi, skoliose og speciallægeerklæringer.',
    images: [`${siteUrl}/photos/about_picture.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        {/* JSON-LD: Person/Physician */}
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Physician',
              name: 'Dr. Kristian Høy',
              description:
                'Overlæge og klinisk lektor i ortopædkirurgi. Specialiseret i rygkirurgi, nakke-hals kirurgi og skoliose.',
              url: siteUrl,
              jobTitle: 'Overlæge, Klinisk lektor',
              medicalSpecialty: [
                'Orthopedic Surgery',
                'Spine Surgery',
                'Scoliosis',
              ],
              image: `${siteUrl}/photos/about_picture.jpg`,
              sameAs: [],
            }),
          }}
        />
        {/* JSON-LD: WebSite */}
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Dr. Kristian Høy – Ortopædkirurgi',
              url: siteUrl,
              inLanguage: 'da-DK',
            }),
          }}
        />
      </head>
      <body className={montserrat.className}>
        <MantineProvider
          theme={{
            primaryColor: 'blue',
            fontFamily: montserrat.style.fontFamily,
          }}
          defaultColorScheme="light"
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
