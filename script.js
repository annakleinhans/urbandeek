//https://github.com/zdict/zdict/wiki/Urban-dictionary-API-documentation


$(document).ready(function(){
    $("#search").on("click", function(){

        var palabra = $("#word").val();
        console.log(palabra);

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
    showResult(JSON.parse(data));
}

function showResult(data){
    console.log( data.length );
    for (var i=0; i< data.length; i++){
       var definition = data[i];
        console.log( i );
    }
}