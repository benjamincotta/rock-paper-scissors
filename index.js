// MUST HAVE:     1. WELCOME MESSAGE,
//                2. BEST OUT OF 5 ROUNDS,
//                3. ENTER PLAYER NAME AT START,
//                4. SWITCH BETWEEN CPU BEATING PLAYER AND CPU GENERATING RANDOM RESPOSONSES,
//                5. ANNOUNCE WINNER AFTER GAME,
//                6. PLAY AGAIN QUESTION AFTER EACH GAME OF 5 ROUNDS AND LOOP BACK,
//                7. DISPLAY SCORES,
               

const readline = require('readline-sync');

console.log('Rock Paper Scissors - Best out of 5!');
console.log('====================================');

console.log('Enter your name:');
const playerName = readline.prompt();

console.log('Choose your weapon; \"rock\", \"paper\" or \"scissors\":');
let weapon = readline.prompt();

let cpuWeapon = 0;
function game() {
    if (weapon == "rock") {
            cpuWeapon = "paper";
    } else if (weapon == "paper") {
        cpuWeapon = "scissors";
    } else if (weapon == "scissors") {
        cpuWeapon = "rock";
    } else {
        return 'Enter either \"rock\", \"paper\" or \"scissors\":';
    }
};

function result() {
        if (weapon == "rock" && cpuWeapon == "paper") {
            console.log('Cpu Wins!');
        } else if (weapon == "paper" && cpuWeapon == "rock") {
            console.log(playerName + ' Wins!');
        } else if (weapon == cpuWeapon) {
            console.log('Draw!!');    
        } else if (weapon == "scissors" && cpuWeapon == "rock") {
            console.log('Cpu Wins!');
        } else if (weapon == cpuWeapon) {
            console.log('Draw!!');    
        } else if (weapon == "rock" && cpuWeapon == "scissors") {
            console.log(playerName + ' Wins!');
        } else if (weapon == cpuWeapon) {
            console.log('Draw!!');    
        } else if (weapon == "scissors" && cpuWeapon == "paper") {
            console.log(playerName + ' Wins!');
        } else if (weapon == cpuWeapon) {
            console.log('Draw!!');
        } else if (weapon == "paper" && cpuWeapon == "scissors") {
            console.log('Cpu Wins!');
        } else if (weapon == cpuWeapon) {
            console.log('Draw!!');
        }
    };






// game();
// console.log('Cpu plays ' + cpuWeapon);
// result();
// console.log('Choose your weapon; \"rock\", \"paper\" or \"scissors\":');




// FOR LOOP //
for (i = 1; i < 5; i++) {
    game(), i;
    console.log('Cpu plays ' + cpuWeapon);
    result();
    console.log('Choose your weapon; \"rock\", \"paper\" or \"scissors\":');
    let weapon = readline.prompt();
}




