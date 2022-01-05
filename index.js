const weapons = ['rock','paper', 'sciccors']

const cpu = 'cpu'
const player = 'player'


let randomWeapon = weapons[Math.floor(Math.random()*weapons.length)]
const cpuWeapon = randomWeapon

const playerWeapon = 'sciccors'

// GAME:
function game() {
   if (cpuWeapon === playerWeapon) {
    console.log('DRAW!')
} else if (cpuWeapon === 'rock' && playerWeapon === 'scissors') {
    console.log('Computer Wins!')
} else if (cpuWeapon === 'sciccors' && playerWeapon === 'rock') {
    console.log('Player Wins!')    
} else if (cpuWeapon === 'paper' && playerWeapon === 'rock') {
    console.log('Computer Wins!')
} else if (cpuWeapon === 'rock' && playerWeapon === 'paper') {
    console.log('Player Wins!')  
} else if (cpuWeapon === 'scissors' && playerWeapon === 'paper') {
    console.log('Computer Wins!')
} else if (cpuWeapon === 'paper' && playerWeapon === 'sciccors') {
    console.log('Player Wins!')  
} else if (cpuWeapon === 'sciccors' && playerWeapon === 'paper') {
    console.log('Computer Wins!')  
} else if (cpuWeapon === 'rock' && playerWeapon === 'sciccors') {
    console.log('Computer Wins!')  
} else {
    console.log('what?')
}
}
console.log("Player plays: " + playerWeapon)
console.log("Computer plays: " + cpuWeapon)
game()