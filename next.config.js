/** @type {import('next').NextConfig} */
const nextConfig = {
	// Target modern browsers to reduce legacy JavaScript polyfills
	compiler: {
		// Remove console.log in production
		removeConsole:
			process.env.NODE_ENV === 'production'
				? {
						exclude: ['error', 'warn'],
				  }
				: false,
	},
	// Optimize images
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
		],
	},
	// Reduce bundle size
	experimental: {
		optimizePackageImports: ['react-rough-notation'],
	},
	// Modern browser support - reduce polyfills
	transpilePackages: [],
}

module.exports = nextConfig
