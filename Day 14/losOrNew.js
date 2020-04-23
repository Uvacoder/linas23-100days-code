/* 
Write a JavaScript program to display the city name
if the string begins with "Los" or "New" otherwise return blank.
*/

const city_name = (str)=>{
    return str.length  < 3 ? 'the length is not enough' 
                            : str.substr(0,3) == 'Los' || str.substr(0,3) == 'New' ?
                                                str : 'string does not start with Los or New' 
}



console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));