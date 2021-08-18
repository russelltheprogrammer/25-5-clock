function convertMMSS(value) {

const sec = parseInt(value, 10) * 60; // convert value to number if it is a string
let minutes = Math.floor((sec / 60)); // get minutes
let seconds = sec - (minutes * 60); // get seconds
// add 0 if value < 10; Example 2 => 02
if (minutes < 10) {minutes ="0"+minutes;}
if (seconds < 10) {seconds ="0"+seconds;}
return minutes+':'+seconds; // Return is MM : SS
}
 
export default convertMMSS;