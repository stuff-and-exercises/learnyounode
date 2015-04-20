/**
 * 9. Juggling Async
 *
 * This problem is the same as the previous problem (HTTP COLLECT) in
 * that you need to use http.get(). However, this time you will be
 * provided with three URLs as the first three command-line arguments.
 * 
 * You must collect the complete content provided to you by each of the
 * URLs and print it to the console (stdout). You don't need to print out
 * the length, just the data as a String; one line per URL. The catch is
 * that you must print them out in the same order as the URLs are provided
 * to you as command-line arguments.
 */

var http = require('http');
var bl = require('bl');

var answers = ['', '', ''];
var responseCount = 0;

for (var i = 2; i < process.argv.length; i++) {
  
  (function(i) {
    http.get(process.argv[i], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err);

        answers[i - 2] = data.toString();
        responseCount++;

        if (responseCount == 3) {
          answers.forEach(function (item, index) {
            console.log(item);
          });
        }
      }));
    });
  }(i));
}