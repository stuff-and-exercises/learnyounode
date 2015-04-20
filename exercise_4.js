/**
 * 4. My First Async I/O
 *
 * Write a program that uses a single asynchronous filesystem operation
 * to read a file and print the number of newlines it contains to the
 * console (stdout), similar to running cat file | wc -l.
 * 
 * The full path to the file to read will be provided as the first
 * command-line argument.
 */

var fs = require('fs');

var result = 0;

if (process.argv.length > 2) {
  fs.readFile(process.argv[2], 'utf8', function(err, fileContents) {
    if (!err) {
      console.log(fileContents.split('\n').length - 1);
    }
  });
}