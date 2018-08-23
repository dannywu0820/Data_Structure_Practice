const BST = require("./BinarySearchTree.js");

function insertTest(myBST, key_value_pairs){
	let key = key_value_pairs.key;
	let value = key_value_pairs.value;
	for(let i = 0; i < key.length; i++){
		myBST.insertNode(key[i], value[i]);
	}
	myBST.levelOrderTraverse();
	myBST.sort();
}

function searchTest(myBST, key_value_pairs){
	let key = key_value_pairs.key;
	let value = key_value_pairs.value;
	for(let i = 0; i < key.length; i++){
		myBST.searchNode(key[i], value[i]);
	}
}

function deleteTest(myBST, key_value_pairs){
	let key = key_value_pairs.key;
	let value = key_value_pairs.value;
	
	myBST.insertNode(995, "撒旦");
	myBST.deleteNode(995);
	myBST.levelOrderTraverse();
	myBST.sort();
	
	myBST.deleteNode(79);
	myBST.levelOrderTraverse();
	myBST.sort();

	myBST.deleteNode(666);
	myBST.levelOrderTraverse();
	myBST.sort();
	myBST.deleteNode(2);
	/*myBST.deleteNode(513);
	myBST.deleteNode(520);
	myBST.deleteNode(881);
	myBST.deleteNode(888);
	myBST.deleteNode(999);
	myBST.deleteNode(1991);
	myBST.deleteNode(69);*/
	myBST.levelOrderTraverse();
	myBST.sort();
}

function main(){
	let myBST = BST();
	let key_value_pairs = {
		key: [513, 8, 888, 2, 79, 666, 999, 69, 520, 881, 1991],
		value: ["比克", "龜", "悟飯", "克林", "弗力札", "西魯", "普烏", "基紐", "16號", "達爾", "悟空"]
	}
	insertTest(myBST, key_value_pairs);
	searchTest(myBST, key_value_pairs);
	deleteTest(myBST, key_value_pairs);
	searchTest(myBST, key_value_pairs);
}

main();