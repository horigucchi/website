function header(){
    // $.ajax({
    //     url: "components/header.html",
    //     cache: false,
    //     success: function(html){
    //         document.write(html);
    //     }
    // });
    $('h1').text('こんにちは');
};

$(function(){
  $('header').load("components/header.html div");

});
