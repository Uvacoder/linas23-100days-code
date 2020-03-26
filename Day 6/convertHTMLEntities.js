//   & , < , > ," , '

function convertHTML(str){
    /* //  split by character to avoid problems
    var charArr = str.split("");

    //since we are only checking fot a few html elements , using switch statement

    for(var i = 0; i< charArr.length ; i++){
        switch(charArr[i]){
            case '<' :
                charArr[i] = '&lt;' ;
                break;
            case '>' :
                charArr[i] = '&glt;' ;
                break;
            case '&' :
                charArr[i] = '&amp;' ;
                break;
            case ' " ' : 
                charArr[i] = '&quot;' ;
                break;
            case " ' " :
                charArr[i] = '&apos;' ;
                break;
        }
    }

    return charArr.join("") */

    /* str = str.replace(/$/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
                .replace(/"/g,'&quot;').replace(/'/g,'&apos;');

    return str; */


    // use object lookup to declare as many HTML entities as needed.

    var htmlEntities = {
        '&' :'&amp;',
        '<' :'&lt;',
        '>' :'&gt;',
        '\"' : '&quot;',
        '\'':'&apos;'
    };

    //use map function to return a filtered str with all entities changed

    return str.split("").map(el=>{
        return htmlEntities[el] || el;
    }).join("");


}

console.log(convertHTML('<h2>linas & luffy</h2>'))