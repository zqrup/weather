navigator.geolocation.getCurrentPosition(getWeatherData);

function getWeatherData(position){
  let userLocation = "lat=" + position.coords.latitude + "&" + "lon=" + position.coords.longitude;
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?" + userLocation + "&units=metric&appid=" + key, 
    function(data){

      let city = data.name;
      let temp = Math.round(data.main.temp);
      let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      let weather = data.weather[0].main;

      $(".temp").html(temp + "&deg;");
      $(".city").html(city);
      $(".icon").attr("src", icon);
      $(".weather").html(weather);
    }
  );
}