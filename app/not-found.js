import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-kreml px-6 text-center text-inkl">
      <p className="border-[3px] border-inkl bg-oranyel-ink px-3 py-1 font-display text-xs font-bold uppercase tracking-widest text-white">Error 404</p>
      <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-6xl">Halaman ini tidak menjual apa-apa</h1>
      <p className="mt-4 max-w-md text-mutedl">Karena memang tidak ada. Tujuh belas landing page yang menjual ada di halaman utama.</p>
      <Link href="/" className="mt-8 border-[3px] border-inkl bg-inkl px-6 py-3 font-display text-sm font-bold text-kreml shadow-[4px_4px_0_var(--color-oranyel)] transition hover:-translate-y-0.5">Lihat semua halaman</Link>
    </main>
  );
}
