const TreeNode = function(key, value){
	let key_int = key;
	let value_str = value;
	let parent = null;
	let left_child = null;
	let right_child = null;

	function getKey(){
		return key_int;
	}

	function getValue(){
		return value_str;
	}

	function getParent(){
		return parent;
	}

	function setParent(node){
		parent = node
	}

	function getChild(left_or_right){
		if(left_or_right == "L"){
			return left_child;
		}
		else{
			return right_child;
		}
	}

	function setChild(left_or_right, node){
		if(left_or_right == "L"){
			left_child = node;
		}
		else{
			right_child = node;
		}
	}

	return {
		getKey: function(){
			return getKey();
		},
		getValue: function(){
			return getValue();
		},
		getParent: function(){
			return getParent();
		},
		setParent: function(node){
			setParent(node);
		},
		getChild: function(left_or_right){
			return getChild(left_or_right);
		},
		setChild: function(left_or_right, node){
			setChild(left_or_right, node);
		}
	}
}

const BinarySearchTree = function(){
	let root = null;

	function levelOrderTraverse(){
		let queue = [];
		let index = 0;
		queue.push(root);
		while((queue) && (queue.length > 0)){
			let first_node_in_queue = queue.shift();
			index++;
			console.log(index + ". Key: " + first_node_in_queue.getKey() + " Value: " + first_node_in_queue.getValue());

			if(first_node_in_queue.getChild("L") != null){
				queue.push(first_node_in_queue.getChild("L"));
			}
			if(first_node_in_queue.getChild("R") != null){
				queue.push(first_node_in_queue.getChild("R"));
			}
		}
	}

	function findLeftMostNode(current_node){
		while(current_node.getChild("L") != null){
			current_node = current_node.getChild("L");
		}

		return current_node;
	}

	function findSuccessor(current_node){
		if(current_node.getChild("R") != null){
			return findLeftMostNode(current_node.getChild("R"));
		}

		let current = current_node;
		let ancestor = current_node.getParent();
		while((ancestor != null) && (ancestor.getChild("R") == current)){
			current = ancestor;
			ancestor = ancestor.getParent();
		}

		return ancestor;
	}

	function inOrderTraverse(current_node){
		let index = 0;
		let current = findLeftMostNode(current_node);

		while(current != null){
			index++;
			console.log(index + ". Key: " + current.getKey() + " Value: " + current.getValue());
			current = findSuccessor(current);
		}
	}

	function insertNode(key, value){
		let node_to_insert = TreeNode(key, value);
		let current = root;
		let parent_of_current = null;

		while(current != null){
			parent_of_current = current;
			if(key < current.getKey()){
				current = current.getChild("L");
			}
			else{
				current = current.getChild("R");	
			}
		}

		node_to_insert.setParent(parent_of_current);
		if(parent_of_current == null){
			root = node_to_insert;
		}
		else if(key < parent_of_current.getKey()){
			parent_of_current.setChild("L", node_to_insert);
		}
		else{
			parent_of_current.setChild("R", node_to_insert);
		}
	}

	function searchNode(key){
		let current = root;

		while((current != null) && (current.getKey() != key)){
			if(key < current.getKey()){
				current = current.getChild("L");
			}
			else{
				current = current.getChild("R");
			}
		}

		if(current == null){
			console.log("No Such Key");
			return null;
		}
		else{
			console.log("Found");
			return current;
		}
	}

	function deleteNode(){

	}

	return {
		levelOrderTraverse: function(){
			console.log("Level-Order Travseral");
			levelOrderTraverse();
		},
		sort: function(){
			console.log("In-Order Traversal is Sort");
			inOrderTraverse(root);
		},
		searchNode: function(key){
			return searchNode(key);
		},
		insertNode: function(key, value){
			insertNode(key, value);
		},
		deleteNode: function(){

		}
	}
}

module.exports = BinarySearchTree;