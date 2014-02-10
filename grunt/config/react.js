'use strict';

module.exports = {
  files: {
    expand: true,
    cwd: 'public/app',
    src: ['**/*.jsx'],
    dest: 'public_development/app',
    ext: '.js'
  }
};