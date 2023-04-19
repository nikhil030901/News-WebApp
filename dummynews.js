

var newsAccordion=document.querySelector('#Accordion');
  fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1d6448995339487b89142e60a33487f9')
    .then(response => response.json())
    .then(data => {
      let articles=  articles.json();

        newsAccordion.innerHTML=data["articles"]
    });

        

    
    // y message hum baar baar show krna chahte h taki user check kr sake ki usne correct city dali h y nahi 
    // .catch(err => alert("IF YOU HAVE ENTERED CORRECT CITY NAME YOUR WEATHER WILL DISPLAY BELOW OTHER WISE PLEASE ENTER CORRECT CITY NAME!"));
