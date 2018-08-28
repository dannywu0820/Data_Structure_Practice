const RBT = require("./RedBlackTree.js");

function insertExample1Test(myRBT){
	console.log("-----[Initialize Example1]-----");
	myRBT.insertNode(50, null);
	myRBT.insertNode(20, null);
	myRBT.insertNode(70, null);
	myRBT.insertNode(10, null);
	myRBT.insertNode(40, null);
	myRBT.insertNode(60, null);
	myRBT.insertNode(80, null);
	myRBT.insertNode(30, null);
	myRBT.levelOrderTraverse();
	myRBT.sort();
	
	console.log("-----[Case1. Insert Node(75)]-----");
	myRBT.insertNode(75, null);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	console.log("-----[Case3. Insert Node(25)]-----");
	myRBT.insertNode(25, null);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	console.log("-----[Case2. Insert Node(79)]-----");
	myRBT.insertNode(79, null);
	myRBT.levelOrderTraverse();
	myRBT.sort();
}

function insertExample2Test(myRBT){
	console.log("-----[Initialize Example2]-----");
	myRBT.insertNode(11, null);
	myRBT.insertNode(2, null);
	myRBT.insertNode(14, null);
	myRBT.insertNode(1, null);
	myRBT.insertNode(7, null);
	myRBT.insertNode(15, null);
	myRBT.insertNode(5, null);
	myRBT.insertNode(8, null);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	console.log("-----[Case1->Case2->Case3. Insert Node(4)]-----");
	myRBT.insertNode(4, null);
	myRBT.levelOrderTraverse();
	myRBT.sort();
}

function deleteTest(myRBT){
	myRBT.insertNode(11, null);
	myRBT.insertNode(2, null);
	myRBT.insertNode(14, null);
	myRBT.insertNode(1, null);
	myRBT.insertNode(7, null);
	myRBT.insertNode(15, null);
	myRBT.insertNode(5, null);
	myRBT.insertNode(8, null);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	myRBT.deleteNode(7);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	myRBT.deleteNode(5);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	myRBT.deleteNode(11);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	myRBT.deleteNode(14);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	myRBT.deleteNode(2);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	myRBT.deleteNode(15);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	myRBT.deleteNode(8);
	myRBT.levelOrderTraverse();
	myRBT.sort();
}

function main(){
	let RBT_example1 = RBT();
	insertExample1Test(RBT_example1);
	let RBT_example2 = RBT();
	insertExample2Test(RBT_example2);
	let myRBT = RBT();
	deleteTest(myRBT);
}

main();