// vite.config.js
export default {
  build: {
    // Set the entry point for your application
    target: 'esnext',
    rollupOptions: {
      input: {
        main: 'index.js' // Assuming your entry file is named index.js
      },
      output: {
        // Ensuring the output format is IIFE
        format: 'iife',
      }

    }
  }
}