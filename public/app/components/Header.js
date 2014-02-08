define(
  [
    "react"
  ],
  function (React) {
    "use strict"

    return React.createClass({
      render: function () {
        return (
          <header id="header">
            <h1>todos</h1>
            <input id="new-todo" placeholder="What needs to be done?"/>
          </header>
        );
      }
    });

  }
);
