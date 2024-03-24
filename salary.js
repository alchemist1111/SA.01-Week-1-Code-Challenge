function calculateNetSalary(basicSalary, benefits) {
    // These are Constants for tax rates and deductions.
    const PAYE_RATES = [
        { range: 24000, rate: 0.1 },
        { range: 32333, rate: 0.25 },
        { range: 500000, rate: 0.3 },
        { range: 800000, rate: 0.325},
        { range: Infinity, rate: 0.35 },
    ];
    const NHIF_RATES = [
        { range: 5999, deduction: 150 },
        { range: 7999, deduction: 300 },
        { range: 11999, deduction: 400 },
        { range: 14999, deduction: 500 },
        { range: 19999, deduction: 600 },
        { range: 24999, deduction: 750 },
        { range: 29999, deduction: 850 },
        { range: 34999, deduction: 900 },
        { range: 39999, deduction: 1000 },
        { range: 44999, deduction: 1100 },
        { range: 49999, deduction: 1200 },
        { range: 59999, deduction: 1300 },
        { range: 69999, deduction: 1400 },
        { range: 79999, deduction: 1500 },
        { range: 89999, deduction: 1600 },
        { range: 99999, deduction: 1700 },
        { range: Infinity, deduction: 1800 }
    ];
    const NSSF_RATE = 0.06;

    // Calculate PAYE (tax)
    let taxableIncome = basicSalary + benefits;
    let payee = 0;
    for (let i = 0; i < PAYE_RATES.length; i++) {
        if (taxableIncome <= PAYE_RATES[i].range) {
            payee = taxableIncome * PAYE_RATES[i].rate;
            break;
        } else {
            payee += PAYE_RATES[i].range * PAYE_RATES[i].rate;
            taxableIncome -= PAYE_RATES[i].range;
        }
    }

    // Calculate NHIF deductions
    let nhifDeduction = 0;
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (taxableIncome <= NHIF_RATES[i].range) {
            nhifDeduction = NHIF_RATES[i].deduction;
            break;
        }
    }

    // Calculate NSSF deductions
    let nssfDeduction = basicSalary * NSSF_RATE;

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate net salary
    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    return {
        payee: payee,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        grossSalary: grossSalary,
        netSalary: netSalary
    };
}

// Example.
const basicSalary = 5000000;
const benefits = 100000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Payee:", salaryDetails.payee);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Net Salary:", salaryDetails.netSalary);