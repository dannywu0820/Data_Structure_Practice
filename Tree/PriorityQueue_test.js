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

function popMinimumTest(){
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

	console.log("-----[popMinimumTest]-----");
	let least_important_job = minPQ.popMinimum();
	while(least_important_job != null){
		console.log(least_important_job);
		console.log("-----");
		least_important_job = minPQ.popMinimum();
	}
}

function main(){
	buildMinHeapTest();
	popMinimumTest();
}

main();