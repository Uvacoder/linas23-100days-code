function pairElement(str){
    //possible DNA strands are 'A,T,C,G'
    /*
    var paired=[];
    
    function getPair(char){
        switch(char){
            case 'A' : 
                        paired.push(['A','T']);
                        break;
            case 'T' :
                        paired.push(['T','A']);
                        break;
            case 'C' :
                        paired.push(['C','G']);
                        break;
            case 'G' :
                        paired.push(['G','C']);
                        break;
        }
    }

    for(let i = 0 ; i < str.length ; i++){
        getPair(str.charAt(i))
    }

    return paired;
    */

    // intermediate sol'n

    //  define a map object with all pair possibilities
        var map = { A : 'T', T : 'A', G : 'C', C : 'G'}
    //  split str into a char array
        var charArray = str.split("");
    //  replace each Array item with a 2d array using map
        return charArray.map(el=>{
            return [el,map[el]]
        })

}



console.log(pairElement("GCGA"))