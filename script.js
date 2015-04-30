var cityData = null;
var cityHtml = null;
var firstCity;
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
                firstCity = data.locations[0].location;
                console.log(firstCity);
                $(".location-name").append(firstCity);
            });
        } else {
                console.log("still broke")
        }
    });

    $("#more-stuff").on("click", "#more-info", function(){
       $(".location-info").append(cityData.locations[0].info);
    });
    $("#more-stuff").on("click", "#pop", function(){
       $(".location-pop").append(cityData.locations[0].population);
    });
    $("#more-stuff").on("click", "#area", function() {
       $(".location-area").append(cityData.locations[0].area);
    });
    $("#more-stuff").on("click", "#remove-place", function(){
       $(this).parent().remove();
        cityData = null;
        cityHtml = null;
    });
});