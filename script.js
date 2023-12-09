// ASIGNMENT 01
document.write("ASSIGNMENT 01");
document.write("<br>");
document.write("<br>");

// Simple Mark Sheet Assignment in JavaScript
document.write("Simple Mark Sheet Assignment in JavaScript:");
document.write("<br>");

/* *Objective:* Create a basic program using hardcoded values to determine a student's grade.

*Task:*
Write a JavaScript program that uses hardcoded marks in three subjects (Math, English, and Science) and assigns a grade based on the average percentage.

*Steps:*
1. Hardcode values for Math, English, and Science marks.
2. Calculate the average percentage using the formula: `(Math + English + Science) / 3`.
3. Implement a grading system using logical operators:
   - If the average is greater than or equal to 90%, assign an 'A' grade.
   - If the average is between 80% and 89%, assign a 'B' grade.
   - If the average is between 70% and 79%, assign a 'C' grade.
   - If the average is between 60% and 69%, assign a 'D' grade.
   - If the average is below 60%, assign an 'F' grade.
4. Display the calculated percentage and assigned grade. */

// Hardcode values for Math, English, and Science marks.
var math=78;
var english=86;
var science=94;

// Calculate the average percentage using the formula: `(Math + English + Science) / 3`.
var averagePercentage=(78+86+94)/3;

// Implement a grading system using logical operators:
var grade;

    if(averagePercentage >= 90){
        document.write("On this"," ",averagePercentage," ","percentage you're Grade is A");
    }
    else if (averagePercentage >= 80 && averagePercentage <= 89) {
        document.write("On this"," ",averagePercentage," ","percentage you're Grade is B");
    } 
    else if (averagePercentage >= 70 && averagePercentage <= 79) {
        document.write("On this"," ",averagePercentage," ","percentage you're Grade is C");
    } 
    else if (averagePercentage >= 60 && averagePercentage <= 69) {
        document.write("On this"," ",averagePercentage," ","percentage you're Grade is D");
    } 
    else {
        document.write("You're Fail");
    }

document.write("<br>");
document.write("<br>");

// ASIGNMENT 02
document.write("ASSIGNMENT 02");
document.write("<br>");
document.write("<br>");

// Compound Expressions Assignment in JavaScript
document.write("Compound Expressions Assignment in JavaScript:");
document.write("<br>");

/* *Objective:* Develop a program that utilizes compound expressions to make decisions based on multiple conditions.

*Task:*
Write a JavaScript program that takes hardcoded values for a student's marks in two subjects (Math and English) and determines eligibility for an advanced placement course.

*Steps:*
1. Hardcode values for Math and English marks.
2. Implement a compound expression using logical operators:
    - To be eligible for the advanced placement course, the student must have:
    - A Math mark greater than or equal to 80%.
    - An English mark greater than or equal to 75%.
3. Display a message indicating whether the student is eligible for the advanced placement course.

This assignment focuses on the use of compound expressions to make decisions based on multiple conditions, reinforcing the understanding of logical operators and their combination in programming.
*/

// Hardcode values for Math and English marks.
var math=67;
var english=78;

var eligible = math >= 80 && english >= 75;

    if (eligible) {
        document.write("You are eligible for the advanced placement course.");
    } else {
        document.write("You are not eligible for the advanced placement course.");
    }

document.write("<br>");
document.write("<br>");

// ASIGNMENT 03
document.write("ASSIGNMENT 03");
document.write("<br>");
document.write("<br>");

// Nested IF Assignment in JavaScript
document.write("Nested IF Assignment in JavaScript:");
document.write("<br>");

/* *Objective:* Create a program using nested if statements to determine a person's eligibility to vote based on age and nationality.

*Task:*
Write a JavaScript program that takes hardcoded values for a person's age and nationality and determines whether they are eligible to vote.

*Steps:*
1. Hardcode values for the person's age and nationality.
2. Use a nested if statement to check the age:
   - If the person is 18 years or older, proceed to the next step.
   - If the person is younger than 18, display a message indicating they are not eligible to vote.
3. Within the nested block for age, use another if statement to check nationality:
   - If the person is of a specific nationality (you can choose), display a message indicating they are eligible to vote.
   - If the person is not of the specified nationality, display a message indicating they are not eligible to vote. */

var age = 20;
var nationality = "Turkey"; 

   if (age >= 18) {
     if (nationality === "Pakistan") {
            document.write("You are eligible to vote.");
     } else {
            document.write("You are not eligible to vote due to nationality.");
     }
   } 
   else {
        document.write("You are not eligible to vote because you are under 18 years old.");
   }








