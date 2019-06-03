
/* AJAX CALL*/
$.ajax({
    url: "https://api.urbandictionary.com/v0/define?term={" + $("#word") + "}",
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: running,
    failure: function(){
        alert("Error!");
    }
});

//https://github.com/zdict/zdict/wiki/Urban-dictionary-API-documentation

function running(data){
    showResult(data);
}

function show 