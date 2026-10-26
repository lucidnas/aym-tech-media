import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

function sites() {
  let root = ''
  return {
    name: 'sites',
    apply: 'build',
    configResolved(config) {
      root = config.root
    },
    async closeBundle() {
      const serverDir = resolve(root, 'dist/server')
      const metadataDir = resolve(root, 'dist/.openai')
      const clientDir = resolve(root, 'dist/client')
      await rm(resolve(clientDir, 'portfolio'), { recursive: true, force: true })
      await cp(resolve(root, 'public/designs'), resolve(clientDir, 'designs'), { recursive: true })
      await cp(resolve(root, 'public/case-studies'), resolve(clientDir, 'case-studies'), { recursive: true })
      await cp(resolve(root, 'public/brand'), resolve(clientDir, 'brand'), { recursive: true })
      await cp(resolve(root, 'public/favicon.svg'), resolve(clientDir, 'favicon.svg'))
      await cp(resolve(root, 'public/icons.svg'), resolve(clientDir, 'icons.svg'))
      await cp(resolve(root, 'public/og.png'), resolve(clientDir, 'og.png'))
      await cp(resolve(root, 'public/og-media.png'), resolve(clientDir, 'og-media.png'))
      await cp(resolve(root, 'public/og-cloud.png'), resolve(clientDir, 'og-cloud.png'))
      // aymcloudsystems.com is deployed from dist/cloud: same app, but its own title,
      // description and share image in the static HTML that crawlers and link previews read.
      const cloudDir = resolve(root, 'dist/cloud')
      await rm(cloudDir, { recursive: true, force: true })
      await cp(clientDir, cloudDir, { recursive: true })
      const cloudTitle = 'AYM Cloud Systems | Infrastructure and Systems Modernization'
      const cloudDescription = 'AYM Cloud Systems designs, modernizes, and operates cloud foundations, APIs, applications, and hybrid infrastructure for organizations with complex responsibilities.'
      const mediaHtml = await readFile(resolve(clientDir, 'index.html'), 'utf8')
      await writeFile(resolve(cloudDir, 'index.html'), mediaHtml
        .replaceAll('AYM Tech Media | Websites, Ads and Content', cloudTitle)
        .replaceAll('Websites, ads, video and content that bring growing businesses more customers.', cloudDescription)
        .replaceAll('https://aymtechmedia.com/og-media.png', 'https://aymcloudsystems.com/og-cloud.png'))
      await mkdir(serverDir, { recursive: true })
      await mkdir(metadataDir, { recursive: true })
      await writeFile(resolve(serverDir, 'index.js'), `export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const isPageRequest = request.method === 'GET' && !url.pathname.split('/').pop().includes('.')
    if (isPageRequest && url.pathname !== '/') {
      return env.ASSETS.fetch(new Request(new URL('/', request.url), request))
    }
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response
    return env.ASSETS.fetch(new Request(new URL('/', request.url), request))
  }
}\n`)
      const hosting = await readFile(resolve(root, '.openai/hosting.json'), 'utf8')
      await writeFile(resolve(metadataDir, 'hosting.json'), hosting)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sites()],
  publicDir: false,
  build: {
    outDir: 'dist/client',
  },
  server: {
    allowedHosts: ['mac-mini.tail3f9a7b.ts.net'],
  },
})
