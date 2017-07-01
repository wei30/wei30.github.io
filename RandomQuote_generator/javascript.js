var quotes =['鸡年大吉', '年年有余','吉祥如意','工作顺利','学业有成','给你特别的祝福，愿新年带给你无边的幸福、如意。','新年的祝福，平日的希冀，愿你心境祥和、充满爱意，愿你的世界全是美满，愿你一切称心如意，快乐无比。','恭贺新禧，祝身体健康、事业发达。','恭贺新禧，万事如意。','恭祝健康、幸运，新年快乐。','祝好运、健康、佳肴伴你度过一个快乐新年。' ,'愿你的新年充满温馨，祥和，与亲人团聚的快乐，祝乐陶陶，新年乐无限。'];

var translation =['Lots of luck for this Rooster year','Surplus year-after-year','Good fortune according to your wishes','May your work go smoothly','Prosperous business','A cheery New Year hold lots of happiness for you','At New Year and always, may peace and love fill your heart, beauty fill your world, and contentment and joy fill your days', 'Allow me to congratulate you on the arrival of the New Year and to extend to you all my best wishes for your perfect health and lasting prosperity','Best wishes for the holidays and happiness throughout the New Year','Good health, good luck and much happiness throughout the year','Good luck, good health, good cheer and pass an happy New Year','May your New Year be filled with special moment, warmth, peace and happiness, the joy of covered ones near, and wishing you all the joys of Christmas and a year of happiness.'];

var canvas, context, randomNum;
addEventListener("load", start, false); //document.addEventListener("load" start);

function start(){
  canvas = document.getElementById("Coin");
  context = canvas.getContext("2d");
}

function NewQuote(){
  randomNum = Math.floor(Math.random()*quotes.length); //generate the random number
  draw();//call the draw function to have the coin shape 
  formatQuote(); //call this function to wrap the quote if is reach the maximum length
  formatTranslation(); //call this function to wrap the translation if is reach the maximum length

}

function draw(){
  //star to draw the circle
context.beginPath();
context.arc(canvas.width/2, canvas.height/3, 200, 0, 2 * Math.PI);
context.lineWidth ="10";
context.strokeStyle = "#ffffb3";
context.fillStyle = "#ffff1a";
context.fill();
context.stroke();

//draw the square
context.beginPath();
context.lineWidth = "2";
context.rect(canvas.width/2.8,canvas.width/5,230,230);
context.fillStyle = "white";
context.fill();
context.stroke();

}

//print out the quote randomly inside the square
//wrap the text when it reaches the side 
function formatQuote(){
  context.fillStyle="red"; //fill the text color red
  context.font="20px Arial";
  var j=0;
  var newArray=[];
  newArray=quotes[randomNum].split("");//spearate the quote into word
  var MaxLength=0;
  var y = canvas.width/4;
  var finalArray ="";
  while(typeof newArray[j] !== 'undefined'){ // if the array has word and not reach the end
    var quote = finalArray + newArray[j] + ''; // assign a variable quote with empty space + first word 
    MaxLength = context.measureText(quote).width; //determine the length of quote
    if(MaxLength < 230){ //if the length of quote not reach the maximum 230
      finalArray = quote; // assign the quote to a variable finalArray
    }else{
      var space = 20;
      context.fillText(finalArray, canvas.width/2.8, y); //if reaches the maximum, print it out
      finalArray = newArray[j] + ''; //assign the current word in a quote to a variable 
      y += space; //next line
    }
    j++; //move to next word of a quote
  }
    context.fillText(finalArray, canvas.width/2.8, y);
  
}
//print out the quote, this function helps wrap the text 
//when it reaches the side
function formatTranslation(){
  context.fillStyle="black"; //fill the text color black
  context.font="14px Arial";
  var newArray=[];
  newArray=translation[randomNum].split(" ");
  var MaxLength=0;
  var finalArray2="";
  var y = canvas.width/2.6;
  for(var i=0; i< newArray.length; i++){//loop through the quote
    var quote = finalArray2 + newArray[i] + " "; //assign current word to a variable quote
    MaxLength = context.measureText(quote).width; //measure the text of quote
    if(MaxLength < 230){ //see if the length of the quote reach the maximum
      finalArray2 = quote; //assign quote to array
    }else{
      var space =20; 
      context.fillText(finalArray2, canvas.width/2.8, y); 
      finalArray2 = newArray[i] + " "; //if reach the maximum line, put the quote to next line
      y += space; 
    }
  }
  context.fillText(finalArray2, canvas.width/2.8, y);
}


// Source:
//https://www.youtube.com/watch?v=aNDHAEKvEl8
//these functions make the image toggle back one image to the other image
var image_tracker='first';
function change(){
  var image = document.getElementById('imageLantern');
  if(image_tracker === 'first'){ //if equal to the first
    image.src = 'originalLantern.jpg'; //change to the image source to the first image
    image_tracker = 'second'; //else if equal to the second
  }else{
    image.src ='lantern.jpg'; //change to the source to the second image
    image_tracker = 'first'; //makes toggle back, by set the variable to first again
  }
}
var timer = setInterval('change()', 2000);

var image_tracker1 ='first';
function change1(){
  var image1 = document.getElementById('imageLantern1');
  if(image_tracker1 === 'first'){
    image1.src = 'originalLantern.jpg';
    image_tracker1 = 'second';
  }else{
    image1.src ='Lantern1.jpg';
    image_tracker1 = 'first';
  }
}
var timer1 = setInterval('change1()', 2010);


var image_tracker2 = 'first';
function change2(){
  var image2 = document.getElementById('imageLantern2');
  if(image_tracker2 === 'first'){
    image2.src = 'originalLantern.jpg';
    image_tracker2 = 'second';
  }else{
    image2.src = 'Lantern2.jpg';
    image_tracker2 = 'first';
  }
}
var timer2 = setInterval('change2()', 2020);

var image_tracker3 = 'first';
function change3(){
  var image3 = document.getElementById('imageLantern3');
  if(image_tracker3 === 'first'){
    image3.src = 'originalLantern.jpg';
    image_tracker3 = 'second';

  }else{
    image3.src = 'Lantern3.jpg';
    image_tracker3 = 'first';
  }
}
var timer3 = setInterval('change3()', 2030);
