var Table_Chaining = require('./Table_Chaining.js');
var Dictionary = require('./Dictionary.js');

var size_of_table = 5;
var TC = new Table_Chaining(size_of_table);
var D = new Dictionary();

TC.insert("T-Mac", "Magic");
TC.insert("Bryant", "Lakers");
TC.insert("Webber", "Kings");
TC.insert("Arenas", "Wizards");
TC.insert("Davis", "Clippers");
TC.insert("Kidd", "Nets");
TC.dumpTable();

TC.search("T-Mac");
TC.search("Bryant");
TC.search("Webber");
TC.search("Arenas");
TC.search("Davis");
TC.search("kidd");

TC.delete("Arenas");
TC.delete("Bryant");
TC.delete("Kidd");
TC.dumpTable();