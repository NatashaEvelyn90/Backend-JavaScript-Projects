//! Following instructor

function rockPaperScissors() {

    var winner = 'rock, paper, scissors, shoot!'
    var hands = ['rock', 'paper', 'scissors']

    var player1 = hands[Math.floor(Math.random()* hands.length)]
    var player2 = hands[Math.floor(Math.random()* hands.length)]

    var gameHands = player1 + '-' + player2

    if(player1 == player2) {
        console.log('player1:' + player1, 'Player 2:' + player2 + '. Same. Play again...')

    } else {
        console.log(gameHands)

        switch (gameHands) {

            case 'rock-paper':
                winner = 'Paper beats rock. Player 2 wins'
                break
            case 'rock-scissors':
                winner = 'Rock beats scissors. Player 1 wins'
                break
            case 'paper-rock':
                winner = 'Paper beats rock. Player 1 wins'
                break
            case 'paper-scissors':
                winner = 'Scissors beats paper. Player 2 wins'
                break
            case 'scissors-rock':
                winner = 'Rock beats scissors. Player 2 wins'
                break
            case 'scissors-paper':
                winner = 'Scissors beats paper. Player 1 wins'
                break
            default:
                winner = 'Error'
                break                        
        }
    }
    console.log(winner)
    
}

rockPaperScissors()