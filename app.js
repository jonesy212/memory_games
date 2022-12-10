// all javascript
document.addEventListener("DOMContentLoaded", ()=>{
    
// card options
const cardArray = [
    {
        name: "blank",
        img: 'images/blank.png'
    },
    {
        name: "blank",
        img: 'images/blank.png'
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },

    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    },
    {
        name: "white",
        img: 'images/white.png'
    }, 
    {
        name: "white",
        img: 'images/white.png'
    }, 
]

//refresh the game with new card positions
cardArray.sort(() => 0.5 - Math.random())
// select the grid tag in the document and assign to grid variable
const grid = document.querySelector('.grid')
// set variable to display result via a query selector
let resultDisplay = document.querySelector('#result')
//create empty array for cardsChosen
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create a function that creates a board
function createBoard(){
    //loop through the card array
    for(let i = 0; i < cardArray.length; i++){
        //create a card with an img element tag 
        //use let since the variable will change
        let card = document.createElement('img')
        //set the blank.png to the src element tag to the card
        card.setAttribute('src', 'images/blank.png')
        //set attribute in card for an id via the index
        card.setAttribute('data-id', i)
        //create an even listener to click and flip a card (flipcard function)
        card.addEventListener('click', flipCard)
        //place card image element in the grid class div via appendChild
        grid.appendChild(card)
    }
}

//check for matches function
function checkForMatch(){
    //assign cards to selected img tage in the document
    let cards = document.querySelectorAll('img')
    //assign first chosen id to 0 index
    let optionOneId = cardsChosenId[0]
    //assign second chosen id to 1 index
    let optionTwoId = cardsChosenId[1]
    //if option one  is equila to
    if(optionOneId[0] === optionTwoId[1]){
        alert("Can't choose the same card, pick another")
        cards[optionTwoId].setAttribute('src', 'images/blank.png') 
    }
    //assign
    else if(cardsChosen[0] === cardsChosen[1]){
        
        alert("You found a match")
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("The images do not match, please try again")
    }
    //clear cards chosen after picking two cards to reset
    cardsChosen = []
    cardsChosenId = []
    resultDisplay = cardsWon.length
    
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations, You Have Won!'
    } 
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardArray.length === 'images/blank.img'){
        resultDisplay.textContent = "Congratulations you found them all"
    }
    
}


//create a flip card function
function flipCard(){
    //set variable card id to data-id attribute
    let cardId = this.getAttribute('data-id')
    //set name of card id in the card array then
    //then push as chosen card
    cardsChosen.push(cardArray[cardId].name)
    //push the card Id of the card chosen
    cardsChosenId.push(cardId)
    //set the image of the card id in the card array
    this.setAttribute('src', cardArray[cardId].img)
    
    if (cardsChosen.length == 2){
        
        setTimeout(checkForMatch, 500)

    }
}
createBoard()
})


