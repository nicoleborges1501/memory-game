document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "isabelle",
      img: "images/isabelle.jpg",
    },
    {
      name: "isabelle",
      img: "images/isabelle.jpg",
    },
    {
      name: "brewster",
      img: "images/brewster.jpg",
    },
    {
      name: "brewster",
      img: "images/brewster.jpg",
    },
    {
      name: "kappn",
      img: "images/kappn.jpg",
    },
    {
      name: "kappn",
      img: "images/kappn.jpg",
    },
    {
      name: "lottie",
      img: "images/lottie.jpg",
    },
    {
      name: "lottie",
      img: "images/lottie.jpg",
    },
    {
      name: "redd",
      img: "images/redd.png",
    },
    {
      name: "redd",
      img: "images/redd.png",
    },
    {
      name: "tom nook",
      img: "images/tom_nook.jpg",
    },
    {
      name: "tom nook",
      img: "images/tom_nook.jpg",
    },
  ];

  //shuffle cards using sort and math.random
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const cardsChosen = [];
  const cardsChosenId = [];
  const cardsWon = [];

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    //check if the first item in array is equal to the second item in array. if true, assign white image to both cards

    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white_bg.jpg");
      cards[optionTwoId].setAttribute("src", "images/white_bg.jpg");
      cardsWon.push(cardsChosen);
    } else {
      //if not equal, flip the cards back over
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
      alert("Erro! Vamos tentar novamente.");
    }
    cardsChosen.length = 0;
    cardsChosenId.length = 0;
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Parabéns! Você encontrou todos os pares!";
    }
  }

  //flip your card
  function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    //if the cards chosen array is equal to 2, invoke check match function

    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBoard();
});
