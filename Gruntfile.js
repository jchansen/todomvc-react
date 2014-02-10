module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: require('./grunt/config/requirejs'),
    react: require('./grunt/config/react'),
    watch: require('./grunt/config/watch'),
    mocha: require('./grunt/config/mocha'),
    sass: require('./grunt/config/sass'),
    copy: require('./grunt/config/copy'),
    clean: require('./grunt/config/clean')
  });

  // Load any NPM tasks in package.json/devDependencies starting with grunt-
  Object.keys(grunt.file.readJSON('package.json').devDependencies)
    .filter(function(npmTaskName) { return npmTaskName.indexOf('grunt-') === 0; })
    .filter(function(npmTaskName) { return npmTaskName != 'grunt-cli'; })
    .forEach(function(npmTaskName) { grunt.loadNpmTasks(npmTaskName); });

  grunt.registerTask('default', ['development']);
  grunt.registerTask('development', ['clean','copy','sass','react','watch']);
  grunt.registerTask('prod', ['development','requirejs']);
  grunt.registerTask('heroku', ['development']);
};