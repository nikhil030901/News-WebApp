console.log("this is weather api request through my website");
let cityname ='jhansi'
let apiKey ='50a7aa80fa492fa92e874d23ad061374'
// let newsAccordion = document.getElementById('newsAccordion');
const xhr = new XMLHttpRequest();
xhr.open('get',`https://data.covid19india.org/v4/min/data.min.json`,true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // let articles = json.articles;
         console.log(json);
        // let newsHtml = "NATIONAL NEWS";
        // articles.forEach(function(element, index) {
            // console.log(element, index)
        
        // });
        // newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()