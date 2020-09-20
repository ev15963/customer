var arr = [3, 9, 4, 2, 7, 6];
arr.forEach(function (n) {
  if (n % 2 == 0) {
    console.log(n);
  }
});

var arr = ['foo', 'hello', 'diamond', 'A'];
var arr2 = [];
arr.forEach(function (str) {
  arr2.push(str.length);
});

console.log(arr2);

var arr = [4, 15, 377, 395, 400, 1024, 300];
var arr2 = arr.filter(function (n) {
  return n % 5 == 0;
});

console.log(arr2); //[ 15, 395, 400, 300 ]

var arr = [4, 377, 1024];
var arr2 = arr.filter(function (n) {
  return n % 5 == 0;
});
console.log(arr2); //[]

// 5의 배수만 구해서 각 요소를 2배
var arr = [4, 15, 377, 395, 400, 1024, 3000];
var arr2 = arr
  .filter(function (n) {
    return n % 5 == 0;
  })
  .map(function (n) {
    return n * 2;
  });
console.log(arr2); //[ 30, 790, 800, 6000 ]

var arr = [4, 377, 1024];
var arr2 = arr
  .filter(function (n) {
    return n % 5 == 0;
  })
  .map(function (n) {
    return n * 2;
  });

console.log(arr2);

//find
// 정수 배열에서 5의 배수인 정수 '하나' 찾기
var arr = [4, 15, 377, 395, 400, 1024, 3000];
var arr2 = arr.find(function (n) {
  return n % 5 == 0;
});
console.log(arr2);

// 정수 배열에서 5의 배수인 정수 '하나' 찾기
var arr = [4, 15, 377, 395, 400, 1024, 3000];
var count = 0;
var arr2 = arr.find(function (n) {
  count++;
  return n % 5 == 0;
});
console.log(count);

// 정수 배열에서 5의 배수인 정수만 모으기
var arr = [4, 377, 1024];
var arr2 = arr.find(function (n) {
  return n % 5 == 0;
});
console.log(arr2); //undefined

// 배열 요소의 합 계산하기
var arr = [9, 2, 8, 5, 7];
var sum = arr.reduce(function (pre, value) {
  return pre + value;
});
console.log(sum);

// 배열 요소의 합 계산하기
var arr = [9, 2, 8, 5, 7];
var count = 0;
var sum = arr.reduce(function (pre, value) {
  count++;
  return pre + value;
}, 0); // initialValue가 주어졌다!
console.log(sum); // 31
console.log(count); // 5

//map-문자열 배열에서 문자영 길이만 획득하기 reduce로 표현
var arr = ['foo', 'hello', 'diamond', 'A'];
var arr2 = arr.reduce(function (pre, value) {
  pre.push(value.length);
  return pre;
}, []);
console.log(arr2); // [3,5,7,1]

//filter - 정수 배열에서 5의 배수인 정수만 모으기 reduce로 표현
var arr = [4, 15, 377, 395, 400, 1024, 3000];
var arr2 = arr.reduce(function (pre, value) {
  if (value % 5 == 0) {
    pre.push(value);
  }
  return pre;
}, []);
console.log(arr2);

// find - 정수 배열에서 5의 배수인 정수 '하나' 찾기 reduce로 표현
var arr = [4, 15, 377, 395, 400, 1024, 3000];
var arr2 = arr.reduce(function (pre, value) {
  if (typeof pre == 'undefined' && value % 5 == 0) {
    pre = value;
  }
  return pre;
}, undefined);
console.log(arr2);

//Object.keys
var obj = {
  apple: 500,
  grape: 2000,
  berry: 30,
};

var sum = Object.keys(obj).reduce(function (pre, value) {
  return pre + obj[value];
}, 0);
console.log(sum);

//문제
var arr = [
  { x1: 1, x2: 1 },
  { x1: 2, x2: 2 },
  { x1: 3, x2: 3 },
];
var arr2 = null;

// 여기에 코드를 작성하여 아래 조건을 만족 시키세요.
var arr2 = arr.map(function (obj) {
  return { x1: obj.x1, x2: obj.x2, result: obj.x1 * obj.x2 };
});

/*
1. arr은 변경되면 안됩니다:
[
  {x1: 1, x2: 1},
  {x1: 2, x2: 2},
  {x1: 3, x2: 3}
]
*/
console.log(arr);

/**
2. arr2는 다음과 같아야 합니다:
[
  {x1: 1, x2: 1, result: 1},
  {x1: 2, x2: 2, result: 4},
  {x1: 3, x2: 3, result: 9}
]
*/
console.log(arr2);
