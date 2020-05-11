const obj = {
  a: 1,
  b: 2,
};
// obj.a =3;
const obj2 = {
  ...obj,
  a: 3,
};

console.log(obj2, obj);
