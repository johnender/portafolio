const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Dri', 'Sat'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${mes} ${dia}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //anhade y quita la clase
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;    
}

setInterval(mostrarReloj, 1000);