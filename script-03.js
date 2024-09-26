
// Calculate PAYE
const calcPayee = (basicSalary) => {
    // Remove personal relief
    let taxableSalary = basicSalary - 2400;
    let tax = 0;

    // Switch statement for tax calculation
    switch (true){
        case (taxableSalary < 24001):
            tax = taxableSalary * 0.1 
            break;
        case (taxableSalary < 32334):
            tax = 2400 + (taxableSalary - 24000) * 0.25
            break;
        case (taxableSalary < 500001):
            tax = 4483.25 + (taxableSalary - 32333) * 0.3
            break;
        case (taxableSalary < 800001):
            tax = 144783.35 + (taxableSalary - 500000) * 0.325
            break;
        case (taxableSalary > 800000):
            tax = 242285.35 + (taxableSalary - 800000) * 0.35
            break;
        default:
            tax = 0;
    };
    
    return tax 
        
}   

console.log(calcPayee(35000))

// Calculate NHIF
const calcNhif = (pay) => {

    // Upper limits for looping
    const nhifRanges = [
        {limit: 5999, deduction: 150},
        {limit: 7999, deduction: 300},
        {limit: 11999, deduction: 400},
        {limit: 14999, deduction: 500},
        {limit: 19999, deduction: 600},
        {limit: 24999, deduction: 750},
        {limit: 29999, deduction: 850},
        {limit: 34999, deduction: 900},
        {limit: 39999, deduction: 950},
        {limit: 44999, deduction: 1000},
        {limit: 49999, deduction: 1100},
        {limit: 59999, deduction: 1200},
        {limit: 69999, deduction: 1300},
        {limit: 79999, deduction: 1400},
        {limit: 89999, deduction: 1500},
        {limit: 99999, deduction: 1600}
    ];

    // Find range and deduction 
    for (let range of nhifRanges) {
        if (pay <= range.limit) {
            return range.deduction;
        }
        return 1700;
    };

};

console.log(calcNhif(150000))

// Calculate NSSF
const calcNssf = (pay) => {

    // Fixed rate
    const rate = 0.06

    // Upper limits of pay for grouping
    const contributionTiers = {
        "Tier I": 7000,
        "Tier 2": 36000
    };

    // Find contribution based on pay
    if (pay <= contributionTiers["Tier I"]) {
        contribution = pay * rate 
    }
    else contribution = Math.min(pay * rate, contributionTiers["Tier 2"] * rate)

    return contribution;
}

console.log(calcNssf(50000))

// Calculate net salary
const calcNetSalary = (salary, benefits) => {
    let grossSalary = salary + benefits;
    let payee = calcPayee(salary);
    let nhif = calcNhif(salary);
    let nssf = calcNssf(salary);
    
    // Final calculation 
    let netSalary = grossSalary - (payee + nhif + nssf);
    return netSalary;
}

// Main function to prompt for input and return value
const Main = () => {
    let salary = parseFloat(prompt("Enter salary: "));
    let benefits = parseFloat(prompt("Enter benefits: "))
    let netSalary = calcNetSalary(salary, benefits);
    console.log(`Net salary: ${netSalary}`)
    alert(`Net salary: ${netSalary}`);
}

Main()