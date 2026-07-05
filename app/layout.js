import './globals.css';
import { Syne, Inter } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['600', '700', '800'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'PortalLanding — Halaman yang Menjual',
  description: 'PortalLanding: 17 landing page dengan tujuan berbeda — click-through, lead gen, sales, webinar, hingga company profile. Semua dirancang untuk konversi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
