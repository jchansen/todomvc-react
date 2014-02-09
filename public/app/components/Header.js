/**
 * @jsx React.DOM
 */

define(
  [
    "react"
  ],
  function (React) {
    "use strict"

    return React.createClass({
      render: function () {
        return (
          React.DOM.header( {id:"header"}, 
            React.DOM.h1(null, "todos"),
            React.DOM.input( {id:"new-todo", placeholder:"What needs to be done?"})
          )
        );
      }
    });

  }
);
