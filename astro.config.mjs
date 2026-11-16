import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isCloudflare = process.env.CF_PAGES === '1';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://jjj4531.github.io' : 'https://산재전문.com',
  base: isGitHubPages ? '/haon_industrial_web' : '/',
  integrations: [tailwind()],
});
