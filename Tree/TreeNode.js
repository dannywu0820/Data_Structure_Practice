const TreeNode = function(index){
	let count = 0;
	let left_child = null;
	let right_child = null;
	let parent = null;
	let data = index;

	function getData(){
		//console.log("Data: "+data);
		return data;
	}

	function setData(new_data){
		data = new_data;
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

	function getParent(){
		return parent;
	}

	function setParent(node){
		parent = node;
	}

	return {
		getData: function(){
			return getData();
		},
		setData: function(new_data){
			setData(new_data);
		},
		getChild: function(left_or_right){
			return getChild(left_or_right);
		},
		setChild: function(left_or_right, node){
			setChild(left_or_right, node);
		},
		getParent: function(){
			return getParent();
		},
		setParent: function(node){
			setParent(node);
		}
	};
}

module.exports = TreeNode;