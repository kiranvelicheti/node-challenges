const _ = require("lodash");

var twoSum = function(nums, target) {
  var indexes = [];
  for (let index = 0; index < nums.length; index++) {
    if (indexes[nums[i]] >= 0) {
      return [indexes[nums[i]], i];
    }
    indexes[target - nums[i]] = i;
  }
};

//   var indexes = [];
//   _.filter(
//     nums,
//     num =>
//       _.indexOf(nums, target - num) >= 0 &&
//       _.indexOf(indexes, _.indexOf(nums, target - num)) == -1
//   ).forEach(num => indexes.push(_.indexOf(nums, num)));
//   return indexes;
// };
var result = twoSum([3, 3, 4], 6);
console.log(result);
