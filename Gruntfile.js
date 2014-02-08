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
    },

    react: {
      files:
        {
          expand: true,
          cwd: 'public/app/components',
          src: ['**/*.jsx'],
          dest: 'public/app/components',
          ext: '.js'
        }

    },

    watch: {
      react_jsx: {
        files: ['public/app/components/**/*.jsx'],
        tasks: ['react']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['react']);
};