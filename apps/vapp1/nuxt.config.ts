import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  srcDir: 'src',
  devtools: { enabled: true },
  buildDir: '../../dist/apps/vapp1/.nuxt',
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: './tsconfig.app.json',
    },
  },
  imports: {
    autoImport: false,
  },

  css: ['~/assets/css/styles.css'],

  vite: {
    plugins: [nxViteTsPaths()],
  },
  nitro: {
    preset: 'vercel',
    output:{
      dir: '../../.vercel/output'
    }
  },
});
