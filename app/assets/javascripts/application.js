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

//// fades out the grid boxs in lines down, up, right and left of the click box.
//##Known Issues.
// needs to be refactored to reduce DRY
// needs to not allow click whilst click function runs

$(document).ready(function(){
  $(".box").click(function(e){
    // if ($(this).hasClass("clear")) {
    //     return false;}

    e.preventDefault();

    $(this).toggleClass("clear");
    elIndex = $('div').index(this);
    gridIndex = elIndex - 5;

    if(gridIndex%11 === 0){colPos =  11} else{colPos =  gridIndex%11};
    rowPos =  Math.floor((gridIndex-0.01)/11);

        // revealRight (colPos, rowPos);
        // revealLeft  (colPos, rowPos);
        revealRightLeft(colPos, rowPos);
        revealUpDown   (colPos, rowPos);
        // revealDown  (colPos, rowPos);
        // revealUp    (colPos, rowPos);


  });
});

var stagger = 60;
var fade    =900;

function revealUpDown(l,k,s=k){
  abc = ['a','b','c','d','e']
  kay = abc[k+1]
  say = abc[s-1]
  if(k<4 || s>0)
  {
      s--;
      k++;
      setTimeout(function(){
        $("div#"+kay +l+".box").fadeTo(fade,.01);
        $("div#"+say +l+".box").fadeTo(fade,.01);
        // console.log(kay+"__" + l);
        revealUpDown(l,k,s)},stagger);
  }
}
function revealRightLeft(j,p,i=j){
  abc = ['a','b','c','d','e']
  pee = abc[p]
  if(j<12 || i>0)
  {
      i--;
      j++;
      setTimeout(function(){
        $("div#"+pee + j + ".box").fadeTo(fade,.01);
        $("div#"+pee + i + ".box").fadeTo(fade,.01);
        // console.log(kay+"__" + j);
        revealRightLeft(j,p,i)},stagger);
        // console.log("j is "+j)
  }
}


function revealDown(l,k){
  abc = ['a','b','c','d','e']
  kay = abc[k+1]
  if(k<4)
  {
      k++;
      setTimeout(function(){
        $("div#"+kay +l+".box").fadeTo(900,.01);
        // console.log(kay+"__" + l);
        revealDown(l,k)},stagger);
  }
}
function revealUp(x,y){
  abc = ['a','b','c','d','e']
  say = abc[y-1]
  if(y>0)
  {
      y--;
      setTimeout(function(){
        $("div#"+say +x+".box").fadeTo(900,.01);
        revealUp(x,y)},stagger);
  }
}

function revealRight(j,p){
  abc = ['a','b','c','d','e']
  pee = abc[p]
  if(j<12)
  {
      j++;
      setTimeout(function(){
        $("div#"+pee + j + ".box").fadeTo(900,.01);
        // console.log(kay+"__" + j);
        revealRight(j,p)},stagger);
        // console.log("j is "+j)
  }
}
function revealLeft(m,n){
  abc = ['a','b','c','d','e','f']
  nah = abc[n]
  if(m>0)
  {
      m--;
      setTimeout(function(){
        $("div#" +nah+ m + ".box").fadeTo(900,.01);
        revealLeft(m,n)},stagger);
        // console.log("j is "+j)
  }
}




  display = document.getElementById("a3");
  console.log(display);


      // function countBoxs(){
      //   grid = document.getElementById("jungletron").childNodes;
      //   count = 0
      //   for (var i =0; i<grid.length; i++){
      //     if (grid[i].nodeType !=3)
      //     count += 1
      //     ;
      //   };
      //   console.log(count);
      //   return count;
      // }

// countBoxs()


$(document).ready(function(){
  $( ".logo" ).delay(6000).toggleClass("shrink");;
    // console.log("WORKING");
});
