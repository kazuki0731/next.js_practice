// // const arr = ["1", "2", "3", "4"];
// // const newArr = arr.replace(/1/, "a").slice(0, -3);
// // console.log(newArr);

// var text = "abcabc";
// var result = text.replace(/a/g, "1"); // "abcabc"内の"a"を最後まで検索して"1"に置換する
// console.log(result);

// const obj = {
//   name: {first: "kawabata", last: "kazuki"},
//   age: 31
// }

// const {last} = obj.name;
// console.log(last)
const arr = ["a", "b", "c"];
const newArr = arr.map((str) => {
  return `${str}さん`
})

console.log(newArr);
