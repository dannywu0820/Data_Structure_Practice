var Table_Open_Addressing = require('./Table_Open_Addressing.js');

var size_of_table = 5;
var TC = new Table_Open_Addressing(size_of_table);

console.log(TC.prehash("T-Mac"));
console.log(TC.hash("T-Mac", 5, 1));

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