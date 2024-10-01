/********************************************************
파일명 : ui.js
설 명  : Custom
수정일    수정자 명   수정내용
------- -------- ----------
2021.01.01  kse  최초 생성
*********************************************************/

$(document).ready(function () {
  /*사용안함 $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('open');
  });*/
  /*contentMenu에 있을 때 해당하는 div만 보이게 하기
  if(document.querySelectorAll(".contentMenu a").length > 1){	
    var contentMenuList = document.querySelectorAll(".contentMenu a");//contentMenu 리스트 가져오기
    var contentMainList = document.querySelectorAll(".contentMain");//contentMain 리스트 가져오기
    for (idx = 0; idx < contentMenuList.length; idx++) { //클릭 이벤트
      $(contentMenuList).eq(0).addClass("active");
      $(contentMainList).css("display","none").eq(0).css("display","block");
      contentMenuList[idx].addEventListener('click', function(event) {
        event.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        $(contentMainList).css("display","none").eq($(this).index()).css("display","block");
      });
    }
  }*/
});

/*사용안함
window.onresize = function() {
  buildResponsiveCssByJs();  
}

function changeLongName(){
	var findLongNm = document.querySelectorAll("#gnbInner div.dropdown-menu a");
	for(var i=0; i < findLongNm.length; i++) {
	  if(findLongNm[i].innerHTML == "//"){
		  findLongNm[i].innerHTML = "//";
	  }
	}
}

function buildResponsiveCssByJs() {
	if (window.matchMedia('(min-width: 992px)').matches) {
	  $(".gnbMenu").hover(function () {
		$('.navbar').append($("<div id='background' style='position:absolute; width: 100%; height: 20rem; top: 100%; left: 0; right: 0; background-color: white; z-index:1; display: block; box-shadow: inset 0px 1px 0px #dedede, 0px 5px 5px rgba(0,0,0,0.3);'></div>"));
		$('.gnbMenu .dropdown-menu').css('display', 'block');
		//hover효과로 dropdown을 출력함(키워드:.dropdown:hover>.dropdown-menu {display: block;})
	  }, function () {
		$('#background').remove();
	  });
	} else {
	}
  }
*/