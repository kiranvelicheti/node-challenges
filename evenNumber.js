const _ = require("lodash");

var findNumbers = nums =>
  _.filter(nums, num => num.toString().length % 2 == 0).length;
console.log(findNumbers([2, 45, 678, 222]));
