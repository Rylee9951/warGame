class Deck {
  constructor() {
    this.deck = []
  }

  create() {
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
    const suits = ["hearts", "diams", "clubs", "spades"]

    faces.forEach(face => {
      suits.forEach(suit => {
        this.deck.push(new Card(face, suit))
      })
    })
  }

  shuffle() {
    var currentIndex = this.deck.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = this.deck[currentIndex]
      this.deck[currentIndex] = this.deck[randomIndex]
      this.deck[randomIndex] = temporaryValue
    }
  }
}
