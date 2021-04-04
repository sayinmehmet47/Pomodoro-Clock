class Ui {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }

  increase() {
    this.length += 1;
    $(`#${this.name}-length`).text(this.length);
    $('#time-left').text(`${this.length}:00`)
    countdownTime = Number(this.length * 60 * 1000)

  }

  decrease() {
    this.length -= 1;
    $(`#${this.name}-length`).text(this.length);
    $('#time-left').text(`${this.length}:00`)
    countdownTime = Number(this.length * 60 * 1000)


  }


  reset(){

    $(`#${this.name}-length`).text("25");
    $('#time-left').text(`25:00`)
    countdownTime = Number(25 * 60 * 1000)


  }
}

let sesNum = Number($('#session-length').text());
let breNum = Number($('#break-length').text());
const uiSession = new Ui('session', sesNum);
const uiBreak = new Ui('break', breNum);
