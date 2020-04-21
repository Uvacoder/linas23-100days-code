/* 
Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

const areaOfTriangle = (...args)=>{
    var s = (args.reduce((acc,el)=>{
        return acc + el
    },0))/2;

    const  area =  Math.sqrt(s*(s-args[0])*(s-args[1])*(s-args[2]))

    return area.toFixed(2);

}


console.log(areaOfTriangle(5,6,7));