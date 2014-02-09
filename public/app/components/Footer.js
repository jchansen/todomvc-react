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
          React.DOM.footer({id: "footer"},
            React.DOM.span({id: "todo-count"}, React.DOM.strong(null, "1"), " item left"),
            React.DOM.ul({id: "filters"},
              React.DOM.li(null,
                React.DOM.a({className: "selected", href: "#/"}, "All")
              ),
              React.DOM.li(null,
                React.DOM.a({href: "#/active"}, "Active")
              ),
              React.DOM.li(null,
                React.DOM.a({href: "#/completed"}, "Completed")
              )
            )
          )
          );
      }
    });

  }
);
