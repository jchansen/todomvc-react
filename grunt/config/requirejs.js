'use strict';

module.exports = {
  compile: {
    options: {
      mainConfigFile: "public/app/main.js",
      appDir: 'public/',
      baseUrl: 'app',
      dir: "public_compiled",
      removeCombined: true,
      optimize: 'none',
      //optimize: 'uglify2',
      useStrict: true, // required to be able to minify react/JSXTransformer

      modules: [
        {
          name: "main"
        }
      ]
    }
  }
};