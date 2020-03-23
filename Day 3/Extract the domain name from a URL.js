/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/


//  consider all possible combinations 

function domainName(url){
    if(url.includes('www')){
        return url.split('www').pop().split('.')[1]
    }else{
        return url.split("//")[1].split(".")[0]
    }/* else{
        return url.split(".")[0]
    } */
}


console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("https://www.cnet.com"))


/* 
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
function domainName(url){
  //your code here
  if(url.indexOf('www')>-1) return url.split('.')[1]
  if(url.indexOf('//')>-1) return url.split('//')[1].split('.')[0]
  return url.split('.')[0]
}
*/