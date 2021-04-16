function OrderedLinkedList() {
    this.head = null;
}
// notar que Node esta implementado en el archivo DS

// Y el metodo print que permite visualizar la lista:
OrderedLinkedList.prototype.print = function(){
    let print = 'head'
    let pointer = this.head
    while (pointer) {
        print += ' --> ' + pointer.value
        pointer = pointer.next;
    }
    print += ' --> null'
    return print
}



OrderedLinkedList.prototype.add = function (val) {
 var node = new Node(value),
 current = this.head;
 var aux = new Node(value);
// // Si está vacia
if(current === null){

	current.add (val);
}

while (!current.value > val) {
			node = current;
			current = current.next;
		}

aux = node;
node. value = val;
node.next = current;
aux.next = node;
	

//this.head = node;
this._length++;
return node;
}


let ll = new OrderedLinkedList();
       
ll.add(5);
let ll2 = new OrderedLinkedList();
ll2.head = new Node(5);
            //expect(ll).to.be.deep.equal(ll2)
        
        
ll.add(1);
//let ll2 = new OrderedLinkedList();
ll2.head = new Node(5);
ll2.head.next = new Node(1);
            //expect(ll).to.be.deep.equal(ll2)
       
ll.add(4);
//let ll2 = new OrderedLinkedList();
ll2.head = new Node(5);
ll2.head.next = new Node(4);
ll2.head.next.next = new Node(1);
           // expect(ll).to.be.deep.equal(ll2)
 