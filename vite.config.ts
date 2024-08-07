import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

const $r = (route: TemplateStringsArray) => path.resolve(__dirname, `/${route}`)

/**
 * @doc https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': $r`src/assets`,
    },
  },
})
