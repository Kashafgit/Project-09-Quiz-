import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.green("\nEnter your name")
    }
]);
console.log(chalk.blue(answer.name));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "\nQ1:what type annotation should be used for a variable storing a string value in typescript",
        choices: ["(A):number", "(B):boolean", "(C):string", "(D):any"]
    },
    {
        name: "question_2",
        type: "list",
        message: "\nQ2: Which of the following is a valid typescript file extension",
        choices: ["(A): .ts", "(B): .js", "(C):.tsx", "(D):Both a and c"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3: what is the command to create a Next.js project",
        choices: ["\n(A): npm init next-app my-next-app", "(B): npx create-next-app my-next-app", "(C): create-next-app my-next-app", "(D): npx init next-app my-next-app"]
    },
    {
        name: "question_4",
        type: "list",
        message: "\nQ4: What is the correct way to declare a variable in Typescript?",
        choices: ["(A): var greeting: string = 'Hello, World!'", "(B): let greeting: string= 'Hello,World!", "(C): Const greeting: string = 'Hello, World!", "(D): All of the above"]
    },
    {
        name: "question_5",
        type: "list",
        message: "\nQ5:Which of the following correctly defines an interface for a 'person' object in typescript",
        choices: ["(A):interface person{name:string; age:number;}", "(B): type person= {name:string; age:number}", "(C): Both a and b", "(D): Neither a nor b"]
    },
    {
        name: "question_6",
        type: "list",
        message: "\nQ6: How do you compile a typescript file named hello.ts into javascript?",
        choices: ["(A):tsc hello.ts", "(B): typescript hello.ts", "(C):compile hello.ts", "(D): tsc hello.js"]
    },
    {
        name: "question_7",
        type: "list",
        message: "\nQ7: Which command install Typescript globally using npm?",
        choices: ["(A):npm install typescript", "(B): npm install -g typescript", "(C):npm typscript", "(D): npm get typescript"]
    },
    {
        name: "question_8",
        type: "list",
        message: "\nQ8: What is the main advantage of using Typescript over Javascript?",
        choices: ["(A):Typescript code runs faster", "(B): Typescript provides static type-checking", "(C):Typescript is more popular the Javascript", "(D): Typescript does not require compilation"]
    },
    {
        name: "question_9",
        type: "list",
        message: "\nQ9:Which method of Inquirer .js is use to start the prompt inquirer",
        choices: ["start()", "prompt()", "init()", "run()"]
    },
    {
        name: "question_10",
        type: "list",
        message: "\n Q10: Which of the following charctor is commonly allowed in variable",
        choices: ["$", "@", "#", "&"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "(C):string":
        console.log(chalk.green("1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("1. Incorrect!"));
        console.log(`The correct answer is "(C):string"`);
}
switch (quiz.question_2) {
    case "(A): .ts":
        console.log(chalk.green("2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("2. Incorrect"));
        console.log(`The correct answer is "(A): .ts"`);
}
switch (quiz.question_3) {
    case "(B): npx create-next-app my-next-app":
        console.log(chalk.green("3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("3. Incorrect"));
        console.log(`The correct answer is  "(B): npx create-next-app my-next-app"`);
}
switch (quiz.question_4) {
    case "(D): All of the above":
        console.log(chalk.green("4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("4. Incorrect"));
        console.log(`The correct answer is  "(D): All of the above" `);
}
switch (quiz.question_5) {
    case "(A):interface person{name:string; age:number;}":
        console.log(chalk.green("5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("5. Incorrect"));
        console.log(`The correct answer is  "(A):interface person{name:string; age:number;}" `);
}
switch (quiz.question_6) {
    case "(A):tsc hello.ts":
        console.log(chalk.green("6. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("6. Incorrect"));
        console.log(`The correct answer is "(A):tsc hello.ts"`);
}
switch (quiz.question_7) {
    case "(B): Typescript provides static type-checking":
        console.log(chalk.green("7. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("7. Incorrect"));
        console.log(` "(B): Typescript provides static type-checking" `);
}
switch (quiz.question_8) {
    case "(B): Typescript provides static type-checking":
        console.log(chalk.green("8. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("8. Incorrect"));
        console.log(`The correct answer is  "(B): Typescript provides static type-checking" `);
}
switch (quiz.question_9) {
    case "prompt()":
        console.log(chalk.green("9. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("9. Incorrect"));
        console.log(`The correct answer is "prompt()"`);
}
switch (quiz.question_10) {
    case "$":
        console.log(chalk.green("10. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("10. Incorrect"));
        console.log(`The correct answer is "$" `);
}
console.log(chalk.yellowBright(`${answer.name} Your score is '${score}' out of 10`));
