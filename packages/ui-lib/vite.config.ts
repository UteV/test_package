import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			entry:  resolve(__dirname, 'src/main.ts'),
			formats: ["es"],
			name: "UILib"
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					Vue: "vue"
				}
			}
		}
	},
	plugins: [vue(), dts()],
})
