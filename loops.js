 // return `"I am ${i} strange loop${i === 0 ? '' : 's' && i === 1 ? '' : 's'}."`;
// return `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
//     }

function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      return `"I am ${i} strange loop."`;
    } else {
      return `"I am ${i} strange loops."`;
    }
  }
  return array;
}
 


function whileLoop(n) {
  for (let i = n; i >= 0; i--){
  console.log(i);
  return 'done';
  }
}
  

function doWhileLoop(num){
  i = i + 1;
  return i;
}

 do {
   console.log("I run once regardless");
}  while (incrementVariable() < i);
