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
}

const myArray = new MyArray();
myArray.push('Diego');
myArray.push('Karen');
myArray.push('Oscar');
console.log(myArray);
console.log(myArray.get(1));
console.log(myArray.length);














