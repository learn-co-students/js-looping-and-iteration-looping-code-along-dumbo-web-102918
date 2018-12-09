// Code your solutions in this file
function printBadges(arr){
  for (let counter=0; counter < arr.length; counter++){
    console.log(`Welcome ${arr[counter]}! You are employee #${counter+1}.`);
  }
  return arr;
}

function tailsNeverFails(){
  let tails=0;
  while (Math.random()>=0.5){
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
