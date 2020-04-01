/* 
Description:
The idea for this Kata came from 9gag today.here //https://9gag.com/gag/amrb4r9

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

** Input: ** If you can read

** Output: ** India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

** Some notes **

Keep the punctuation, and remove the spaces.
Use Xray without dash or space.
 */


 /* 
 let table = {
  'A': 'Alfa',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliett',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'Xray',
  'Y': 'Yankee',
  'Z': 'Zulu',
}

function to_nato(words) {
  return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
}
 function to_nato(words) {
  let i, j, a = words.toUpperCase().split(' ').join('').split('');
  for (i = 0; i < a.length; i++) {
      switch (a[i]) {
      case 'A': a[i] = 'Alfa'; break;
      case 'B': a[i] = 'Bravo'; break;
      case 'C': a[i] = 'Charlie'; break;
      case 'D': a[i] = 'Delta'; break;
      case 'E': a[i] = 'Echo'; break;
      case 'F': a[i] = 'Foxtrot'; break;
      case 'G': a[i] = 'Golf'; break;
      case 'H': a[i] = 'Hotel'; break;
      case 'I': a[i] = 'India'; break;
      case 'J': a[i] = 'Juliett'; break;
      case 'K': a[i] = 'Kilo'; break;
      case 'L': a[i] = 'Lima'; break;
      case 'M': a[i] = 'Mike'; break;
      case 'N': a[i] = 'November'; break;
      case 'O': a[i] = 'Oscar'; break;
      case 'P': a[i] = 'Papa'; break;
      case 'Q': a[i] = 'Quebec'; break;
      case 'R': a[i] = 'Romeo'; break;
      case 'S': a[i] = 'Sierra'; break;
      case 'T': a[i] = 'Tango'; break;
      case 'U': a[i] = 'Uniform'; break;
      case 'V': a[i] = 'Victor'; break;
      case 'W': a[i] = 'Whiskey'; break; 
      case 'X': a[i] = 'Xray'; break;
      case 'Y': a[i] = 'Yankee'; break;
      case 'X': a[i] = 'Zulu'; 
      }          
  }
  return a.join(' ');
}
  */