// local storage for single model: https://github.com/jeromegn/Backbone.localStorage/issues/56
//

define(
    [
      'backbone',
      'localStorage'
    ],
    function (Backbone) {

  describe("Backbone.LocalStorage", function () {

    var Todo = null;

    beforeEach(function () {
      Todo = Backbone.Model.extend({
        urlRoot: "api/todos",
        localStorage: new Backbone.LocalStorage("Todo")
      });

      var todo = new Todo({
        id: 1,
        title: "Zanatos"
      });
      todo.save();
    });

    afterEach(function () {
      localStorage.clear();
    });

    it("has a single todo", function (done) {
      var todo = new Todo({id: 1});

      // called after fetch returns
      todo.once("sync", function () {
        expect(todo).to.be.ok;
        expect(todo.get("id")).to.equal(1);
        expect(todo.get("title")).to.contain("Zanatos");
        done();
      });

      todo.once("error", function () {
        throw new Error("bad sync");
      });

      todo.fetch();
    });

  });

});