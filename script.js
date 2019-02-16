color = ['yellow', 'red', 'orange', 'pink', 'purple', 'blue', 'green', 'white'];

$(function () {

let colorChoice;
  //on user click, prevent the default function 
  $('a').on('click', function (event) {
    event.preventDefault();
  }); 

  

  $('input').on('click', function() {
    //save the user's color choice in a variable to be used again
    colorChoice = $('input:checked').val();        
  });

  $('a').on('click', function(){
    color.forEach((value) => {
      if(value !== colorChoice){
        $(this).removeClass(value);
      } 
    }) 
    $(this).toggleClass(`${colorChoice}`);
    $(this).removeClass('animated pulse infinite');
  }); 
        
// when the user clicks the clear all button, remove the color class
  $('.clear-all').on('click', function(){
    color.forEach((value) => {
      if (value === colorChoice || value !== colorChoice) {
        $('a').removeClass(value);
      }
    }) 
    $('a').removeClass('animated pulse infinite');
    $('form').find('input').prop('checked', false);
  });

  //when the user clicks the flashing lights button, and if the a tag has a class of color, toggle the flash animation.
  $('.flash-light').on('click',function(){
      color.forEach((value) => {
        if (value === colorChoice || value !== colorChoice) {
          $(`a.${value}`).toggleClass('animated pulse infinite');
        } 
    }) 
  });
      

  // $("#share").jsSocials({
  //   shares: ["twitter"]
  // });

  // $("#sharePopup").jsSocials({
  //   shareIn: "popup",
  //   shares: ["twitter"]
  // });



});