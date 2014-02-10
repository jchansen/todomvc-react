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
          <footer id="footer">
            <span id="todo-count"><strong>1</strong> item left</span>
            <ul id="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
          </footer>
        );
      }
    });

  }
);
