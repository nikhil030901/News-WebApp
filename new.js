console.log("this is weather api request through my website");

var mained = document.getElementById('cityname');
var temp = document.getElementsByClassName('temp');
// var desc = document.getElementsById('newsdescription');
// var button = document.getElementsByClassName('submit');
var humidity = document.getElementsByClassName('humidity');
var windspeed = document.getElementsByClassName('windspeed');
var feels_like = document.getElementsByClassName('feels_like');
var icon = document.getElementsByClassName('icon');



// let card=document.getElementById('card');

// let cityname ='jhansi'
let apiKey ='50a7aa80fa492fa92e874d23ad061374'
// let newsAccordion = document.getElementById('newsAccordion');
let input=document.getElementById('cityname');
// var button=document.getElementsById('btn');
let button=document.querySelector('#fetchBtn');
button.addEventListener('click', buttonclickhandler)

function buttonclickhandler(){

    console.log("you have click the button");
     const xhr = new XMLHttpRequest();
 xhr.open('get','https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apiKey,true);
 xhr.onload = function ( ) {
     if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let weather = json.weather;
         console.log(weather);
         let wd="helloeww";

//         weather.forEach(function(element) {
            
        
//         // console.log(weather[description]);
//         let d=`<span class="description">${element["description"]}</span>`

//         wd+=d;
    
    
// });

    desc.innerHTML=wd;
        // {var desc_show = ['description'];
        // icon.src = "https://openweathermap.org/img/wn/" + icon_show + ".png";}
        // let main=json.main;
        // console.log(main);
    
        // console.log(json);

               
       



        // hum y data user ko show krna chahte h
    //   var temp_show = data['main']['temp'];
    //   var name_show = ['name'] ;
    //   var humidity_show = ['humidity'];
    //   var windspeed_show = ['speed'];
    //   var feels_like_show = ['feels_like'];
    //   var icon_show = ['icon'];

    //   // data humare  pass aa  rha h inner html mein  yahan se
    //   mained.innerHTML = name_show;
    //   humidity.innerHTML = "Humidity - " + humidity_show + ' %';
    //   desc.innerHTML = " Weather description - " + desc_show;
    // //   temp.innerHTML = "Temperature - " + temp_show + " °C";
    //   windspeed.innerHTML = "Windspeed - " + windspeed_show + " Km/h";
    //   feels_like.innerHTML = "It feels like -  " + feels_like_show + " °C";

    //   // adding icon feature
    //   // input.value ="yahan h";


       



    
    
    }
       else {
             console.log("Some error occured")
             }
     }

     xhr.send();
    
}
     



// const xhr = new XMLHttpRequest();
// xhr.open('get','https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apiKey,true);
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         // let articles = json.articles;
//          console.log(json);
//         // let newsHtml = "NATIONAL NEWS";
//         // articles.forEach(function(element, index) {
//             // console.log(element, index)
        
//         // });
//         // newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }
// xhr.send()
