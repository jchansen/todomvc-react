define(
    [
      'backbone',
      'react',
      'jquery'
    ],
    function (Backbone, React, $) {

      var showComponent = function(Component){
        React.renderComponent(
          Component(),
          $("#appRegion")[0]
        );
      };

      var Router = Backbone.Router.extend({
        initialize: function(options){
          var index;
          var routes = options.routes;
          for(index = 0; index < routes.length; ++index){
            var route = routes[index][0];
            var Component = routes[index][1];
            this.route(route, null, showComponent(Component));
          }
        }
      });

      return Router;

    });