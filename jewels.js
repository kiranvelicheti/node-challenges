var _ = require("lodash");

var numJewelsInStones = (j, s) => {
  var count = 0;
  var jewels = j.split("");

  var stoneMap = _.groupBy(s.split(""));
  _.forEach(jewels, jewel => {
    count = count + (stoneMap[jewel] ? stoneMap[jewel].length : 0);
  });
  return count;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));
