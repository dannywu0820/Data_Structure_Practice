const NodeClass = require('./TreeNode.js');
const TreeClass = require('./BinaryTree.js');

/*let node_one = NodeClass();
let node_two = NodeClass();
let tree_one = TreeClass();

node_one.test();
node_one.test();
node_two.test();
node_one.test();
tree_one.postorderTraverse();*/

function traversalTest(){
	let nodes = {};
	for(let i = 1; i < 10; i++){
		let index = String.fromCharCode(64+i);
		let new_node = NodeClass(index);
		console.log(new_node.getData());
		nodes[index] = new_node;
	}
	
	nodes["A"].left_child = nodes["B"];
	nodes["A"].right_child = nodes["C"];
	nodes["B"].left_child = nodes["D"];
	nodes["B"].right_child = nodes["E"];
	nodes["C"].left_child = nodes["F"];
	nodes["E"].left_child = nodes["G"];
	nodes["E"].right_child = nodes["H"];
	nodes["F"].right_child = nodes["I"];

	nodes["B"].parent = nodes["A"];
	nodes["C"].parent = nodes["A"];
	nodes["D"].parent = nodes["B"];
	nodes["E"].parent = nodes["B"];
	nodes["F"].parent = nodes["C"];
	nodes["G"].parent = nodes["E"];
	nodes["H"].parent = nodes["E"];
	nodes["I"].parent = nodes["F"];

	/*nodes["A"].left_child = nodes["B"];
	nodes["B"].left_child = nodes["C"];
	nodes["C"].left_child = nodes["D"];
	nodes["D"].left_child = nodes["E"];
	nodes["E"].left_child = nodes["F"];
	nodes["F"].left_child = nodes["G"];
	nodes["G"].left_child = nodes["H"];
	nodes["H"].left_child = nodes["I"];

	nodes["B"].parent = nodes["A"];
	nodes["C"].parent = nodes["B"];
	nodes["D"].parent = nodes["C"];
	nodes["E"].parent = nodes["D"];
	nodes["F"].parent = nodes["E"];
	nodes["G"].parent = nodes["F"];
	nodes["H"].parent = nodes["G"];
	nodes["I"].parent = nodes["H"];*/

	let myBinaryTree = TreeClass(nodes["A"]);
	myBinaryTree.preOrderTraverse(myBinaryTree.getRoot());
	myBinaryTree.inOrderTraverse(myBinaryTree.getRoot());
	myBinaryTree.postOrderTraverse(myBinaryTree.getRoot());
	myBinaryTree.levelOrderTraverse(myBinaryTree.getRoot());
	myBinaryTree.inOrderTraverseByLoop(myBinaryTree.getRoot());
	myBinaryTree.inOrderReverseByLoop(myBinaryTree.getRoot());
}

function main(){
	traversalTest();
}

main();