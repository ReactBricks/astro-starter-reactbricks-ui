// @ts-check
import node from '@astrojs/node'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { reactbricks } from 'react-bricks/astro/server'
import { defaultLocale, locales } from './src/i18n/conf'

export default defineConfig({
  site: 'http://localhost:4321',

  i18n: {
    locales,
    defaultLocale,
    routing: 'manual',
  },

  integrations: [react(), reactbricks('/src/react-bricks/config.tsx')],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: 'standalone',
  }),
})
