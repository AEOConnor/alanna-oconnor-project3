color = ['yellow', 'pink', 'red', 'orange', 'green', 'blue', 'white', 'purple', 'orange'];


$(function () {

  //on user click, prevent the default function 
  $('a').on('click', function (event) {
    event.preventDefault();
  }); 

let colorChoice;

let currentColor;

  $('input').on('change', function() {
    //save the user's color choice in a variable to be used again
    colorChoice = $('input:checked').val();    
  })

 //when the user clicks on an a tag, toggle the color class that corresponds with their color choice
    $('a').on('click', function() {
      for (let i = 0; i <= color.length; i++)
      
        currentColor = color[i];
        let lightColor = $(this).hasClass(`${currentColor}`);
      console.log(currentColor);
      console.log(lightColor);

        if (lightColor === false){
          $(this).toggleClass(colorChoice);
        } else if(lightColor === colorChoice){
          $(this).toggleClass(colorChoice);
        } else if(lightColor !== colorChoice){
          $(this).removeClass(`${currentColor}`);
          $(this).addClass(`${colorChoice}`);
        }
     });      
          

      


        // console.log(currentColor);
        // if(currentColor != colorChoice){
        //   $(this).removeClass(currentColor)
        //   $(this).addClass(colorChoice)
        // } else if (currentColor === colorChoice) {
        //   $(this).toggleClass(colorChoice);
        // }
     



// currentColor = $(this).hasClass(`${colorChoice}`);
//       console.log(currentColor, colorChoice);


    // }); for(let i = 0; i < color.length; i++) {
    //     if($(this).hasClass(color[i])){
    //       console.log(color)
    //       const currentColor = color[i];
    //     } else if($(this).hasClass(color[i]) != true){
    //       $(this).addClass(colorChoice);
    //     }
      // for (){
      //   if ($(this).hasClass(color[i])){
          //do nothing
        // } else if ($(this).hasClass(color[i]) != true ){
          //
      //   }
      // }
      // for(let i = 0; i < color.length; i++) {
      //     console.log(color[i], colorChoice);
  
      //   if(color[i] != colorChoice){
          
      //     $(this).removeClass(colorChoice);
      //   } 
      // } 
      // $(this).toggleClass(colorChoice);
      // console.log(colorChoice);
   

    // $(`a.${colorChoice}`).on('click', function(i) {
    //   for (let i = 0; i > color.length; i++) {
    //     if (color[i] === `${colorChoice}`) {
    //       $(this).removeClass(`${colorChoice}`);
    //     } else if (color[i] != `${colorChoice}`)
    //       $(this).removeClass(`${colorChoice}`);
    //   }
    //   $(this).toggleClass(`${colorChoice}`);
    //   console.log(colorChoice);
    // });


  //when the user clicks the light theme button, toggle the background color
  $('.light-theme-button').on('click', function () {
    $('body').toggleClass('light-theme');
    $('.light-container').toggleClass('light-theme-container');
  });

   //when the user clicks the flashing lights button, and if the a tag has a class of color, toggle the flash animation.
  $('.flash-light').on('click', function () {
      $(`${colorChoice}`).toggleClass('animated flash infinite');
    });

//when the user clicks the clear all button, remove the color class
  $('.clear-all').on('click', function () {
      $('a').removeClass(`${colorChoice}`);
    });

});