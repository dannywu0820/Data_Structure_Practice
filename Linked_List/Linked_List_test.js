var Linked_List = require("./Linked_List.js");

var LL = new Linked_List();

LL.append(1);
LL.append(2);
LL.append(3);
LL.printList();

LL.clear();
LL.printList();

LL.insert(0, 5);
LL.reverse();
LL.printList();

LL.insert(LL.length-1,6);
LL.reverse();
LL.printList();

LL.insert(LL.length-1,7);
LL.insert(0, 8);
LL.printList();

LL.reverse();
LL.printList();

LL.insert(2, 10);
LL.reverse();
LL.printList();