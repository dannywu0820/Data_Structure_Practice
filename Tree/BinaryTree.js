let TreeNode = require('./TreeNode.js');
const BinaryTree = function(Node){
	let root = Node;

	function getRoot(){
		return root;
	}

	function preOrderTraverse(current_node){
		if(current_node){
			console.log(current_node.getData());
			preOrderTraverse(current_node.left_child);
			preOrderTraverse(current_node.right_child);
		}
	}

	function inOrderTraverse(current_node){
		if(current_node){
			inOrderTraverse(current_node.left_child);
			console.log(current_node.getData());
			inOrderTraverse(current_node.right_child);
		}
	}

	function postOrderTraverse(current_node){
		if(current_node){
			postOrderTraverse(current_node.left_child);
			postOrderTraverse(current_node.right_child);
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

			if(first_node_in_queue.left_child){
				queue.push(first_node_in_queue.left_child);
			}
			if(first_node_in_queue.right_child){
				queue.push(first_node_in_queue.right_child);
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
		while(current_node.left_child != null){
			current_node = current_node.left_child;
		}

		return current_node;
	}

	function findInOrderSuccessor(current_node){
		let has_right_subtree = (current_node.right_child != null);
		if(has_right_subtree){
			return findLeftMostNode(current_node.right_child);
		}

		//traverse to an ancestor that current is its left child
		let current = current_node;
		let ancestor = current_node.parent;
		while((ancestor != null) && (ancestor.right_child == current)){
			current = ancestor;
			ancestor = ancestor.parent;
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
		}
	}
}

module.exports = BinaryTree;