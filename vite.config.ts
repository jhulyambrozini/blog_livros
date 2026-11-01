import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
input: [
			'index.html',
			'resenhas.html',
			'listas.html',
			'autores.html',
			'contato.html',
		],
		},
	},
});
