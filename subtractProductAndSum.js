const _ = require("lodash");

var subtractProductAndSum = n => {
  var listOfInts = n.toString().split("");
  var allSum = 0;
  var allProduct = 1;
  _.map(listOfInts, s => _.parseInt(s)).forEach(a => {
    allSum = allSum + a;
    allProduct = allProduct * a;
  });
  return allProduct - allSum;
};
console.log(subtractProductAndSum(234));
