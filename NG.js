#! usr/bin/env node
import inquirer from "inquirer";
import Chalk from "chalk";
const random_number = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { name: "usernumber",
        message: "Guess Your Number",
        type: "number" }
]);
if (answers.usernumber === random_number) {
    console.log(Chalk.green("Congratulations You Guessed Right Number!"));
}
else {
    console.log(Chalk.red("You Guessed A Wrong Number"));
}
