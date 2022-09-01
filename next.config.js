/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["www.jennexplores.com", "upload.wikimedia.org"],
  },
  swcMinify: true,
}

module.exports = nextConfig
