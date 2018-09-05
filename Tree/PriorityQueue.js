const HeapNode = function(importance, job){
	let key_int = importance;
	let value_str = job;

	function getKey(){
		return key_int;
	}

	function setKey(new_key){
		key_int = new_key;
	}

	function getValue(){
		return value_str;
	}

	return {
		getKey: function(){
			return getKey();
		},
		setKey: function(new_key){
			setKey(new_key);
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

BinaryHeap.prototype.printHeap = function(){
	for(let i = 1; i < this.length; i++){
		console.log(i + ".Key: " + this[i].getKey() + " Value: " + this[i].getValue());
	}
}

const MinPriorityQueue = function(){
	let binary_heap = new BinaryHeap();	

	function MinHeapify(node_index){
		let left_child_index = node_index * 2;
		let right_child_index = left_child_index + 1;
		let smallest = node_index;

		if((left_child_index <= (binary_heap.length - 1)) && (binary_heap[left_child_index].getKey() < binary_heap[smallest].getKey())){
			smallest = left_child_index;
		}

		if((right_child_index <= (binary_heap.length - 1)) && (binary_heap[right_child_index].getKey() < binary_heap[smallest].getKey())){
			smallest = right_child_index;
		}

		if(smallest != node_index){
			binary_heap.swapNode(smallest, node_index);
			MinHeapify(smallest);
		}
	}

	function buildMinHeap(key_value_pairs){

		for(let i = 0; i < key_value_pairs.length; i++){
			let new_node = HeapNode(key_value_pairs[i][0], key_value_pairs[i][1]);
			binary_heap[i+1] = new_node;
		}

		for(let node_index = Math.floor((binary_heap.length - 1)/2); node_index > 0; node_index--){
			MinHeapify(node_index);
		}

		binary_heap.printHeap();
	}

	function getMinimum(){
		return binary_heap[1].getValue();
	}

	function popMinimum(){
		if(binary_heap.isEmpty()){
			console.log("Heap Is Empty!!!");
			return null;
		}

		let min = getMinimum();
		binary_heap.swapNode(1, (binary_heap.length - 1));
		binary_heap.pop();
		MinHeapify(1);

		binary_heap.printHeap();

		return min;
	}

	function decreaseKey(node_value, new_key){
		let node_index = binary_heap.getNodeIndex(node_value);
		if(node_index == 0){
			console.log("No Such Node!!!");
			return;
		}
		
		if(new_key > binary_heap[node_index].getKey()){
			console.log("New Key Should Be Smaller!!!");
			return;
		}
		
		binary_heap[node_index].setKey(new_key);

		let parent_index = binary_heap.getParentIndex(node_index);
		while((node_index > 1) && (binary_heap[node_index].getKey() < binary_heap[parent_index].getKey())){
			binary_heap.swapNode(node_index, parent_index);
			node_index = parent_index;
			parent_index = binary_heap.getParentIndex(node_index);
		}

		binary_heap.printHeap();
	}

	function insert(key, value){
		let new_node = HeapNode(key, value);
		if(binary_heap.isEmpty()){
			binary_heap[1] = new_node;
		}
		else{
			binary_heap.push(new_node);
		}
		decreaseKey(value, key);
	}

	return {
		buildMinHeap: function(key_value_pairs){
			buildMinHeap(key_value_pairs);
		},
		popMinimum: function(){
			return popMinimum();
		},
		decreaseKey: function(node_value, new_key){
			decreaseKey(node_value, new_key);
		},
		insert: function(key, value){
			insert(key, value);
		}
	}
}

module.exports = MinPriorityQueue;