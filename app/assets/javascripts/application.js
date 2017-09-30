// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

//= require jquery3
//= require popper

//////////////first a
// $(document).ready(function(){
//   $(".box").click(function(){
//     $(this).toggleClass("clear");
//     //  setTimeout(function(){ $(".o").toggleClass("clear"); }, 400);
//   });
// });

$(document).ready(function(){
  $(".box").click(function(element){
    $(this).toggleClass("clear");

    el = element.currentTarget.attributes.id;
    elIndex = $('div').index(this);
    gridIndex = elIndex - 5;
    // console.log(countBoxs());
    if(gridIndex%11 === 0){rowPos =  11} else{rowPos =  gridIndex%11};

    for (var i =rowPos; i<12; i++){
      interval = i - rowPos + 1;
      // console.log("interval is "+ interval);
      offRowUp(i+1, interval);
    };
    // console.log("row position "+ rowPos);
    countdown(rowPos)

                                        // function down(){
                                        //   setTimeout(function(){
                                        //     count = rowPos;
                                        //     i = count;
                                        //     if (i == 0){return}
                                        //     else if (i >0) {
                                        //       offRow(i);
                                        //       down();
                                        //       i -= 1;}
                                        //     }, 100);
                                        // };
                                        // down()
    // for (var i =rowPos; i>0; i--){
    // // console.log(i);
    //   offRow(i);
    // };

    //  setTimeout(function(){ $(".o").toggleClass("clear"); }, 400);
  });
});


function offRowUp(j, interval){
  setTimeout(function(){
    // console.log("j is "+ j);
    $("div#a" + j + ".box").toggleClass("clear");
  }, 120 * interval);
}

function countdown(j){
  if(j>0)
  {
      j--;
      setTimeout(function(){
        $("div#a" + j + ".box").toggleClass("clear");
        countdown(j)},120);
        console.log("j is "+j)
  }
}

function offRowDown(j, interval){
  setTimeout(function(){
    console.log("j is "+ j);
    $("div#a" + j + ".box").toggleClass("clear");
  }, 1000 * interval);
}

function countBoxs(){
  grid = document.getElementById("jungletron").childNodes;
  count = 0
  for (var i =0; i<grid.length; i++){
    if (grid[i].nodeType !=3)
    count += 1
    ;
  };
  // console.log(count);
  return count;
}




$(document).ready(function(){
  $( ".logo" ).delay(6000).toggleClass("shrink");;
    // console.log("WORKING");
});
