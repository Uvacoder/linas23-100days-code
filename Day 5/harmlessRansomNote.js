const testStr = "we sincerely appreciate your hard work and your effort year over year thank you for your many wonderful year of togetherness with apollo paints"
const checkStr = "we your paints hard year  of year with paints";
function harmlessRansomNote(noteText,magazineText){
    
    var noteArr = noteText.split(" ");
    var magazineArr = magazineText.trim().split(" ");
    var magazineobj = {}
    var noteIsPossible   = true;

    magazineArr.forEach(word=>{
        if(!magazineobj[word]) magazineobj[word] = 0;
        magazineobj[word]++;
    })

    noteArr.forEach(word=>{
        if(magazineobj[word]){
            magazineobj[word]--;
            if(magazineobj[word]<0){
                noteIsPossible = false;
            }
        }else{
            noteIsPossible = false;
        }
    })

    return noteIsPossible;

}

console.log(harmlessRansomNote(checkStr,testStr))