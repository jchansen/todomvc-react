(function () {
  var root = this;

  require.config({
    baseUrl: '/app',
    paths: {
      //'q': '../javascripts/q',
      jsx: "../bower_components/require-jsx/jsx",
      JSXTransformer: "../bower_components/react/JSXTransformer",
      'jquery': '../bower_components/jquery/jquery',
      'react': '../bower_components/react/react'
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