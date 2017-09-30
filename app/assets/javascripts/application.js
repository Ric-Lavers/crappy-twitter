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

    // el = element.currentTarget.attributes.id;
    elIndex = $('div').index(this);
    gridIndex = elIndex - 5;
    // console.log(elIndex);

    if(gridIndex%11 === 0){colPos =  11} else{colPos =  gridIndex%11};

    rowPos =  Math.floor((gridIndex-0.01)/11);
      console.log(rowPos);
        countup(colPos, rowPos)
        countdown(colPos, rowPos)
        // for (var k =rowPos; k<5; k++){}

          // for (var i =colPos; i<12; i++){
          //   interval = i - colPos + 1;
          //   // console.log("interval is "+ interval);
          //   offRowUp(i+1, interval);
          // };
          // console.log("row position "+ colPos);


  });
});

function countup(j,k){
  abc = ['a','b','c','d','e','f']
  kay = abc[k]
  if(j<12)
  {
      j++;
      setTimeout(function(){
        $("div#"+kay + j + ".box").toggleClass("clear");
        // console.log(kay+"__" + j);
        countup(j,k)},60);
        // console.log("j is "+j)
  }
}

function countdown(j,k){
  abc = ['a','b','c','d','e','f']
  kay = abc[k]
  if(j>0)
  {
      j--;
      setTimeout(function(){
        $("div#" +kay+ j + ".box").toggleClass("clear");
        countdown(j,k)},60);
        // console.log("j is "+j)
  }
}

function offRowUp(j, interval){
  setTimeout(function(){
    // console.log("j is "+ j);
    $("div#" + j + ".box").toggleClass("clear");
  }, 120 * interval);
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
