({
  mainConfigFile: "public/app/main.js",
  appDir: 'public/',
  baseUrl: 'app',
  dir: "public_compiled",
  removeCombined: true,
  //optimize: 'none',

  onBuildWrite: function (moduleName, path, singleContents) {
    return singleContents.replace(/jsx!/g, '');
  },

  modules: [
    {
      name: "main",
      exclude: ["react", "jsx"]
    }
  ]
})