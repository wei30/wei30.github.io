//http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
//http://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/
//http://neverstopbuilding.com/minimax
//http://richard.to/programming/ai-for-owari-part-2.html
//http://www.flyingmachinestudios.com/programming/minimax/
//https://www.youtube.com/watch?v=zDskcx8FStA

$(document).ready(function(){
  //default value
  var player = 'X';
  var AI = 'O';
  var board = ['NA','NA','NA','NA','NA','NA','NA','NA','NA']; //original board
  var round = 0;
  var hmscore = 0, aiscore = 0;
  var hmx = 20;
  var hmy = 0;
  var aix = 20;
  var aiy = 0;
  var Level = 'easy';
 
  $('#start').click(function(){//press the start button to start the game
    $('.begin').hide(); //the menu hided
    $('.start_Game').show(); //the board appears
    var value = document.getElementById('playername').value
   //get the value name of the playername
  //get the value name of the playername
    if(value === '') value = 'Human';//return human if player didnt enter a name
    $('.box').html(value); //print the playername
    $('.box1').html('AI'); //print the AI
    console.log(player);
  });
  
  $('#restart').click(function(){ //to restart the game press the restart button
    $('.begin').show();//the menu show
    $('.start_Game').hide(); //the tic tac toe game show
    var c = document.getElementById('myCanvas'); //get the id of the first Canvas
    var c2 = document.getElementById('myCanvas2'); //get the id of the second Canvas
    var ctx = c.getContext('2d');
    var ctx2 = c2.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height); //clear the score when restart button clicked
    ctx2.clearRect(0, 0, c2.width, c2.height);
    hmscore = 0, aiscore = 0,  player ='X',  AI='O'; //reset all the value
    hmx = 20, hmy = 0, aix = 20, aiy = 0;
    reset(); //reset function called
  });
  
  $('#bigO').click(function(){ //player default X if player didn't choose a sign
    player = 'O';
    AI = 'X';
  });
  
  $('#easy').click(function(){ //easy level button clicked
    Level = 'easy';
  });
  
  $('#hard').click(function(){ //hard level button clicked
    Level = 'hard';
  });
  
  $('.spot').click(function(){ //start the game, click the board to print the sign to the board
    var position = $(this).attr('id'); //give back the position id where it clicked
    IsHuman_Turn(board, player, position);//call the human function 
  });
  
  function IsHuman_Turn(board, player, position){
    if(board[parseInt(position)] === 'NA'){ //if the clickable position is empty, display the sign
        $('#'+position).html(player); //print the sign 
        board[parseInt(position)] = player; //record the position to the board
        round++;
        //console.log(board);
        if(DidPlayerWin(board, player)){
          setTimeout(function() {
          drawscore(); 
          reset();
        },100);
        return;
        
       }else{
          if(Level === 'easy'){
            EasyAI_Turn(board, AI);//pass AI to easy level, if human choose to play easy level
          }if(Level === 'hard'){
            HardAI_Turn(board, AI);//pass AI to hard level, if human choose to play hard level
          }
          if(DidPlayerWin(board, AI)){ //Check if AI won
             setTimeout(function() {
             drawscore2(); 
             reset();
          }, 100);
          return;
         }else if(round === 5){ //if round 5 reached, it means both player filled up the board,
             setTimeout(function(){//which mean the board has no empty spaces
               alert("TIE GAME"); //display Tie Game
               reset();
          }, 100);
        }
      } 
    }  
  }
  
  function drawscore2(){ //Draw the score for AI
    var c = document.getElementById('myCanvas'); //get the id of the first Canvas
    var c2 = document.getElementById('myCanvas2'); //get the id of the second Canvas
    var ctx = c.getContext('2d'); 
    var ctx2 = c2.getContext('2d'); 
    aiscore ++; //add one to Artificial Intelligence score
    if(aiscore % 5 === 0){ //if the AI score reach five draw diagonal 
       ctx2.beginPath(); //starts to draw
       ctx2.moveTo(10 + aiy, 110); 
       ctx2.lineTo(110 + aiy, 30);
       ctx2.lineWidth = 15; // how thick the line 
       ctx2.strokeStyle = '#ffffff'; //color of the line
       ctx2.stroke(); //draw the line
       aix = aix + 40; //add 40 for x position
       aiy = aix-30; 
    }else if(aiscore === 12){
       ctx.clearRect(0, 0, c.width, c.height); //clear the first canvas when the score reach to 12
       ctx.beginPath(); 
       ctx2.clearRect(0, 0, c2.width, c2.height);//clear the second canvas 
       ctx2.beginPath();
       alert("AI Win the Game\n\n\n" + "GameEnd");//AI won the game 
       aiscore = 0; //reset the Artificial Intelligence score
       hmscore = 0; //reset the Human score 
       aix = 20;
       aiy = 0;
    }else{
       ctx2.beginPath();
       ctx2.moveTo(aix, 20); //draw straight line
       ctx2.lineTo(aix, 150);
       ctx2.lineWidth = 8;
       ctx2.strokeStyle = '#ffffff'; 
       ctx2.stroke();
       aix = aix + 20; //move the x position to right by 20  
    }
    console.log(aiscore);
  }
  
  function drawscore(){ //Draw the score for human
    var c = document.getElementById('myCanvas');
    var c2 = document.getElementById('myCanvas2');
    var value = document.getElementById('playername').value; //get the value name of the playername
    var ctx = c.getContext('2d');
    var ctx2 = c2.getContext('2d');
    var value ="Human";
    hmscore ++;
    if(hmscore % 5 === 0){
       ctx.beginPath();
       ctx.moveTo(10 + hmy, 110);
       ctx.lineTo(110 + hmy, 30);
       ctx.lineWidth = 15;
       ctx.strokeStyle = '#ffffff';
       ctx.stroke();
       hmx = hmx + 40;
       hmy = hmx-30;
    }else if(hmscore === 12){
       ctx.clearRect(0, 0, c.width, c.height);
       ctx.beginPath();
       ctx2.clearRect(0, 0, c2.width, c2.height);
       ctx2.beginPath();
       alert(value + " Win the Game\n\n\n" + "GameEnd");
       hmscore = 0;
       aiscore = 0;
       hmx = 20;
       hmy = 0;
    }else{
       ctx.beginPath();
       ctx.moveTo(hmx, 20);
       ctx.lineTo(hmx, 150);
       ctx.lineWidth = 8;
       ctx.strokeStyle = '#ffffff';
       ctx.stroke();
       hmx = hmx + 20;
    }
    console.log(hmscore);
  }
  
  function DidPlayerWin(board, Gameplayer){ //Check the board, whose the winner, if it match the same sign row1, row2, or row3
    if((board[0] === Gameplayer && board[1] === Gameplayer && board[2] === Gameplayer)  ||//is the winner, if it match the same column1, 
       (board[3] === Gameplayer && board[4] === Gameplayer && board[5] === Gameplayer)  || //column2, and column3 with the same sign, winner found
       (board[6] === Gameplayer && board[7] === Gameplayer && board[8] === Gameplayer)  ||//if match 2 diagonal, winner found
       (board[0] === Gameplayer && board[4] === Gameplayer && board[8] === Gameplayer)  ||
       (board[2] === Gameplayer && board[4] === Gameplayer && board[6] === Gameplayer)  ||
       (board[0] === Gameplayer && board[3] === Gameplayer && board[6] === Gameplayer)  ||
       (board[1] === Gameplayer && board[4] === Gameplayer && board[7] === Gameplayer)  ||
       (board[2] === Gameplayer && board[5] === Gameplayer && board[8] === Gameplayer)){
       return true; //return true if winner found
     }else{
       return false; //return false if no winner
     }
  }
  
  function makeMove(board, gameplayer, move){ //choose a postion for AI
    var newboard = board.map(space => space); //copy the board to newboard
    if(newboard[move] === 'NA'){ //if newboard at this position is empty, AI make a move
      newboard[move] = gameplayer;
      return newboard; //return the newboard after AI make a move
    }else{
      return null; //if no empty space for AI to make a move at this position
    }
  }
  function Minimize(board){
    if(DidPlayerWin(board, AI)){
      return 10; //assign 10 point to the computer if they win
    }else if(DidPlayerWin(board, player)){
      return -10; //assign -10 point to player if they win
    }else if(!board.includes('NA')){
      return 0; //tie game
    }else{
      var bestMove = 10000; //assign infinity number to the best value it can reach 
      var position; //position default to record what AI should move next
      for(var i=0; i<board.length; i++){ //loop through the board
        var newboard = makeMove(board, player, i);//now is player's turn after AI make a turn
        if(newboard){ //if newboard has updated movement
          var move = Maximize(newboard);//call maximize function, to pick the move value is smallest value
          if(move < bestMove){ 
            bestMove = move;
            position = i;
          }
        }
      }
      return bestMove;
    }
  }
  function Maximize(board){
    if(DidPlayerWin(board, AI)){//if the AI win, give +10
      return 10;
    }else if(DidPlayerWin(board, player)){ //if Human win, give -10
      return -10;
    }else if(!board.includes('NA')){ //Tie game, give 0
      return 0;
    }else{
      var bestMove = -10000; 
      var position;
      for(var i=0; i<board.length; i++){//loop through the board
        var newboard = makeMove(board, AI, i); //make a move for AI player
        if(newboard){
          var move = Minimize(newboard);//call minimize function, to pick the move that has the largest value than bestMove value
          if(move > bestMove){
            bestMove = move;
            position = i; //Best position AI should pick at this movement
          }
        }
      }
      return bestMove;
    }
  }
  
  //Try to minimize the Human's score and try to maximize the AI's score
  function HardAI_Turn(board, AI){//pass in the board, and AI as a player
     var bestMove = -10000; 
     var position;
     for(var i=0; i<board.length; i++){//loop through the board
       var newboard = makeMove(board, AI, i); //AI make a move  and assign to newboard
       if(newboard){ //if newboard has something
         var move = Minimize(newboard); //call minimize function, to pick the move that has largest value than bestMove value
         if(move > bestMove){ 
           bestMove = move; //remember the bestMove is the move
           position = i; //This the best position AI should pick at this movement
         }
       }
     }
    board[position] = AI; //record the AI position to the board
    $('#' + position).html(AI); //Display AI movement
    
  }
  
  function EasyAI_Turn(board, AI){//pass the board and AI as parameter
    var taken = false; 
    while(taken === false && round != 5){//loop when AI's turn and not still not the last round
      var randomposition = Math.floor(Math.random() * 8);//generate a random number from 0-8
      if(board[randomposition] === 'NA'){//check if the random position is empty
        board[randomposition] = AI;//if is empty record the AI position into the board
        $('#' + randomposition).html(AI); //print the sign to the board
        taken = true; //taken assign to true to stop looping 
      }
    }
  }
  
  function reset(){
    board = ['NA','NA','NA','NA','NA','NA','NA','NA','NA'];
    board.map((sign,index)=> $('#'+index).html(''));
    round = 0;   
  }
});