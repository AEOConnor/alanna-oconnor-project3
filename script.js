color = ['yellow', 'red', 'orange', 'pink', 'purple', 'blue', 'green', 'white'];

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
//what I want to do: on click event, store the class value of the anchor tag class into an array. for a loop on the array. Filter out for only color. Store as current color and compare it to the new user color choice. 

    $('a').on('click', function() {
      
      for(let i = 0; i < color.length; i++) {
        $(this).toggleClass(colorChoice);
      }
     });
        // currentColor = color[i];
        // newColor =  (`${colorChoice}`);
        // console.log(currentColor);
        // if (currentColor === false) {
        //   $(this).addClass(colorChoice);
        // } else if (currentColor === newColor) {
        //   $(this).toggleClass(colorChoice);
        // }
      
      // currentChoice = $(this).class('').val();
      // $(this).toggleClass(colorChoice);
      // console.log(currentChoice);
      // for (let i = 0; i < color.length; i++){
      //   if (colorChoice === color[i]) {
          
      //   } 
      // }
        
       

    $(this).removeClass(`${colorChoice}`);
      $(this).addClass(`${colorChoice}`);
      // console.log(currentColor);
      // console.log(`${colorChoice}`);

        // if (lightColor === true){
        //   $(this).removeClass(colorChoice);
        // } else if(lightColor === false){
        //   $(this).removeClass(`${colorChoice}`);
        //   $(this).addClass(`${colorChoice}`);
        // }
         
          

      


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

  $("#share").jsSocials({
    shares: ["twitter"]
  });

  $("#sharePopup").jsSocials({
    shareIn: "popup",
    shares: ["twitter"]
  });



});