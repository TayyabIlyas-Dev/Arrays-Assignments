// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.

type Student ={
    name:string,
    grades:number[],
};

// Create an array named students containing at least three student objects. Each student
// object should include a name and an array of grades.

let students:Student []= [
    {
        name: "Tayyab",
        grades: [85, 92, 88, 90]
    },
    {
        name: "Taha",
        grades: [78, 83, 80, 82]
    },
    {
        name: "Imran",
        grades: [92, 95, 91, 94]
    }
];

// Implement a function named calculateAverageGrade that takes a student's grades as
// input and returns the average grade for that student.


function calculateAvg(grades) {
let total = grades.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
let Avg = total /grades.length
// console.log(grades.length);

return Avg
    
}
// Display each student's name and average grade. Iterate through the students array,
// calculate the average grade for each student using the calculateAverageGrade
// function, and print their name and average grade.

students.forEach((student)=>{
    let avgGrade = calculateAvg(student.grades)
    console.log(`${student.name}'s average grade is ${avgGrade}`);
})
// console.log();



// completed..
