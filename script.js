const accessKey = "KIAni-h0Dh8HvHFrkuNWK2mPgCJdxq8YaXHKLX2Mta0"
const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchResult = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")
 let inputData = ""
 let page =1;

 async function searchImages(){
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response =await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page===1){
        searchResult.innerHTML=""
    }
 }