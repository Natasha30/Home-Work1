"use strict"


var array = [4,3,1,6,-1,5,4]
function arraySum(array)
{
 var sum = 0;

for (var i = 0; i < array.length; i++) 
{
  sum += array[i];
}
   console.log(sum);
}
 arraySum(array);


 var arr = [4,3,1,6,-1,5,4]
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

result ; 