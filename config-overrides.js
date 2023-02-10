const {override, fixBabelImports } = require('customize-cra'); 
const addLessLoader = require("customize-cra-less-loader")

module.exports = override(
     fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
         }),
         addLessLoader({
                lessOptions: {
                  javascriptEnabled: true,
                  modifyVars: {
                    '@primary-color': 'orange'
                  },
                }
            }),
);