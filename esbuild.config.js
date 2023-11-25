/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');

// Define a pattern to match test files
const testFilePattern = '/.test.ts$/';

// CommonJS Configuration
const buildCJS = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/cjs/index.js',
    external: [testFilePattern],
};

// ECMAScript Module Configuration
const buildESM = {
    ...buildCJS,
    outfile: 'dist/esm/index.js',
    format: 'esm',
};

// Run esbuild with the configurations
esbuild.build(buildCJS).catch(() => process.exit(1));
esbuild.build(buildESM).catch(() => process.exit(1));


