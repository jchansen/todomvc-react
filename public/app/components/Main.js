define(
  [
    "react"
  ],
  function (React) {
    "use strict"

    return React.createClass({
      render: function () {
        return (
          <section id="main">
            <input id="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox"/>
                  <label>c</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" value="c"/>
              </li>
            </ul>
          </section>
        );
      }
    });

  }
);
