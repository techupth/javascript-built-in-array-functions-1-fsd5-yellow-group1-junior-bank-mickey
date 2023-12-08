const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator, current) {
  // Start coding here
  return accumulator + current.score;
}

const result = students.reduce(getAverageStudentScore, 0) / students.length;

console.log(result); // Output: 87.5
