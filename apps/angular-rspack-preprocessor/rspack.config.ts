import { createConfig } from '@nx/angular-rspack';

export default createConfig(
  {
    rspackConfigOverrides: {
      output: {
        cssFilename: `[name].css`,
        cssChunkFilename: '[name].css',
      },
    },
    options: {
      root: __dirname,
      outputPath: {
        base: '../../dist/apps/angular-rspack-preprocessor',
      },
      index: './src/index.html',
      browser: './src/main.ts',
      polyfills: ['./src/polyfills.ts'],
      tsConfig: './tsconfig.app.json',
      inlineStyleLanguage: 'scss',
      assets: [
        {
          glob: '**/*',
          input: './public',
        },
      ],
      styles: [
        {
          input: './src/styles.scss',
          bundleName: 'styles',
          inject: true
        },
        {
          "input": '../../libs/styles/injected.scss',
          "bundleName": 'injected-styles',
          "inject": true
        }
      ],
      scripts: [],
      devServer: {
        port: 4211,
      },
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
        devServer: {
          port: 4211
        },
      },
    },
  }
);
