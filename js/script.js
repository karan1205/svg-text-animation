var items = ["#pattern-rect", "#pattern-circle", "#pattern-triangle","#pattern-star"];
$("div").hover(function(){
  $("g").css({"visibility": "visible"});
  var item = Math.floor(Math.random()*items.length);
  $("g").css({"fill": "url(" + items[item] + ")"});
  }, function(){
  $("g").css({"visibility": "hidden"});
  });
$("g").css({"visibility": "hidden"});
