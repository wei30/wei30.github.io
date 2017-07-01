//building a simple calculator
$(document).ready(function(){
  $('#slider').click(function(){ //click the slider to change the position of the slider
    $('#cover').css("top", "-660px");
    $(this).hide(); //hide the slider after the slider cicked 
	$('#cover').click(function(){ //cover back the calculator 
		$(this).css("top", "-322px"); //move back the cover to the original position
		$('#slider').show(); //show the slider 
	});
  });
  var turnON = true;
     $('#off').click(function(){ //click on/off button
       var value = ''; //value that prints to the input
       var sum=''; //total of the value
       var sign =0; //count the operator(-+*/)
       var index; //detect where is the decimal located 
       
       $('input').val('ON');//turn ON the calculator
       if(turnON === true){//if it is ON
         $('#AC').click(function(){ //delete the history of the calculator, clear the whole value if AC button clicked
            value = '';
            $('input').val(value); //display the value into the input 
         });
        
         $('#CE').click(function(){//delete one value from a string if CE button clicked
            value = value.slice(0,-1); //delete one value 
            $('input').val(value); //output the value
         });
        
         $('#decimal').click(function(){ //if decimal is clicked, deal with the repeated decimal
            index = value.lastIndexOf('.'); //return the location of the decimal 
    
            if(index === -1){//if there is no decimal yet when decimal button click for first time           
                 value = value + "."; //add the decimal to the end of the value
                 $('input').val(value); //print the value to the input
              
            }else{ //there is at least one decimal in the value 
              if(value.substring(index, value.length-1).match('[-+*/]')){//check the string      between the last decimal place to the current decimal place if contains operator sign, 
                //for example: 0.008/0.800 this example shows is a sign(/) between the first                    decimal and the current decimal 
                 value = value + "."; 
                 $('input').val(value);
                 //index = value.lastIndexOf('.');
              }
            }
               
         });
  
         $('.btn-primary').click(function(){//calculator works, blue buttons includes number and sign except the decimal  
             value = value + $(this).val(); //add to the current string if blue buttons clicked
             $('input').val(value);//output the total value
            
             if($(this).val() === '/' || $(this).val() === '+' || $(this).val() === '-' || $(this).val() === '*'){
             //check if the current value from a string contains these operator(/+*-)
                sign++; //if an operator find, add to the increase the sign;      
             }
           
             if(sign > 1){//prevents two opeartor together 
               if(isNaN(value[value.length-1]) && isNaN(value[value.length-2])){//check if the previous and current value is a number, if is not a number, pop it out
                  value = value.slice(0,-1); //pop the sign out
                  $('input').val(value);//output the string to the input       
                }           
             }
            if(value[0] === '/' || value[0] === '+'|| value[0]=== '-' || value[0] === '*'){//if the first input is a operator, delete it 
              value = value.slice(0,-1);
              $(input).val('');   
            }
           
           //when equal sign is pressed, the value send to eval function to calculate the solution
           $('.btn-warning').click(function(){//click the = sign to solve the equation
                //console.log(value);
                sum = eval(value); //evaluate the string 
                $('input').val(sum); //print out the sum to the input
                console.log("total:"+sum); 
           });
          
         });
         turnON = false; 
        // value = '';
        // sum = '';
       
       }else{ //when calculator is off, turnON == false
         $('input').val('OFF');//calculator turns OFF
         value = '';
         sum = '';
         $('.btn-primary').click(function(){ //clear the value 
           $('input').val(value);
         });
         $('.btn-warning').click(function(){//clear the value 
           $('input').val(sum);
         });
         $('#CE').click(function(){//clear the input when calculator is off
           $('input').val(value);
         })            
        turnON = true; 
       }                             
    }); 
});
