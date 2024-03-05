import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts', // Change this to your library's entry point
      name: 'myLibrary', // Replace with your library's name
    },
    rollupOptions: {
      // External dependencies that should not be bundled
      external: ['react', 'react-dom'],
      output: {
        // Format in which the library should be generated (e.g., 'umd', 'esm', 'cjs')
        format: 'umd',
      },
    },
  },
});
