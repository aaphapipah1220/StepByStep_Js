// membuat Object / function

// cara 1 - function declaration
// this dalam declaration mengembalikan nilai global
function halo() {
  console.log("hallo bro");
}
halo();

// cara 2 - object literal
// this dalam literal mengembalikan nilai yang bersangkutan
let obj = {};
obj.say = function () {
  console.log("hi this is example from object literal");
};
obj.say();

// cara 3 - constructor
// this dalam constructor mengembalikan nilai yang baru
function said() {
  console.log("this one example from constructor");
}
new said();
