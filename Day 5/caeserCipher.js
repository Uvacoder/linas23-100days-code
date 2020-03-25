function caesarCipher(str,key){
    var plainText = str.toLowerCase();
    var cipherText = ''
    for(let i = 0 ; i< plainText.length; i++){
        if(plainText[i]==' ') {
            cipherText+= ' ';
            continue;
        }else{
            cipherText += String.fromCharCode(plainText[i].charCodeAt()+key);
        }
    }
    return cipherText;
}


console.log(caesarCipher('iloveyo u',3));