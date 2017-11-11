import json from 'rollup-plugin-json';
import rollupTypescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import rollupPluginVisualizer from 'rollup-plugin-visualizer';

export default {
  entry: './src/main.ts',
  plugins: [
    rollupTypescript(),
    json(),
    nodeResolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    rollupPluginVisualizer()
  ],
  // format: 'cjs',
  // dest: './dist/bundle.cjs.js'
  targets: [
    { dest: './dist/bundle.umd.js', format: 'umd' },
    { dest: './dist/bundle.iife.js', format: 'iife' },
    { dest: './dist/bundle.cjs.js', format: 'cjs' },
    { dest: './dist/bundle.amd.js', format: 'amd' },
    { dest: './dist/bundle.es.js', format: 'es' }
  ],
  sourceMap: true
}
