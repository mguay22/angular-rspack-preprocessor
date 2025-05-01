import { createConfig } from '@nx/angular-rspack';

export default createConfig(
  {
    options: {
      root: __dirname,

      outputPath: {
        base: '../../dist/apps/angular-rspack-preprocessor',
      },
      index: './src/index.html',
      browser: './src/main.ts',
      polyfills: ['./zone.js'],
      tsConfig: './tsconfig.app.json',
      inlineStyleLanguage: 'scss',
      assets: [
        {
          glob: '**/*',
          input: './public',
        },
      ],
      styles: ['./src/styles.scss'],
      scripts: [],
      devServer: {},
      stylePreprocessorOptions: {
        includePaths: ['libs/styles']
      },
    },
  },
  {
    production: {
      options: {
        budgets: [
          {
            type: 'initial',
            maximumWarning: '500kb',
            maximumError: '1mb',
          },
          {
            type: 'anyComponentStyle',
            maximumWarning: '4kb',
            maximumError: '8kb',
          },
        ],
        outputHashing: 'all',
        devServer: {},
      },
    },

    development: {
      options: {
        optimization: false,
        vendorChunk: true,
        extractLicenses: false,
        sourceMap: true,
        namedChunks: true,
        devServer: {},
      },
    },
  }
);
