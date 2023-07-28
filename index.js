const searchLongWord = (input) => {
  const words = input.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

let inputString = prompt("Enter a sentence:");
let result = searchLongWord(inputString);
console.log(result);
document.getElementById("root").innerText = result;
