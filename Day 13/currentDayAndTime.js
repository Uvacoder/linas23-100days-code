/* Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

const today = new Date();
const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

const Day = days[today.getDay()]
const time = `${today.getHours()<12 ? `${today.getHours()} AM`:  `${today.getHours() - 12} PM` }: ${today.getMinutes()} : ${today.getSeconds()}`


console.log("Today is ", Day)
console.log('Current time is ', time)