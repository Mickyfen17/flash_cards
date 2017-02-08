import Card from "../scripts/card";

class CardGenerator {
  constructor({ cards }) {
    this.cards = this.txtSpliter(cards);
  }
  txtSpliter(txtArray) {
    return txtArray.map( card => {
      let cardSplit = card.split(",");
      let txtQuestion = cardSplit[0];
      let txtAnswer = cardSplit[1];
      return new Card({ question: txtQuestion, answer: txtAnswer });
    });
  }
}

export default CardGenerator;
