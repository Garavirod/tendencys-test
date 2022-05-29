const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath:'/tendencys-test/',
  outputDir:'tendencys-test', 
  lintOnSave:false
})
