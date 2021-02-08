module.exports = function check(str, bracketsConfig) {
  // your solution
  str = str.split('');
  let arr = [];
  if(str.length%2 !== 0) return false;
for(i in str){
  for(k in bracketsConfig){
    if(str[i] == bracketsConfig[k][0]){
arr.push(str[i]);
break;
    }
  }
  for(k in bracketsConfig){
    if(str[i]==bracketsConfig[k][1]){
      if(bracketsConfig[k][0]==arr[arr.length-1]){
         arr.pop();
         break;
        }
        else return false;
    } 
  }
}
if(arr.length==0) return true;
else return false;
}

//console.log(check('|(|)',[['(', ')'], ['|', '|']]));