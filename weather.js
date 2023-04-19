//hum yahan pr variable create kr rhe h aur queryselector se first element fetch kr rhe h
var input = document.querySelector('#form1');
var main = document.querySelector('#cityname');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.description');
var button = document.querySelector('.submit');
var humidity = document.querySelector('.humidity');
// var windspeed = document.querySelector('.windspeed');
// var feels_like = document.querySelector('.feels_like');
// var icon = document.querySelector('.icon');

// we are adding addeventlistener to the button so that user can enter the city name and  then our  function will perform the following operation 
button.addEventListener('click', function () { console.log("you clicked the button")
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric' + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {
      // hum y data user ko show krna chahte h
      var temp_show = data['main']['temp'];
      var name_show = data['name'];
      var desc_show = data['weather'][0]['description'];
      var humidity_show = data['main']['humidity'];
      // data humare  pass aa  rha h inner html mein  yahan se
      main.innerHTML = name_show;
      humidity.innerHTML = "Humidity - " + humidity_show + ' %';
      desc.innerHTML = " Weather description - " + desc_show;
      temp.innerHTML = "Temperature - " + temp_show + " °C";
      // windspeed.innerHTML = "Windspeed - " + windspeed_show + " Km/h";
      // feels_like.innerHTML = "It feels like -  " + feels_like_show + " °C";

      // adding icon feature
      // icon.src = "https://openweathermap.org/img/wn/" + icon_show + ".png";
      // input.value ="yahan h";

    })
    // y message hum baar baar show krna chahte h taki user check kr sake ki usne correct city dali h y nahi 
    .catch(err => alert("IF YOU HAVE ENTERED CORRECT CITY NAME YOUR WEATHER WILL DISPLAY BELOW OTHER WISE PLEASE ENTER CORRECT CITY NAME!"));
})