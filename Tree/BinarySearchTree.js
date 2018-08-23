const TreeNode = function(key, value){
	let key_int = key;
	let value_str = value;
	let parent = null;
	let left_child = null;
	let right_child = null;

	function getKey(){
		return key_int;
	}

	function setKey(new_key){
		key_int = new_key;
	}

	function getValue(){
		return value_str;
	}

	function setValue(new_value){
		value_str = new_value;
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

	function getNumberOfChildren(){
		if(left_child != null && right_child != null){
			return 2;
		}
		else if(left_child != null || right_child != null){
			return 1;
		}
		else{
			return 0;	
		}
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
		},
		setValue: function(new_value){
			setValue(new_value);
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
		},
		getNumberOfChildren: function(){
			return getNumberOfChildren();
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
		}
		else{
			console.log("Found");
		}
		return current;
	}

	function deleteNodeIntuitive(key){
		let node_to_delete = searchNode(key);
		if(node_to_delete == null){
			console.log("No Such Key To Delete");
			return;
		}

		let num_of_children = node_to_delete.getNumberOfChildren();
		console.log(num_of_children);

		let parent_of_delete = null;
		switch(num_of_children){
			case 0:
				parent_of_delete = node_to_delete.getParent();
				if(parent_of_delete == null){
					root = null;
				}
				else if(parent_of_delete.getChild("L") == node_to_delete){
					parent_of_delete.setChild("L", null);
				}
				else{
					parent_of_delete.setChild("R", null);
				}

				delete node_to_delete;
				break;
			case 1:
				parent_of_delete = node_to_delete.getParent();
				let child_of_delete = (node_to_delete.getChild("L") != null)?node_to_delete.getChild("L"):node_to_delete.getChild("R");
				child_of_delete.setParent(parent_of_delete);
				
				if(parent_of_delete == null){
					root = child_of_delete;
				}
				else{
					if(parent_of_delete.getChild("L") == node_to_delete){
						parent_of_delete.setChild("L", child_of_delete);
					}
					else{
						parent_of_delete.setChild("R", child_of_delete);
					}
				}

				delete node_to_delete;
				break;
			case 2:
				let node_to_release_memory = findSuccessor(node_to_delete);
				let parent_of_release_memory = node_to_release_memory.getParent(); 
				let child_of_release_memory = node_to_release_memory.getChild("R");
				
				if(child_of_release_memory != null){
					child_of_release_memory.setParent(parent_of_release_memory);
				}

				if(parent_of_release_memory == null){
					root = child_of_release_memory;
				}
				else{
					if(parent_of_release_memory.getChild("L") == node_to_release_memory){
						parent_of_release_memory.setChild("L", child_of_release_memory);
					}
					else{
						parent_of_release_memory.setChild("R", child_of_release_memory);
					}
				}

				node_to_delete.setKey(node_to_release_memory.getKey());
				node_to_delete.setValue(node_to_release_memory.getValue());
				delete node_to_release_memory;
				break;
			default:
				break;
		}
	}

	function deleteNode(key){
		//1.check if the key is in binary search tree
		let node_to_delete = searchNode(key);
		if(node_to_delete == null){
			console.log("No Such Node");
			return;
		}

		//2.adjust node_to_release_memory to a node that has at most one child
		let node_to_release_memory = node_to_delete;
		if((node_to_delete.getChild("L") != null) && (node_to_delete.getChild("R") != null)){
			node_to_release_memory = findSuccessor(node_to_delete);
		}

		//3.determine child_of_release_memory given that it has at most one child
		let child_of_release_memory = null;
		if(node_to_release_memory.getChild("L") != null){
			child_of_release_memory = node_to_release_memory.getChild("L");
		}
		else{
			child_of_release_memory = node_to_release_memory.getChild("R");	
		}

		//4.set parent of child_of_release_memory to parent of node_to_release_memory
		let parent_of_release_memory = node_to_release_memory.getParent()
		if(child_of_release_memory != null){
			child_of_release_memory.setParent(parent_of_release_memory);
		}

		//5.set child of parent_of_release_memory to child of node_to_release_memory
		if(parent_of_release_memory == null){
			root = child_of_release_memory;
		}
		else if((parent_of_release_memory.getChild("L")) == node_to_release_memory){
			parent_of_release_memory.setChild("L", child_of_release_memory);
		}
		else{
			parent_of_release_memory.setChild("R", child_of_release_memory);
		}

		//6.
		if(node_to_release_memory != node_to_delete){
			node_to_delete.setKey(node_to_release_memory.getKey());
			node_to_delete.setValue(node_to_release_memory.getValue());
		}

		delete node_to_release_memory;
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
		deleteNode: function(key){
			deleteNodeIntuitive(key);
			//deleteNode(key);
		}
	}
}

module.exports = BinarySearchTree;