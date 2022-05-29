const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath:'/tendencys-test/',
  outputDir:'tendencys-test', 
  lintOnSave:false,
  pwa:{
    iconPaths: {
      favicon32: "./public/favicon.png",
      favicon16: "./public/favicon.png",
      appleTouchIcon: "./public/favicon.png",
      maskIcon: "./public/favicon.png",
      msTileImage: "./public/favicon.png"
    },  
  }
})
