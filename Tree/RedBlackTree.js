const TreeNode = function(key, value){
	let key_int = key;
	let value_str = value;
	let color = null;
	let parent = null;
	let left_child = null;
	let right_child = null;

	function getKey(){

	}

	function setKey(){

	}

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
	let root = null;
	let neel = null;

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

	return {
		rotateLeft: function(nodeX){
			rotateLeft(nodeX);
		},
		rotateRight: function(nodeY){
			rotateRight(nodeY);
		}
	}
}

module.exports = RedBlackTree;