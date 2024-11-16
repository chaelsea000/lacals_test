"use strict";

/********************************************************
파일명 : responsiveCSS.js
설 명  : 반응형을 위한 js파일
수정일    수정자 명   수정내용
------- -------- ----------
2021.01.01  kse  최초 생성
*********************************************************/
// 초기 페이지 로드 시에도 함수 실행
$(document).ready(function () {
  buildResponsiveCssByJs();
});

window.onresize = function () {
  buildResponsiveCssByJs();
};

function buildResponsiveCssByJs() {
  var nav = document.querySelector(".gnb"); // 화면 너비가 992px 이상일 때만 스크롤 이벤트 추가

  if (window.matchMedia('(min-width: 992px)').matches) {
    window.onscroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > nav.offsetHeight);
    };
  } else {
    window.onscroll = null;
    nav.classList.remove("scrolled");
  }
}