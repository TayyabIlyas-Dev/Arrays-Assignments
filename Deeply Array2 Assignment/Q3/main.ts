// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.

type Employee = {
    name: string,
    houseWorked: number,
    hourlyRate: number,
    salary: number,
};

// Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.

let employee: Employee[] = [
    {
        name: 'Tayyab',
        houseWorked: 20,
        hourlyRate: 100,
        salary: 2000,
    },
    {
        name: 'Hamza',
        houseWorked: 10,
        hourlyRate: 100,
        salary: 10000,
    },
    {
        name: 'Haider',
        houseWorked: 200,
        hourlyRate: 100,
        salary: 20000,
    },
    {
        name: 'Taha',
        houseWorked: 40,
        hourlyRate: 100,
        salary: 20000,
    },
];

// Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.


// If an employee has worked 20 hours or more, apply a 10% bonus to their salary.


function calculatePercentage(number, percentage) {
    return (number * percentage) / 100;
};


function calculateSalary(E){
    if(E === 0){
        E+1;
        let HW = employee[E].houseWorked;
        let  HR = employee[E].hourlyRate;
         let salary = HW * HR;
         if(HW >= 20){
            let bonuse = calculatePercentage(salary,10)
            salary = salary + bonuse;
            console.log(`You Got A 10% Bounes`);

         }
         return salary;
    }
    else if(E > 3){
        console.log(`You Have Only 3 Employees.`);
        
    }
    else{ 
    let HW = employee[E].houseWorked;
   let  HR = employee[E].hourlyRate;
    let salary = HW * HR;
    if(HW >= 20){
        let bonuse = calculatePercentage(salary,10)
        salary = salary + bonuse;
        console.log(`You Got A 10% Bounes`);
        
     }
    return salary;
}

}

let first = calculateSalary(3) ;
console.log(first);


// completed..