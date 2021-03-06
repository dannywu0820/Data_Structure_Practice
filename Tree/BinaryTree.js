let TreeNode = require('./TreeNode.js');
const BinaryTree = function(Node){
	let root = Node;

	function getRoot(){
		return root;
	}

	function preOrderTraverse(current_node){
		if(current_node){
			console.log(current_node.getData());
			preOrderTraverse(current_node.getChild("L"));
			//preOrderTraverse(current_node.left_child);
			preOrderTraverse(current_node.getChild("R"));
			//preOrderTraverse(current_node.right_child);
		}
	}

	function inOrderTraverse(current_node){
		if(current_node){
			inOrderTraverse(current_node.getChild("L"));
			//inOrderTraverse(current_node.left_child);
			console.log(current_node.getData());
			inOrderTraverse(current_node.getChild("R"));
			//inOrderTraverse(current_node.right_child);
		}
	}

	function postOrderTraverse(current_node){
		if(current_node){
			postOrderTraverse(current_node.getChild("L"));
			//postOrderTraverse(current_node.left_child);
			postOrderTraverse(current_node.getChild("R"));
			//postOrderTraverse(current_node.right_child);
			console.log(current_node.getData());
		}
	}

	function levelOrderTraverse(current_node){
		let queue = [];
		let index = 0;
		queue.push(current_node);

		while((queue && queue.length)){
			let first_node_in_queue = queue.shift();
			index++;
			console.log(index + ". " + first_node_in_queue.getData());

			let left_child = first_node_in_queue.getChild("L");
			if(left_child){
				queue.push(left_child);
			}
			let right_child = first_node_in_queue.getChild("R");
			if(right_child){
				queue.push(right_child);
			}
		}
	}

	/********************************************
	*in-order traversal using loop instead of recursion
	*findLeftMostNode: find the left most node of a binary tree
	*findInOrderSuccessor: find the successor node in the order of in-order traversal
	*inOrderTraverseByLoop: loop version of in-order traversal
	********************************************/

	function findLeftMostNode(current_node){
		while(current_node.getChild("L") != null){
			current_node = current_node.getChild("L");
		}

		return current_node;
	}

	function findInOrderSuccessor(current_node){
		let has_right_subtree = (current_node.getChild("R") != null);
		if(has_right_subtree){
			return findLeftMostNode(current_node.getChild("R"));
		}

		//traverse to an ancestor that current is its left child
		let current = current_node;
		let ancestor = current_node.getParent();
		while((ancestor != null) && (ancestor.getChild("R") == current)){
			current = ancestor;
			ancestor = ancestor.getParent();
		}

		return ancestor;
	}

	function inOrderTraverseByLoop(current_node){
		let order = 0;
		let current = findLeftMostNode(current_node);

		while(current != null){
			order++;
			console.log(order + ". " + current.getData());
			current = findInOrderSuccessor(current);
		}
	}

	/********************************************
	*in-order reversed traversal using loop instead of recursion
	*findRightMostNode: find the right most node of a binary tree
	*findInOrderPredecessor: find the predecessor node in the order of in-order traversal
	*inOrderReverseByLoop: loop version of in-order reversed traversal
	********************************************/

	function findRightMostNode(current_node){
		while(current_node.getChild("R") != null){
			current_node = current_node.getChild("R");
		}

		return current_node;
	}

	function findInOrderPredecessor(current_node){
		let has_left_subtree = (current_node.getChild("L") != null);
		if(has_left_subtree){
			return findRightMostNode(current_node.getChild("L"));
		}

		//traverse to an ancestor that current is its right child
		let current = current_node;
		let ancestor = current_node.getParent();
		while((ancestor != null) && (ancestor.getChild("L") == current)){
			current = ancestor;
			ancestor = ancestor.getParent();
		}

		return ancestor;
	}

	function inOrderReverseByLoop(current_node){
		let current = findRightMostNode(current_node);

		while(current != null){
			console.log(current.getData());
			current = findInOrderPredecessor(current);
		}
	}

	function constructByLevelOrder(str_to_construct_tree){
		char_data = str_to_construct_tree.split(" ");

		root = TreeNode(char_data[0]);
		let current = root;
		let i = 1;
		let queue = [];
		while(i < char_data.length){
			if((char_data[i].charCodeAt(0) >= 65) && (char_data[i].charCodeAt(0) <= 90)){
				console.log(char_data[i]);
				let new_node = TreeNode(char_data[i]);
				current.setChild("L", new_node);
				new_node.setParent(current);
				queue.push(new_node);
			}
			i++;

			if(i >= char_data.length) break;

			if((char_data[i].charCodeAt(0) >= 65) && (char_data[i].charCodeAt(0) <= 90)){
				console.log(char_data[i]);
				let new_node = TreeNode(char_data[i]);
				current.setChild("R", new_node);
				new_node.setParent(current);
				queue.push(new_node);
			}
			i++

			current = queue.shift();
		}
	}

	function insertByLevelOrder(node){
		if(root == null){
			root = node;
			return;
		}

		let current = root;
		let queue = [];
		while(current){
			if(current.getChild("L") == null){
				current.setChild("L", node);
				node.setParent(current);
				break;
			}
			else{
				queue.push(current.getChild("L"));
			}

			if(current.getChild("R") == null){
				current.setChild("R", node);
				node.setParent(current);
				break;
			}
			else{
				queue.push(current.getChild("R"));
			}

			current = queue.shift();
		}
	}

	return {
		getRoot: function(){
			return getRoot();
		},
		preOrderTraverse: function(current_node){
			console.log("Pre-Order Traversal(VLR)");
			preOrderTraverse(current_node);
		},
		inOrderTraverse: function(current_node){
			console.log("In-Order Traversal(LVR)");
			inOrderTraverse(current_node);
		},
		postOrderTraverse: function(current_node){
			console.log("Post-Order Traversal(LRV)");
			postOrderTraverse(current_node);
		},
		levelOrderTraverse: function(current_node){
			console.log("Level-Order Traversal");
			levelOrderTraverse(current_node);
		},
		inOrderTraverseByLoop: function(current_node){
			console.log("In-Order Traversal Loop Version");
			inOrderTraverseByLoop(current_node);
		},
		inOrderReverseByLoop: function(current_node){
			console.log("In-Order Reversed Traversal Loop Version");
			inOrderReverseByLoop(current_node);
		},
		constructByLevelOrder: function(str_to_construct_tree){
			console.log("Construct Tree By Level-Order");
			constructByLevelOrder(str_to_construct_tree);
		},
		insertByLevelOrder: function(node){
			console.log("Insert Node By Level-Order");
			insertByLevelOrder(node);
		}
	}
}

module.exports = BinaryTree;