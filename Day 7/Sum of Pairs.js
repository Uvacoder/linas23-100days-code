/* 
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

function sum_pairs(ints,s){
    /* var ans;
    for(let i = 0 ; i< arr.length ; i++){
        for(let j = 1 ; j< arr.length ; j++){
            if(arr[i] + arr[j] == sum){
                ans =  [arr[i],arr[j]]
                break;
            }
        }
    }
    return ans; */

    //nice one
        let seen = new Set();
        for (let i of ints) {
          if (seen.has(s - i)) return [s - i, i];
          seen.add(i);
        }

}


console.log(sum_pairs([10, 2, 0, 3, 7],10))