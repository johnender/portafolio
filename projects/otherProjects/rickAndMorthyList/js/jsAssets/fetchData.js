const requestComplete = 4;
/*
  posible states:
  0: starting
  1: loading
  2: loaded
  3: there is info already
  4: successful request
  */

const statusRequest = 200;
/*
  State 1xx (100 - 199): request is been processing.
  State 2xx (200 - 299): the request was received, accepted and correctly processed.
  State 3xx (300 - 399): further actions needed, usually redirect.
  State 4xx (400 - 499): client side errors, data request was made wrong.
  State 5xx (500 - 599): server side errors, execution failed.
  */

const fetchData = (api_url) => {
  return new Promise((resolve, reject) => {
    //reference to the object XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    //use the open function of the object XMLHttpRequest parametro1 = el metodo, parametro2 = la url, parametro3 = verificación si es asincrono o no, valor por defecto true
    xhttp.open('GET', api_url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {//on successful request
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))//on successful connection
          : reject(new Error('Call Error', api_url))//on unsuccessful connection
      }
    }
    xhttp.send();//sending the request
  });
}