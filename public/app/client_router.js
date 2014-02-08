define(
    [
      'backbone',
      'react',
      'jquery',
      './routes'
    ],
    function (Backbone, React, $, routes) {

      var showComponent = function(Component){
        React.renderComponent(
          Component(),
          $("#appRegion")[0]
        );
      };

      var Router = Backbone.Router.extend({
        initialize: function(options){
          var index;
          for(index = 0; index < routes.length; ++index){
            var route = routes[index][0];
            var Component = routes[index][1];
            this.route(route, null, showComponent(Component));
          }
        }
      });

      return Router;

    });