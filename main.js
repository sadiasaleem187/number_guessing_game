import inquirer from "inquirer";
let a = Math.floor(Math.random() * 10) + 1;
for (let i = 0; i < 3; i++) {
    let game = await inquirer.prompt({
        type: "input",
        name: "userguess",
        message: "Guess your number"
    });
    if (game.userguess === a) {
        console.log("true answer");
    }
    else {
        console.log("wrong answer");
    }
}
