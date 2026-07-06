'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, ArrowDown, ArrowUpRight, MessageCircle, MousePointerClick, Target, TrendingUp, FileText, Paintbrush, Rocket, ChevronDown, Gauge, Search, Smartphone } from 'lucide-react';
import { templates } from './components/templates-data';

const WA = 'https://wa.me/6281339908765?text=Halo%2C%20saya%20tertarik%20template%20landing%20page%20di%20PortalLanding';
const KATEGORI = ['Semua', 'Click-Through', 'Lead Gen', 'Sales', 'Webinar', 'Produk', 'Platform', 'Profil'];

const PROSES = [
  { icon: FileText, no: '01', title: 'Kirim Brief', desc: 'Produk apa, target siapa, aksi apa yang kamu mau — cukup lewat WhatsApp.' },
  { icon: Paintbrush, no: '02', title: 'Kami Racik', desc: 'Copywriting + desain dari template pilihanmu, disesuaikan brand-mu.' },
  { icon: Rocket, no: '03', title: 'Tayang & Menjual', desc: 'Halaman live dalam 1–2 hari, siap menampung klik dan konversi.' },
];

const JAMINAN = [
  { icon: Gauge, v: '95+', l: 'Skor performa Google' },
  { icon: Search, v: 'SEO', l: 'Siap diranking' },
  { icon: Smartphone, v: '100%', l: 'Mobile-friendly' },
  { icon: TrendingUp, v: '1–2 hari', l: 'Sampai tayang' },
];

const TANYA = [
  { q: 'Landing page-ku untuk produk yang beda — bisa disesuaikan?', a: 'Justru itu intinya. Template adalah kerangka teruji; teks, gambar, warna, dan alur CTA kami sesuaikan sepenuhnya dengan produk dan audiensmu.' },
  { q: 'Apakah termasuk copywriting?', a: 'Ya. Kami bantu menulis headline dan copy yang menjual berdasarkan brief-mu — kamu tinggal review dan setujui.' },
  { q: 'Bagaimana dengan formulir dan integrasi WhatsApp?', a: 'Semua CTA bisa diarahkan ke WhatsApp, formulir, e-commerce, atau link pembayaran. Kamu tentukan aksinya, kami pasang jalurnya.' },
  { q: 'Apakah halaman bisa dipakai untuk iklan (Meta/Google Ads)?', a: 'Sangat bisa — halaman ringan dan cepat justru menurunkan biaya iklan. Pixel/tag analytics juga bisa kami pasangkan.' },
  { q: 'Berapa biayanya?', a: 'Mulai Rp200 ribu untuk satu halaman penuh (desain + copy + tayang). Konsultasi dulu gratis; harga final menyesuaikan kebutuhan.' },
];

export default function PortalLanding() {
  const [kat, setKat] = useState('Semua');
  const [buka, setBuka] = useState(0);
  const list = kat === 'Semua' ? templates : templates.filter((t) => t.kategori === kat);

  return (
    <div id="top" className="diag min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b-[3px] border-inkl bg-kreml/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="grid h-9 w-9 place-items-center border-[3px] border-inkl bg-oranyel text-white shadow-[3px_3px_0_var(--color-inkl)]"><Megaphone size={16} /></span>
            PortalLanding
          </a>
          <div className="hidden items-center gap-6 font-display text-sm font-bold text-inkl/60 md:flex" role="navigation" aria-label="Navigasi">
            <a href="#koleksi" className="transition hover:text-oranyel">Etalase</a>
            <a href="#proses" className="transition hover:text-oranyel">Proses</a>
            <a href="#tanya" className="transition hover:text-oranyel">FAQ</a>
          </div>
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

      {/* Proses — brief ke tayang */}
      <section id="proses" className="scroll-mt-24 border-t-[3px] border-inkl bg-kreml px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-oranyel">Proses</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Dari brief ke <span className="bg-oranyel px-2 text-white">tayang</span></h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROSES.map((p, i) => (
              <motion.div
                key={p.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative border-[3px] border-inkl bg-white p-7 shadow-[5px_5px_0_var(--color-inkl)]"
              >
                <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-inkl/10">{p.no}</span>
                <span className="grid h-12 w-12 place-items-center border-[3px] border-inkl bg-oranyel text-white"><p.icon size={22} /></span>
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-mutedl">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Jaminan strip */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-[3px] border-inkl bg-inkl p-6 text-kreml sm:grid-cols-4">
            {JAMINAN.map((j) => (
              <div key={j.l} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center border-2 border-kreml/30 bg-oranyel text-white"><j.icon size={18} /></span>
                <div>
                  <p className="font-display text-xl font-extrabold">{j.v}</p>
                  <p className="text-xs text-kreml/60">{j.l}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="tanya" className="scroll-mt-24 border-t-[3px] border-inkl bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-oranyel">FAQ</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">Sebelum kamu <span className="bg-oranyel px-2 text-white">klik pesan</span></h2>
          </div>
          <div className="mt-10 space-y-4">
            {TANYA.map((t, i) => {
              const open = buka === i;
              return (
                <div key={t.q} className={`border-[3px] border-inkl bg-kreml transition ${open ? 'shadow-[5px_5px_0_var(--color-oranyel)]' : 'shadow-[4px_4px_0_var(--color-inkl)]'}`}>
                  <button onClick={() => setBuka(open ? -1 : i)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
                    <span className="font-display text-base font-bold leading-snug">{t.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center border-2 border-inkl transition ${open ? 'rotate-180 bg-oranyel text-white' : 'bg-white'}`}>
                      <ChevronDown size={15} />
                    </span>
                  </button>
                  {open && (
                    <div className="border-t-[3px] border-inkl/15 px-6 py-4">
                      <p className="text-sm leading-relaxed text-mutedl">{t.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
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

      <footer className="border-t border-kreml/10 bg-inkl px-4 pb-6 pt-10 text-kreml/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 font-display text-lg font-extrabold text-kreml sm:justify-start">
              <span className="grid h-8 w-8 place-items-center border-2 border-kreml/30 bg-oranyel text-white"><Megaphone size={14} /></span>
              PortalLanding
            </p>
            <p className="mt-2 text-sm leading-relaxed">17 landing page dengan satu tujuan: membuat pengunjungmu bertindak.</p>
          </div>
          <nav aria-label="Tautan footer" className="text-sm">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-oranyel">Jelajahi</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#koleksi" className="transition hover:text-kreml">Etalase Template</a></li>
              <li><a href="#proses" className="transition hover:text-kreml">Proses Pengerjaan</a></li>
              <li><a href="#tanya" className="transition hover:text-kreml">FAQ</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-oranyel">Hubungi</p>
            <ul className="mt-3 space-y-2">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="transition hover:text-kreml">WhatsApp +62 813 3990 8765</a></li>
              <li><a href="https://pintuweb.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-kreml">pintuweb.com</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-kreml/10 pt-5 text-center text-xs text-kreml/40">
          © {new Date().getFullYear()} PortalLanding · bagian dari PintuWeb — dibuat untuk konversi.
        </p>
      </footer>
    </div>
  );
}
