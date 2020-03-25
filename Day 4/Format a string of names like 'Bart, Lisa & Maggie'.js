/* 
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.


*/


function list(names){
    console.log(names.length)
    if(names.length == 0) return ''

    if(names.length == 1 ) return names[0].name;

    var list =names.map(el=>{
        return el.name
    })
    var lastname = list.pop()
    list = list.join(", ")


    return list + " & " + lastname
}   


console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
console.log(list([]))
console.log(list([{name:'linas'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))



/* 
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
 function list(names){
  names = names.map(function(v){return v.name});
  return names.concat(names.splice(-2).join(' & ')).join(', ');
}
*/