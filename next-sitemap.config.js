/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.rapidmoney.in/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: true,
  outDir: './public', // ✅ explicitly write inside /public
  exclude: ['/api/*', '/admin/*'],

};
