
const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const CracoAlias = require("craco-alias");
const CracoLessPlugin = require('craco-less');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require("webpack");
const path = require("path");

module.exports = {
    reactScriptsVersion: "react-scripts",
    eslint: {
        enable: false,
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: './src',
                tsConfigPath: "./tsconfig.json"
            }
        },
    ],
    babel: {
        plugins: [
            [
                'import', {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: 'css',
                }
            ]
        ],
    },
    webpack: {
        plugins: {
            add: [
                new webpack.ProvidePlugin({
                    React: 'react',
                    ReactDOM: 'react-dom',
                    http: ['@http', 'default'],
                    moment: 'moment',
                    util: ['@util', 'default'],
                    config: ['@config', 'default'],
                }),
                ...whenProd(() => [
                    new TerserPlugin({
                        terserOptions: {
                            compress: {
                                ecma: 5,
                                warnings: false,
                                comparisons: false,
                                inline: 2,
                                drop_debugger: true,
                                drop_console: true
                            }
                        }
                    })
                ], [])
            ],
        },
    },
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
        devServerConfig.proxy = {
            '/api/': {
                target: 'https://www.qxe68.com:7030',
                secure: false,
                // pathRewrite: { '^/api': '' },
            },
        }
        return devServerConfig;
    },
}