function add(first, second) {
  return first + second;
}
console.log(add);

//typeof add === 'function'
var add2 = function (first, second) {
  return first + second;
};
//typeof add === 'function'
console.log(add2);

var add3 = (first, second) => {
  return first + second;
};
console.log(add3(1, 2));
//깃허브가 어디있죠
//여깄습니다.
