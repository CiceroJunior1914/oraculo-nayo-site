/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'
const repoName = 'oraculo-nayo-site'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
}

export default nextConfig
