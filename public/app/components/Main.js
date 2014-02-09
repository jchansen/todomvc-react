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
          React.DOM.section( {id:"main"}, 
            React.DOM.input( {id:"toggle-all", type:"checkbox"}),
            React.DOM.label( {htmlFor:"toggle-all"}, "Mark all as complete"),
            React.DOM.ul( {id:"todo-list"}, 
              React.DOM.li(null, 
                React.DOM.div( {className:"view"}, 
                  React.DOM.input( {className:"toggle", type:"checkbox"}),
                  React.DOM.label(null, "c"),
                  React.DOM.button( {className:"destroy"})
                ),
                React.DOM.input( {className:"edit", value:"c"})
              )
            )
          )
        );
      }
    });

  }
);
