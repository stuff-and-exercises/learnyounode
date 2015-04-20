/**
 * 6. Make It Modular
 *
 * This problem is the same as the previous but introduces the concept
 * of modules. You will need to create two files to solve this.
 * 
 * Create a program that prints a list of files in a given directory,
 * filtered by the extension of the files. The first argument is the
 * directory name and the second argument is the extension filter. Print
 * the list of files (one file per line) to the console. You must use
 * asynchronous I/O.
 */

var mymodule = require('./my_module.js');

var directory = process.argv[2];
var extension = process.argv[3];

mymodule(directory, extension, function(err, data) {
  if (err) {
    return console.log("Error");
  }

  data.forEach(function(file) {
    console.log(file);
  });
});