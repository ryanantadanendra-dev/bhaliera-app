// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //     protocol: 'http',
            //     hostname: 'localhost',
            //     port: '8000',
            //     pathname: '/images/**',
            // },
            {
                protocol: 'https',
                hostname: 'api.bhaliera.com',
                pathname: '/images/**',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: false,
    },

    // Modern browser targeting to reduce bundle size
    compiler: {
        removeConsole:
            process.env.NODE_ENV === 'production'
                ? {
                      exclude: ['error', 'warn'],
                  }
                : false,
    },

    // Minification
    swcMinify: true,

    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,

    experimental: {
        optimizePackageImports: [
            'embla-carousel-react',
            'embla-carousel-fade',
            'embla-carousel-autoplay',
            'lucide-react',
            '@radix-ui/react-icons',
        ],
    },

    productionBrowserSourceMaps: false,

    // Target modern browsers to reduce polyfills
    transpilePackages: [],

    webpack: (config, { dev, isServer }) => {
        // Production optimizations
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        embla: {
                            test: /[\\/]node_modules[\\/](embla-carousel.*?)[\\/]/,
                            name: 'embla-carousel',
                            priority: 10,
                        },
                        default: {
                            minChunks: 2,
                            priority: -20,
                            reuseExistingChunk: true,
                        },
                    },
                },
                minimize: true,
            }
        }

        return config
    },

    // Headers for security and performance
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, stale-while-revalidate=604800',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
