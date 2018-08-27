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
		}
	}
}

module.exports = RedBlackTree;