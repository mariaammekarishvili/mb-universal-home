import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { pageSeo, shareImage, siteName, siteUrl, structuredData } from './src/data/SeoData'

// GoDaddy Node.js Hosting assigns the port through PORT and reaches the app from
// outside the container under the site's own domain. Locally PORT is unset and
// Vite keeps its defaults.
const hostedPort = Number(process.env.PORT) || undefined
const hosted = hostedPort
  ? { port: hostedPort, strictPort: true, host: '0.0.0.0', allowedHosts: true as const }
  : {}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const pageHead = (path: string) => {
  const { title, description } = pageSeo[path]
  const url = siteUrl + path
  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
  ].join('\n    ')
}

const sharedHead = [
  `<meta property="og:type" content="website" />`,
  `<meta property="og:site_name" content="${siteName}" />`,
  `<meta property="og:image" content="${shareImage}" />`,
  `<meta name="twitter:card" content="summary_large_image" />`,
  `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`,
].join('\n    ')

// Fills <!--seo-head--> in index.html with the home page's tags, then writes
// about/index.html, services/index.html, ... with each page's own tags, so search
// engines and link previews get the right title without running JavaScript.
// server.js serves those files. Also writes sitemap.xml and robots.txt.
const seoPages: Plugin = {
  name: 'seo-pages',
  enforce: 'post',
  transformIndexHtml(html) {
    return html.replace('<!--seo-head-->', `${pageHead('/')}\n    ${sharedHead}`)
  },
  generateBundle(_, bundle) {
    const index = bundle['index.html']
    if (index?.type !== 'asset') throw new Error('seo-pages: index.html is missing from the build')
    const html = String(index.source)
    const paths = Object.keys(pageSeo)

    for (const path of paths) {
      if (path === '/') continue
      this.emitFile({
        type: 'asset',
        fileName: `${path.slice(1)}/index.html`,
        source: html.replace(pageHead('/'), pageHead(path)),
      })
    }

    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...paths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`),
        '</urlset>',
        '',
      ].join('\n'),
    })
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `User-agent: *\nAllow: /\nDisallow: /icons.html\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPages],
  server: hosted,
  preview: hosted,
})
