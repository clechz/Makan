import { build } from 'esbuild';
await build({ entryPoints: ['src/phone-district.js'], outfile: 'public/hybrid/assets/phone-district.js', bundle: true, minify: true, format: 'esm', target: 'es2020', legalComments: 'eof' });
