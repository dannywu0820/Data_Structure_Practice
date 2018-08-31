const RED = 0;
const BLACK = 1;

const TreeNode = function(key, value){
	let key_int = key;
	let value_str = value;
	let color = RED;
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
		value_str = new_value
	}

	function getColor(){
		return color;
	}

	function setColor(new_color){
		color = new_color;
	}

	function getParent(){
		return parent;
	}

	function setParent(node){
		parent = node;
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
		setKey: function(new_key){
			setKey(new_key);
		},
		getValue: function(){
			return getValue();
		},
		setValue: function(new_value){
			setValue(new_value);
		},
		getColor: function(){
			return getColor();
		},
		setColor: function(new_color){
			setColor(new_color);
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

const RedBlackTree = function(){
	let neel = TreeNode(null, null);
	neel.setColor(BLACK);
	let root = neel;

	function levelOrderTraverse(){
		let queue = [];
		let index = 0;
		queue.push(root);
		while((queue) && (queue.length > 0)){
			let first_node_in_queue = queue.shift();
			index++;
			console.log(index + ". Key: " + first_node_in_queue.getKey() + " Color: " + (first_node_in_queue.getColor()?"Black":"Red"));

			if(first_node_in_queue.getChild("L") != neel){
				queue.push(first_node_in_queue.getChild("L"));
			}
			if(first_node_in_queue.getChild("R") != neel){
				queue.push(first_node_in_queue.getChild("R"));
			}
		}
	}

	function findLeftMostNode(current_node){
		while(current_node.getChild("L") != neel){
			current_node = current_node.getChild("L");
		}

		return current_node;
	}

	function findSuccessor(current_node){
		if(current_node.getChild("R") != neel){
			return findLeftMostNode(current_node.getChild("R"));
		}

		let current = current_node;
		let ancestor = current_node.getParent();
		while((ancestor != neel) && (ancestor.getChild("R") == current)){
			current = ancestor;
			ancestor = ancestor.getParent();
		}

		return ancestor;
	}

	function inOrderTraverse(current_node){
		let index = 0;
		let current = findLeftMostNode(current_node);

		while(current != neel){
			index++;
			console.log(index + ". Key: " + current.getKey() + " Color: " + (current.getColor()?"Black":"Red"));
			current = findSuccessor(current);
		}
	}

	function rotateLeft(nodeX){
		//1.
		let nodeY = nodeX.getChild("R");
		nodeX.setChild("R", nodeY.getChild("L"));
		if(nodeY.getChild("L") != neel){
			nodeY.getChild("L").setParent(nodeX);
		}

		//2.
		let parentX = nodeX.getParent();
		nodeY.setParent(parentX);
		if(parentX == neel){
			root = nodeY;
		}
		else if(parentX.getChild("L") == nodeX){
			parentX.setChild("L", nodeY);
		}
		else{
			parentX.setChild("R", nodeY);
		}

		//3.
		nodeX.setParent(nodeY);
		nodeY.setChild("L", nodeX);
	}

	function rotateRight(nodeY){
		//1.
		let nodeX = nodeY.getChild("L");
		nodeY.setChild("L", nodeX.getChild("R"));
		if(nodeX.getChild("R") != neel){
			nodeX.getChild("R").setParent(nodeY);
		}

		//2.
		let parentY = nodeY.getParent();
		nodeX.setParent(parentY);
		if(parentY == neel){
			root = nodeX;
		}
		else if(parentY.getChild("L") == nodeY){
			parentY.setChild("L", nodeX);
		}
		else{
			parentY.setChild("R", nodeX);	
		}

		//3.
		nodeY.setParent(nodeX);
		nodeX.setChild("R", nodeY);
	}

	function fixInsertion(node){
		let current = node;

		while(current.getParent().getColor() == RED){
			if(current.getParent() == current.getParent().getParent().getChild("L")){
				let uncle = current.getParent().getParent().getChild("R");
				if(uncle.getColor() == RED){ //Case1
					current.getParent().setColor(BLACK);
					uncle.setColor(BLACK);
					current.getParent().getParent().setColor(RED);
					current = current.getParent().getParent();
				}
				else{
					if(current == current.getParent().getChild("R")){ //Case2
						current = current.getParent();
						rotateLeft(current);
					}

					//Case3
					current.getParent().setColor(BLACK);
					current.getParent().getParent().setColor(RED);
					rotateRight(current.getParent().getParent());
				}
			}
			else{
				let uncle = current.getParent().getParent().getChild("L");
				if(uncle.getColor() == RED){ //Case1
					current.getParent().setColor(BLACK);
					uncle.setColor(BLACK);
					current.getParent().getParent().setColor(RED);
					current = current.getParent().getParent();
				}
				else{
					if(current == current.getParent().getChild("L")){ //Case2
						current = current.getParent();
						rotateRight(current);
					}

					//Case3
					current.getParent().setColor(BLACK);
					current.getParent().getParent().setColor(RED);
					rotateLeft(current.getParent().getParent());
				}
			}
		}
		root.setColor(BLACK);
	}

	function insertNode(key, value){
		let node_to_insert = TreeNode(key, value);
		node_to_insert.setChild("L", neel);
		node_to_insert.setChild("R", neel);
		let current = root;
		let parent_of_current = neel;

		while(current != neel){
			parent_of_current = current;
			if(key < current.getKey()){
				current = current.getChild("L");
			}
			else{
				current = current.getChild("R");	
			}
		}

		node_to_insert.setParent(parent_of_current);
		if(parent_of_current == neel){
			root = node_to_insert;
		}
		else if(key < parent_of_current.getKey()){
			parent_of_current.setChild("L", node_to_insert);
		}
		else{
			parent_of_current.setChild("R", node_to_insert);
		}

		fixInsertion(node_to_insert);
	}

	function searchNode(key){
		let current = root;

		while((current != neel) && (current.getKey() != key)){
			if(key < current.getKey()){
				current = current.getChild("L");
			}
			else{
				current = current.getChild("R");
			}
		}

		if(current == neel){
			console.log("No Such Key");
		}
		else{
			console.log("Found");
		}
		return current;
	}

	function fixDeletetion(node){
		let current = node;
		
		while((current != root) && (current.getColor() == BLACK)){
			if(current == current.getParent().getChild("L")){
				let sibling = current.getParent().getChild("R");

				if(sibling.getColor() == RED){ //Case1
					sibling.setColor(BLACK);
					current.getParent().setColor(RED);
					rotateLeft(current.getParent());
					sibling = current.getParent().getChild("R");
				}

				//enter into Case2,3,4 after fixing from Case1
				if((sibling.getChild("L").getColor() == BLACK) && (sibling.getChild().getColor("R") == BLACK)){ //Case2
					sibling.setColor(RED);
					current = current.getParent();
				}
				else{
					if(sibling.getChild("R").getColor() == BLACK){ //Case3
						sibling.setColor(RED);
						sibling.getChild("L").setColor(BLACK);
						rotateRight(sibling);
						sibling = current.getParent().getChild("R");
					}

					//Case4
					sibling.setColor(current.getParent().getColor());
					current.getParent().setColor(BLACK);
					sibling.getChild("R").setColor(BLACK);
					rotateLeft(current.getParent());
					current = root;
				}
			}
			else{
				let sibling = current.getParent().getChild("L");

				if(sibling.getColor() == RED){ //Case1
					sibling.setColor(BLACK);
					current.getParent().setColor(RED);
					rotateRight(current.getParent());
					sibling = current.getParent().getChild("L");
				}

				//enter into Case2,3,4 after fixing from Case1
				if((sibling.getChild("L").getColor() == BLACK) && (sibling.getChild().getColor("R") == BLACK)){ //Case2
					sibling.setColor(RED);
					current = current.getParent();
				}
				else{
					if(sibling.getChild("L").getColor() == BLACK){ //Case3
						sibling.setColor(RED);
						sibling.getChild("R").setColor(BLACK);
						rotateLeft(sibling);
						sibling = current.getParent().getChild("L");
					}

					//Case4
					sibling.setColor(current.getParent().getColor());
					current.getParent().setColor(BLACK);
					sibling.getChild("L").setColor(BLACK);
					rotateRight(current.getParent());
					current = root;
				}
			}
		}
		current.setColor(BLACK);
	}

	function deleteNode(key){
		//1.make sure the node you want to delete exists
		let node_to_delete = searchNode(key);
		if(node_to_delete == neel){
			console.log("No Such Node To Delete");
			return;
		}

		//2.determine the node to release memory based on the number of children that the node you want to delete has
		let node_to_release_memory = null;
		if((node_to_delete.getChild("L") != neel) && (node_to_delete.getChild("R") != neel)){
			node_to_release_memory = findSuccessor(node_to_delete);
		}
		else{
			node_to_release_memory = node_to_delete;
		}

		//3.set parent of left/right child to the parent of itself, even when the child is NIL
		let child_of_release_memory = neel;
		if(node_to_release_memory.getChild("L") != neel){
			child_of_release_memory = node_to_release_memory.getChild("L");
		}
		else if(node_to_release_memory.getChild("R") != neel){
			child_of_release_memory = node_to_release_memory.getChild("R");
		}
		else{
			child_of_release_memory = neel;	
		}

		child_of_release_memory.setParent(node_to_release_memory.getParent());
		
		//4.set child of its parent to the child of itself
		let parent_of_release_memory = node_to_release_memory.getParent();
		if(parent_of_release_memory == neel){
			root = child_of_release_memory;
		}
		else if(node_to_release_memory == parent_of_release_memory.getChild("L")){
			parent_of_release_memory.setChild("L", child_of_release_memory);
		}
		else{
			parent_of_release_memory.setChild("R", child_of_release_memory);
		}

		//5.copy the data in the node to clean memory to the node you want to delete if they are different
		if(node_to_release_memory != node_to_delete){
			node_to_delete.setKey(node_to_release_memory.getKey());
			node_to_delete.setValue(node_to_release_memory.getValue());
		}

		//6.fix
		if(node_to_release_memory.getColor() == BLACK){
			fixDeletetion(child_of_release_memory);
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
		insertNode: function(key, value){
			insertNode(key, value);
		},
		deleteNode: function(key){
			deleteNode(key);
		},
		searchNode: function(key){
			return searchNode(key);
		}
	}
}

module.exports = RedBlackTree;