import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoprefixer from "autoprefixer";
import sveltePreprocessor from 'svelte-preprocess'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {devSourcemap: true},
  plugins: [
    svelte({
      configFile: 'svelte.config.js',
      preprocess: [sveltePreprocessor({
        typescript: true,
        postcss: {
          plugins: [autoprefixer({overrideBrowserslist:  [
              "> 0.2%",
              "not dead",
              "safari >= 12",
              "ios >= 12",
            ]})],
        }
      })],
      extensions: ['.svelte']
    }),
  ],
  server: {
    open: true,
    host: "192.168.0.100",
    port: 9000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
})
