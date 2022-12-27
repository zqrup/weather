navigator.geolocation.getCurrentPosition(getWeatherData);

function getWeatherData(position){
  let userLocation = "lat=" + position.coords.latitude + "&" + "lon=" + position.coords.longitude;
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?" + userLocation + "&units=metric&appid=d1b42716cdb097a4a13abdc36c715e8a", 
    function(data){

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


