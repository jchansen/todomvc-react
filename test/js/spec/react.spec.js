define(
  [
    'react'
  ],
  function (React) {
    "use strict";

    console.log('running moca');

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
        console.log('rendering to string');
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
