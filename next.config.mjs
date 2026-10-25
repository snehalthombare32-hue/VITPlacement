/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    "pdf-parse",
    "pdfjs-dist",
    "mammoth",
    "@prisma/client",
    "pg",
    "bcryptjs",
    "mongodb"
  ],
};

export default nextConfig;
