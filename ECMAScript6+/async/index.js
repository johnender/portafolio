

const doSomethingAsync = () => {
  return new Promise ((resolve, reject) => {
    (true)
      // ? setTimeout(() => {
      //   resolve('Do Something Async')
      // }, 3000)
      ? setTimeout(() => resolve('Do Something Async'), 3000)
      : reject(new Error('Test Error'))
  })
}

/**
 * El async se pone antes de la funcion o arrow function
 * El await va justo antes del llamado de la promesa
 */
const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

/*
//realiza el llamado de forma asincrona
console.log('Before');
doSomething();
console.log('After');
*/

/* codigo para llamar a la funcion que maneja el async y await de forma sincrona*/
(async () => {
  console.log('Before');
  await doSomething();
  console.log('After');
})()

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  console.log('Before 1');
  await anotherFunction();
  console.log('After 1');
})()