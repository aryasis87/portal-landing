/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.com/landing-page: PintuWeb meneruskan path /landing-page
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/landing-page',
  async redirects() {
    // Alamat lama portal-landing-seven.vercel.app di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.com/landing-page', basePath: false, permanent: true },
      { source: '/:lama((?!landing-page(?:/|$)).+)', destination: 'https://www.pintuweb.com/landing-page', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
