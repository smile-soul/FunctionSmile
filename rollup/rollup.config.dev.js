import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import rollupTypescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import Visualizer from 'rollup-plugin-visualizer';
import alias from 'rollup-plugin-alias';

const devconfig = {
    input: './src/main.ts',
    output: {
        file: './dist/bundle.js',
        format: 'es',
        name: 'lib',
        sourcemap: true
    },
    plugins: [
        json(),
        rollupTypescript(),
        commonjs(),
        Visualizer({
            sourcemap: true
          }),
        alias({
        somelibrary: './mylocallibrary'
        }),
        postcss({
            plugins: [
                // cssnext(),
                // yourPostcssPlugin()
                postcssModules({
                    getJSON(id, exportTokens) {
                        cssExportMap[id] = exportTokens;
                    }
                })
            ],
            sourceMap: true, // default value
            //extract: false, // default value
            extensions: ['.css', '.less']  // default value
        }),
        resolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
    ],
    globals: {
        lodash: 'lodash'
    },
    // 指出应将哪些模块视为外部模块
    external: ['lodash']
}

export default devconfig;