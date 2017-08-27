var Linked_List = require("../Linked_List/Linked_List.js");

function Table_Chaining(m){
	this.num_of_data = 0; //n
	this.num_of_slot = m; //m
	this.table = new Array(this.num_of_slot);

	for(var j = 0; j < this.num_of_slot; j++){
		this.table[j] = new Linked_List();
	}
}

Table_Chaining.prototype.prehash = function(key){
	//turn string key into a number
	var key_to_hash = 0;
	for(var i = 0; i < key.length; i++){
		//console.log("Char: "+key[i]+" "+"ASCII: "+key.charCodeAt(i));
		key_to_hash += key.charCodeAt(i);
	}

	return key_to_hash;
};

Table_Chaining.prototype.hash = function(key){
	var key_number = this.prehash(key);
	var index_of_slot = key_number % this.num_of_slot;

	return index_of_slot;
};

Table_Chaining.prototype.insert = function(key, value){
	var slot_to_put = this.hash(key);

	this.table[slot_to_put].insert(0, {key: key, value: value});
};

Table_Chaining.prototype.delete = function(key){
	var slot_to_put = this.hash(key);
	var value = false;
	var current = this.table[slot_to_put].head;
	var position = 0;

	while(current != null){
		if(current.value.key == key){
			value = true;
			break;
		}
		current = current.next;
		position++;
	}

	if(value == true){
		this.table[slot_to_put].remove(position);
	}

	return value;
};

Table_Chaining.prototype.search = function(key){
	var slot_to_put = this.hash(key);
	var value = undefined;
	var current = this.table[slot_to_put].head;

	while(current != null){
		if(current.value.key == key){
			value = current.value.value;
			break;
		}
		current = current.next;
	}

	console.log(value);
	return value;
};

Table_Chaining.prototype.dumpTable = function(){
	for(var i = 0; i < this.num_of_slot; i++){
		console.log("Slot " + i);
		this.table[i].printList();
	}
};

module.exports = Table_Chaining;