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

	return {
		getData: function(){
			return getData();
		},
		setData: function(new_data){
			setData(new_data);
		}
	};
}

module.exports = TreeNode;