import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
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
      await rm(resolve(root, 'dist/portfolio'), { recursive: true, force: true })
      await mkdir(serverDir, { recursive: true })
      await mkdir(metadataDir, { recursive: true })
      await writeFile(resolve(serverDir, 'index.js'), `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response
    return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request))
  }
}\n`)
      const hosting = await readFile(resolve(root, '.openai/hosting.json'), 'utf8')
      await writeFile(resolve(metadataDir, 'hosting.json'), hosting)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sites()],
  server: {
    allowedHosts: ['mac-mini.tail3f9a7b.ts.net'],
  },
})
