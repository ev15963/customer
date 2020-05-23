function add(first, second) {
  return first + second;
}
console.log(add);

//typeof add === 'function'
var add = function (first, second) {
  return first + second;
};
//typeof add === 'function'
console.log(add);

var add = (first, second) => {
  return first + second;
};
console.log(add(1, 2));
깃허브가 어디있죠 