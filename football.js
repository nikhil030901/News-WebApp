console.log("This is my index js file");

// Initialize the news api parameters
    
let apiKey = '8a0d29a929f340548e7e590976374df0'

// Grab the news container
let newsadding1= document.getElementById('item1');



          
          
  // Create an ajax get request
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/everything?q=soccer&apiKey=${apiKey}&pageSize=100`, true);
  
  // What to do when response is ready
  xhr.onload = function () {
      if (this.status === 200) {
          let json = JSON.parse(this.responseText);
           let articles = json.articles;
        
          
          console.log(articles);
          let newsHtml1 = "";
          
          articles.forEach(function(element) {
              // console.log(element, index)
          //     let d=`${element["publishedAt"]}`;
          //   a= new Date(d);
          //   publish= a.toGMTString();
              let d=`${element["publishedAt"]}`;
            a= new Date(d);
            publish= a.toLocaleString(undefined,{timezone :'Asia/Kolkata'})+"(IST)";
              let news = ` <div class="newsitem">
              <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="title">${element["title"]} </h5>
                  <p class="text">${element["content"]}</p><span class="badge badge-pill badge-warning">${element.source["name"]}</span>
                </div>
                <ul class="list-group list-group-flush">
                    
              <div>
                    
                    <li class="list-group-item">Published At -`+ publish+`</li>
                    <li class="list-group-item">Author's Name - ${element["author"]}</li>
                    <li class="list-group-item">source Name - ${element.source["name"]}</li>
                  </ul>
                  <div class="card-body">
                      <a href="${element["url"]}" class="btn btn-primary" target="_blank">READ MORE</a>
                  </div>
              </div>
              
            `;
          
  
            
            
            
            
            
            newsHtml1 += news;
          });
          newsadding1.innerHTML = newsHtml1;
      }
      else {
          console.log("Some error occured")
      }
  }
  
  xhr.send()



  let but=document.getElementById("b")
  
  let inp = document.getElementById("search")
  
  
  // Grab the news container

  
  but.addEventListener('click' ,buttonclickhandler)
      function buttonclickhandler(){
          console.log("you have clicked the button hurrrraaayyyy")
  
  
  
  
          // Create an ajax get request
      const xhr1 = new XMLHttpRequest();
      xhr1.open('GET', `https://newsapi.org/v2/everything?q=${inp.value}&apiKey=${apiKey}&pageSize=100`, true);
      
  //    What to do when response is ready
      xhr1.onload = function () {
          if (this.status === 200) {
              let json = JSON.parse(this.responseText);
               let articles = json.articles;
            
              
              console.log(articles);
               let newsHtml1 = "";
              articles.forEach(function(element) {
                   // console.log(element, index)
                   let news = ` <div class="newsitem">
                   <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
               <div class="card-body">
                       <h5 class="title">${element["title"]} </h5>
                     <p class="text">${element["description"]}</p>
                     </div>
                     <ul class="list-group list-group-flush">
                        
                   <div>
                        
                         <li class="list-group-item date">Published At - ${element["publishedAt"] } </li>
                         <li class="list-group-item">Author's Name - ${element["author"]}</li>
                         <li class="list-group-item">source's Name - ${element.source["name"]}</li>
                         </ul>
                       <div class="card-body">
                       <a href="${element["url"]}" class="btn btn-primary" target="_blank">READ MORE</a>
                       </div>
                   </div>
                  
                `;
                
      
                
                
                
                
                
                 newsHtml1 += news;
               });
               newsadding1.innerHTML = newsHtml1;
          }
          else {
              console.log("Some error occured")
          }
      }
      
      xhr1.send()
      
   };    
   