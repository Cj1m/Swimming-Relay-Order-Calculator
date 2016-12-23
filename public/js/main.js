$(document).ready(function(){
  //inits
  $('.tooltipped').tooltip({delay: 50});
  
  //Display relay type
  $("ul#dropdownrelay li").click(function ddvals() {
    var relaytxt = $(this).text();
    $('span#dropdownrelayval').text(relaytxt);
  });
})
