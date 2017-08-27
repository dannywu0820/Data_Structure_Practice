function Linked_List(){
	this.head = null;
	this.length = 0;
};

const Node = function(value){
	this.value = value;
	this.next = null;
};

Linked_List.prototype.append = function(element){
	try{
		const new_node = new Node(element);

		this.length++;
		if(this.head == null){
			this.head = new_node;
		}
		else{
			var current = this.head;

			while(current.next != null){
				current = current.next;
			}
			current.next = new_node;
		}
	}
	catch(error){
		console.log("["+error.name+"]: "+error.message);
	}
};

Linked_List.prototype.insert = function(position, element){
	try{
		const new_node = new Node(element);

		if(position >= 0 && position < this.length){
			this.length++;
			if(position == 0){
				new_node.next = this.head;
				this.head = new_node;
			}
			else{
				var current = this.head;
				var prev = null;
				var index = 0;

				while(index < position){
					prev = current;
					current = current.next;
					index++;
				}

				new_node.next = current;
				prev.next = new_node;
			}
		}

		if(position == 0 && this.head == null){
			this.length++;
			this.head = new_node;
		}
	}
	catch(error){
		console.log("["+error.name+"]: "+error.message);
	}
};

Linked_List.prototype.remove = function(position){
	try{
		if(this.head != null && position >= 0 && position < this.length){
			var current = this.head;

			this.length--;
			if(position == 0){
				this.head = current.next;
				delete current;
			}
			else{
				var current = this.head;
				var prev = null;
				var index = 0;

				while(index < position){
					prev = current;
					current = current.next;
					index++;
				}

				prev.next = current.next;
				delete current;
			}
		}
	}
	catch(error){
		console.log("["+error.name+"]: "+error.message);
	}
};

Linked_List.prototype.clear = function(){
	this.head = null;
	this.length = 0;
};

Linked_List.prototype.reverse = function(){
	try{
		if(this.length > 1){
			var prev = null;
			var curr = this.head;
			var proc = curr.next;

			while(proc != null){
				curr.next = prev;
				prev = curr;
				curr = proc;
				proc = proc.next;
			}

			curr.next = prev;
			this.head = curr;
		}
	}
	catch(error){
		console.log("["+error.name+"]: "+error.message);
	}
};

Linked_List.prototype.toString = function(){
	try{
		var str = "";

		if(this.head == null){
			str = "null";
		}
		else{
			var current = this.head;

			while(current.next != null){
				//str = str + current.value + "->";
				str = str + "{" +current.value.key + "," + current.value.value + "}" + "->";
				current = current.next;
			}
			//str = str + current.value;
			str = str + "{" +current.value.key + "," + current.value.value + "}";
		}

		return str;
	}
	catch(error){
		console.log("["+error.name+"]: "+error.message);
	}
};

Linked_List.prototype.printList = function(){
	var str = this.toString();
	console.log(str);
};

module.exports = Linked_List;