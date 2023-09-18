var arr = ["apple", "mango", "orange", "apple", "banana", "orange"];

var uniqueArr = arr.filter(function (value, index, self) {
  return self.indexOf(value) === index;
});

console.log(uniqueArr);


var arr = ["apple", "mango", "orange", "apple", "banana", "orange"];

var uniqueArr = [...new Set(arr)];

console.log(uniqueArr);
