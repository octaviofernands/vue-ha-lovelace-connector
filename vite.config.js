import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { createHtmlPlugin } from 'vite-plugin-html';

const customElements = [
  'x1c-printer-card',
  'ams-card',
  'print-status-card',
  'printer-info-card',
]
export default defineConfig({

  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.startsWith('ha-') || tag.startsWith('custom-') || customElements.indexOf(tag) > -1,
        },
      },
    })
  ],

  build: {
    sideEffects: ['**/*.vue'],
    cssCodeSplit: true,
    target: 'modules', // Change to 'es' if needed
    outDir: '.', // Specify the output directory
    assetsDir: '', // Set to an empty string to prevent an additional assets directory
    rollupOptions: {
      input: 'src/main.js', // Modify this path accordingly
      output: {
        entryFileNames: `[name]_prod.js`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
