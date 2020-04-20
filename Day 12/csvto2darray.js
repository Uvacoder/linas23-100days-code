/* 
Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.
*/



function csv_to_array(str,delimiter){
    
    return str.split("\n").map(el=> el.split(delimiter ? delimiter : ','))

}

console.log(csv_to_array('a,b\nc,d')); 
console.log(csv_to_array('a;b\nc;d', ';')); 
console.log(csv_to_array('a&b\nc&d', '&')); 
console.log(csv_to_array('head1,head2\na,b\nc,d'));



/* 
Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects.
The first row of the string is used as the title row.
*/

function CSV_to_JSON(str,delimiter=','){

    const objTitle = str.split('\n').slice(0,1)[0].split(delimiter);
    // console.log(objTitle)

    return str.slice(str.indexOf('\n')+1).split("\n").map(el=>{
        const values = el.split(delimiter);
        return objTitle.reduce((obj,title,index)=>
            ((obj[title] = values[index]), obj), {}
            )
    })
}

console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
