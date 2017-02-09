import Card from "../scripts/card";
import fs from "fs";

class CardGenerator {
  constructor({ filePath }) {
    this.cards = this.txtSpliter(filePath);
  }
  txtSpliter(path) {
    const words = fs.readFileSync(`./${path}`, "utf8").split("\n");
    return words.map( card => {
      let cardSplit = card.split(",");
      let txtQuestion = cardSplit[0];
      let txtAnswer = cardSplit[1];
      return new Card({ question: txtQuestion, answer: txtAnswer });
    });
  }
}

export default CardGenerator;
