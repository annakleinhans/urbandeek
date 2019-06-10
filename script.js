
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

    $("#word").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $('button[type=submit] .default').click();
            return false;
        } else {
            return true;
        }
    });
});

function running(data){
    console.log(data);
    showResult(data);
}

function showResult(data){
  //  console.log( JSON.parse(data));
    $("#resultTable").empty();
    var html = "";
    html += "<br><table id='table' class='table table-striped' style='width: 1200px;'>";
    html += "<tr style='font-weight:bold'><td>Author</td><td>Definition</td><td>Example</td><td>Link</td></tr>"
    for (var i=0; i< data.list.length; i++){
       var definition = data.list[i];
       console.log( definition );
       html += "<tr><td>";
       html += data.list[i].author;
       html += "</td><td>";
       html += data.list[i].definition;
       html += "</td><td>";
       html += data.list[i].example;
       html += "</td><td>";
       html += "<a href='" + data.list[i].permalink + " ' target='_blank' >";
       html += data.list[i].word;
       html += "</td></tr>";
    }
    html += "</table>";
    console.log();
    $("#resultTable").append(html);

}

