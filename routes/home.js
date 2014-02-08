define(
  [
    'react',
    'text!layouts/index.html',
    'cheerio',
    'jsx!components/HomePage'
  ],
  function (React, layoutHtml, cheerio, HomePage) {
    var exports = {};

    exports.index = function (req, res) {
      //res.render('index', { title: 'Express' });

      React.renderComponentToString(
        HomePage(),
        function (html) {
          var $ = cheerio.load(layoutHtml);
          $('#appRegion').html(html)
          res.send("<!DOCTYPE html>" + $.html());
        }
      );
    };

    return exports;
  }
);