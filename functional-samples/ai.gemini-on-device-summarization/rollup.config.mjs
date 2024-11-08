import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'scripts/extract-content.js',
  output: {
    file: 'dist/scripts/extract-content.js',
    format: 'iife'
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    copy({
      targets: [
        {
          src: ['manifest.json', 'background.js', 'sidepanel', 'images'],
          dest: 'dist'
        }
      ]
    })
  ]
};
