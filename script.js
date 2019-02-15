color = ['yellow', 'red', 'orange', 'pink', 'purple', 'blue', 'green', 'white'];

$(function () {

  //on user click, prevent the default function 
  $('a').on('click', function (event) {
    event.preventDefault();
  }); 

  let colorChoice;

  $('input').on('change', function() {
    //save the user's color choice in a variable to be used again
    colorChoice = $('input:checked').val();        
  })

  $('a').on('click', function(){
    color.forEach((value) => {
      if(value !== colorChoice){
        $(this).removeClass(value);
      }
    }) 
    $(this).toggleClass(`${colorChoice}`);

    
  }); 
        
// when the user clicks the clear all button, remove the color class
  $('.clear-all').on('click', function(){
    $('a').removeClass(`${colorChoice}`);
  });
      
  //when the user clicks the light theme button, toggle the background color
  // $('.light-theme-button').on('click', function() {
  //   $('body').toggleClass('light-theme');
  //   $('.light-container').toggleClass('light-theme-container');
  // });

   //when the user clicks the flashing lights button, and if the a tag has a class of color, toggle the flash animation.
  // $('.flash-light').on('click',function(){
  //     $(`a.${colorChoice}`).toggleClass('animated flash infinite');
  // });

  // $("#share").jsSocials({
  //   shares: ["twitter"]
  // });

  // $("#sharePopup").jsSocials({
  //   shareIn: "popup",
  //   shares: ["twitter"]
  // });



});