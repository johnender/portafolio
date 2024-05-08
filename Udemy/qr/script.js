//let url = "https://chart.googleapis.com/chart?cht=qr";
let url = "https://quickchart.io/qr?";

generateQR = () => {
    //alert(`hi, ${a1}, ${a2}`);

    let mytext = document.getElementById("text").value;

    
    let mysize = document.getElementById("size").value;

    let myimg = document.getElementById("resultQR");

    if (mytext !== "" && mysize !== "" && mysize <= 545 && mytext.length <= 4000){
        //let currentURL = `${url}&chs=${mysize}x${mysize}&chl=${mytext}`
        let currentURL = `${url}text=${mytext}&size=${mysize}x${mysize}`
        myimg.src=currentURL;
        //console.log(mytext.length);
        console.log(`${mytext}, ${mysize}, ${currentURL}`);
        //alert(`${mytext}, ${mysize}, ${currentURL}`);
    }else if (mytext == ""){
        alert(`The text field is required`);
    }else if (mytext.length > 4000){
        alert(`Sorry, 4000 characters at most`);
    }else if (mysize == ""){
        alert(`The sieze field is required`);
    }else if (mysize > 545){
        alert(`Sorry, the max size is 545 pixels`);
    }else{
        alert(`Sorry, unkown error`);
    }
}

encode = () =>{
    let mytext = document.getElementById("text").value;
    let result = encodeURIComponent(mytext);
    console.log(result);
    document.getElementById("text").value = result;
}


//www.disneysprings.com/guest-services#guest-shipping-station