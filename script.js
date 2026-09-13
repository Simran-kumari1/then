let button = document.getElementById("btn");

button.addEventListener("click", async function () {
    try {
        let response = await fetch("https://dummyjson.com/quotes/random");

        let data = await response.json();

        document.getElementById("quote").innerText = data.quote;
        document.getElementById("author").innerText = "- " + data.author;
    } 
    catch (error) {
        document.getElementById("quote").innerText =
            "Something went wrong. Try again.";
    }
});
