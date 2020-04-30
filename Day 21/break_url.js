/* 
Write a JavaScript program to break an address of an url and put it's part into an array.

Note: url structure : ://.org[/] and there may be no part in the address. */


const break_address = str =>{
    let protocol,domain,data,resources;

    data = str.split("://");
    protocol = data[0];

    domain = data[1].split(".com")[0] + '.com';

    resources = data[1].split("/")[1];

    return [protocol,domain,resources];


}


var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log("Original address: "+url_add)
console.log(break_address(url_add))