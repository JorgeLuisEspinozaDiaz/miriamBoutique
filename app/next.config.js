/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      domains: ['amgwebsites.s3.amazonaws.com'],
   },
   i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'en',
   },
}

module.exports = nextConfig
