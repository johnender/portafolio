
/*Default params*/

function newFunction2 (name='Angel', age = 23, country = 'VE'){
  console.log(name, age, country);
}

newFunction2();

newFunction2('Johnn', 25, 'CR');



//concatenar
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';

// es6
let epicPhraseES6 = `${hello} ${world}!`;

console.log(epicPhrase);
console.log(epicPhraseES6);



//Ejemplo de uso de promesas //manejo asincronico

const helloPromise2 = () => {
  return new Promise((resolve, reject) => {      
      if (true)  {
          resolve((9).concat("9")) // lanza un TypeError
      } else {
          reject('Ups!!');
      }
  });
}

helloPromise2()
  .then(response => console.log(response))
  .catch(error => {
      console.log("En el catch");
      if (error instanceof SyntaxError) {
      // Fue arrojado un error de sintaxis
      } else if (error instanceof TypeError) {
      // Fue arrojado un error de tipo
          console.log("Sucedió un TypeError");
      } else if (error instanceof RangeError) {
      // Fue arrojado un error de rango
      } else if (error instanceof EvalError) {
      // Fue arrojado un error eval
      } else if (error instanceof ReferenceError) {
      // Fue arrojado un error de referencia
      } else if (error instanceof URIError) {
      // Fue arrojado un error de URI
     }	
  })


  /*Uso de clases, es necesario el this*/ 

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

// creando elemento de una clase
const calc = new Calculator();
console.log('Calc Result -> ', calc.sum(2, 3));


/* Modules*/
// import { hello } from './class4-module.js';
const hello = require('./class4-module'); //ajuste para que funcione en nodejs
console.log('Hello Module -> ', hello());



/* Generators  el * indica que la funcion es un generator*/
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }

  if (true) {
    yield 'World!';
  }
}
const generatorHello = helloWorld(); //se coloca al inicio del generator, sin valor alguno
console.log('generatorHello first call -> ', generatorHello.next().value);
console.log('generatorHello second call -> ', generatorHello.next().value);
console.log('generatorHello third call -> ', generatorHello.next().value);


/*ejemplo de genetator fibonacci*/
function* fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (true){  
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset){
        fn1 = 1;
        fn2 = 1;
    }
  }
}

var secuencia = fibonacci();
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3
console.log(secuencia.next().value);     // 5
console.log(secuencia.next().value);     // 8
console.log(secuencia.next().value);     // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3





/**
 * ECMAScript 7
 */

/* Includes */
let numbers = [1, 2, 3, 7, 8];
const VALUE = 7;

if (numbers.includes(VALUE)) {
  console.log(`Sí se encuentra el valor ${VALUE}`);
} else {
  console.log(`No se encuentra el valor ${VALUE}`);
}

/* Pow (potencias)*/
let base = 4;
let exponent = 4;
let result = base ** exponent;
console.log(`Result -> ${result}`);





/**
 * ECAMScript8
 */

// Object.entries 
const data = {  
  frontend: 'Juan',
  backend: 'Carlos',
  design: 'Ana', //Trailing comas, nos permite asignar elementos al objeto mediante comas. al siguiente puede haber un valor o no
}
const entries = Object.entries(data)
const key = Object.keys(data)
const values = Object.values(data)
console.log(entries)
console.log('cantidad datos =', entries.length)
console.log(key)
console.log(values);


// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'-')) // Se añade al final la palabra 'hi'




/* Probando async y await */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false) //con true para ver el correcto funcionamiento
      ? setTimeout(() => resolve('Hello world'), 3000)
      :reject(new Error('Test Error'))
  })
}


// const helloAsync =async() =>{
//   const hello = await helloWorld();
//   console.log(hello);

// }
// helloAsync();
// console.log('esperando')


//Nos permitirá usar trycatch y trabajar los errores correctamente.

const another =async() =>{
  try{
      const hello = await helloWorld();
      console.log(hello);

  } catch (error){
      console.log(error);
      
  }
}

