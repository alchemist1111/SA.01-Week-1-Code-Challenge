const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

function promptForMark() {
    return new Promise((resolve, reject) => {
        rl.question("Enter the student's mark (between 0 and 100): ", (answer) => {
            const mark = parseFloat(answer);
            if (isNaN(mark) || mark < 0 || mark > 100) {
                console.log("Invalid input. Please enter a valid mark between 0 and 100.");
                promptForMark().then(resolve);
            } else {
                resolve(mark);
            }
        });
    });
}

async function main() {
    let mark = await promptForMark();
    let grade = calculateGrade(mark);
    console.log(`The student's grade is: ${grade}`);
    rl.close();
}

main();
