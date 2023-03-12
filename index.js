const Cards = (["Ada", "Brendan", "Ali",],"birthday")

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you ${cards[i]} for the wonderful birthday gift!`);
    debugger;
  }

  return cards;
}

writeCards(Cards);
