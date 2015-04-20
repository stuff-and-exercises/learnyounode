/**
 * 3. My First I/O
 *
 * Write a program that uses a single synchronous filesystem operation
 * to read a file and print the number of newlines it contains to the
 * console (stdout), similar to running cat file | wc -l.
 * 
 * The full path to the file to read will be provided as the first
 * command-line argument. You do not need to make your own test file. 
 */

var fs = require('fs');

var result = 0;

if (process.argv.length > 2) {
  var buf = fs.readFileSync(process.argv[2]);
  var str = buf.toString();
  var strArray = str.split('\n');
  result = strArray.length - 1;
}

console.log(result);