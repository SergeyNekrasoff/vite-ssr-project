import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  base: '/vite-ssr-project',
  plugins: [vue(), ssr()]
}

export default config
