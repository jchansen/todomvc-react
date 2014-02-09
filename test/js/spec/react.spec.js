define(
  [
    'react'
  ],
  function (React) {
    "use strict";

    describe("React", function () {
      var Component;

      beforeEach(function(){
        Component = React.createClass({
          render: function () {
            return (
              React.DOM.h1(null, "Hello React!")
              );
          }
        });
      });

      it("should render component to string", function (done) {
        React.renderComponentToString(
          Component(),
          function (html) {
            expect(html).to.contain("Hello React!");
            done();
          }
        );
      });

    });
  }
);
