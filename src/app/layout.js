import { Inter } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dr. Kristian Høy, PhD - Klinisk lektor, Ortopædkirurgi',
  description: 'Clinical Associate Professor and orthopedic surgeon specializing in joint replacement, sports medicine, and trauma care.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider
          theme={{
            primaryColor: 'blue',
            fontFamily: inter.style.fontFamily,
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
