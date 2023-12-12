let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map((count) => count.length);
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]

// let words = ["hello", "world"];

// function getWordLengths(words) {
//   // Start coding here
//   for (let i in words) {
//     words[i] = words[i].length;
//   }
//   return words;
// }

// const result = getWordLengths(words);

// console.log(result); // Output: [5, 5]

// let words = ["hello", "world"];

// function getWordLengths(word) {
//   return word.length;
// }

// const result = words.map(getWordLengths);

// console.log(result); // Output: [5, 5]
