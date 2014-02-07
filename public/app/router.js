define(
    [
      'backbone',
      'react',
      'jquery',
      './components/HomePage'
    ],
    function (Backbone, React, $, HomePage) {

      var Router = Backbone.Router.extend({
        routes: {
          "": "home"
        },

        home: function(){
          React.renderComponent(
            HomePage(),
            $("#appRegion")[0]
          );
        }
      });

      return Router;

    });