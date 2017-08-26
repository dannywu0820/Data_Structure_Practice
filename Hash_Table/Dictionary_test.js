var Dict = require('./Dictionary.js');

var D = new Dict();

D.set("Kobe","Lakers");
D.set("Jordan","Bulls");
D.set("Lebron","Cleveland");
D.set("Kevin","Warriors");

console.log(D.has("Kobe"));
console.log(D.has("jordan"));

console.log(D.get("Lebron"));
console.log(D.get("lebron"));
console.log(D.del("Lebron"));
console.log(D.del("lebron"));

console.log(D.getKeys());
console.log(D.getValues());
console.log(D.getSize());

D.clear();
console.log(D.getKeys());
console.log(D.getValues());
console.log(D.getSize());