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




var array = [4,3,1,6,-1,5,4];
var max = getMaxValue(array);
var min = getMinValue(array);
{   var max = array[0]; 
    for (var i = 0; i < array.length; i++) 
    { 
    if (max < array[i]) max = array[i]; 
    } 
    console.log(max);
}
{   var min = array[0];
    for (var i = 0; i < array.length; i++) 
    {
    if (min > array[i]) min = array[i];
    }
    console.log(min);
 }




 var array = [4,3,1,6,-1,5,4];
for (var i = 0; i< array.length ; i++)
 {
    if (array[i]%2 ==0)
        console.log(array[i])
}