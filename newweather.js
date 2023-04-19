//hum yahan pr variable create kr rhe h aur queryselector se first element fetch kr rhe h
var input = document.querySelector('#text');
// var main = document.querySelector('#cityname');
var temp = document.querySelector('#temp');
var feel = document.querySelector('#feel');
var max = document.querySelector('#max');
var min = document.querySelector('#min');
var icon = document.querySelector('#icon');
var wind = document.querySelector('#wind');
var gust = document.querySelector('#gust');
var humidity = document.querySelector('#humidity');
var pressure = document.querySelector('#pressure');
var sea = document.querySelector('#sea');
var ground = document.querySelector('#ground');
var sunrise = document.querySelector('#sunrise');
var sunset = document.querySelector('#sunset');
var desc = document.querySelector('#description');
var button = document.querySelector('#submit');
var humidity = document.querySelector('#humidity');
var dat = document.querySelector('#date');
var visible = document.querySelector('#visible');
var city = document.querySelector(".city");
var lat = document.querySelector(".lat")
var long = document.querySelector(".long")

// var windspeed = document.querySelector('.windspeed');
// var feels_like = document.querySelector('.feels_like');
// var icon = document.querySelector('.icon');

// we are adding addeventlistener to the button so that user can enter the city name and  then our  function will perform the following operation 
button.addEventListener('click', function () { console.log("you clicked the button")
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric' + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {
      // hum y data user ko show krna chahte h
      //   var name_show = data['name'];
      var temp_show = data['main']['temp'];
      var desc_show = data['weather'][0]['description'];
      var humidity_show = data['main']['humidity'];
      var windspeed_show = data['wind']['speed'];
      var feels_like_show = data['main']['feels_like'];
      var icon_show = data['weather'][0]['icon'];
      var max_show = data["main"]["temp_max"];
      var min_show = data["main"]["temp_min"];
      var gust_show = data['wind']['gust'];
      var pressure_show = data['main']['pressure'];
      var sea_show = data['main']['sea_level'];
      var ground_show = data['main']['grnd_level'];
      var sunrise_show = data['sys']['sunrise'];
      var sunset_show = data['sys']['sunset'];
      var  visible_show= data['visibility'];
      var city_show= data["name"];
      var lat_show=data["coord"]["lat"];
      var long_show=data["coord"]["lon"];
    
      


      // data humare  pass aa  rha h inner html mein  yahan se
    //   main.innerHTML = name_show;
      humidity.innerHTML = "Humidity - " + humidity_show + ' %';
      desc.innerHTML =  desc_show;
      temp.innerHTML = "Temperature - " + temp_show + " °C";
       wind.innerHTML = "Windspeed - " + windspeed_show + " m/s";
      feel.innerHTML = "It feels like -  " + feels_like_show + " °C";
      max.innerHTML="Max - " + max_show + "°C";
      min.innerHTML="Min - " + min_show + "°C";
      gust.innerHTML= "Gust Speed - " + gust_show + " m/s";
      pressure.innerHTML= "Pressure - " + pressure_show + " Hectopascal";
      sea.innerHTML= " Sea Level - " + sea_show + " Feets";
      ground.innerHTML= " Ground Level - " + ground_show + " Feets";
      icon.src = "https://openweathermap.org/img/wn/" + icon_show + ".png";
      visible.innerHTML="Visibility - " + visible_show + " metres";
      city.innerHTML=city_show;
      lat.innerHTML="Latitude - " + lat_show;
      long.innerHTML="Longitude - " + long_show;


      let d=sunrise_show;
      a= new Date(d*1000);
      publish= a.toLocaleTimeString("en-US");
      datepublish=a.toLocaleDateString("en-US");

      let e= sunset_show;
      f=new Date(e*1000);
      sunsetpublilsh=f.toLocaleTimeString("en-US");

      


      sunrise.innerHTML="Sunrise - " + publish ;
      sunset.innerHTML="Sunset - " + sunsetpublilsh;
      dat.innerHTML="Date - " + datepublish ;
      
      


      // adding icon feature
      // input.value ="yahan h";


    })
    // y message hum baar baar show krna chahte h taki user check kr sake ki usne correct city dali h y nahi 
    .catch(err => alert("IF YOU HAVE ENTERED CORRECT CITY NAME YOUR WEATHER WILL DISPLAY BELOW OTHER WISE PLEASE ENTER CORRECT CITY NAME!"));
})