/**
 * Manejo de arrays javascript
 */


//const array = ['Diego', 'Karen', "Oscar"];
// console.log(array);
// console.log(array[0]);
// array.push('Ana');
// console.log(array);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop(){
    this.length--;
    const lasItem = this.data[this.length];
    delete this.data[this.length];
    return lasItem;
  }

  delete(index){
    const item = this.data[index];
    shifIndex(index);
    return item;
  }

  shifIndex(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('Diego');
myArray.push('Karen');
myArray.push('Oscar');
console.log(myArray);
console.log(myArray.get(1));
console.log(myArray.length);

myArray.pop();
console.log(myArray);




/**
 * Hash table
 */

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {//ejemplo de una funcion hash
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          this.data[address].splice(i, 1);
          return deletedValue;
        }
      }
    }
    return undefined;
  }

}

const myHashTable = new HashTable(50);
myHashTable.set('Diego', 1990);
myHashTable.set('Mariana', 1998);
console.log(myHashTable.set('Alejandra', 2000));
console.log(myHashTable.getAllKeys());




/**
 * Linked List
 */

class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class MySinglyLinkedList{
  constructor(value){
      this.head ={
          value: value,
          next: null,
      };
      this.tail = this.head;
      this.length = 1;
  }

  append(value){
      //Recibimos un valor
      const newNode = new Node(value);

      //Agregamos el nuevo nodo
      this.tail.next = newNode;

      //recolocamos el puntero de la cola
      this.tail = newNode;
      this.length++;
      return this;
  }

  preppend(value){
    //Recibimos un valor
    const newNode = new Node(value);

    //El anterior head al nuevo next
    newNode.next = this.head;

    //recolocamos el puntero del head
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    let pointer = this.head;
    let count = 0;
    while (pointer != null) {
      if (count === index) 
        return pointer;
      pointer = pointer.next;
      count++;
    }
    return null;
  }
  insert(value, index) {
    if (index === 0) //caso agregar al head
      return this.prepend(value);
    if (index >= this.length) //caso agregar al tail
      return this.append(value);
    if (index > 0 && index < this.length) { //caso intermedio
      const prevPointer = this.get(index - 1); //busca el nodo anterior
      if (prevPointer) {
        const nextPointer = prevPointer.next;
        const node = new Node(value);
        node.next = nextPointer;
        prevPointer.next = node;
        this.length++;
        return;
      }
    }
    // console.log("index out of bounds: " + index);
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    if (index > 0 && index < this.length) {
      const prevPointer = this.get(index - 1);
      if (prevPointer) {
        const pointer = prevPointer.next;
        if (pointer) prevPointer.next = pointer.next;
        if (pointer === this.tail) this.tail = prevPointer;
        this.length--;
        return;
      }
    }
    console.log("index out of bounds: " + index);
  }

  // toString() {
  //   let pointer = this.head;
  //   let s = "";
  //   while (pointer != null) {
  //     s +=
  //       pointer === this.head
  //         ? "(H: "
  //         : pointer === this.tail
  //         ? "(T: "
  //         : "(N: ";
  //     s += pointer.value + ") -> ";
  //     pointer = pointer.next;
  //   }
  //   s += "NULL | length = " + this.length;
  //   console.log(s);
  // }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(12);
myLinkedList.append(13);
myLinkedList.preppend(15);





/**
 * Stack
 */
class Node {
  constructor(value){
      this.value = value
      this.prev = null
  }
}

class Stack{
  constructor(){
      this.top = null;
      this.bottom = null;
      this.lenght = 0;
  }

  push(value){
      let newNode = new Node(value);
      if (this.lenght == 0){
          this.bottom = newNode;
      }
      newNode.prev = this.top;
      this.top = newNode;
      this.lenght++;
      return this;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.push(5))




/**
 * Queue
 */

class Node{
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue{
  constructor(){
      this.last = null;
      this.first = null;
      this.length = 0;
  }

  enqueue(value){
      const element = new Node(value);
      if(this.length === 0) {
          this.first = element;
          this.last = this.first;
      }else{
          this.last.next = element;
          this.last = element;
      }
      this.length++;
      return this;
  }

  dequeue(){
      // const newFirst = this.first.next;
      // this.first = newFirst;
      this.first = this.first.next;
      this.length--;
      return this.first;
  }

  peek(){
      return this.first;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.enqueue(3));



/**
 * Binary search tree implemented in arrays
 */
class BinaryTree {
  constructor() {
    this.data = [];
  }

  add(newValue) {
    let currentNode = 0;

    while (this.getData(currentNode) !== undefined) {
      if (newValue < this.getData(currentNode)) {
        currentNode = this.getLeftChild(currentNode);
      } else {
        currentNode = this.getRightChild(currentNode);
      }
    }

    this.data[currentNode] = newValue;
  }

  getData(index) {
    return this.data[index];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return 2 * index + 1;
  }

  getRightChild(index) {
    return 2 * index + 2;
  }

  search(value) {
    let currentNode = 0;

    while (this.getData(currentNode) != value) {
      if (value < this.getData(currentNode)) {
        currentNode = this.getLeftChild(currentNode);
      } else {
        currentNode = this.getRightChild(currentNode);
      }
    }

    return {
      found: currentNode != null,
      data: {
        value,
        index: currentNode,
        parentValue: this.getData(this.getParent(currentNode)),
        left: this.getData(this.getLeftChild(currentNode)),
        right: this.getData(this.getRightChild(currentNode)),
      },
    };
  }
}

const binaryTree = new BinaryTree();
binaryTree.add(10);
binaryTree.add(4);
binaryTree.add(2);
binaryTree.add(8);
binaryTree.add(20);
binaryTree.add(17);
binaryTree.add(170);

console.log(binaryTree.data);
console.log(binaryTree.search(8));


/**
 * Graph
 */

 //edge list
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
];


// Adyacent list
//            ===== INDICES =====
//              0    1       2          3
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
};

//Adjacent Matrix
const graph = [
// ==== NODOS ====
// 1  2  3  4 
  [0, 0, 1, 0], // 0
  [0, 0, 1, 1], // 1
  [1, 1, 0, 1], // 2
  [0, 1, 1, 0]  // 3
];

const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
};

//grafo con clase
class Grafo {
  constructor() {
      this.nodos = 0;
      this.AdjacentList = {};
  }

  // Add Vertice/Nodo
  addVertice(node){
      this.AdjacentList[node] = [];
      this.nodos++;
  }

  // Add Conexion/Edge
  addConex(nodo1, nodo2){
      // Conexion entre gragos
      this.AdjacentList[nodo1].push(nodo2);
      this.AdjacentList[nodo2].push(nodo1);
  }
}

const myGraph = new Grafo();

// Vertices
myGraph.addVertice(1);
myGraph.addVertice(3);
myGraph.addVertice(4);
myGraph.addVertice(5);
myGraph.addVertice(6);
myGraph.addVertice(8);

// Conexiones
myGraph.addConex(8,4)
myGraph.addConex(4,1)
myGraph.addConex(1,3)
myGraph.addConex(1,6)
myGraph.addConex(3,6)
myGraph.addConex(3,5)
myGraph.addConex(5,4)

/**
  // RESULTADO:
  1: (3) [4, 3, 6]
  3: (3) [1, 6, 5]
  4: (3) [8, 1, 5]
  5: (2) [3, 4]
  6: (2) [1, 3]
  8: [4] 
*/