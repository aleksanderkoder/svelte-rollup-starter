import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve'

export default {
  // This `main.js` file we wrote
  input: 'src/main.js',
  output: {
    // The destination for our bundled JavaScript
    file: 'public/build/bundle.js',
    // Our bundle will be an Immediately-Invoked Function Expression
    format: 'iife',
    // The IIFE return value will be assigned into a variable called `app`
    name: 'app',
  },
  plugins: [
    svelte({
      // Tell the svelte plugin where our svelte files are located
      include: ['src/**/*.svelte', 'src/components/*.svelte'],
    }),
    // Output all css as its own file 
    css({
      output: 'bundle.css'
    }),
    // Tell any third-party plugins that we're building for the browser
    resolve({ browser: true }),
    serve('public'),
    // Enable live reload of changes in public folder
    livereload('public'),
  ],
};