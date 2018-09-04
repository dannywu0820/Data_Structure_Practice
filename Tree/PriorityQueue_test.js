const PQ = require("./PriorityQueue.js");

function buildMinHeapTest(){
	console.log("-----[buildMinHeapTest]-----");
	let minPQ = PQ();
	let key_value_pairs = [
		[12, "C"],
		[15, "H"],
		[20, "E"],
		[22, "B"],
		[2, "D"],
		[4, "F"],
		[10, "I"],
		[7, "A"],
		[8, "G"]
	]

	minPQ.buildMinHeap(key_value_pairs);
}

function main(){
	buildMinHeapTest();
}

main();