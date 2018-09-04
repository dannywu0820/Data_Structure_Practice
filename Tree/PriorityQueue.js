const HeapNode = function(importance, job){
	let key_int = importance;
	let value_str = job;

	function getKey(){
		return key_int;
	}

	function getValue(){
		return value_str;
	}

	return {
		getKey: function(){
			return getKey();
		},
		getValue: function(){
			return getValue();
		}
	}
}

const BinaryHeap = function(...args){
	Object.setPrototypeOf(args, BinaryHeap.prototype);
	return args;
}

BinaryHeap.prototype = Object.create(Array.prototype);
BinaryHeap.prototype.constructor = BinaryHeap;

BinaryHeap.prototype.isEmpty = function(){
	return (this.length <= 1);
}

BinaryHeap.prototype.getParentIndex = function(node_index){
	return Math.floor(node_index/2);
}

BinaryHeap.prototype.getNodeIndex = function(node_value){
	let node_index = 0;
	for(let i = 1; i < this.length; i++){
		if(this[i].getValue() == node_value){
			node_index = i;
			break;
		}
	}

	return node_index;
}

BinaryHeap.prototype.swapNode = function(node1_index, node2_index){
	let temp = this[node1_index];
	this[node1_index] = this[node2_index];
	this[node2_index] = temp;
}

const MinPriorityQueue = function(){
	let binary_heap = new BinaryHeap();
	for(let i = 1; i < 10; i++){
		binary_heap[i] = HeapNode(i, String.fromCharCode(64+i));
	}

	console.log(binary_heap.getNodeIndex("B"));
	console.log(binary_heap.getParentIndex(9));

	binary_heap.swapNode(2, 3);
	for(let i = 1; i < 10; i++){
		console.log(i + ".Key: " + binary_heap[i].getKey() + " Value: " + binary_heap[i].getValue());
	}	

	/*function MinHeapify(){

	}

	function buildMinHeap(){

	}

	function getMinimum(){

	}

	function popMinimum(){

	}

	function decreaseKey(){

	}

	function insert(){

	}*/
}

MinPriorityQueue();

//module.exports = MinPriorityQueue;