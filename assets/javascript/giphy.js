// API key = Qghqbph3XryMCV9tmFuZEsm2Y3gRxola
// var input = $("#userInput").val()

function getData(){

    var input = $("#userInput").val()
   

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=Qghqbph3XryMCV9tmFuZEsm2Y3gRxola&limit=25");

    xhr.done(function(response) 
    
    { console.log("success got data", response);
    
     var giffs = response.data
    
     for (i in giffs){
         $('.inner').append("<img src='"+giffs[i].images.original.url+"' >")
     }
    });

}

