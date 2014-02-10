'use strict';

module.exports = {
  compile: {
    options: {
      mainConfigFile: "public_development/app/main.js",
      appDir: 'public_development/',
      baseUrl: 'app',
      dir: "public_release",
      removeCombined: true,
      //optimize: 'none',
      optimize: 'uglify2',
      useStrict: true, // required to be able to minify react/JSXTransformer

      modules: [
        {
          name: "main"
        }
      ]
    }
  }
};