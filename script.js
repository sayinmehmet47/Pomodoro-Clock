let session = $('#session-length').text();
let sessionNum = Number(session);
let breaking = $('#break-length').text();
let isPaused = true;
var doubleClicked=false;
let time = 0;
let countdownTime = Number(sessionNum * 60 * 1000);

let timer = setInterval(() => {
  if (!isPaused) {

    countdownTime -= 1000;
    doubleClicked=false;
    breaking = $('#break-length').text();
    

    let min = Math.floor(countdownTime / (60 * 1000));
    let minLenght = min.toString().length;
    if (minLenght === 1) {
      min = `0${min}`;
    }
    let sec = Math.floor((countdownTime - min * 60 * 1000) / 1000);
    let secLenght = sec.toString().length;
    if (secLenght === 1) {
      sec = `0${sec}`;
    }
    $(".fa-volume-mute").click(e=>{
      e.preventDefault()
      $('#beep')[0].volume===0;

    })

    $('#time-left').html(`${min}:${sec}`);
    if (countdownTime <= 0) {
      $('#beep')[0].play();
      if ($('#timer-label').text() === 'Session') {
        countdownTime = uiBreak.length * 1000 * 60 + 1000;

        $('#time-left').html(`${min}:${sec}`);
        setTimeout(() => {
          $('#timer-label').text('Break');
        }, 1000);
      } else {
        countdownTime = uiSession.length * 1000 * 60 + 1000;
        $('#time-left').html(`${min}:${sec}`);
        setTimeout(() => {
          $('#timer-label').text('Session');
        }, 1000);
      }
    }
  }
}, 1000);

$('#start_stop').click(function (e) {
   sessionNum = Number($('#session-length').text());
   countdownTime = Number(sessionNum * 60 * 1000);

  isPaused = !isPaused;
      $(".fa-play").toggleClass("d-none");
      $(".fa-pause").toggleClass("d-none");


    
  

  doubleClicked=false;

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
  uiSession.reset();

  e.preventDefault();
});

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

$('.session').click(function (e) {

  doubleClicked=true

  if (e.target.classList.contains('changeable')) {
    e.target.setAttribute('contenteditable', true);
    if (e.target.textContent === 'Click to translate') {
      e.target.textContent = "";
      e.target.focus();
    }
  }
});

$('.break').click(function (e) {
  e.preventDefault()
  doubleClicked=true

  if (e.target.classList.contains('changeable')) {
    e.target.setAttribute('contenteditable', true);
    if (e.target.textContent === 'Click to translate') {
      e.target.focus();
    }
  }
});



$("html").on("click",function(e){
  e.preventDefault()

  if(doubleClicked===true){
    uiSession.input();
    uiBreak.input()

  }

})

