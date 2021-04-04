
  let session = $('#session-length').text();
  let sessionNum = Number(session);
  let isPaused = true;
  let time = 0;
  let countdownTime = Number(sessionNum * 60 * 1000);

  let timer = setInterval(() => {
    if (!isPaused) {
      countdownTime -= 1000;
      let min = Math.floor(countdownTime / (60 * 1000));
      let sec = Math.floor((countdownTime - min * 60 * 1000) / 1000);

      if (countdownTime <= 0);
      else $('#time-left').html(`${min}:${sec}`);
    }
  }, 1000);

  $('#start_stop').click(function (e) {
    isPaused = !isPaused;
  
  });


//buttons increase decrease the time
$('#break-increment').click(function (e) {
  uiBreak.increase();

  e.preventDefault();
});

$('#break-decrement').click(function (e) {
  uiBreak.decrease();

  e.preventDefault();
});

$('#session-increment').click(function (e) {
  uiSession.increase();

  e.preventDefault();
});

$('#session-decrement').click(function (e) {
  uiSession.decrease();

  e.preventDefault();
});
$('#reset').click(function (e) {

  uiSession.reset()


  e.preventDefault();
});
