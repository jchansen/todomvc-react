(function () {

  require.config({
    baseUrl: '/app',
    paths: {
      text: "../javascripts/text",
      jsx: "../javascripts/jsx-requirejs-plugin/jsx",
      JSXTransformer: "../bower_components/react/JSXTransformer",
      'jquery': '../bower_components/jquery/jquery',
      'react': '../bower_components/react/react',
      'underscore': '../bower_components/underscore/underscore',
      'backbone': '../bower_components/backbone/backbone'
    },
    shim: {
      'underscore': {
        deps: [],
        exports: '_'
      },
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  loadPluginsAndBoot();

  function loadPluginsAndBoot() {
    // Plugins must be loaded after jQuery, etc. since they depend on them
    requirejs([], boot);
  }

  function boot() {
    require(['bootstrapper'], function (bs) {
      bs.run();
    });
  }

})();