another();
console.log('esperando')




/**
 * ECAMScript9
 */

/*Spread Operator*/ //saca un valor y el resto lo pone en otra variable
const obj = {
  name: 'Oscar',
  age: 32,
  country: 'MX'
};

let { name, ...addInfo } = obj;
console.log(`name: ${name}`);
console.log(`additional information: `, addInfo);

let { country, ...all } = obj;   
console.log(`everything but country: `, all);


/* Porpagation Properties*/
const person = {
  name: 'Oscar',
  age: 32
};

const personInformation = { //agrega un valor al objeto
  ...person,
  country: 'MX'
};
console.log(`personInformation: `, personInformation);

/*Promise Finally*/ //avisa cuando finalizo la ejecucion de la promesa (resuelta o rechazada)
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Hello World!');
        }, 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then(result => console.log('result -> ', result))
  .catch(err => console.log('err -> ', err))
  .finally(() => console.log('finalizó'));

/*Regex*/
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;  //regla para manejar fechas
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);






/**
 * ECAMScript10
 */

 //--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];


console.log(array.flat())
console.log(array.flat(2))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

//-------------optional catch biding-------------/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);


















/**
 * Closure: regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope
 * permite hacer variables privadas
 */

 /*funcion normal*/

const moneyBox = (coins) => {
  var saveCoins = 0;  //puede ser let
	saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(3); // 3
moneyBox(4); // 4
moneyBox(7); // 7

/* funcion utilizando closure */

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
};
let myMoneyBox = moneyBox();  //solo en esta declaracion pasa el saveCoins = 0
myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); // 20


//Ámbito léxico en closures
const buildCount = (i)=>{
  let count = i;
  const displayCount = () =>{
    count++;
    console.log(count);
  }
  return displayCount;
};

let mybuildCount = buildCount(1); //en la declaracion solo corre la primera parte, da valor inicial al count
mybuildCount(); //2
mybuildCount(); //3 
mybuildCount(); //4

/*si el count++; se encontrara dentro del log, imprimiria el valor antes de incrementarlo*/



/* Variable privadas con closure */
const person = () => {
  let saveName = "Name";
  return {
    getName: () => saveName,
    setName: (name) => {
      saveName = name;
    },
  };
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Edward');
console.log(newPerson.getName());





const anotherFunction = () => {
  //let i = 0; //con la asignacion afuera la variable sale del closure y el resultado va dar siempre 10
  for(let i = 0; i < 10; i++) { //lo mismo pasa al usar var dentro del for
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}
anotherFunction();








/*
 * Preguntas examen curso de Closures y Scope en JavaScript
 */
nameOfDog("Elmo"); 

function nameOfDog(name) 
{ console.log(name); };



const fruits = () => { 
	if (true) { 
		var fruit1 = 'apple'; 
		const fruit2 = 'banana'; 
		let fruit3 = 'kiwi'; 
		} 
    console.log(fruit3);
} 
fruits();



const helloWorld = () => {globalVar = "I'm global"; }
helloWorld();
console.log(globalVar);



const fruits = () => { 
  var fruit = 'apple'; 
  console.log(fruit); 
}
fruits();


/**
 * Curso de asincronismo
 */

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 1, sum));


//usando ECMAScript6
const sum = (a, b) => {
  return a + b;
}

const call = (a, b, callback) => {
  return callback(a, b);
}

console.log(call(2, 2, sum));


//resumiendo la funcion con arrow funcitons
const suma = (num1, num2) => num1 + num2;

const call = (num1, num2, callback) => callback(num1, num2);

console.log(call(2, 6, suma));






function date(callback) {
  console.log(new Date);
  setTimeout(() => {
      let date = new Date;
      callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);



//implementando arrow functions
const date = (callback) => {
  console.log(new Date);
  setTimeout(() => {
      let date = new Date;
      callback(date);
  }, 2000);
}

const printDate = (dateNow) => console.log(dateNow);

date(printDate);