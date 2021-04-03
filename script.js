$(document).ready(function () {
  let session = $('#session-length').text();
  let sessionNum = Number(session);
  console.log(sessionNum);
  let isPaused = true;
  let time = 0;
  let countdownTime = Number(sessionNum * 60 * 1000);

  let timer = setInterval(() => {
    if (!isPaused) {
      countdownTime -= 1000;
      let min = Math.floor(countdownTime / (60 * 1000));
      let sec = Math.floor((countdownTime - min * 60 * 1000) / 1000);

      if (countdownTime <= 0) alert('31 min!');
      else $('#time-left').html(`${min}:${sec}`);
    }
  }, 1000);

  $('#start_stop').click(function (e) {
    isPaused = !isPaused;
  });
});
