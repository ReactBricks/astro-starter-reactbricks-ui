// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { reactbricks } from 'react-bricks/astro/server'

import node from '@astrojs/node'

export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    react(),
    tailwind(),
    reactbricks('/src/react-bricks/config.tsx'),
  ],

  adapter: node({
    mode: 'standalone',
  }),
})
