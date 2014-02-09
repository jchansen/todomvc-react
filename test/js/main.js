(function () {

  require.config({
    baseUrl: './js',
    paths: {
      'react': '../../public/bower_components/react/react',
      'jquery': '../../public/bower_components/jquery/jquery',
      'underscore': '../../public/bower_components/underscore/underscore',
      'backbone': '../../public/bower_components/backbone/backbone',
      'localStorage': 'lib/backbone.localStorage'
    },
    shim: {
      'underscore': {
        deps: [],
        exports: '_'
      },
      'backbone': {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      react: {
        exports: 'React'
      }
    }
  });

  setupMochaAndBoot();

  function setupMochaAndBoot() {
    // Chai
    var expect = chai.expect;
    window.expect = expect;
    mocha.setup('bdd');

    requirejs([], boot);
  }

  function boot() {
    require(['SpecRunner'], function (bs) {
      console.log('running mocha');
      (window.mochaPhantomJS || mocha).run();
    });
  }

})();