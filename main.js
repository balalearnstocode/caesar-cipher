function getCeaserCipher() {
    let str = document.getElementById("text").value;
    var ceaserCipher="";
    for(var i = 0; i < str.length ; i++){
        var pos= str.charCodeAt(i);
        if(pos>= 65 && pos <= 91){ //uppercase
            pos = (pos+13) > 90 ? pos-13 : pos + 13;
            ceaserCipher += String.fromCharCode(pos);
        } else if(pos>= 97 && pos <= 122){ // lowercase
            pos = (pos+13) > 121 ? pos-13 : pos + 13;
            ceaserCipher += String.fromCharCode(pos);
        } else {
            ceaserCipher+=str[i];
        }
    }
    document.getElementById("result").innerHTML = ceaserCipher;
}

function clearText() {
    document.getElementById("text").value = "";
    document.getElementById("result").innerHTML = "";
}