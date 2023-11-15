#!/usr/bin/node
// @count: Holds the count of arguments passed when executing the script
const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
