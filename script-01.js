const grader = (marks) => {

    // Prompt for marks
    marks = parseInt(prompt('Enter student marks: '));
    
    // Check if marks meet criteria
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        alert('Number should be between 0 and 100.')
        return;
    } 
    
    // Instantiate grades object for looping
    let grades = {
        "A": 79,
        "B": 59,
        "C": 48,
        "D": 39,
    };

    // Default final grade
    let finalGrade = "E";

    // Loop over 'grades' and check values against marks
    for (let grade in grades) {
        if (marks > grades[grade]) {
            finalGrade = grade;
            break;
        }
    };

    // Return final grade
    alert(finalGrade);
    return finalGrade;
}
console.log(grader())

