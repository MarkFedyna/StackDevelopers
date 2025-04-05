/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Для GeoJSON файлів
        '*.geojson': {
          loaders: ['json-loader'],
          as: 'json',
        },
        // Для SVG (якщо потрібно)
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
