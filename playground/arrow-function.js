// version 1
var cube = (x) => {
    var result = x * x * x;
    return result; 
};

console.log(cube(3));

// version 2 
var cube1 = (x) => x * x * x ;
console.log(cube1(3));

// version 3 If you have more than one argument or zero argument you must have to use () 
var cube2 = x => x * x * x ;
console.log(cube2(3));

var user = {
    name: 'vishu',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi, I am ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, I am ${this.name}`);
    }
}

// Check one by one to see difference between arrow function and regular function.
// user.sayHi(1, 2, 3);  // Arrow function in which we can't use arguments and this keyword.
user.sayHiAlt(1, 2, 3);  // Regular function in which we can use argumetns keyword and this keyword.