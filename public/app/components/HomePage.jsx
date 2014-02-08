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
          <section id="todoapp">
            <Header/>
            <Main/>
            <Footer/>
          </section>
        );
      }
    });
  }
);
