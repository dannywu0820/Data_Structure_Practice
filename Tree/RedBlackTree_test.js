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
	console.log("-----[Initialize Example]-----");
	myRBT.insertNode(36, null);
	myRBT.insertNode(16, null);
	myRBT.insertNode(41, null);
	myRBT.insertNode(4, null);
	myRBT.insertNode(22, null);
	myRBT.insertNode(39, null);
	myRBT.insertNode(48, null);
	myRBT.insertNode(3, null);
	myRBT.insertNode(9, null);
	myRBT.insertNode(19, null);
	myRBT.insertNode(27, null);
	myRBT.insertNode(45, null);
	myRBT.insertNode(52, null);
	myRBT.insertNode(1, null);
	myRBT.insertNode(7, null);
	myRBT.insertNode(10, null);
	myRBT.insertNode(24, null);
	myRBT.insertNode(51, null);
	myRBT.insertNode(55, null);

	let n = myRBT.searchNode(16);
	n.setColor(0);
	n = myRBT.searchNode(4);
	n.setColor(1);
	n = myRBT.searchNode(22);
	n.setColor(1);
	n = myRBT.searchNode(9);
	n.setColor(0);
	n = myRBT.searchNode(7);
	n.setColor(1);
	n = myRBT.searchNode(10);
	n.setColor(1);

	myRBT.levelOrderTraverse();
	myRBT.sort();
	
	console.log("-----[Case3->Case4. Delete Node(19)]-----");
	myRBT.deleteNode(19);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	console.log("-----[Case4. Delete Node(45)]-----");
	myRBT.deleteNode(45);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	console.log("-----[Case1->Case4. Delete Node(39)]-----");
	myRBT.deleteNode(39);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	console.log("-----[Case2. Delete Node(7)]-----");
	myRBT.deleteNode(7);
	myRBT.levelOrderTraverse();
	myRBT.sort();

	console.log("-----[Case0. Delete Node(3)]-----");
	myRBT.deleteNode(3);
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