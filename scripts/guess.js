class Guess {
  constructor({ response, questionCard }) {
    this.response = response;
    this.questionCard = questionCard;
  }
  correct() {
    let { answer } = this.questionCard;
    return answer.toLowerCase() === this.response.toLowerCase() ? true : false;
  }
  feedback() {
    return this.correct() ? "Correct!" : "Incorrect";
  }
}

export default Guess;
