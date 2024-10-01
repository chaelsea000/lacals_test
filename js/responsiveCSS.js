/********************************************************
파일명 : responsiveCSS.js
설 명  : 반응형을 위한 js파일
수정일    수정자 명   수정내용
------- -------- ----------
2021.01.01  kse  최초 생성
*********************************************************/

window.onresize = function() {
  buildResponsiveCssByJs();  
}

function buildResponsiveCssByJs(){
  if ( window.matchMedia('(min-width: 992px)').matches ) {
    $(".gnbMenu").hover(
      function() {
        $('.navbar').append( $("<div id='background' style='position:absolute; width: 100%; height: 20rem; top: 100%; left: 0; right: 0; background-color: white; z-index:1; display: block; box-shadow: inset 0px 1px 0px #dedede, 0px 5px 5px rgba(0,0,0,0.3);'></div>") );
        $('.gnbMenu .dropdown-menu').css('display','block');
        /*hover효과로 dropdown을 출력함(키워드:.dropdown:hover>.dropdown-menu {display: block;})*/
      }, function() { 
          $('#background').remove();
      }
    ); 
  }else{
	  
	if( window.matchMedia('(max-width: 600px)').matches ){	
	  document.querySelectorAll(".defaultDiagram .object").forEach(e => e.style.position = 'static');
	  document.querySelectorAll(".defaultDiagram").forEach(e => e.style.height = '100%' );
	}
	
    /*테이블 중에 컬럼이 6개 이상 넘어가는 경우 반응형에서 삭제*/ 
    var responsiveTableColumnCriteria = 6;
    var removeColumnCntWhenResponsive = 6;
    var tables = document.getElementsByTagName("table"); //var tables = document.getElementsByClassName("overColumnCriteria");

    for(var idx = 0 ; idx < tables.length; idx++ ){
      //컬럼 갯수 기준을 초과한 경우
      if(tables[idx].rows[0].cells.length > responsiveTableColumnCriteria){
        //기준이 넘은 테이블
        var overResponsiveTableColumnCriteria = tables.item(idx);
        //기준이 넘은 테이블의 최대 컬럼수
        var maxThTdCnt = overResponsiveTableColumnCriteria.rows[0].childElementCount;

        //셀 갯수를 계산하여 배열에 넣는다
        for (var i = 0, row; row = overResponsiveTableColumnCriteria.rows[i]; i++) {
          //[TODO] colspan은 있으면 안되고, rowspan은 한개 이상 있으면 안된다 따라서 그러한 테이블만 적용할것
          var rowspanNumber = overResponsiveTableColumnCriteria.rows[i].cells[0].getAttribute('rowspan');
          var bothThTdCntByRow = overResponsiveTableColumnCriteria.rows[i].childElementCount;
          
          if(rowspanNumber == null && bothThTdCntByRow == maxThTdCnt ){//rowspan안에 포함되지 않는 독립적인 열
            for(var j=1; j < removeColumnCntWhenResponsive ; j++ ){
              overResponsiveTableColumnCriteria.rows[i].cells[j].style.display = 'none';
            }
          }else if(rowspanNumber != null && bothThTdCntByRow == maxThTdCnt ){//rowspan이 있는 열 
            for(var j=1; j < removeColumnCntWhenResponsive ; j++ ){
              overResponsiveTableColumnCriteria.rows[i].cells[j].style.display = 'none';
            }
          }else if(rowspanNumber == null && bothThTdCntByRow < maxThTdCnt  ){//rowspan에 포함되는 열
            for(var j=0; j < removeColumnCntWhenResponsive - 1 ; j++ ){
              overResponsiveTableColumnCriteria.rows[i].cells[j].style.display = 'none';
            }
          }else{
            //console.log("colspan, rowspan이 일정하지 않은 테이블");
          }
        }
      };
    }
  }  
};

