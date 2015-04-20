var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if (err) {
      return callback(err);
    }

    result = [];
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) === "." + extension) {
        result.push(list[i]);
      }
    }
    callback(null, result);
  });
}