/*
Write a JavaScript program to rotate the string 'w3resource' in right direction by 
periodically removing one letter from the end of the string and attaching it to the front
*/

/* const reverse = (str)=>{
    var res =[];
    for(let i = str.length ; i >=0 ; i-- ){
        res.push(str[i])
    }
    return res.join("");
    for(let i = 0 ; i < str.length ; i++){
        setTimeout(()=>{
            rotate(str);
        },1000)
    }
}

const rotate = (str) =>{
    var res = [];
    res.push(str[str.length-1])
    console.log(res)
    res.pop();
    res.concat(...str);
    console.log(res)

}

console.log(reverse('w3resource')) */

/* 

const rotateWord = (word)=>{
    const el = document.querySelector(`.${word}`);
    let text = el.textContent;
    console.log(el)

    setInterval(() => {
        // text = text[text.length - 1] + text.substring(0, text.length - 1);
        el.textContent = text[text.length -1] + text.substring(1,text.length-1);
    }, 100);

}
 */

