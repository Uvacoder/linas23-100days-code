/* 
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

*/

function encrypt(str,n){
    console.log(str,n)
    
    if(!str || n <=0) return str;
    
    do{
        var res = '';
        for(var i = 1; i < str.length ; i+=2){
            res += str[i]
        }

        for(var j = 0 ; j< str.length ; j+=2){
            res += str[j]
        }

        str = res;

        n--;
    }while(n>0);

    return res;
}


// *******not ok*******
function decrypt(str,n){
    if(!str || n <=0) return str;

    do{
        var res = '';
        for(var i = 0; i<str.length; i+=2){
            res += str[i]
        }
        for(var j=1;j<str.length ;j+=2){
            res += str[j]
        }

        str = res;
        n--;

    }while(n>0)

    return res;
}




  console.log(encrypt('hello world',2))
    console.log(decrypt('lohore llwd',2))
  /* 
  function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }

  
  */