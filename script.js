//array to store key color items to match with user color choice and css class names
color = ['yellow', 'red', 'orange', 'pink', 'purple', 'blue', 'green', 'white'];

//document ready
$(function () {

  //global variable for user color choice
  let colorChoice;

  //on click, prevent the default function 
  $('a.light-container').on('click', function(event) {
    event.preventDefault();
  }); 

  //on click, save the user's color choice in the colorChoice variable
  $('input').on('click', function() {
    colorChoice = $('input:checked').val();        
  });

  //on click, check if the light-container has a color value, if it does remove it. Then, toggle color choice and, if the clicked item has the flash animation, remove it.
  $('a.light-container').on('click', function(){
    color.forEach((value) => {
      if(value !== colorChoice){
        $(this).removeClass(value);
      } 
    }) 
    $(this).toggleClass(`${colorChoice}`);
    $(this).removeClass('animated flash infinite');
  }); 
        
  //on click, toggle the flash animation to all existing anchor tags with color value/colorchoice.
  $('.flash-light').on('click',function(){
      color.forEach((value) => {
        if (value === colorChoice || value !== colorChoice) {
          $(`a.${value}`).toggleClass('animated flash infinite');
          $(`a.${colorChoice}`).toggleClass('animated flash infinite');
        } 
      }) 
  });

  // on click, remove all animation, color values, and checked attribute on input 
   $('.clear-all').on('click', function(){
    color.forEach((value) => {
      if (value === colorChoice || value !== colorChoice) {
        $('a').removeClass(value);
      }
    }) 
    $('a').removeClass('animated flash infinite');
    $('form').find('input').prop('checked', false);
    colorChoice = false;
  });
});