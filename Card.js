class Card {
  constructor(face, suit) {
    this.face = face
    this.suit = suit

    if (typeof this.face === "number") {
      this.value = this.face
    } else if (this.face === "J") {
      this.value = 11
    } else if (this.face === "Q") {
      this.value = 12
    } else if (this.face === "K") {
      this.value = 13
    } else if (this.face === "A") {
      this.value = 14
    }
  }
}
