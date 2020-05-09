$(document).ready(function () {
  var entryCount = 0;
  2;
  var displayCount = 0;
  $(document).on("keypress", function (e) {
    entryCount++;
    displayCount++;
    //translate unicode to characters
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char);
    createElement(char);
    e.preventDefault();
  });

  //capture function keys
  $(document).on("keydown", function (e) {
    //if pressed key is a backspace
    if (e.which == 8) {
      e.preventDefault();
      entryCount++;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP");
      deleteElement();
      e.preventDefault();
    }
  });
  function deleteElement() {
    $(".inner").last().remove();
  }
  function nextLine() {
    $("#cursor").before('<span class="inner"><br></span>');
  }
  $(document).on("keydown", function (e) {
    //if pressed key is return
    if (e.which == 13) {
      e.preventDefault();
      entryCount++;
      console.log("entry #" + entryCount + " : " + e.which + " | RT");
      nextLine();
    }
  });
 
  //toggling text on blocks+add name to cart when button is clicked
  $(".content").hide();
  $("#image1").click(function () {
    $("#content1").toggle();
    var $this = $(this);
    $this.attr("id", $this.attr("id") == "image1" ? "nope" : "image1");
  });
  $("#Une").click(function(){
    $(".list").append('<span class="goods">Open Sesame, Vol.1<br></span>');
  })
  $("#image2").click(function () {
    $("#content2").toggle();
    var $this = $(this);
    $this.attr("id", $this.attr("id") == "image2" ? "nope2" : "image2");
  });
  $("#Deux").click(function(){
    $(".list").append('<span class="goods">TXL<br></span>');
  })
  $("#image3").click(function () {
    $("#content3").toggle();
    var $this = $(this);
    $this.attr("id", $this.attr("id") == "image3" ? "nope" : "image3");
  });
  $("#Trois").click(function(){
    $(".list").append('<span class="goods">We Are All Things<br></span>');
  })
  $("#image5").click(function () {
    $("#content5").toggle();
    var $this = $(this);
    $this.attr("id", $this.attr("id") == "image5" ? "nope2" : "image5");
  });
  $("#Quarte").click(function(){
    $(".list").append('<span class="goods">Good Trouble, Issue 21<br></span>');
  })
  $("#image6").click(function () {
    $("#content6").toggle();
    var $this = $(this);
    $this.attr("id", $this.attr("id") == "image6" ? "nope" : "image6");
  });
  $("#Cinq").click(function(){
    $(".list").append('<span class="goods">Black Lives 1900<br></span>');
  })
  $("#image7").click(function () {
    $("#content7").toggle();
    var $this = $(this);
    $this.attr("id", $this.attr("id") == "image7" ? "nope2" : "image7");
  });
  $("#Six").click(function(){
    $(".list").append('<span class="goods">Diario de Aztlán I<br></span>');
  })
  $(".out").click(function(){
    $(".goods").remove();
  })

//hide opening text on click
  $(".canvasButton").click(function () {
    $(".textCenter").css("display", "none");
    $(".centerCanvas").css("opacity", "100");
    
  });

//display date and time using moment.js
  var now = moment().format("MMMM Do YYYY, h:mm a, dddd");
  $("#time").append(now);
});
//There are probably ways to do this in two lines but I only have two braincells left
//not using <textarea> because it cant overlap with <canvas>
//gods of jquery pls let this work
function createElement(k) {
  var elem = $("#cursor");
  if (k == "A") {
    elem.before('<span class="inner">A</span>');
  }
  if (k == "B") {
    elem.before('<span class="inner">B</span>');
  }
  if (k == "C") {
    elem.before('<span class="inner">C</span>');
  }
  if (k == "D") {
    elem.before('<span class="inner">D</span>');
  }
  if (k == "E") {
    elem.before('<span class="inner">E</span>');
  }
  if (k == "F") {
    elem.before('<span class="inner">F</span>');
  }
  if (k == "G") {
    elem.before('<span class="inner">G</span>');
  }
  if (k == "H") {
    elem.before('<span class="inner">H</span>');
  }
  if (k == "I") {
    elem.before('<span class="inner">I</span>');
  }
  if (k == "J") {
    elem.before('<span class="inner">J</span>');
  }
  if (k == "K") {
    elem.before('<span class="inner">K</span>');
  }
  if (k == "L") {
    elem.before('<span class="inner">L</span>');
  }
  if (k == "M") {
    elem.before('<span class="inner">M</span>');
  }
  if (k == "N") {
    elem.before('<span class="inner">N</span>');
  }
  if (k == "O") {
    elem.before('<span class="inner">P</span>');
  }
  if (k == "Q") {
    elem.before('<span class="inner">Q</span>');
  }
  if (k == "R") {
    elem.before('<span class="inner">R</span>');
  }
  if (k == "S") {
    elem.before('<span class="inner">S</span>');
  }
  if (k == "T") {
    elem.before('<span class="inner">T</span>');
  }
  if (k == "U") {
    elem.before('<span class="inner">U</span>');
  }
  if (k == "V") {
    elem.before('<span class="inner">V</span>');
  }
  if (k == "W") {
    elem.before('<span class="inner">W</span>');
  }
  if (k == "X") {
    elem.before('<span class="inner">X</span>');
  }
  if (k == "Y") {
    elem.before('<span class="inner">Y</span>');
  }
  if (k == "Z") {
    elem.before('<span class="inner">Z</span>');
  }
  if (k == "a") {
    elem.before('<span class="inner">a</span>');
  }
  if (k == "b") {
    elem.before('<span class="inner">b</span>');
  }
  if (k == "c") {
    elem.before('<span class="inner">c</span>');
  }
  if (k == "d") {
    elem.before('<span class="inner">d</span>');
  }
  if (k == "e") {
    elem.before('<span class="inner">e</span>');
  }
  if (k == "f") {
    elem.before('<span class="inner">f</span>');
  }
  if (k == "g") {
    elem.before('<span class="inner">g</span>');
  }
  if (k == "h") {
    elem.before('<span class="inner">h</span>');
  }
  if (k == "i") {
    elem.before('<span class="inner">i</span>');
  }
  if (k == "j") {
    elem.before('<span class="inner">j</span>');
  }
  if (k == "k") {
    elem.before('<span class="inner">k</span>');
  }
  if (k == "l") {
    elem.before('<span class="inner">l</span>');
  }
  if (k == "m") {
    elem.before('<span class="inner">m</span>');
  }
  if (k == "n") {
    elem.before('<span class="inner">n</span>');
  }
  if (k == "o") {
    elem.before('<span class="inner">o</span>');
  }
  if (k == "p") {
    elem.before('<span class="inner">p</span>');
  }
  if (k == "q") {
    elem.before('<span class="inner">q</span>');
  }
  if (k == "r") {
    elem.before('<span class="inner">r</span>');
  }
  if (k == "s") {
    elem.before('<span class="inner">s</span>');
  }
  if (k == "t") {
    elem.before('<span class="inner">t</span>');
  }
  if (k == "u") {
    elem.before('<span class="inner">u</span>');
  }
  if (k == "v") {
    elem.before('<span class="inner">v</span>');
  }
  if (k == "w") {
    elem.before('<span class="inner">w</span>');
  }
  if (k == "x") {
    elem.before('<span class="inner">x</span>');
  }
  if (k == "y") {
    elem.before('<span class="inner">y</span>');
  }
  if (k == "z") {
    elem.before('<span class="inner">z</span>');
  }
  if (k == ",") {
    elem.before('<span class="inner">,</span>');
  }
  if (k == " ") {
    elem.before('<span class="inner"> </span>');
  }
  if (k == "?") {
    elem.before('<span class="inner">?</span>');
  }
  if (k == "!") {
    elem.before('<span class="inner">!</span>');
  }
  if (k == ".") {
    elem.before('<span class="inner">.</span>');
  }
  if (k == "-") {
    elem.before('<span class="inner">-</span>');
  }
  //the backlash helps js distinguish the character
  if (k == "'") {
    elem.before('<span class="inner">\'</span>');
  }
  if (k == '"') {
    elem.before('<span class="inner">"</span>');
  }
  if (k == ":") {
    elem.before('<span class="inner">:</span>');
  }
  if (k == "1") {
    elem.before('<span class="inner">1</span>');
  }
  if (k == "2") {
    elem.before('<span class="inner">2</span>');
  }
  if (k == "3") {
    elem.before('<span class="inner">3</span>');
  }
  if (k == "4") {
    elem.before('<span class="inner">4</span>');
  }
  if (k == "5") {
    elem.before('<span class="inner">5</span>');
  }
  if (k == "6") {
    elem.before('<span class="inner">6</span>');
  }
  if (k == "7") {
    elem.before('<span class="inner">7</span>');
  }
  if (k == "8") {
    elem.before('<span class="inner">8</span>');
  }
  if (k == "9") {
    elem.before('<span class="inner">9</span>');
  }
  if (k == "0") {
    elem.before('<span class="inner">0</span>');
  }
}
