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
    // var txt = "";
    // txt += "this: " + el;
    el = element.currentTarget.attributes.id;
    grid = $("div#jungletron.display-grid");
    //  $(".box").html(el.toString());
    console.log(grid);
    for (var i = 1; i<12; i++){
      offRow(i);
    };

    //  setTimeout(function(){ $(".o").toggleClass("clear"); }, 400);
  });
});
function offRow(j){
  setTimeout(function(){
    $("div#a" + j + ".box").toggleClass("clear");
    // $("div#b2.box").html(i);
  }, 40 * j);
}


$(document).ready(function(){
  $( ".logo" ).delay(6000).toggleClass("shrink");;
    console.log("WORKING");
});
