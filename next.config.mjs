/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resume.pdf',
        destination: 'https://mgbqszybpjjpxrcodlnc.supabase.co/storage/v1/object/sign/resume/resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lODJmYmFhOC0wODAzLTQxODQtODcxMS00NTAzMTZkY2RiYWMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXN1bWUvcmVzdW1lLnBkZiIsImlhdCI6MTc1MTI0MDMxMCwiZXhwIjoxNzgyNzc2MzEwfQ.uaHwhTSellUH9x5NIbrLFXcYZXyazRbDVVFBl-zu4OM',
        permanent: false, // Use temporary redirect since the signed URL has an expiration
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
