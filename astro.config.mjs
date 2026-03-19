import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://runbook-projects.github.io/cloudconf-2026',
  base: '/cloudconf-2026',
  output: 'static',
  build: {
    assets: 'assets',
  },
});