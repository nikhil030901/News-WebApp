console.log("This is my index js file");

// Initialize the news api parameters
let source = 'in'
let category = 'sports'
    
let apiKey = '1d6448995339487b89142e60a33487f9'

// Grab the news container
let newsadding= document.getElementById('container');

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
            let news = ` <div class="item">
            <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="title">${element["title"]} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum excepturi amet a officiis dolore ratione non at qui consequatur aperiam?</h5>
                <p class="text">${element["content"]}</p>
              </div>
              <ul class="list-group list-group-flush">
                  
            <div>
                  <li class="list-group-item">Source - ${element["name"]}</li>
                  <li class="list-group-item">Published At - ${element["publishedAt"]}</li>
                  <li class="list-group-item">Author's Name - ${element["author"]}</li>
                </ul>
                <div class="card-body">
                    <a href="${element["url"]}" class="btn btn-primary" target="_blank">READ MORE</a>
                </div>
            </div>
            
          `;
          newsHtml += news;
        });
        newsadding.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()