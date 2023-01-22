import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const docsPlugin: Plugin = {
  name: 'vue-docs',
  transform(code, id) {
    if (!/vue&type=docs/.test(id)) {
      return
    }

    const docs = code.replace(/```/g, '').replace(/jsx/, '').replace(/\n/g, '')
    console.log(docs)

    return `export default Comp => {
      Comp.docs = '${docs}'
    }`
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), docsPlugin],
  resolve: {
    alias: {
      // Allow runtime compilation
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
