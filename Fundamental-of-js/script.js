//Fundamentals of javascript
//arrays and object
//functions return
//forEach map filter find indexOf

// alert("sss");
var arr = [1, 2, 3, 4];
//forEach()
// arr.forEach(function (val) {
//   console.log(val + " hello");
// });

//map()
// var ans = arr.map(function (val) {
//   return val * 3;
//   //   return val;
//   //   return 13;
// });
// console.log(ans);

//filter()
// var ans = arr.filter(function (val) {
//   if (val >= 3) return true;
//   else false;
// });
// console.log(ans);

//find()
// var ans = arr.find(function (val) {
//   if (val === 2) return val;
// });
// console.log(ans);

//indexOf()
// var ans = arr.indexOf(4);
// console.log(ans);

//Object
//key value pairs

var obj = {
  name: "piyush",
  age: 25,
};

// object can be access by 2 ways:
// obj.name;
// obj["name"];

//Object.freeze()  method prevents any changes to an object.
// Object.freeze(obj);
//obj.age = 12;

// function abcd() {
//   return "hi";
// }
// var ans = abcd();
// console.log(ans);

//Async JS coding

// var blob = await fetch(`https://randomuser.me/api/`);
// var ans = await blob.json();
// console.log(ans);

async function abcd() {
  var blob = await fetch(`https://randomuser.me/api/`);
  var ans = await blob.json();

  console.log(ans.results[0].name.first);
}

abcd();
