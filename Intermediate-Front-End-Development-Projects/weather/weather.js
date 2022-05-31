// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').hide(); 
} else {
  $('.js-geolocation').show();
}

/* Where in the world are you? */
document.addEventListener("DOMContentLoaded", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i></h2>';
      document.getElementById('cel').innerHTML = document.getElementById('final').innerHTML  =                          weather.temp+'&deg;'+weather.units.temp;
      
      document.getElementById('location').innerHTML =                         weather.city+', '+weather.region;
      
      document.getElementById('fah').innerHTML =                        weather.alt.temp+'&deg;F';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });  
}



function convert() 
{
  if (document.getElementById('final').innerHTML!=document.getElementById('cel').innerHTML) {
document.getElementById('final').innerHTML=document.getElementById('cel').innerHTML 
  }
  else {
  document.getElementById('final').innerHTML=document.getElementById('fah').innerHTML 
  }
}
 