import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';

import Header from '@/layout/Header';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'JW Nexus',
    template: '%s',
  },
  description: 'JW Nexus Session application built with LiveKit Components and Next.js.',
};

export const viewport: Viewport = {
  themeColor: '#070707',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body data-lk-theme="default">
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
