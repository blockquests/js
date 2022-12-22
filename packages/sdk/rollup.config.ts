import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
      rootDir: 'src',
      exclude: ['**/__tests__', '**/*.test.ts'],
      sourceMap: true,
    }),
    commonjs(),
  ],
};
