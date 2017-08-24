function Stack(){
	this.top = -1; //index of Last In element
	this.capacity = 1; //allocated memory space
	this.container = new Array(this.capacity);
};

Stack.prototype.push = function(element){
	if(this.top == this.capacity-1){
		this.doubleCapacity();
	}
	this.top++;
	this.container[this.top] = element;
	console.log("Push:" + element);
};

Stack.prototype.pop = function(){
	var element = this.container[this.top];
	delete this.container[this.top];
	this.top--;
	console.log("Pop:" + element);
};

Stack.prototype.getTop = function(){
	if(this.isEmpty()){
		return null;
	}

	return this.container[top];
};

Stack.prototype.isEmpty = function(){
	return (this.top == -1);
};

Stack.prototype.getSize = function(){
	return (this.top+1);
};

Stack.prototype.doubleCapacity = function(){
	this.capacity *= 2;
	console.log("Double Capacity: " + this.capacity);

	var new_container = new Array(this.capacity);
	for(var i = 0; i <= this.top; i++){
		new_container[i] = this.container[i];
	}
	this.container = new_container;
};

module.exports = Stack;