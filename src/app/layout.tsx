import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { Metadata } from 'next'
import type { Viewport } from 'next'
import Script from 'next/script'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'FlyTahoe.',
    template: `%s - FlyTahoe.`
  },
  keywords: ['eco-friendly travel', 'electric hydrofoil', 'Lake Tahoe transportation', 'sustainable travel', 'quiet boat ride', 'fast lake crossing', 'hovercraft boat', 'Tahoe blue preservation', 'zero emissions transport', 'prelaunch discount', 'travel voucher', 'referral discounts', 'lake eco-tourism', 'climate-friendly travel', 'smooth water travel'],
  creator: 'Ryan Meinzer',
  description: 'FlyTahoe',
  // openGraph: {
  //   images: [{
  //     url: "/share-image.png",
  //   }],
  // },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script src="https://getlaunchlist.com/js/popup.js" defer/>
      {/* <Script src="https://getlaunchlist.com/js/widget.js" defer/> */}
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
