$(document).ready((function() {
  $("#eyebutton").click(function() {
var query=$(this).data('query');
  console.log('lol');
      $.ajax({
      url: 'http://localhost:3000/search/'+ query,
      success: function(response){
        console.log(response)
        window.location="bookshelf1.html";
        $.each(response.items,function(i,item){
          fetchbook(item);
        });
      }
    });
  });
}));

function fetchbook(book){
  $.ajax({
    url: book.selfLink,
    success: function(response){
      console.log(response);
        window.location="bookshelf1.html";
    }
  });
}

$(document).ready((function() {
  $("#eyebutton2").click(function() {
var query=$(this).data('query');

    $.ajax({
      url: 'http://localhost:3000/search/'+ query,
      success: function(response){
        console.log(response)
        $.each(response.items,function(i,item){
          fetchbook(item);
        });
      }
    });
  });
}));

$(document).ready((function() {
  $("#eyebutton3").click(function() {
var query=$(this).data('query');

    $.ajax({
      url: 'http://localhost:3000/search/'+ query,
      success: function(response){
        console.log(response)
        $.each(response.items,function(i,item){
          fetchbook(item);
        });
      }
    });
  });
}));

$(document).ready((function() {
  $("#eyebutton4").click(function() {
var query=$(this).data('query');

    $.ajax({
      url: 'http://localhost:3000/search/'+ query,
      success: function(response){
        console.log(response)
        $.each(response.items,function(i,item){
          fetchbook(item);
        });
      }
    });
  });
}));

$(document).ready((function() {
  $("#eyebutton5").click(function() {
var query=$(this).data('query');

    $.ajax({
      url: 'http://localhost:3000/search/'+ query,
      success: function(response){
        console.log(response)
        $.each(response.items,function(i,item){
          fetchbook(item);
        });
      }
    });
  });
}));

$(document).ready((function() {
  $("#eyebutton6").click(function() {
var query=$(this).data('query');

    $.ajax({
      url: 'http://localhost:3000/search/'+ query,
      success: function(response){
        console.log(response)
        $.each(response.items,function(i,item){
          fetchbook(item);
        });
      }
    });
  });
}));


$(document).ready((function() {
  $("#eyebutton7").click(function() {
var query=$(this).data('query');

    $.ajax({
      url: 'http://localhost:3000/search/'+ query,
      success: function(response){
        console.log(response)
        $.each(response.items,function(i,item){
          fetchbook(item);
        });
      }
    });
  });
}));

$(document).ready((function() {
  $("#eyebutton8").click(function() {
var query=$(this).data('query');

    $.ajax({
      url: 'http://localhost:3000/search/'+ query,
      success: function(response){
        console.log(response)
        $.each(response.items,function(i,item){
          fetchbook(item);
        });
      }
    });
  });
}));
