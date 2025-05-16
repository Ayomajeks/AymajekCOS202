var hello;

hello = "Hello World!"

//hello = 10;  

var isTrue = null;

var number10 = "Jay-Jay Okocha"
 brat = "Charlie XCX"

console.log(typeof isTrue);

console.log("-----------------------\n");
console.log('All Operations')

a = 10; 
a < 11
a >= 10
a == 10
a === "10";

console.log("a >= 10: " + a >= 10);
console.log(a)

a = 1; 
b = 2; 
a < 3 && b < 3;  // AND: true (both conditions are true) 
a > 3 || b < 3;  // OR: true (at least one condition is true) 
!(a < 3);        
// NOT: false (inverts the boolean value)
console.log(!(a < 3));

var height = 165

var isShort = (height < 175) ? "Yes! Short King" : "How is the weather up there";
console.log("heigth is :" + height + "\n");
console.log(isShort + "\n");


var gender = "Female"
switch(gender){
    case "Male":
        console.log("Send Help")
        break;
    case "Female":
         console.log("Yass Queen")
         break;
    case "Non-binary":
        console.log("Good for you")
        break;    
}

console.log("\n")
var count = 0; 
while (count < 5) { 
console.log(count); 
    count++; 
}

console.log("\n")
var x = 0; 
do { 
 console.log(x); 
    x++; 
} while (x < 5); 

function add(a,b) {
    return a + b
}
 
/*var sub = function(a, b){
    return a -b
}
a = 10;
b = 5;
console.log("\n")
console.log(add(a, b))
console.log(sub(a, b))


console.log("\n")
function sum() { 
var total = 0; 
for (var i = 0; i < arguments.length; i++) { 
        total += arguments[i]; 
    } 
return total; 
} 
console.log(sum(1, 2, 3, 4)); */


var fruits = ["Apple", "Banana", "Cherry"]; 
// Accessing elements
 console.log(fruits[0]);  // "Apple" 
// Array methods 
fruits.push("Date");  //Add to end
console.log(fruits[3])    
fruits.pop();    //Remove from end              
fruits.unshift("Apricot");
console.log(fruits[0])
fruits.shift();      //Remove from beginning          
fruits.indexOf("Banana");      
fruits.slice(1, 3);            

 for (var i = 0; i < fruits.length; i++) { 
console.log(fruits[i]); 
} 
// The forEach method (available in ES5) 
fruits.forEach(function(fruit) { 
console.log(fruit); 
});

console.log("\n")
var student = {
    name: "Ayo",
    age: 40,
    matNum: 2121,
    department: "Mass Comm",
    greet: function() {
        return "Hello";
    },
};
console.log(student.greet())
console.log(student.department)
