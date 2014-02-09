/**
 * @jsx React.DOM
 */

define(
  [
    "react",
    "./Header",
    "./Main",
    "./Footer"
  ],
  function (React, Header, Main, Footer) {
    "use strict"

    return React.createClass({
      render: function () {
        return (
          React.DOM.section( {id:"todoapp"}, 
            Header(null),
            Main(null),
            Footer(null)
          )
        );
      }
    });
  }
);
