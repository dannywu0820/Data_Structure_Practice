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

function decreaseKeyTest(){
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
	minPQ.popMinimum();
	console.log("-----[decreaseKeyTest]-----");
	minPQ.decreaseKey("Z", 3);
	minPQ.decreaseKey("H", 22);
	minPQ.decreaseKey("H", 3);
}

function insertTest(){
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
	minPQ.popMinimum();
	minPQ.decreaseKey("H", 3);
	console.log("-----[insertTest]-----");
	minPQ.insert(6, "J");
}

function insertTest2(){
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
	
	minPQ.buildMinHeap([]);
	console.log("-----[insertTest2]-----");
	for(let i = 0; i < key_value_pairs.length; i++){
		minPQ.insert(key_value_pairs[i][0], key_value_pairs[i][1]);
		console.log("-----");
	}
}

function main(){
	buildMinHeapTest();
	popMinimumTest();
	decreaseKeyTest();
	insertTest();
	insertTest2();
}

main();