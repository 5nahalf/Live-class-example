var cityData = null;
var cityHtml = null;
var firstCity;
var i = 0;

function next(){
    for(i = 0; i < locations.lenght; i++){

    }
}
$(document).ready(function(){
    $("#get-info-btn").on("click", function() {
        if(cityHtml == null){
            $.get("location.html", function(data) {
               cityHtml = data;
                $("#more-stuff").append(data);
            });
        } else {
            console.log("SB man, SB");
        }
        if(cityData == null) {
            $.get("data.json", function (data) {
                cityData = data;
                firstCity = data.locations[i].location;
                console.log(firstCity);
                $(".location-name").append(firstCity);
            });
        } else {
                console.log("still broke")
        }
    });

    $("#more-stuff").on("click", "#more-info", function(){
        $(".location-info").empty();
       $(".location-info").append("<h3>General Info: </h3>" + cityData.locations[i].info);
    });
    $("#more-stuff").on("click", "#pop", function(){
       $(".location-pop").empty();
       $(".location-pop").append("<h3>Population: </h3>" + cityData.locations[i].population);
    });
    $("#more-stuff").on("click", "#area", function() {
        $(".location-area").empty();
        $(".location-area").append("<h3>Area: </h3>" + cityData.locations[i].area);
    });
    $("#more-stuff").on("click", "#remove-place", function(){
       $(this).parent().remove();
        cityData = null;
        cityHtml = null;
    });
});