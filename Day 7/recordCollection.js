var collection = {
    3333:{
        album:"",
        artist:"jack",
        tracks:[
            "sorry",
            "purpose"
        ]
    },
    4444:{
        album:"divide",
        artist:"",
        tracks:[
            "perfect",
            "the A team"
        ]
    },
    5555:{
        album:"BOB",
        artist:"Bob Marely",
        tracks:[]
    }
}

function updateRecords(id,prop,value){

    /* if(prop== "artist" && value != ""){
        collection[id][prop] = value;
    }else if(prop == "album" && value != ""){
        collection[id][prop] = value;
    }else{
        // prop == tracks
        if(collection[id][prop]){
            collection[id][prop].push(value);
        }else{
            collection[id][prop] = value;
        }
    } */

    if(value == "") {
        delete collection[id][prop]
    }else if(prop != "tracks"){
        collection[id][prop] = value;
    }else{
        collection[id][prop].push(value);
    }

    return collection;
}

console.log(updateRecords(3333,"album","loveThyself"))
console.log(updateRecords(4444,"artist","Ed Sherran"))
console.log(updateRecords(5555,"tracks","Buffalo soldier"))
console.log(updateRecords(5555,"tracks","No woman No cry"))