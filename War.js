class War {
  constructor(player1, player2) {
    this.player1 = new Player(player1, [])
    this.player2 = new Player(player2, [])
    this.deck = []
  }

  createGame() {
    var deck = new Deck()
    deck.create()
    deck.shuffle()
    this.deal(deck.deck)
  }
  deal(cards) {
    cards.forEach((card, i) => {
      if (i % 2 === 0) {
        this.player2.receiveCard(card)
      } else {
        this.player1.receiveCard(card)
      }
    })
  }

  log() {
    console.log(this.player1.name, this.player1.hand)
    console.log(this.player2.name, this.player2.hand)
  }
  start() {
    var player1 = ""
    var player2 = ""

    this.player2.hand.forEach(card => {
      player2 += `<div class="card ${card.suit}">${card.face}&${card.suit};</div>`
    })
    this.player1.hand.forEach(card => {
      player1 += `<div class="card ${card.suit}">${card.face}&${card.suit};</div>`
    })
    document.querySelector(".player1cards").innerHTML = player1
    document.querySelector(".player2cards").innerHTML = player2
  }
}
