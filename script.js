let city = "Domburg"
getWeatherData();

function getWeatherData(){
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=d1b42716cdb097a4a13abdc36c715e8a", 
    function(data){
      console.log(data);

      var temp = Math.round(data.main.temp);
      city = data.name;
      var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var weather = data.weather[0].main;

      $(".temp").html(temp + "&deg;");
      $(".city").html(city);
      $(".icon").attr("src", icon);
      $(".weather").html(weather);
    }
  );
}

$(document).ready(function(){
  $("#btnCity").click(function(){
      city = $("#inpCity").val();
      getWeatherData();
  });
});

getLocation();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
  "  Longitude: " + position.coords.longitude);
}