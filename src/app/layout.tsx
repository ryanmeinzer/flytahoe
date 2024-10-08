import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { Metadata } from 'next'
import type { Viewport } from 'next'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'FlyTahoe - Ride the Future',
    template: `%s - FlyTahoe.`
  },
  keywords: ['eco-friendly travel', 'electric hydrofoil', 'Lake Tahoe transportation', 'sustainable travel', 'quiet boat ride', 'fast lake crossing', 'hovercraft boat', 'Tahoe blue preservation', 'zero emissions transport', 'prelaunch discount', 'travel voucher', 'referral discounts', 'lake eco-tourism', 'climate-friendly travel', 'smooth water travel'],
  creator: 'Ryan Meinzer',
  description: 'N ↔ S Lake Tahoe E-Foil Boat Transit',
  openGraph: {
    images: [{
      url: "/share-image.png",
    }],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 0 100 100"><text y=".90em" font-size="90">🛥</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 0 100 100"><text y=".90em" font-size="90">🛥</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 0 100 100"><text y=".90em" font-size="90">🛥</text></svg>'
  }
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script src="https://getlaunchlist.com/js/widget.js" defer />
      <Script src="https://getlaunchlist.com/js/widget-diy.js" defer />
      <Script src="https://getlaunchlist.com/js/popup.js" defer/>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
            <GoogleAnalytics gaId="G-Q09T9QB4FC" />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
