import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#6366F1',
};

export const metadata: Metadata = {
  title: 'MaintainMe — Smart Maintenance Tracking for Everything You Own',
  description: 'Track maintenance schedules for your home, vehicles, and appliances. Smart reminders, spending analytics, and complete privacy. Available on iOS.',
  metadataBase: new URL('https://maintainme.live'),
  openGraph: {
    title: 'MaintainMe — Smart Maintenance Tracking',
    description: 'One app to track maintenance schedules for your home, vehicles, and appliances.',
    url: 'https://maintainme.live',
    siteName: 'MaintainMe',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaintainMe — Smart Maintenance Tracking',
    description: 'Track maintenance for your home, vehicles, and appliances.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
