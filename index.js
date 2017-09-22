function reverseString(str) {
  
  var x = str.split("");
  
  var y = x.reverse();
  
var z = y.join(""); 
  
  return z;
}

var answer = reverseString("hello");

document.write(answer);