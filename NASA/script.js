let searchButton = document.querySelector("#search")

// Add an event listener to the button that runs the function sendAPIRequest when it is clicked
searchButton.addEventListener("click", () => {
    console.log("button pressed")
    sendApiRequest()
})

// An asynchronous function to fetch data from the API.
async function sendApiRequest() {
    let API_KEY = "API_KEY"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    let data = await response.json()
    useApiData(data)
}

// function that does something with the data received from the API. 
function useApiData(data) {
    document.querySelector("#title").innerHTML += data.title
    document.querySelector("#content").innerHTML += data.explanation
    document.querySelector("#image").innerHTML += `<img src="${data.url}">`
}

