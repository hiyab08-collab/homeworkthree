const students = [
  { name: "Alex",
    age: 22,
    isEnrolled: true,
    grades: [85, 92, 78, 90]
  },
  {
    name: "Jordan",
    age: 19,
    isEnrolled: true,
    grades: [88, 76, 95, 81]
  },
  {
    name: "Maya",
    age: 24,
    isEnrolled: false,
    grades: [91, 89, 94, 97]
  },
  {
    name: "Chris",
    age: 21,
    isEnrolled: true,
    grades: [65, 72, 70, 68]
  },
  {
    name: "Taylor",
    age: 20,
    isEnrolled: true,
    grades: [58, 64, 61, 55]
  }
];

// 1. Using forEach print each students name
// write code for #1 here

// students.forEach(function (student) {
//     console.log(student.name)
// });

/* 2.
 Create a function that:
- Calculates a student's average grade
- Determines their letter grade based on their average using conditionals
- Returns both values
*/
//write code for #2 here

function studentsResult(grades) {
    let total = 0;
for (let i= 0; i < grades.length; i++){
    total += grades[i];
}
  
let gradeAverage = total / grades.length;
let letterGrade;

if (gradeAverage >= 90){
    letterGrade = "A";
}
    else if (gradeAverage >= 80){
    letterGrade = "B";
}
    else if (gradeAverage >= 70){
    letterGrade = "C";
}
    else if (gradeAverage >= 60){
    letterGrade = "D";
}
    else 
    {letterGrade = "F"}
    console.log(gradeAverage)
return {gradeAverage, letterGrade};
}
// const result = studentsResult(students[0].grades);
// console.log(result);

// /* 3. Using the function above^^^ use a map to add 
// that average and letter grade into the 
// correct student object using the keys "averageGrade" and "letterGrade" 
// so the final object should look something like this:

//     {
//     name: "Alex",
//     age: 22,
//     isEnrolled: true,
//     grades: [85, 92, 78, 90]
//     averageGrade: Decimal // add this new value
//     letterGrade: "B" // add this new value
//   }

// */
// // write code for #3 here
const updatedStudent = students.map(student =>  {
const result = studentsResult(student.grades);
    return {
      ...student,
      averageGrade: result.gradeAverage,
      letterGrade: result.letterGrade
    };
});
console.log(updatedStudent)
// // 4. Use filter to create a new array call topStudents
// // for students who are enrolled and
// // average grade is 80 or higher
// // write code for #4 here
const topStudent = updatedStudent.filter(function (student){
  return student.isEnrolled && student.averageGrade >= 80;
})
console.log(topStudent)
