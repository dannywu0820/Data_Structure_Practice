var Dictionary = require('./Dictionary.js');
const LINEAR_PROBING = 0;
const QUADRATIC_PROBING = 1;
const DOUBLE_HASHING = 2;

var Table_Open_Addressing = function(m){
	this.num_of_data = 0; //n
	this.num_of_slot = m; //m
	this.table = new Array(this.num_of_slot);

	for(var j = 0; j < this.num_of_slot; j++){
		this.table[j] = new Dictionary();
	}
}

Table_Open_Addressing.prototype.prehash = function(key_str){
	//turn string key into a number
	var key_int = 0;
	var base = 10; //radix
	for(var i = 0; i < key_str.length; i++){
		//console.log("Char: "+key_str[i]+" "+"ASCII: "+key_str.charCodeAt(i));
		key_int += (key_str.charCodeAt(i) * Math.pow(base, i));
	}

	return key_int;
};

Table_Open_Addressing.prototype.hash = function(key, times, type){
	var key_int = this.prehash(key);
	var table_size = this.num_of_slot;

	if(type == LINEAR_PROBING){}
	else if(type == QUADRATIC_PROBING){
		return ((key_int%table_size)+(0.5*times)+(0.5*times*times))%table_size;
	}
	else{}
};

Table_Open_Addressing.prototype.insert = function(key, value){
	var times = 0;

	while(times != this.num_of_slot){
		var slot_to_put = this.hash(key, times, QUADRATIC_PROBING);
		if(this.table[slot_to_put].getSize() == 0){
			this.table[slot_to_put].set(key, value);
			break;
		}
		else{
			times++;
		}
	}

	if(times == this.num_of_slot){
		console.log("Hash Table Overflow");
	}
};

Table_Open_Addressing.prototype.delete = function(key){
	var times = 0;

	while(times != this.num_of_slot){
		var slot_index = this.hash(key, times, QUADRATIC_PROBING);
		var find_value = this.table[slot_index].has(key);
		if(find_value){
			this.table[slot_index].del(key);
			return true;
		}
		else{
			times++;
		}
	}

	if(times == this.num_of_slot){
		return false;
	}
};

Table_Open_Addressing.prototype.search = function(key){
	var times = 0;

	while(times != this.num_of_slot){
		var slot_index = this.hash(key, times, QUADRATIC_PROBING);
		var value = this.table[slot_index].get(key);
		if(value != undefined){
			console.log(value);
			return value;
		}
		else{
			times++;
		}
	}

	if(times == this.num_of_slot){
		console.log(value);
		return value;
	}
};

Table_Open_Addressing.prototype.dumpTable = function(){
	for(var i = 0; i < this.num_of_slot; i++){
		console.log("Slot " + i);

		if(this.table[i].getSize() > 0){
			console.log(this.table[i].getKeys()[0] + ":" +this.table[i].getValues()[0]);
		}
		else{
			console.log("empty");	
		}
	}
};

Table_Open_Addressing.prototype.getProbingSequence = function(key){

};

module.exports = Table_Open_Addressing;