import node from '@astrojs/node'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
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

  integrations: [
    react(),
    tailwind(),
    reactbricks('/src/react-bricks/config.tsx'),
  ],

  adapter: node({
    mode: 'standalone',
  }),
})
