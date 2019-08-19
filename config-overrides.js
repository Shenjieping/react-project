const path = require('path');
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
// module.exports = function override(config, env) {
//     config.resolve.alias = {
//         '@': resolve('src'),
//         '@http': resolve('src/http/axios.js')
//     }
//     return config;
// }

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