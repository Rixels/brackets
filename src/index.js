module.exports = function check(str, bracketsConfig) {
  let per = bracketsConfig.join('').replace(/,/g, '');
      let val = [];
  for (let bracket of str) {
let perIndex = per.indexOf(bracket)
 if (perIndex % 2 === 0) {   
if (bracket === per[perIndex + 1] && val[val.length - 1] === perIndex){
 val.pop();
 } else if (bracket === per[perIndex + 1] && val[val.length - 1] !== perIndex) {
  val.push(perIndex)}
  else{
  val.push(perIndex)}
  } 
 else {
 if (val.pop() !== perIndex-1){
   return false;}
  }    
}
 return val.length === 0 
 }