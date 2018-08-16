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
		}
	}
}

module.exports = BinaryTree;