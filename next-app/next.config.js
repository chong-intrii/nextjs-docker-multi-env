/** @type {import('next').NextConfig} */
const proxyOrigin = "https://local.mdos.intrii.com"
const nextConfig = {
  output: "standalone",
  rewrites () {
    return [
      {
				source: "/sso/:path*",
				destination: `${proxyOrigin}/sso/:path*`,
			},
    ]
  }
};

module.exports = nextConfig;
