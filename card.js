console.log("This is my index js file");

// Initialize the news api parameters
let source = 'in'
let category = 'sports'
    
let apiKey = '1d6448995339487b89142e60a33487f9'

// Grab the news container
let newsAccordion= document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&category=${category}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            // console.log(element, index)
            let news = ` <br><div class="col md=4 "  style= "width=350px" >
            <div class="card"  style="width: 350px;">
              <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${element["title"]}</h5>
                  <p class="card-text">${element["content"]}</p>
                </div>
                <ul class="list-group list-group-flush">
        
                  <li class="list-group-item">${element["name"]}</li>
                  <li class="list-group-item">${element["publishedAt"]}</li>
                  <li class="list-group-item">${element["author"]}</li>
                </ul>
                <div class="card-body">
                  <a href="${element["url"]}" class="btn btn-primary">READ MORE</a>
                </div>
             
            </div>
          </div>
          </div> 
          <br>
          <br>
          <br>
          <br>
          `;
          newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()