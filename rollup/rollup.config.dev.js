import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import rollupTypescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

const devconfig = {
    input: './src/main.ts',
    output: {
        file: './dist/bundle.js',
        format: 'es',
        name: 'lib',
        sourcemap: true
    },
    plugins:[
        json(),
        rollupTypescript(),
        commonjs(),
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