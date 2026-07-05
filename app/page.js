'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, ArrowDown, ArrowUpRight, MessageCircle, MousePointerClick, Target, TrendingUp } from 'lucide-react';
import { templates } from './components/templates-data';

const WA = 'https://wa.me/6281339908765?text=Halo%2C%20saya%20tertarik%20template%20landing%20page%20di%20PortalLanding';
const KATEGORI = ['Semua', 'Click-Through', 'Lead Gen', 'Sales', 'Webinar', 'Produk', 'Platform', 'Profil'];

export default function PortalLanding() {
  const [kat, setKat] = useState('Semua');
  const list = kat === 'Semua' ? templates : templates.filter((t) => t.kategori === kat);

  return (
    <div className="diag min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b-[3px] border-inkl bg-kreml/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="grid h-9 w-9 place-items-center border-[3px] border-inkl bg-oranyel text-white shadow-[3px_3px_0_var(--color-inkl)]"><Megaphone size={16} /></span>
            PortalLanding
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="border-[3px] border-inkl bg-inkl px-5 py-2 font-display text-sm font-bold text-kreml transition hover:bg-oranyel">
            Pesan Landing
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-4 pt-16 pb-12 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl">
          <span className="inline-block border-[3px] border-inkl bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_var(--color-inkl)]">
            17 template · 7 tujuan konversi
          </span>
          <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            Halaman yang<br /><span className="bg-oranyel px-3 text-white">menjual.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-mutedl">
            Click-through, lead gen, sales, webinar, sampai company profile — tiap halaman dirancang untuk satu hal: membuat pengunjung bertindak.
          </p>
          <a href="#koleksi" className="mt-9 inline-flex items-center gap-2 border-[3px] border-inkl bg-inkl px-8 py-4 font-display text-sm font-bold text-kreml shadow-[5px_5px_0_var(--color-oranyel)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-oranyel)]">
            Lihat Etalase <ArrowDown size={16} />
          </a>
        </motion.div>
      </section>

      {/* Marquee tujuan */}
      <div className="overflow-hidden border-y-[3px] border-inkl bg-inkl py-3 text-kreml">
        <div className="flex w-max animate-marquee-x">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {['KLIK', 'LEADS', 'SALES', 'DAFTAR', 'BOOKING', 'SUBSCRIBE', 'KONVERSI'].map((k) => (
                <span key={k} className="flex items-center gap-6 px-6 font-display text-xl font-bold">
                  {k} <span className="text-oranyel">→</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Koleksi */}
      <section id="koleksi" className="scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-oranyel">Etalase</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Pilih tujuanmu</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {KATEGORI.map((k) => (
                <button
                  key={k}
                  onClick={() => setKat(k)}
                  aria-pressed={kat === k}
                  className={`border-2 border-inkl px-3.5 py-1.5 text-xs font-bold transition ${kat === k ? 'bg-oranyel text-white shadow-[3px_3px_0_var(--color-inkl)]' : 'bg-white hover:bg-inkl hover:text-kreml'}`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((t, i) => (
                <motion.article
                  key={t.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: (i % 3) * 0.06, duration: 0.45 } }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="group"
                >
                  <a href={t.url} aria-label={`Lihat ${t.name}`} className="block">
                    <div className="papan overflow-hidden">
                      <div className="flex items-center justify-between border-b-[3px] border-inkl bg-kreml px-3 py-1.5">
                        <span className="font-display text-[11px] font-bold uppercase tracking-wide">{t.kategori}</span>
                        <span className="flex gap-1"><span className="h-2 w-2 rounded-full bg-oranyel" /><span className="h-2 w-2 rounded-full bg-inkl/25" /><span className="h-2 w-2 rounded-full bg-inkl/25" /></span>
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image src={t.image} alt={`Preview ${t.name}`} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.03]" priority={i < 3} />
                      </div>
                    </div>
                  </a>
                  <div className="mt-4 px-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl font-bold">{t.name}</h3>
                      <ArrowUpRight size={17} className="shrink-0 text-mutedl transition group-hover:text-oranyel" />
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-mutedl">{t.description}</p>
                    <div className="meter mt-3 w-2/3 opacity-70" aria-hidden="true" />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Prinsip */}
      <section className="border-t-[3px] border-inkl bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">Anatomi halaman yang menjual</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: 'Satu tujuan', desc: 'Tanpa distraksi — setiap elemen mengarah ke satu aksi utama.' },
              { icon: MousePointerClick, title: 'CTA yang berani', desc: 'Tombol jelas, copywriting tajam, posisi tepat di momen yakin.' },
              { icon: TrendingUp, title: 'Bukti yang meyakinkan', desc: 'Testimoni, angka, dan logo klien di saat keraguan muncul.' },
            ].map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-[3px] border-inkl bg-kreml p-7 shadow-[5px_5px_0_var(--color-inkl)]">
                <span className="grid h-12 w-12 place-items-center border-[3px] border-inkl bg-oranyel text-white"><p.icon size={22} /></span>
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-mutedl">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-[3px] border-inkl bg-inkl px-4 py-16 text-center text-kreml sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">Bisnismu butuh <span className="text-oranyel">halaman yang bekerja</span>.</h2>
          <p className="mt-4 text-kreml/60">Pilih template, kirim materi, dan halamanmu siap menjual dalam hitungan hari.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-oranyel px-9 py-4 font-display text-sm font-bold text-white transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Chat WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="bg-inkl px-4 py-5 text-center text-xs text-kreml/40">
        © {new Date().getFullYear()} PortalLanding · Sanzystore Dev — dibuat untuk konversi.
      </footer>
    </div>
  );
}
