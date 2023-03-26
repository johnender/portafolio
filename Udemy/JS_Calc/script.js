function add(){
    var currentValue=0, b=0, size=0;
    currentValue = f.display.value;
    size = currentValue.length;
    b = currentValue.charAt(size - 1);
    if (b == '/' | b == '*' | b == "-" | b == "."){ //if there is another sign already, remove it and replace it
        f.display.value=currentValue.substring(0, size-1);
        f.display.value+='+';
    }else if (b == '+'){
        return;
    }else { //if the last character is a number, just add the sign
        f.display.value += '+';
    }
}

function subtract(){
    var currentValue=0, b=0, size=0;
    currentValue = f.display.value;
    size = currentValue.length;
    b = currentValue.charAt(size - 1);
    if (b == '/' | b == '*' | b == "+" | b == "."){ //if there is another sign already, remove it and replace it
        f.display.value=currentValue.substring(0, size-1);
        f.display.value+='-';
    }else if (b == '-'){
        return;
    }else { //if the last character is a number, just add the sign
        f.display.value += '-';
    }
}

function multiply(){
    var currentValue=0, b=0, size=0;
    currentValue = f.display.value;
    size = currentValue.length;
    b = currentValue.charAt(size - 1);
    if (b == '/' | b == '-' | b == "+" | b == "."){ //if there is another sign already, remove it and replace it
        f.display.value=currentValue.substring(0, size-1);
        f.display.value+='*';
    }else if (b == '*'){
        return;
    }else { //if the last character is a number, just add the sign
        f.display.value += '*';
    }
}

function divide(){
    var currentValue=0, b=0, size=0;
    currentValue = f.display.value;
    size = currentValue.length;
    b = currentValue.charAt(size - 1);
    if (b == '*' | b == '-' | b == "+" | b == "."){ //if there is another sign already, remove it and replace it
        f.display.value=currentValue.substring(0, size-1);
        f.display.value+='/';
    }else if (b == '/'){
        return;
    }else { //if the last character is a number, just add the sign
        f.display.value += '/';
    }
}

function del(){
    var currentValue=0, b=0, size=0;
    currentValue = f.display.value;
    size = currentValue.length;
    b = currentValue.charAt(size - 1);
    f.display.value=currentValue.substring(0, size-1);
}

function shift(){
    var currentValue=0, b=0, size=0;
    currentValue = f.display.value;
    size = currentValue.length;
    b = currentValue.charAt(size - 1);
    if (b == '/' | b == '*' | b == '-' | b == "+" | b == "."){ //if there is a sign already, remove it
        f.display.value=currentValue.substring(0, size-1);
        f.display.value =f.display.value*-1;
    }else{
        f.display.value =f.display.value*-1;
    }
}
function percent(){
    var currentValue=0, b=0, size=0;
    currentValue = f.display.value;
    size = currentValue.length;
    b = currentValue.charAt(size - 1);
    let failure = 0;
    let i = 0;
    while(i < size && failure==0){
        if(i == size-1){
            if (b == '/' | b == '*' | b == '-' | b == "+" | b == "."){ //if there is a sign already, remove it
                f.display.value = currentValue.substring(0, size-1);
                f.display.value = f.display.value / 100;
            }else{
                f.display.value = currentValue / 100;
            }
            i++;
        }
        else{
            if (currentValue.charAt(i) == '-'){
                if(currentValue.charAt(i-1)!=="e"){
                    failure=1;
                }
                else{
                    alert("Sorry number too big to compute")
                    failure=1;
                }
            }else if (currentValue.charAt(i) == '/' | currentValue.charAt(i) == '*' | currentValue.charAt(i) == "+"){
                failure = 1;
            }else{
                i++;
            }
        }
    }
    

}

function dot(){
    var currentValue=0, b=0, size=0;
    currentValue = f.display.value;
    size = currentValue.length;
    b = currentValue.charAt(size - 1);
    let mightFail = 0;
    let failure = 0;
    let i = 0;
    while(i < size && failure==0){
        if(i == size-1){
            if (b == '/' | b == '*' | b == '-' | b == "+" | b == "."){ //if there is a sign already, remove it
                if(mightFail ==0){
                    f.display.value = currentValue.substring(0, size-1);
                    f.display.value +='.';
                }
                else{
                    failure = 1;
                }
            }else{
                if(mightFail ==0){
                    f.display.value +='.';
                }
                else{
                    failure = 1;
                }
            }
            i++;
        }
        else{
            if (currentValue.charAt(i) == '.'){
                mightFail = 1;
            }else if (currentValue.charAt(i) == '/' | currentValue.charAt(i) == '*' | currentValue.charAt(i) == '-' | currentValue.charAt(i) == "+" | currentValue.charAt(i) == "."){ //if there is a sign already, it's safe
                if(mightFail == 1){
                    mightFail = 0;
                }
            }
            i++;
        }
    }
}