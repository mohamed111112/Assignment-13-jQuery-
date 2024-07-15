(function () {
  $('.singer').hide();


  const w = $('#navigation').innerWidth();
$('#open').click(function (e) {
  e.preventDefault();
  if ($('#navigation').css('left') == '0px') {
    $('#open').animate({ left: "10px" })
    $('#navigation').animate({ left: `-${w}` });
  }

  else {
    $('#navigation').animate({ left: 0 });
    $('#open').animate({ left: '170px' })

  }

})

$('.fa-xmark').click(function (e) {
  e.preventDefault();
  $('#navigation').animate({ left: `-${w}` });
  $('#open').animate({ left: "10px" })
})


$('.singer').first().slideDown()

$('.singer-slide').click(function (e) {
  e.preventDefault();
  let content = $(this).next(".singer");
  $('.singer').not(content).slideUp()
  content.slideToggle()
})


$('textarea').keyup(function () {

  let characterCount = $(this).val().length,
    remainingChars = $('#remainingChars');


  if (characterCount < 100)
    remainingChars.text(100 - characterCount + ' ');
  else
    remainingChars.text(' your available character finished ')
});


const countDownDate = new Date("Aug 5, 2024 00:00:00").getTime();

var downCounter = setInterval(function () {

  var timeleft = countDownDate - Date.now();

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  $('#days').text(`${days < 9 ? "0" : "" }  ${days}  D` )
  $('#hours').text(`${hours < 9 ? "0" : "" }  ${hours}  h` )
  $('#minutes').text(`${minutes < 9 ? "0" : "" }  ${minutes}  m` )
  $('#seconds').text(`${seconds < 9 ? "0" : "" }  ${seconds}  s` )

  if (timeleft < 0) {
    clearInterval(downCounter);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = ""
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "PARTY TIME!!";
  }

}, 1000);

})();



