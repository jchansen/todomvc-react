define(function (require, exports, module) {

  exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
  };

});