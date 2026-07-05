export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portal-landing.vercel.app/sitemap.xml",
    host: "https://portal-landing.vercel.app",
  };
}
