$(document).ready(function(){ 

  var searchitem;
  var url;
  $('#find').click(function(){//press find button to search the input 
     searchitem = $("#search").val(); //return the value of the input 
     $("#search").val('');//empty the value inside the input
     url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='  + searchitem + '&format=json&callback=?';//url from wikipedia 



     $.ajaxSetup({//error message if there is nothing to search
       "error": function(){
         console.log("There is nothing to search");
       }
     });
     
     $.getJSON(url, function(info){
       //console.log(info);

        for(var i in info[1]){ //loop thro the result that wikipedia found
          var title = info[1][i];//The first array is the title of each results
          var descr = info[2][i];//the second array is the description
          var link = "<a target ='none' href="+info[3][i]+"/a>";//link to wikipedia
  
         $('#display_items').append("<div>"+link+"<strong><h5>"+title+"</h5><strong>"+"</div>");//display the title and correspondance to each link 
         $('#display_items').append("<div class='btn-info'>"+descr+"</div>");
         //display the description
         $('#display_items').append("<br/>");//display a space
         
        }
     });
     
  /*  $.ajax({
      type: "GET",
      url: url,
      async:false,
      dataType: 'json',
      success: function(info){
        console.log(info);
           
    },
      error: function(error){
        alert("error");
      }
    });
   */
  });

}); 