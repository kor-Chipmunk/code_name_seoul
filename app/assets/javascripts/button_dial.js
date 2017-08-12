$(document).on("turbolinks:load", function() {
  var loading = function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('loading');
    e.target.setAttribute('disabled','disabled');
    setTimeout(function(){
      e.target.classList.remove('loading');
      e.target.removeAttribute('disabled');
    },1500);
  };

  var btns = document.querySelectorAll('button');
  for (var i=btns.length-1;i>=0;i--) {
    btns[i].addEventListener('click',loading);
  }
  $("#btn158").on("click", function() {
    swal({
    title: '주의하세요!',
    text: '확인버튼을 누르면 다시 돌아올 수 없습니다!',
    imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/codename-seoul/seoul/now/quiz/h_q7_next_password1.png',
    imageWidth: 360,
    imageHeight: 640,
    animation: false
  }).then(function() {
    $.ajax({
      url: '/answer',
      method: 'POST',
      data: { 'answer': 162 }
    }).done(function(data) {
      window.location.reload();
      });
    });
  });
  $("#btn162").on("click", function() {
    swal({
    title: '주의하세요!',
    text: '확인버튼을 누르면 다시 돌아올 수 없습니다!',
    imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/codename-seoul/seoul/now/quiz/h_q7_next_password2.png',
    imageWidth: 360,
    imageHeight: 640,
    animation: false
  }).then(function() {
    $.ajax({
      url: '/answer',
      method: 'POST',
      data: { 'answer': 162 }
    }).done(function(data) {
      window.location.reload();
      });
    });
  });
});
