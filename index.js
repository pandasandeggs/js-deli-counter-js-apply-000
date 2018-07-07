var katzDeli = [1, 2, 3, 4, 5];
var number = 0

function takeANumber(katzDeli){
  number = number + 1
  katzDeli.push(number);
  return `Welcome, you are number ${number} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length){
    return `Currently serving ${katzDeli.shift()}.`;
  }else 
    return "There is nobody waiting to be served!";
}

function currentLine(katzDeli){
  if(katzDeli.length){
    var newLine = []
    for(var i = 0; i < katzDeli.length; i++){
      newLine.push(`${i+1}. ${katzDeli[i]}`)
    }
      return `The line is currently: ${newLine.join(", ")}`;
   }else;
      return "The line is currently empty.";
  }