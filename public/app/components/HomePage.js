define(
  [
    "react"
  ],
  function (React) {
    "use strict";

    return React.createClass({
      render: function () {
        return React.DOM.h1(null, "Hello world!");
      }
    });

  }
);
