module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
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
              exclude: ["jsx"]
            }
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs']);
};