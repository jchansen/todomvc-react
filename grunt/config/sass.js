'use strict';

module.exports = {
  compile: {
    options: {
      sourceMaps: true,
      sourceComments: 'normal',
      includePaths: ["public/stylesheets"]
    },
    files: [
      {
        expand: true,
        cwd: './public/stylesheets/',
        src: ['**/*.scss'],
        dest: './public_development/stylesheets',
        ext: '.css'
      }
    ]
  }
};