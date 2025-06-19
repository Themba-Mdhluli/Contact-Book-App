let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

// Checks if you have an api key that is set in your computer
function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html","_self");
    }
    return localStorage.getItem("apiKey");
}