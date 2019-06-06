//https://github.com/zdict/zdict/wiki/Urban-dictionary-API-documentation


$(document).ready(function(){
    $("#search").on("click", function(){

        var palabra = $("#word").val();

        $.ajax({
            url: "https://api.urbandictionary.com/v0/define?term={" + palabra + "}",
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: running,
            failure: function(){
                alert("Error!");
            }
        });
    });
});

function running(data){
    console.log(data);
    showResult(data);
}

function showResult(data){
  //  console.log( JSON.parse(data));
    var html = "";
    for (var i=0; i< data.list.length; i++){
       var definition = data.list[i];
        console.log( definition );
        html += "<table><td></td>"
    }
}