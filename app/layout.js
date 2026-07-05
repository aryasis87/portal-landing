import './globals.css';
import { Syne, Inter } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['600', '700', '800'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalLanding","description":"Koleksi 17 landing page","url":"https://portal-landing.vercel.app","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://pintuweb.id"}};

export const metadata = {
  metadataBase: new URL("https://portal-landing.vercel.app"),
  title: "PortalLanding — Halaman yang Menjual",
  description: "PortalLanding: 17 landing page dengan tujuan berbeda — click-through, lead gen, sales, webinar, hingga company profile.",
  applicationName: "PortalLanding",
  keywords: ["template landing page", "koleksi landing page", "landing page bisnis", "desain landing page"],
  authors: [{ name: "PortalLanding" }],
  creator: "PortalLanding",
  publisher: "PortalLanding",
  alternates: { canonical: "https://portal-landing.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portal-landing.vercel.app",
    siteName: "PortalLanding",
    title: "PortalLanding — Halaman yang Menjual",
    description: "PortalLanding: 17 landing page dengan tujuan berbeda — click-through, lead gen, sales, webinar, hingga company profile.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalLanding — Halaman yang Menjual" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalLanding — Halaman yang Menjual",
    description: "PortalLanding: 17 landing page dengan tujuan berbeda — click-through, lead gen, sales, webinar, hingga company profile.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
