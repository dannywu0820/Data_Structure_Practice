var Dictionary = function(){
	this.items = {};
}

Dictionary.prototype.set = function (key, value){
	this.items[key] = value;
	console.log(key+":"+value);
};

Dictionary.prototype.has = function (key){
	return key in this.items;
};

Dictionary.prototype.get = function (key){
	return this.items[key];
};

Dictionary.prototype.del = function (key){
	if(this.has(key)){
		delete this.items[key];
		return true;
	}
	return false;
};

Dictionary.prototype.getKeys = function (){
	return Object.keys(this.items);
};

Dictionary.prototype.getValues = function (){
	var values = [];
	for(var key in this.items){
		values.push(this.items[key]);
	}
	return values;
};

Dictionary.prototype.getSize = function(){
	return Object.keys(this.items).length;
};

Dictionary.prototype.clear = function (){
	this.items = {};
};

module.exports = Dictionary;