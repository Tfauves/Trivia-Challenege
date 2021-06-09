// // homework
// // create a Jeopardy / Geekardy! game using an api
// // You must use Local Storage so the progress isn't lost upon a reload of the page
// // focus on the Local Storage element prior to getting the game functional
// // teams and Slack collab between the teams is allowed

// - Ask the user for Player 1 name
// - Ask the user for Player 2 name
// - Three rounds (Level 1, 2, 3) 
// - Automatically (randomly) pick questions 
// ---- Bonus (let the user pick questions from the Geekardy Board)
// - Three questions per user per round
// - Track score for users
// - Declare the winner 

let firstRoundQuestions = []
let secondRoundQuestions = []
let thirdRoundQuestions = []


const baseUrl = 'https://opentdb.com/api.php?amount=20&type=multiple'

const xhr = new XMLHttpRequest()
xhr.open('GET', baseUrl)
xhr.onload = () => {

    let data = JSON.parse(xhr.response).results

    for (let i = 0; i < data.length; i++) {

        if ( data[i].difficulty == "easy" ) {

            firstRoundQuestions.push(data[i])
        }
    }   
}
xhr.send()


for (let i = 0; i < firstRoundQuestions.length; i++) {

    console.log(firstRoundQuestions[i].question)
}












let turn = 1

let player1 = {
    name: "",
    score: 0
}

let player2 = {
    name: "",
    score: 0
}

const startBtn = document.createElement("button")
startBtn.id = "start"
startBtn.innerText = "Start Game"
startBtn.onclick = createPlayers
document.body.appendChild(startBtn)



function createPlayers() {

    player1.name = prompt("enter player 1 name: ")
    player2.name = prompt("enter player 2 name: ")

    fireQuestions()
}



// question ask function
function fireQuestions() {

    let answer = 4
    let wrongAnswer = [1, 3, 6]

    // player one check for turn
    if (turn % 1 === 0) {
        
        alert("player ones turn")
        // let question = prompt(`what is 2 + 2?\n ${answer},${wrongAnswer}`)

        for (let i = 0; i < firstRoundQuestions.length; i++) {

            let answers = firstRoundQuestions[i].incorrect_answers
            answers.push(firstRoundQuestions[i].correct_answer)
            let correctAnswer = firstRoundQuestions[i].correct_answer
            let question = prompt(`${firstRoundQuestions[i].question}\n ${answers}`)
       
        

            // check answer and increment/decrement score
                if (question == correctAnswer) {

                    alert("correct!")
                    player1.score = 100
                    turn++
                }  else {
                alert(`Wrong! The correct answer is ${correctAnswer}`)
                player1.score = -100
                turn++
            }
        }
    
    }    

    // player two check for turn
    if (turn % 2 === 0) {
        
        alert("player Twos turn")
        let question = prompt(`what is 2 + 2?\n ${answer},${wrongAnswer}`)

        // check answer and increment/decrement score
        if (question == answer) {

            alert("correct!")
            player2.score = 100
            turn++
        } else {
            alert("Wrong!")
            player2.score = -100
            turn++
        }
    } 

    // player one display
    let player1Display = document.createElement("h1")
    let player1ScoreDisplay = document.createElement("h1")
    player1Display.id = "pl1dis"
    player1ScoreDisplay.id = "pl1scdis"
    player1Display.innerHTML = `Player One: ${player1.name}`
    player1ScoreDisplay.innerHTML = `Score: ${player1.score}`

    document.body.appendChild(player1Display)
    document.body.appendChild(player1ScoreDisplay)


    // player two display
    let player2Display = document.createElement("h1")
    let player2ScoreDisplay = document.createElement("h1")
    player2Display.id = "pl2dis"
    player2ScoreDisplay.id = "pl2scdis"
    player2Display.innerHTML = `Player Two: ${player2.name}`
    player2ScoreDisplay.innerHTML = `Score: ${player2.score}`

    document.body.appendChild(player2Display)
    document.body.appendChild(player2ScoreDisplay)


}
      

// save btn to save game data to localStorage
const saveBtn = document.createElement("button")
saveBtn.id = "savebtn"
saveBtn.innerHTML = "save game"
saveBtn.onclick = function () {

    localStorage.setItem("player1LS", JSON.stringify(player1))
    localStorage.setItem("player2LS", JSON.stringify(player2))
}

// clear btn to clear game data from localStorage
const clearBtn = document.createElement("button")
clearBtn.id = "clearbtn"
clearBtn.innerHTML = "clear current game"
clearBtn.onclick = function () {

    localStorage.removeItem("player1LS")
    localStorage.removeItem("player2LS")
}

document.body.appendChild(saveBtn)
document.body.appendChild(clearBtn)





























//////////////////////////////////////////////////////////////////leftOvers///////////////////////////////////////////////////////////////////////////////////


// let question = prompt(`what is 2 + 2?\n ${answer},${wrongAnswer}`)

// if (question == answer) {

//     alert("correct!")
//     player1.score = 100
// } else {
//     alert("Wrong!")
//     player1.score = -100
// }


// let player1Display = document.createElement("h1")
    // let player1ScoreDisplay = document.createElement("h1")
    // player1Display.id = "pl1dis"
    // player1ScoreDisplay.id = "pl1scdis"
    // player1Display.innerHTML = `Player One: ${player1.name}`
    // player1ScoreDisplay.innerHTML = `Score: ${player1.score}`

    // document.body.appendChild(player1Display)
    // document.body.appendChild(player1ScoreDisplay)



    // let player2Display = document.createElement("h1")
    // let player2ScoreDisplay = document.createElement("h1")
    // player2Display.id = "pl2dis"
    // player2ScoreDisplay.id = "pl2scdis"
    // player2Display.innerHTML = `Player Two: ${player2.name}`
    // player2ScoreDisplay.innerHTML = `Score: ${player2.score}`

    // document.body.appendChild(player2Display)
    // document.body.appendChild(player2ScoreDisplay)