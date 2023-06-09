let newsApi = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6919b271327a4b1ebb841f3381308637"
fetch(newsApi).then((res) => res.json()).then(data => displayNews(data))



function displayNews(data) {
    let htmlData = "";
    for (let art of data.articles) {
        let name = art.title;
        let detail = art.description;
        let img = art.urlToImage;
        let published = art.publishedAt;
        let content = art.content;


        htmlData += `
        <div class="card  shadow-lg p-3 mt-5 bg-white " style="width:32rem; height:540px; margin:20px; border-radius:40px; font-family: 'Nunito', sans-serif; ">
            <img src="${img}" class="card-img-top p-3  "  style="border-radius: 50px; width:470px; height:239px;"alt="...">
            <div class="card-body" style="color: rgb(1, 75, 1); " >
                <h4 class="card-title text-start" style=" text-shadow: -1px 0 YellowGreen, 0 1px YellowGreen, 1px 0 YellowGreen, 0 -1px YellowGreen;">${name}</h4>
                <div class="card-text text-black text-start"><h6>${detail}</h6></div>
            </div>
            <div class="text-center"><a href="${art.url}" class="card-link"><button class="btn btn-success shadow  btn-sm w-50 ">Read More</button></a></div>

        </div>
        `;




    }
    document.querySelector("#result").innerHTML = htmlData

}

var catagories = ["General", "Business", "Technology", "Entertainment", "Health", "Science", "Sports"]
displayCategories(catagories)
function displayCategories(catagories) {
    let data = ``
    for (let c of catagories) {
        data += `
        <button class="btn btn-success btn-sm shadow"  value="${c}" onclick="filterNewsByCategory('${c}')">${c}</button>
        `
    }

    document.querySelector("#id_category").innerHTML = data
}

function filterNewsByCategory(category) {
    // Fetch news based on the selected category
    let filteredNewsApi = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=6919b271327a4b1ebb841f3381308637`;

    fetch(filteredNewsApi)
        .then(res => res.json())
        .then(data => displayNews(data));
}