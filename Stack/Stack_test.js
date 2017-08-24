var Stack = require("./Stack.js");

var S = new Stack();

console.log(S.getSize());
console.log(S.isEmpty());
console.log(S.getTop());

var num_of_elements = 17;
for(var j = 0; j < num_of_elements; j++){
	S.push(j);
}

for(var j = 0; j < num_of_elements; j++){
	S.pop();
}

console.log(S.getSize());
console.log(S.isEmpty());
console.log(S.getTop());