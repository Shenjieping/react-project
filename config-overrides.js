const path = require('path');
const {
    override,
    fixBabelImports,
    addWebpackAlias
} = require('customize-cra'); // show https://github.com/arackaf/customize-cra

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    addWebpackAlias({
        '@': resolve('src'),
        '@http': resolve('src/http/axios.js')
    })
);